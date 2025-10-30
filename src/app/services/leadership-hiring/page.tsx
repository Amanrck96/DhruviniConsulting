import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function LeadershipHiringPage() {
  const service = services.find(s => s.id === 'leadership-hiring');
  const image = PlaceHolderImages.find(img => img.id === 'service-leadership-hiring');

  if (!service) return <div>Service not found</div>;

  return (
    <div className="bg-background">
      <div className="relative h-64 md:h-96">
        {image && (
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            data-ai-hint={image.imageHint}
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary-foreground text-center">
            {service.title}
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-foreground/80 mb-8">{service.longDescription}</p>
          <div className="bg-secondary/50 p-8 rounded-lg">
            <h3 className="text-2xl font-headline font-semibold mb-4 text-primary">How We Build Your Leadership Team</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
                <span>Identifying high-potential leaders with the right mix of skills and experience.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
                <span>Focus on building a diverse leadership pipeline to foster innovation.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
                <span>Assessing for long-term cultural fit and growth potential within your organization.</span>
              </li>
               <li className="flex items-start">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
                <span>Succession planning to ensure your organization is prepared for the future.</span>
              </li>
            </ul>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/contact">Build Your Leadership Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
