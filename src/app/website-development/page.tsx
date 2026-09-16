import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Globe, Smartphone, Zap, Shield, Search, ArrowRight, Clock, Rocket, Smile, CodeXml, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';
import { SeoFaq } from "@/components/seo-faq";
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Website Development Services | ITLC INDIA PVT LTD',
  description: 'High-performance, SEO-optimized, and responsive website development using Next.js, React, and modern tech stacks by ITLC INDIA PVT LTD.',
}

const webServices = [
    {
        icon: <CodeXml className="h-8 w-8 text-primary" />,
        title: "Modern Front-end",
        description: "Next.js and React powered websites for blazing fast performance.",
        features: ["Core Web Vitals focus", "Responsive design", "Accessibility (A11y)", "Animated interfaces"],
    },
    {
        icon: <Search className="h-8 w-8 text-primary" />,
        title: "SEO Optimized",
        description: "Built with search engines in mind to ensure your brand gets found.",
        features: ["Semantic HTML", "Schema markup", "Speed optimization", "Dynamic meta tags"],
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Performance First",
        description: "Optimized loading times and seamless transitions for best UX.",
        features: ["Image optimization", "Lazy loading", "Server-side rendering", "Edge caching"],
    },
];

const websiteDevFaqs = [
  {
    question: "What are the benefits of professional Website Development for businesses?",
    answer: "Professional website development from ITLC India provides businesses with a high-performance digital presence that is mobile-responsive, secure, and SEO-optimized. A well-built website acts as your primary marketing tool, driving organic traffic and converting visitors into loyal customers. By focusing on Core Web Vitals and user experience (UX), we ensure that your site loads instantly and provides intuitive navigation, which directly impacts your brand's credibility and search engine rankings, leading to higher ROI and measurable business growth."
  },
  {
    question: "Why choose ITLC India for Website Development?",
    answer: "ITLC India is a premier technology partner specializing in Next.js and React development, ensuring your website is built with the industry's most advanced tech stack. We don't just build pages; we craft digital experiences. Our team combines expert frontend development with robust backend architecture and custom CMS integrations. With over a decade of experience, we provide enterprise-grade security, reliable hosting support, and a commitment to delivery excellence that sets your business apart in the digital landscape."
  },
  {
    question: "How much does Website Development cost in India?",
    answer: "The cost of website development at ITLC India is tailored to your project's specific requirements, including the number of pages, custom features, and integration needs. We offer transparent pricing for various tiers, from professional business websites and portfolios to complex corporate portals and custom web applications. Our focus is on providing high-value solutions that deliver long-term results. Contact our sales team for a detailed proposal and cost analysis based on your unique digital objectives."
  },
  {
    question: "How long does it take to implement a new website?",
    answer: "A standard business website at ITLC India typically takes 4 to 6 weeks from concept to launch. For more complex projects involving custom application logic or extensive third-party integrations, the timeline may range from 10 to 16 weeks. We follow a structured development process including wireframing, UI/UX design, development, and thorough QA testing. Our agile approach ensures that you are involved at every milestone, ensuring the final product perfectly aligns with your expectations."
  },
  {
    question: "What technologies are used in your Website Development process?",
    answer: "We utilize modern, high-performance technologies to ensure your website is future-ready. Our primary stack includes Next.js and React for the frontend, Tailwind CSS for responsive styling, and Node.js for backend services. We also offer headless CMS solutions like Sanity or Strapi for flexible content management. For hosting, we leverage Vercel or AWS, ensuring your site benefits from edge caching, global distribution, and enterprise-grade security protocols for maximum uptime and speed."
  },
  {
    question: "Do you provide support and maintenance after deployment?",
    answer: "Yes, ITLC India offers comprehensive support and maintenance plans to keep your website performing at its best. Technology moves fast, and we provide regular updates for security, speed optimizations, and new feature integrations. Our managed services include uptime monitoring, periodic SEO audits, and content updates. We act as your ongoing digital partner, ensuring your website remains a powerful and evolving asset for your brand in an ever-changing online environment."
  }
];

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-[76px] text-white leading-tight">
            Future-Ready Websites <br /> <span className="text-primary">Built for Performance</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-base text-white/80 md:text-lg lg:text-2xl">
            We don't just build websites; we craft digital experiences that convert visitors into loyal customers using the industry's most advanced tech stacks.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white font-bold shadow-2xl transition-all hover:-translate-y-1">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-10 rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white font-bold transition-all hover:-translate-y-1">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">Our Web Tech Stack</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">We use modern frameworks to deliver the best results.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {webServices.map((service) => (
              <Card key={service.title} className="flex flex-col border-border/50 shadow-sm hover:shadow-xl transition-all">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SeoFaq serviceName="Website Development" faqs={websiteDevFaqs} />

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-16">Industries We Build For</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {["SaaS & Tech", "Real Estate", "Healthcare", "Education", "E-Commerce", "Finance", "Logistics", "Hospitality"].map((industry) => (
                    <div key={industry} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-primary transition-all">
                        <p className="font-bold">{industry}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
