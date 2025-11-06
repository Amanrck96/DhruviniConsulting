import Link from 'next/link';
import { Briefcase, Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';

const footerNavs = [
  { href: '/services', name: 'Services' },
  { href: '/industries', name: 'Industries' },
  { href: '/insights', name: 'Insights' },
  { href: '/careers', name: 'Careers' },
  { href: '/contact', name: 'Contact' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/DhruviniConsulting' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/dhruviniconsulting/' },
  { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@DhruviniConsulting' },
];

export default function Footer() {
  return (
    <footer className="bg-[#F6EEDD] border-t border-[#EADFC9]">
      <div className="container mx-auto px-4 py-10">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Briefcase className="h-8 w-8 text-[#0B1220]" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap font-headline text-[#000000]">
                Dhruvini Consulting Private Limited
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
                    <a href="mailto:info@dhruviniconsulting.com" className="hover:text-primary transition-colors">
                        info@dhruviniconsulting.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919148184794" className="hover:text-primary transition-colors">
                        +91 91481 84794
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
            <Link href="/" className="hover:text-[#D4B43E]">
              Dhruvini Consulting Private Limited
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-[#D4B43E]" target="_blank" rel="noopener noreferrer">
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
            <Link href="https://api.whatsapp.com/send/?phone=919148184794&text&type=phone_number&app_absent=0" className="text-muted-foreground hover:text-[#D4B43E]" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 1 1 0c0 .97.78 1.75 1.75 1.75a.5.5 0 0 1 0 1h-2.25a.5.5 0 0 1 0-1H9z" />
              </svg>
              <span className="sr-only">WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
