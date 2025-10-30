'use server';

import { sendContactEmail } from '@/lib/email';
import { headers } from 'next/headers';
import { ContactFormSchema, type FormState } from './schema';

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // CSRF protection - verify request origin
  const headersList = headers();
  const origin = await headersList.get('origin');
  const host = await headersList.get('host');
  
  if (!origin || !host || !origin.includes(host)) {
    return {
      message: 'Invalid request origin. CSRF protection triggered.',
      success: false,
    };
  }

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
  
  try {
    // Send email using our email service
    const result = await sendContactEmail(validatedFields.data);
    return result;
  } catch (error) {
    console.error('Error in form submission:', error);
    return {
      message: 'Failed to send your message. Please try again later.',
      success: false,
    };
  }
}
