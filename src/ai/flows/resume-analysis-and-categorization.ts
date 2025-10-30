'use server';
/**
 * @fileOverview An AI agent for analyzing resumes, categorizing skills and experience,
 * highlighting qualifications, and suggesting suitable open positions.
 *
 * - analyzeResume - A function that handles the resume analysis and categorization process.
 * - ResumeAnalysisInput - The input type for the analyzeResume function.
 * - ResumeAnalysisOutput - The return type for the analyzeResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResumeAnalysisInputSchema = z.object({
  resumeDataUri: z
    .string()
    .describe(
      'The resume file as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'
    ),
  openPositions: z
    .string()
    .describe(
      'A list of open positions at the company, as a string.  Each position should be on a new line.'
    ),
});
export type ResumeAnalysisInput = z.infer<typeof ResumeAnalysisInputSchema>;

const ResumeAnalysisOutputSchema = z.object({
  skills: z.array(z.string()).describe('A list of skills extracted from the resume.'),
  experience: z.string().describe('A summary of the candidate\'s experience.'),
  qualifications: z
    .string()
    .describe('A list of the candidate\'s key qualifications, extracted from the resume.'),
  suggestedPositions: z
    .array(z.string())
    .describe(
      'A list of open positions that the candidate is qualified for, based on their resume and the list of open positions provided.'
    ),
});
export type ResumeAnalysisOutput = z.infer<typeof ResumeAnalysisOutputSchema>;

export async function analyzeResume(input: ResumeAnalysisInput): Promise<ResumeAnalysisOutput> {
  return analyzeResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'resumeAnalysisPrompt',
  input: {schema: ResumeAnalysisInputSchema},
  output: {schema: ResumeAnalysisOutputSchema},
  prompt: `You are an expert HR recruiter.  You will analyze a resume and extract the candidate's skills, experience, and qualifications.

You will also suggest suitable open positions for the candidate, based on their resume and the list of open positions provided.

Resume:
{{media url=resumeDataUri}}

Open Positions:
{{openPositions}}`,
});

const analyzeResumeFlow = ai.defineFlow(
  {
    name: 'analyzeResumeFlow',
    inputSchema: ResumeAnalysisInputSchema,
    outputSchema: ResumeAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
