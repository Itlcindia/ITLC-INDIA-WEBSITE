import Link from "next/link";
import { Linkedin, Instagram, Facebook, Youtube, Mail, Phone, MapPin, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Logo from "@/components/logo";
import PolygonHeroBackground from "@/components/ui/polygon-hero-background";

const socialLinks: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: "https://www.linkedin.com/company/itlcindia/?viewAsMember=true", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/itlcindia/", Icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/itlc_india/?hl=en", Icon: Instagram, label: "Instagram" },
  { href: "https://www.youtube.com/@itlcindia", Icon: Youtube, label: "YouTube" },
];

const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/blogs', label: 'Blogs & Insights' },
    { href: '/certificates', label: 'Certificates' },
    { href: '/verify-certificate', label: 'Verify Certificate' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/careers', label: 'Careers' },
];

const serviceLinks = [
    { href: '/crm-product-development', label: 'CRM Product Development' },
    { href: '/custom-development', label: 'Custom Software Development' },
    { href: '/ai-automation-services', label: 'AI Automation Services' },
    { href: '/ui-ux-design', label: 'UI/UX Design' },
    { href: '/digital-marketing', label: 'Digital Marketing' },
    { href: '/technology-and-ai-consulting', label: 'Technology & AI Consulting' },
    { href: '/services/cloud-datacentre-consulting', label: 'Cloud & Datacentre Consulting' },
    { href: '/political-campaign-services', label: 'Political Campaign Services' },
];

const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms & Conditions' },
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
    <footer className="relative w-full bg-[#060813] text-white border-t border-slate-800/80 overflow-hidden mt-16 sm:mt-20">
      {/* Blue Polygon Wireframe Grid with Dots & Ambient Glow */}
      <PolygonHeroBackground />

      <div className="container relative z-10 max-w-screen-xl mx-auto px-4 pt-12 pb-8 sm:pt-14 sm:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            
            {/* Column 1: Company Info */}
            <div className="space-y-4">
                <Logo className="brightness-0 invert" />
                <p className="text-sm text-slate-100 leading-relaxed">
                  Empowering businesses with AI-driven and enterprise-grade technology solutions since 2015.
                </p>
                <div className="space-y-3 text-sm text-slate-100">
                    <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-blue-400" />
                        <span className="text-white">G1/0049, Olive Wood Villa, Golf City, Lucknow, Uttar Pradesh – 226030</span>
                    </div>
                     <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 flex-shrink-0 text-blue-400" />
                        <a href="tel:+919532341000" className="text-white hover:text-blue-300 font-medium transition-colors">(+91) 953 234 1000</a>
                    </div>
                    <div className="flex items-start gap-3">
                        <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-blue-400" />
                        <div>
                            <a href="mailto:info@itlcindia.com" className="text-white hover:text-blue-300 font-medium transition-colors block">info@itlcindia.com</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
                <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2.5">
                    {quickLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-sm text-slate-100 hover:text-blue-300 font-medium transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 3: Services */}
            <div>
                <h3 className="text-lg font-bold text-white mb-4">Services</h3>
                 <ul className="space-y-2.5">
                    {serviceLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-sm text-slate-100 hover:text-blue-300 font-medium transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
             
            {/* Column 4: Social & Rating */}
            <div className="space-y-6">
                <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white">Follow Us</h3>
                    <div className="flex items-center gap-3">
                        {socialLinks.map(({ href, label, Icon }) => (
                            <Link
                              key={label}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={label}
                              className="text-white hover:text-blue-300 transition-all duration-300 p-2.5 bg-slate-900/90 hover:bg-blue-600/30 rounded-full border border-slate-700/80 hover:border-blue-400/60 hover:shadow-sm"
                            >
                              <Icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-700/80">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-sm font-bold text-white">5.0 / 5.0</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-200 uppercase tracking-widest">
                        Google Customer Rating
                    </p>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 text-xs text-slate-200 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white transition-colors text-slate-200 font-medium">
                {link.label}
              </Link>
            ))}
            <Link href="/cookie-settings" className="hover:text-white transition-colors text-slate-200 font-medium">Cookie Settings</Link>
          </div>
          <span className="text-center text-slate-300 font-medium">© 2015–{new Date().getFullYear()} ITLC INDIA PVT LTD. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
