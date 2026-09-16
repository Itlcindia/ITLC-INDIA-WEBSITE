import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MessageSquare, MessageCircle, Bot, Users, ArrowRight, Zap, CheckCircle2, ShieldCheck, Sparkles, Smartphone } from 'lucide-react';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'AI Chatbot Development | ITLC INDIA PVT LTD',
  description: 'Custom AI chatbot development for Website, WhatsApp, and social media. Automate 24/7 customer support and lead generation.',
  openGraph: {
    title: 'AI Chatbot Development | ITLC INDIA PVT LTD',
    description: 'Intelligent conversational AI for your business.',
    url: 'https://itlcindia.com/services/ai-chatbot-development',
    type: 'website',
  },
};

const chatbotTypes = [
  {
    title: "Website AI Agents",
    description: "Intelligent concierge for your web traffic. Convert visitors into leads 24/7.",
    icon: <Bot className="h-8 w-8 text-primary" />
  },
  {
    title: "WhatsApp Automation",
    description: "Engage customers on the world's most popular messaging app with automated flows.",
    icon: <MessageCircle className="h-8 w-8 text-primary" />
  },
  {
    title: "Omnichannel Support",
    description: "Consistent support across Facebook, Instagram, Telegram, and Email.",
    icon: <Users className="h-8 w-8 text-primary" />
  }
];

const faqs = [
  {
    q: "Can the chatbot handle complex customer queries?",
    a: "Yes, our bots use advanced NLP (Natural Language Processing) and custom knowledge bases to handle nuanced conversations, only escalating to humans when necessary."
  },
  {
    q: "Does it integrate with our CRM?",
    a: "Absolutely. We provide native integrations for Salesforce, HubSpot, Zoho, and other major CRM platforms to sync lead data instantly."
  },
  {
    q: "How long does it take to deploy?",
    a: "A standard AI chatbot can be deployed in as little as 2-4 weeks, depending on the complexity of your knowledge base and integrations."
  }
];

export default function AiChatbotDevelopmentPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center bg-slate-900 text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="container relative z-20 max-w-screen-xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold border border-primary/30">
                <Sparkles className="h-4 w-4" /> <span>Conversational Excellence</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                AI Chatbots That <br /> <span className="text-primary">Speak Your Brand</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl">
                Scale your customer service without scaling your headcount. We build intelligent, context-aware AI agents that drive revenue while you sleep.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/contact">Build My Bot</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-white/20 bg-white/5 backdrop-blur-sm">
                  <Link href="/portfolio">See Case Studies</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
               <div className="relative w-full max-w-md aspect-[3/4] bg-slate-800/60 backdrop-blur-md rounded-[40px] border-8 border-slate-700/50 shadow-2xl p-6 overflow-hidden">
                  <div className="flex flex-col h-full gap-4">
                    <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-2xl">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold">AI</div>
                      <div className="font-bold text-sm">ITLC Business Agent</div>
                    </div>
                    <div className="flex-1 space-y-4">
                        <div className="bg-slate-700 p-4 rounded-2xl rounded-tl-none text-sm w-4/5 animate-in fade-in slide-in-from-left-4 duration-500">Hello! How can I help your business grow today?</div>
                        <div className="bg-primary/20 p-4 rounded-2xl rounded-tr-none text-sm w-4/5 ml-auto text-right border border-primary/20">I want to automate my sales pipeline.</div>
                        <div className="bg-slate-700 p-4 rounded-2xl rounded-tl-none text-sm w-4/5 animate-in fade-in slide-in-from-left-4 duration-1000">I can help with that. Would you like to see a demo of our CRM integration?</div>
                    </div>
                    <div className="mt-auto p-3 bg-slate-700/50 rounded-2xl text-xs text-slate-400">Typing...</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Types Overview */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Conversational AI for Every Platform</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Wherever your customers are, we build the tech to reach them instantly.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {chatbotTypes.map((type, i) => (
              <Card key={i} className="border-none shadow-xl bg-slate-50/50 hover:bg-white transition-all group">
                <CardHeader>
                  <div className="mb-4 p-3 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Specific Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-10 bg-green-500/10 blur-[100px] rounded-full" />
                <div className="relative bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-green-100 text-green-600 rounded-2xl"><MessageCircle className="h-8 w-8" /></div>
                        <div>
                            <h3 className="text-2xl font-bold">WhatsApp Business API</h3>
                            <p className="text-sm text-muted-foreground">Official Meta-partner integration</p>
                        </div>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-6">
                        {[
                            { title: "Broadcasts", desc: "Reach thousands instantly." },
                            { title: "Interactive", desc: "Buttons & list messages." },
                            { title: "Secure", desc: "End-to-end encrypted." },
                            { title: "Scalable", desc: "Handles millions of hits." }
                        ].map((item, i) => (
                            <li key={i} className="space-y-1">
                                <div className="font-bold text-slate-900">{item.title}</div>
                                <p className="text-sm text-slate-500">{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
             </div>
             <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The Power of <span className="text-green-600">WhatsApp AI</span></h2>
                <p className="text-lg text-muted-foreground">We transform your WhatsApp Business account from a static messaging app into a fully-functional automated sales engine.</p>
                <Button asChild size="lg" className="rounded-full bg-green-600 hover:bg-green-700">
                    <Link href="/contact" className="flex items-center gap-2">
                        Get Started on WhatsApp <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-md mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Bot Development FAQs</h2>
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
      <section className="py-24 bg-slate-950 text-white text-center">
        <div className="container max-w-screen-xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-bold tracking-tight">Don't Make Your Customers Wait.</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Deploy a specialized AI assistant today and see an immediate jump in customer satisfaction.</p>
          <Button asChild size="lg" className="rounded-full px-12 h-14 font-bold shadow-xl">
            <Link href="/contact">Launch Your Bot</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
