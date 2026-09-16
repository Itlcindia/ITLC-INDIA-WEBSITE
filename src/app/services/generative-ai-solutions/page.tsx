import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BrainCircuit, Cpu, Database, FileText, Sparkles, ArrowRight, CheckCircle2, Bot, Layers, PenTool, LayoutGrid } from 'lucide-react';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Generative AI Solutions | ITLC INDIA PVT LTD',
  description: 'Custom LLM development, AI content generation, and enterprise knowledge base solutions. Harness the power of Generative AI with ITLC India.',
  openGraph: {
    title: 'Generative AI Solutions | ITLC INDIA PVT LTD',
    description: 'Transformative Generative AI for the modern enterprise.',
    url: 'https://itlcindia.com/services/generative-ai-solutions',
    type: 'website',
  },
};

const genAiCapabilities = [
  {
    title: "Custom LLM Development",
    description: "Fine-tune models like Llama, Claude, or GPT on your proprietary data for niche performance.",
    icon: <Layers className="h-8 w-8 text-primary" />
  },
  {
    title: "AI Knowledge Base",
    description: "Turn your scattered documentation into an intelligent, searchable AI encyclopedia for your team.",
    icon: <Database className="h-8 w-8 text-primary" />
  },
  {
    title: "Generative Content",
    description: "Automate technical writing, marketing copy, and multi-lingual translations with high accuracy.",
    icon: <PenTool className="h-8 w-8 text-primary" />
  }
];

const applications = [
    { title: "Legal & Compliance", desc: "Automated document review and risk assessment." },
    { title: "Software Engineering", desc: "AI-assisted coding and automated documentation." },
    { title: "E-Commerce", desc: "Dynamic product descriptions and image generation." },
    { title: "Marketing", desc: "Personalized campaign generation at massive scale." }
];

const faqs = [
  {
    q: "Is our data used to train public models?",
    a: "No. We implement private instances and VPC (Virtual Private Cloud) deployments where your data remains 100% private and is never used to train external models."
  },
  {
    q: "What is the accuracy of Generative AI output?",
    a: "We use RAG (Retrieval Augmented Generation) and advanced prompt engineering to ensure outputs are grounded in your factual data, virtually eliminating hallucinations."
  }
];

export default function GenerativeAiSolutionsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center bg-slate-950 text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="container relative z-20 max-w-screen-xl mx-auto px-4">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold border border-primary/30">
              <Sparkles className="h-4 w-4" /> <span>Enterprise LLM Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1]">
              Harness the <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Power of Intelligence</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              We build custom generative solutions that go beyond simple chat. From RAG-based knowledge bases to fine-tuned proprietary models, we deliver the edge your business needs.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full px-12 h-14 text-lg">
                <Link href="/contact">Consult Our AI Architects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Generative AI Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Expert engineering across the full GenAI stack.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {genAiCapabilities.map((item, i) => (
              <Card key={i} className="border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl transition-all p-8 rounded-3xl">
                <div className="mb-6 p-4 bg-primary/5 rounded-2xl w-fit">
                    {item.icon}
                </div>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Grid */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-16">Enterprise Applications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {applications.map((app, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                        <div className="mb-4 h-1 w-12 bg-primary rounded-full group-hover:w-full transition-all duration-500" />
                        <h4 className="font-bold text-xl mb-2">{app.title}</h4>
                        <p className="text-sm text-slate-400">{app.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-md mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Generative AI FAQs</h2>
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
      <section className="py-24 bg-slate-50 text-center border-t border-slate-100">
        <div className="container max-w-screen-xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Step Into the AI Era.</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Don't just use AI—own your intelligence with custom-built enterprise solutions.</p>
          <Button asChild size="lg" className="rounded-full px-12 h-14 font-bold shadow-xl">
            <Link href="/contact">Request a Strategy Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
