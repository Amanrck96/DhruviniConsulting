'use client';

import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import type { ResumeAnalysisOutput } from '@/ai/flows/resume-analysis-and-categorization';
import { analyzeAndSuggest } from '../actions';
import { UploadCloud } from 'lucide-react';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
];

const FormSchema = z.object({
  resume: z
    .any()
    .refine((files) => files?.length == 1, 'Resume is required.')
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ALLOWED_FILE_TYPES.includes(files?.[0]?.type),
      '.pdf, .docx, and .txt files are supported.'
    ),
});

interface ResumeFormProps {
    setAnalysis: (analysis: ResumeAnalysisOutput | null) => void;
    setError: (error: string | null) => void;
    setIsSubmitting: (isSubmitting: boolean) => void;
    isSubmitting: boolean;
}

export default function ResumeForm({ setAnalysis, setError, setIsSubmitting, isSubmitting }: ResumeFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      resume: undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true);
    setError(null);
    setAnalysis(null);

    const formData = new FormData();
    formData.append('resume', data.resume[0]);
    
    const result = await analyzeAndSuggest(formData);

    if (result.error) {
      setError(result.error);
    } else if (result.analysis) {
      setAnalysis(result.analysis);
      form.reset();
      if(formRef.current) formRef.current.reset();
    }
    setIsSubmitting(false);
  };
  

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resume File (.pdf, .docx, .txt)</FormLabel>
              <FormControl>
                <Input type="file" onChange={(e) => field.onChange(e.target.files)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} className="w-full">
            <UploadCloud className="mr-2 h-4 w-4" />
            {isSubmitting ? 'Analyzing...' : 'Analyze My Resume'}
        </Button>
      </form>
    </Form>
  );
}
