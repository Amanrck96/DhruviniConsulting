import Link from 'next/link';
import { services } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Briefcase, Award } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  'Talent Acquisition': Users,
  'Executive Search': Briefcase,
  'Leadership Hiring': Award,
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold font-headline text-primary tracking-tight sm:text-5xl">
          Our Expertise
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/80">
          We provide a comprehensive suite of services designed to meet your organization's most critical talent needs. From sourcing emerging leaders to placing C-suite executives, our solutions are tailored, strategic, and results-driven.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = iconMap[service.title] || Users;
          return (
            <Card key={service.id} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground rounded-lg p-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <Button asChild variant="outline" className="mt-auto w-fit">
                  <Link href={service.href}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
