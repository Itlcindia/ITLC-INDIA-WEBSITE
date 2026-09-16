import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Compass, Lightbulb, Map, ShieldCheck, BarChart, ArrowRight, CheckCircle2, Bot, LayoutGrid, Zap, Users, BrainCircuit } from 'lucide-react';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Technology & AI Consulting | ITLC INDIA PVT LTD',
  description: 'Expert technology and AI consulting for digital transformation. Strategic AI adoption roadmaps and infrastructure planning for global enterprises.',
  openGraph: {
    title: 'Technology & AI Consulting | ITLC INDIA PVT LTD',
    description: 'Guiding your enterprise through the complexity of AI adoption.',
    url: 'https://itlcindia.com/services/technology-ai-consulting',
    type: 'website',
  },
};

const consultingPillars = [
  {
    title: "AI Adoption Roadmap",
    description: "We help you identify the high-impact areas for AI and build a phased deployment strategy.",
    icon: <Map className="h-8 w-8 text-primary" />
  },
  {
    title: "Tech Stack Assessment",
    description: "Audit your current infrastructure for AI-readiness and performance bottlenecks.",
    icon: <LayoutGrid className="h-8 w-8 text-primary" />
  },
  {
    title: "Digital Transformation",
    description: "Complete overhaul of your legacy business processes into modern digital workflows.",
    icon: <Zap className="h-8 w-8 text-primary" />
  }
];

const faqs = [
  {
    q: "Why do we need an AI consultant?",
    a: "AI adoption is complex and carries risks. A consultant ensures you choose the right tools, manage data privacy correctly, and achieve a positive ROI without wasting resources on hype."
  },
  {
    q: "Do you offer post-implementation support?",
    a: "Yes, our consulting includes long-term monitoring, performance optimization, and continuous model updating as new tech emerges."
  }
];

export default function TechnologyAiConsultingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center bg-slate-950 text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="container relative z-20 max-w-screen-xl mx-auto px-4">
          <div className="max-w-4xl space-y-6">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
              <Compass className="h-4 w-4" /> <span>Strategic Guidance</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-slate-900">
              Navigate the Future of <br /> <span className="text-primary">Enterprise Technology</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              We bridge the gap between business vision and technical execution. Our consultants provide the roadmap for secure, scalable, and profitable AI adoption.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full px-12 h-14 font-bold shadow-lg">
                <Link href="/contact">Book Strategy Session</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Pillars */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Consulting Framework</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A structured approach to modernizing your enterprise intelligence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {consultingPillars.map((pillar, i) => (
              <Card key={i} className="border-none shadow-xl bg-slate-50/50 p-8 rounded-3xl hover:-translate-y-2 transition-all">
                <div className="mb-6 p-4 bg-primary/10 rounded-2xl w-fit text-primary">
                    {pillar.icon}
                </div>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { label: "AI Experts", val: "15+" },
              { label: "Successful Migrations", val: "250+" },
              { label: "Enterprise Partners", val: "80+" },
              { label: "Avg. Efficiency Gain", val: "40%" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl font-bold text-primary">{stat.val}</div>
                <div className="text-sm text-slate-400 font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-md mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Consulting FAQs</h2>
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

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container max-w-screen-xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-bold tracking-tight">The Road to AI Starts With a Single Call.</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Get expert advice that aligns your tech stack with your 2025 business objectives.</p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-12 h-14 font-bold shadow-xl">
            <Link href="/contact">Book Your Free Discovery Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
