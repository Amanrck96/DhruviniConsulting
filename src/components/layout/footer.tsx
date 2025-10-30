import Link from 'next/link';
import { Briefcase, Twitter, Linkedin, Facebook } from 'lucide-react';

const footerNavs = [
  { href: '/services', name: 'Services' },
  { href: '/industries', name: 'Industries' },
  { href: '/insights', name: 'Insights' },
  { href: '/careers', name: 'Careers' },
  { href: '/contact', name: 'Contact' },
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-10">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Briefcase className="h-8 w-8 text-primary" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap font-headline text-primary">
                Dhruvini Consulting
              </span>
            </Link>
            <p className="mt-2 max-w-sm text-muted-foreground">
              Strategic partners in talent acquisition, executive search, and leadership hiring.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase">Navigate</h2>
              <ul className="text-muted-foreground font-medium space-y-4">
                {footerNavs.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase">Legal</h2>
              <ul className="text-muted-foreground font-medium space-y-4">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase">Contact</h2>
              <ul className="text-muted-foreground font-medium space-y-4">
                  <li>
                    <a href="mailto:contact@dhruvini.co" className="hover:text-primary transition-colors">
                        contact@dhruvini.co
                    </a>
                  </li>
                  <li>
                    <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                        +1 (234) 567-890
                    </a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-border sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-muted-foreground sm:text-center">
            © {new Date().getFullYear()}{' '}
            <Link href="/" className="hover:text-primary">
              Dhruvini Consulting
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-primary">
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
