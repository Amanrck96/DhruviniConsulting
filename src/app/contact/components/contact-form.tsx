'use client';

import { useEffect, useRef } from 'react';
import { useActionState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { submitContactForm } from '../actions';
import { ContactFormSchema, type FormState } from '../schema';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { SubmitButton } from './submit-button';

interface ContactFormProps {
    onFormSubmit: (success: boolean, message: string) => void;
}

export default function ContactForm({ onFormSubmit }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState<FormState, FormData>(submitContactForm, {
    message: '',
    success: false,
  });

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state.message) {
      onFormSubmit(state.success, state.message);
      if (state.success) {
        form.reset();
        formRef.current?.reset();
      }
    }
  }, [state, onFormSubmit, form]);

  return (
      <Form {...form}>
        <Card>
            <form
            ref={formRef}
            action={form.handleSubmit(data => {
                const formData = new FormData();
                formData.append('name', data.name);
                formData.append('email', data.email);
                formData.append('message', data.message);
                formAction(formData);
            })}
            // We can use the native onReset event to clear the form state
            onReset={() => form.reset()}
            >
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Your message..." {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </CardContent>
            <CardFooter>
                <SubmitButton />
            </CardFooter>
            </form>
        </Card>
      </Form>
  );
}
