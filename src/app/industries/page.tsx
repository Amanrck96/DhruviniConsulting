import { industries } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Code, Factory, Building2, HeartPulse, Banknote, ShoppingCart } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  'Technology & SaaS': Code,
  'Manufacturing': Factory,
  'Real Estate': Building2,
  'Healthcare & Life Sciences': HeartPulse,
  'Financial Services': Banknote,
  'Consumer & Retail': ShoppingCart,
};

export default function IndustriesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-headline text-primary tracking-tight sm:text-5xl">
            Our Industry Expertise
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Our consultants possess deep domain knowledge across a wide range of industries. This allows us to understand your unique challenges and deliver tailored talent solutions that speak your language.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const Icon = iconMap[industry.name] || Code;
            return (
              <Card key={industry.name} className="flex flex-col text-center hover:border-primary transition-colors duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary text-primary-foreground rounded-full h-20 w-20 flex items-center justify-center mb-4">
                    <Icon className="h-10 w-10" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
