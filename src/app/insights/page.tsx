import Link from 'next/link';
import Image from 'next/image';
import { insights } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function InsightsPage() {
  const getPlaceholderImage = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id);
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-headline text-primary tracking-tight sm:text-5xl">
            Insights & Thought Leadership
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Explore our collection of articles on the latest trends in HR, talent management, and leadership. Stay informed and inspired with expert analysis from the Dhruvini Consulting team.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => {
            const image = getPlaceholderImage(insight.id);
            return (
              <Card key={insight.id} className="flex flex-col group overflow-hidden">
                {image && (
                  <div className="relative h-56 w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      data-ai-hint={image.imageHint}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    <Link href={`/insights/${insight.slug}`} className="hover:text-primary transition-colors">
                      {insight.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    {new Date(insight.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-4">{insight.excerpt}</p>
                </CardContent>
                <CardFooter>
                    <Button variant="link" asChild className="p-0 text-accent-foreground font-semibold">
                        <Link href={`/insights/${insight.slug}`}>Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                    </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
