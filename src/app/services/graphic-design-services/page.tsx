import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Palette, 
  ImageIcon, 
  FileText, 
  Layout, 
  Presentation, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Sparkles,
  RefreshCcw,
  Clock
} from 'lucide-react';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Graphic Design Services | ITLC INDIA PVT LTD',
  description: 'Creative designs that strengthen your brand. Professional graphic design services for social media, marketing, and business collaterals.',
};

const designServices = [
  {
    title: "Social Media Creatives",
    description: "Engaging posts, banners, and stories for all major platforms.",
    icon: <Zap className="h-8 w-8 text-primary" />
  },
  {
    title: "Marketing Materials",
    description: "Strategic visual assets for online and offline campaigns.",
    icon: <Palette className="h-8 w-8 text-primary" />
  },
  {
    title: "Brochures",
    description: "Professional multi-page brochures that showcase your services.",
    icon: <FileText className="h-8 w-8 text-primary" />
  },
  {
    title: "Posters & Flyers",
    description: "High-impact designs for events, promotions, and announcements.",
    icon: <Layout className="h-8 w-8 text-primary" />
  },
  {
    title: "Business Presentations",
    description: "Pitch decks and corporate slides that win clients.",
    icon: <Presentation className="h-8 w-8 text-primary" />
  }
];

const workflow = [
  { step: "01", title: "Requirement Gathering", desc: "Discussing your goals and design preferences." },
  { step: "02", title: "Concept Creation", desc: "Developing initial drafts and visual directions." },
  { step: "03", title: "Design Production", desc: "Detailed execution of the chosen concept." },
  { step: "04", title: "Revisions", desc: "Refining the work based on your specific feedback." },
  { step: "05", title: "Final Delivery", desc: "Providing print-ready and digital-optimized files." }
];

const faqs = [
  {
    q: "What graphic design services do you offer?",
    a: "We offer a wide range including social media graphics, print marketing (flyers/brochures), corporate presentations, and custom digital illustrations."
  },
  {
    q: "Do you create social media marketing creatives?",
    a: "Yes, we design platform-specific content for Instagram, Facebook, LinkedIn, and Twitter, including animated elements."
  },
  {
    q: "Can you design brochures and company profiles?",
    a: "Absolutely. We specialize in professional corporate documentation that aligns with your brand guidelines."
  },
  {
    q: "How many revisions are included?",
    a: "Our standard projects include 2-3 rounds of major revisions to ensure you are 100% satisfied with the outcome."
  },
  {
    q: "What file formats will I receive?",
    a: "You will receive high-resolution PNG/JPG for web, PDF for print, and original source files (PSD/AI/Canva) upon request."
  }
];

export default function GraphicDesignServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center bg-slate-950 text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="container relative z-20 max-w-screen-xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
                <Sparkles className="h-4 w-4" /> <span>Creative Studio</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-slate-900">
                Professional <br /> <span className="text-primary">Graphic Design</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                We transform your ideas into compelling visual stories that captivate your audience and strengthen your brand's presence across all channels.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full px-12 h-14 font-bold shadow-lg">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                    <div className="w-40 h-48 bg-primary/20 rounded-2xl animate-bounce-slow" />
                    <div className="w-40 h-40 bg-slate-900/5 rounded-2xl mt-8" />
                    <div className="w-40 h-32 bg-slate-900/10 rounded-2xl" />
                    <div className="w-40 h-56 bg-primary/10 rounded-2xl -mt-12" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Creative Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Visual solutions for every business need.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, i) => (
              <Card key={i} className="border-none shadow-xl bg-slate-50/50 hover:bg-white transition-all p-4 rounded-3xl">
                <CardHeader>
                  <div className="mb-4 p-3 bg-white rounded-2xl w-fit shadow-sm">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Design Workflow</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {workflow.map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="text-primary font-black text-4xl">{item.step}</div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Why Choose ITLC India?</h2>
                <div className="grid gap-6">
                  {[
                    { title: "Experienced Designers", icon: <Palette /> },
                    { title: "Fast Turnaround", icon: <Clock /> },
                    { title: "Unlimited Creativity", icon: <Sparkles /> },
                    { title: "Business-Focused Designs", icon: <Layout /> },
                    { title: "Affordable Pricing", icon: <CheckCircle2 /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="p-3 bg-primary/5 rounded-xl text-primary">{item.icon}</div>
                      <span className="font-bold text-slate-800">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-[40px] overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-12">
                  <ImageIcon className="h-48 w-48 text-primary opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              </div>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-md mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Graphic Design FAQs</h2>
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
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container max-w-screen-xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-bold tracking-tight">Need a Design That Converts?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Let's create something extraordinary together.</p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-12 h-14 font-bold shadow-xl">
            <Link href="/contact">Request Your Design Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
