'use server';

import { analyzeResume } from '@/ai/flows/resume-analysis-and-categorization';
import { z } from 'zod';
import { jobs } from '@/lib/data';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
];

const FormSchema = z.object({
  resume: z
    .any()
    .refine((file) => file?.size, 'Please upload your resume.')
    .refine((file) => file.size <= MAX_FILE_SIZE, `File size should be less than 5MB.`)
    .refine(
      (file) => ALLOWED_FILE_TYPES.includes(file.type),
      'Only .pdf, .docx, and .txt files are allowed.'
    ),
});


export async function analyzeAndSuggest(formData: FormData) {
  try {
    const resumeFile = formData.get('resume') as File;

    const validation = FormSchema.safeParse({ resume: resumeFile });
    if (!validation.success) {
      return {
        error: validation.error.errors.map((e) => e.message).join(' '),
        analysis: null,
      };
    }
    
    const buffer = Buffer.from(await resumeFile.arrayBuffer());
    const resumeDataUri = `data:${resumeFile.type};base64,${buffer.toString('base64')}`;

    const openPositions = jobs.map(job => `- ${job.title} in ${job.department}`).join('\n');

    const analysis = await analyzeResume({
      resumeDataUri,
      openPositions,
    });
    
    if (!analysis) {
        throw new Error("AI analysis returned no result.");
    }
    
    return { analysis, error: null };

  } catch (err) {
    console.error(err);
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred during resume analysis.';
    return {
      analysis: null,
      error: `Sorry, we couldn't analyze your resume at the moment. ${errorMessage}`,
    };
  }
}
