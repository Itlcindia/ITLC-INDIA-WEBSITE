import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  PenTool, 
  BookOpen, 
  Contact, 
  Share2, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Sparkles,
  ShieldCheck,
  Award
} from 'lucide-react';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Logo & Branding Design | ITLC INDIA PVT LTD',
  description: 'Build a powerful brand identity that lasts. From logo creation to full brand guidelines, we help you stand out.',
};

const brandingSolutions = [
  {
    title: "Logo Design",
    description: "Unique, memorable, and scalable logos that reflect your business core values.",
    icon: <PenTool className="h-8 w-8 text-primary" />
  },
  {
    title: "Brand Guidelines",
    description: "Comprehensive rulebooks for typography, color palettes, and brand usage.",
    icon: <BookOpen className="h-8 w-8 text-primary" />
  },
  {
    title: "Business Cards",
    description: "Premium stationary design that makes a lasting physical impression.",
    icon: <Contact className="h-8 w-8 text-primary" />
  },
  {
    title: "Social Media Branding",
    description: "Consistent visual themes across Instagram, LinkedIn, and Facebook profiles.",
    icon: <Share2 className="h-8 w-8 text-primary" />
  },
  {
    title: "Corporate Identity Design",
    description: "Full suite of internal and external communication design for established companies.",
    icon: <Award className="h-8 w-8 text-primary" />
  }
];

const brandingProcess = [
  { step: "01", title: "Brand Research", desc: "Analyzing competitors and target market sentiment." },
  { step: "02", title: "Concept Development", desc: "Sketching multiple creative directions for the brand." },
  { step: "03", title: "Logo Creation", desc: "Refining the chosen concept into a pixel-perfect design." },
  { step: "04", title: "Brand Guidelines", desc: "Developing the visual system for consistent application." },
  { step: "05", title: "Final Delivery", desc: "Providing all source files and high-res exports." }
];

const faqs = [
  {
    q: "How many logo concepts will be provided?",
    a: "Typically, we provide 3-5 distinct initial concepts based on your project package, which we then refine iteratively."
  },
  {
    q: "Will I receive source files?",
    a: "Yes, you will receive all industry-standard source files including .AI, .EPS, .SVG, .PNG, and .PDF formats."
  },
  {
    q: "Can you redesign my existing logo?",
    a: "Absolutely. We specialize in brand refreshes, maintaining your core legacy while modernizing the aesthetic for current markets."
  },
  {
    q: "Do you provide complete brand guidelines?",
    a: "Yes, our comprehensive branding packages include a brand book covering logo usage, color codes (CMYK/RGB/HEX), and typography rules."
  },
  {
    q: "How long does logo design take?",
    a: "The standard turnaround time is 7-10 business days for the initial concepts, followed by refinements as needed."
  }
];

export default function LogoBrandingDesignPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center bg-slate-950 text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="container relative z-10 max-w-screen-xl mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold border border-primary/30">
              <Sparkles className="h-4 w-4" /> <span>Brand Identity Studio</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight">
              Build A Powerful <br /> <span className="text-primary">Brand Identity</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
              We help businesses find their voice and visual soul. From startups to enterprises, we build identities that resonate and last a lifetime.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full px-12 h-14 text-lg">
                <Link href="/contact">Start My Branding</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Branding Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A complete visual system for your business growth.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingSolutions.map((sol, i) => (
              <Card key={i} className="border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl transition-all p-8 rounded-3xl">
                <div className="mb-6 p-4 bg-primary/5 rounded-2xl w-fit">
                    {sol.icon}
                </div>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold">{sol.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-slate-600 leading-relaxed">{sol.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Branding Process</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {brandingProcess.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="text-5xl font-black text-white/10">{item.step}</div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
           <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose ITLC India?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {[
                    { title: "Unique Concepts", icon: <Zap /> },
                    { title: "Modern Strategy", icon: <ShieldCheck /> },
                    { title: "Multiple Revisions", icon: <ArrowRight /> },
                    { title: "High Res Files", icon: <CheckCircle2 /> },
                    { title: "Ownership Rights", icon: <Award /> }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-3">
                      <div className="p-4 bg-primary/5 rounded-full text-primary">{item.icon}</div>
                      <span className="font-bold text-slate-800">{item.title}</span>
                    </div>
                  ))}
              </div>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-md mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Branding FAQs</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-bold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 text-white text-center">
        <div className="container max-w-screen-xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-bold tracking-tight">Ready to Own Your Space?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Let's build a brand that speaks louder than words.</p>
          <Button asChild size="lg" className="rounded-full px-12 h-14 font-bold shadow-xl">
            <Link href="/contact">Talk to a Branding Expert</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
