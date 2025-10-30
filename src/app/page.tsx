import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Briefcase, Users, Award, Building2, Factory, Code } from 'lucide-react';
import { services, industries, insights } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const latestInsights = insights.slice(0, 3);

  const getPlaceholderImage = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-secondary/50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary tracking-tight">
              Shaping the Future of Leadership
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
              Dhruvini Consulting is your strategic partner in talent acquisition, executive search, and leadership hiring. We connect exceptional talent with visionary organizations to drive success.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/services">Our Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Our Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = {
                  'Talent Acquisition': Users,
                  'Executive Search': Briefcase,
                  'Leadership Hiring': Award,
                }[service.title] || Users;

                return (
                  <Card key={service.id} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="mx-auto bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="font-headline">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <Button variant="link" asChild className="text-accent-foreground font-semibold">
                        <Link href={service.href}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Expertise Section */}
        <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Industry-Specific Expertise</h2>
                <p className="text-foreground/80 text-lg mb-6">
                  Our deep domain knowledge spans across a variety of sectors, enabling us to understand the unique challenges and opportunities within your industry.
                </p>
                <Button asChild>
                  <Link href="/industries">Explore Our Industries</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {industries.slice(0, 4).map((industry) => {
                  const Icon = {
                    'Technology & SaaS': Code,
                    'Manufacturing': Factory,
                    'Real Estate': Building2
                  }[industry.name] || Briefcase;
                  return (
                    <div key={industry.name} className="flex items-center gap-4 p-4 bg-background rounded-lg shadow-sm">
                      <Icon className="h-8 w-8 text-primary" />
                      <span className="font-semibold text-foreground">{industry.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">Latest Insights</h2>
            <p className="text-center max-w-2xl mx-auto text-lg text-foreground/80 mb-12">
              Stay ahead with our expert analysis on HR, talent trends, and leadership.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestInsights.map((insight) => {
                const image = getPlaceholderImage(insight.id);
                return (
                  <Card key={insight.id} className="overflow-hidden flex flex-col group">
                    {image && (
                      <div className="relative h-48 w-full overflow-hidden">
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
                      <CardTitle className="font-headline text-xl leading-tight">{insight.title}</CardTitle>
                      <CardDescription>{new Date(insight.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground line-clamp-3">{insight.excerpt}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button variant="link" asChild className="p-0 text-accent-foreground font-semibold">
                        <Link href={`/insights/${insight.slug}`}>Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" asChild size="lg">
                <Link href="/insights">View All Insights</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
