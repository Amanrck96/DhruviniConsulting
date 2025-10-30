'use server';

import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type FormState = {
  message: string;
  success: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please correct the errors and try again.',
      success: false,
    };
  }
  
  // Simulate network latency and processing
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real app, you would send an email or save to a database here.
  console.log('Contact form submitted:');
  console.log(validatedFields.data);

  // Simulate a potential failure
  if (validatedFields.data.name.toLowerCase() === 'fail') {
     return {
        message: 'This is a simulated failure. Please try a different name.',
        success: false,
     }
  }

  return {
    message: 'Thank you for your message! We will get back to you shortly.',
    success: true,
  };
}
