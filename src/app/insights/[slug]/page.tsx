import { notFound } from 'next/navigation';
import Image from 'next/image';
import { insights } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export async function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const insight = insights.find((p) => p.slug === params.slug);
  if (!insight) {
    notFound();
  }

  const image = PlaceHolderImages.find(img => img.id === insight.id);
  const authorInitial = insight.author.charAt(0);

  return (
    <article className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold font-headline text-primary tracking-tight sm:text-5xl">
              {insight.title}
            </h1>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={`https://i.pravatar.cc/40?u=${insight.author}`} />
                  <AvatarFallback>{authorInitial}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{insight.author}</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <time dateTime={insight.date} className="text-muted-foreground">
                {new Date(insight.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
          </header>

          {image && (
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-12">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                data-ai-hint={image.imageHint}
                className="object-cover"
              />
            </div>
          )}

          <div 
            className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90 prose-p:leading-relaxed prose-headings:font-headline prose-headings:text-primary"
            dangerouslySetInnerHTML={{ __html: insight.content }}
          />
        </div>
      </div>
    </article>
  );
}
