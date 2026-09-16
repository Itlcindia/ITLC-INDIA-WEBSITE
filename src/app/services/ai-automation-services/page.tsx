import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, Zap, Cog, BarChart3, ArrowRight, BrainCircuit } from 'lucide-react';
import { ServiceHero } from '@/components/service-hero';

export const metadata: Metadata = {
  title: 'AI Automation Services | ITLC INDIA PVT LTD',
  description: 'Streamline your business with AI-powered automation solutions. Optimize workflows, reduce costs, and boost productivity with ITLC India.',
  openGraph: {
    title: 'AI Automation Services | ITLC INDIA PVT LTD',
    description: 'Transform your enterprise with intelligent AI automation workflows.',
    url: 'https://itlcindia.com/services/ai-automation-services',
    type: 'website',
  },
};

const automationFeatures = [
  {
    title: "Workflow Optimization",
    description: "Map and automate complex business processes to eliminate bottlenecks.",
    icon: <Cog className="h-8 w-8 text-primary" />
  },
  {
    title: "Data-Driven Insights",
    description: "Extract actionable intelligence from your business data automatically.",
    icon: <BarChart3 className="h-8 w-8 text-primary" />
  },
  {
    title: "Seamless Integration",
    description: "Connect AI agents with your existing CRM, ERP, and communication tools.",
    icon: <Zap className="h-8 w-8 text-primary" />
  }
];

const faqs = [
  {
    q: "How can AI automation benefit my business?",
    a: "AI automation reduces manual effort, minimizes errors, and allows your team to focus on high-value strategic tasks while the AI handles repetitive operations."
  },
  {
    q: "Can you integrate AI with our existing ERP?",
    a: "Yes, we specialize in building custom middleware and API integrations to connect AI workflows with legacy systems and modern ERPs."
  },
  {
    q: "Is AI automation secure?",
    a: "Absolutely. We implement enterprise-grade security protocols, ensuring all data processed by AI stays within your secure infrastructure."
  }
];

export default function AiAutomationServicesPage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero 
        badge="Next-Gen Automation"
        title={<>Intelligent AI <br /> <span className="text-primary">Workflow Automation</span></>}
        description="Eliminate manual overhead and scale your operations with custom-built AI agents that handle repetitive tasks with 99.9% precision."
        primaryCta={{ text: "Get Free Audit", href: "/contact" }}
        secondaryCta={{ text: "Explore Solutions", href: "#solutions" }}
        backgroundVideo="/vio/bg.mp4"
        illustration={
          <div className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden bg-slate-900 flex items-center justify-center p-12 shadow-2xl">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
            <svg viewBox="0 0 200 200" className="w-full h-full text-primary/40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              <rect x="60" y="60" width="80" height="80" rx="10" fill="currentColor" opacity="0.2" />
              <path d="M60 100 L140 100 M100 60 L100 140" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="60" cy="60" r="8" fill="currentColor" />
              <circle cx="140" cy="60" r="8" fill="currentColor" />
              <circle cx="60" cy="140" r="8" fill="currentColor" />
              <circle cx="140" cy="140" r="8" fill="currentColor" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <BrainCircuit className="h-24 w-24 text-white opacity-80" />
            </div>
          </div>
        }
      />

      <section id="solutions" className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Comprehensive Automation Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We provide end-to-end AI deployment tailored to your specific enterprise requirements.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {automationFeatures.map((feature, i) => (
              <Card key={i} className="border-none shadow-xl bg-slate-50/50 hover:bg-white transition-all group">
                <CardHeader>
                  <div className="mb-4 p-3 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Smart Business Operations</h2>
              <p className="text-lg text-muted-foreground">Our AI agents work across departments—from HR and Finance to Customer Success—to ensure seamless execution of daily tasks.</p>
              <ul className="space-y-4">
                {[
                  "Automatic Invoice Processing & Reconciliation",
                  "AI-Driven Lead Qualification & Assignment",
                  "Automated Recruitment Screening",
                  "Real-time Inventory Reordering"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="rounded-full group">
                <Link href="/contact">Book a Demo <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
            </div>
            <div className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden bg-slate-900 flex items-center justify-center p-12">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
              <svg viewBox="0 0 200 200" className="w-full h-full text-primary/40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                <rect x="60" y="60" width="80" height="80" rx="10" fill="currentColor" opacity="0.2" />
                <path d="M60 100 L140 100 M100 60 L100 140" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="60" cy="60" r="8" fill="currentColor" />
                <circle cx="140" cy="60" r="8" fill="currentColor" />
                <circle cx="60" cy="140" r="8" fill="currentColor" />
                <circle cx="140" cy="140" r="8" fill="currentColor" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <BrainCircuit className="h-24 w-24 text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container max-w-screen-md mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-bold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container max-w-screen-xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-bold tracking-tight">Ready to Automate Your Business?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Join the ranks of high-performing enterprises using AI to dominate their markets.</p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-12 h-14 font-bold shadow-xl">
            <Link href="/contact">Talk to an Automation Expert</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
