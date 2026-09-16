import Link from "next/link";
import { Linkedin, Instagram, Facebook, Youtube, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Logo from "../logo";

const socialLinks: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: "https://www.linkedin.com/company/itlcindia/?viewAsMember=true", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/itlcindia/", Icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/itlc_india/?hl=en", Icon: Instagram, label: "Instagram" },
  { href: "https://www.youtube.com/@itlcindia", Icon: Youtube, label: "YouTube" },
];

const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
    { href: '/saas-products', label: 'SaaS Products' },
    { href: '/custom-development', label: 'Custom Development' },
    { href: '/digital-marketing', label: 'Digital Marketing' },
    { href: '/ui-ux-design', label: 'UI/UX Design' },
];

const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/cookie-policy', label: 'Cookie Policy' },
    { href: '/disclaimer', label: 'Disclaimer' },
    { href: '/anti-bribery-policy', label: 'Anti-Bribery Policy' },
    { href: '/posh-policy', label: 'POSH Policy' },
    { href: '/whistleblower-policy', label: 'Whistleblower Policy' },
    { href: '/code-of-conduct', label: 'Code of Conduct' },
    { href: '/equal-opportunity', label: 'Equal Opportunity' },
    { href: '/grievance-redressal', label: 'Grievance Redressal' },
    { href: '/data-protection', label: 'Data Protection' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border mt-24">
      <div className="container max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4 md:col-span-1">
                <Logo />
                <p className="text-muted-foreground text-sm">
                  AI-powered solutions for modern businesses since 2015.
                </p>
            </div>

            <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
                <ul className="space-y-3">
                    {quickLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
                 <ul className="space-y-3">
                    {serviceLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
             <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Connect</h3>
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        {socialLinks.map(({ href, label, Icon }) => (
                            <Link
                              key={label}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={label}
                              className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 bg-secondary rounded-full"
                            >
                              <Icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-border/50">
                        <div className="flex items-center gap-1.5 mb-0.5">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-xs font-bold">5.0</span>
                        </div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight">
                            Google Review Rating
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 text-xs text-muted-foreground flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
            <Link href="/cookie-settings" className="hover:text-primary transition-colors">Cookie Settings</Link>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4">
            <span>© {new Date().getFullYear()} ITLC INDIA PVT LTD. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
