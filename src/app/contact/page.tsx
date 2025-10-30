'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './components/contact-form';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
    const { toast } = useToast();

  const handleFormSubmit = async (success: boolean, message: string) => {
    if (success) {
      toast({
        title: 'Message Sent!',
        description: message,
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: message,
      });
    }
  };


  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-headline text-primary tracking-tight sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            We'd love to hear from you. Whether you have a question about our services, are looking for a new role, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-secondary/50 p-8 rounded-lg">
            <h2 className="text-3xl font-headline font-semibold mb-8 text-primary">Contact</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex-shrink-0 flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Office Address</h3>
                  <p className="text-muted-foreground">xyxyxyxyxyxyxyxyxyxy</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex-shrink-0 flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <a href="mailto:Contact-abx.com" className="text-accent-foreground hover:underline">Contact-abx.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex-shrink-0 flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <a href="tel:+1234567890" className="text-accent-foreground hover:underline">xxxxxxxxxx</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm onFormSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
