import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Palette, 
  Search, 
  Layout, 
  Layers, 
  Smartphone, 
  Monitor, 
  Settings, 
  CheckCircle2, 
  ArrowRight, 
  MousePointer2,
  Sparkles
} from 'lucide-react';
import { ServiceHero } from '@/components/service-hero';

export const metadata: Metadata = {
  title: 'UI/UX Design Services | ITLC INDIA PVT LTD',
  description: 'User-centric digital experiences that drive results. From research to prototyping, we design intuitive interfaces for web and mobile.',
};

const designServices = [
  {
    title: "User Research",
    description: "Deep dive into user behavior and market trends to build empathy and strategy.",
    icon: <Search className="h-8 w-8 text-primary" />
  },
  {
    title: "Wireframing",
    description: "Low-fidelity blueprints focusing on structure and information architecture.",
    icon: <Layout className="h-8 w-8 text-primary" />
  },
  {
    title: "Prototyping",
    description: "Interactive high-fidelity prototypes to test user flows and interactions.",
    icon: <Layers className="h-8 w-8 text-primary" />
  },
  {
    title: "Mobile App UI Design",
    description: "Pixel-perfect, responsive designs for iOS and Android platforms.",
    icon: <Smartphone className="h-8 w-8 text-primary" />
  },
  {
    title: "Website UI Design",
    description: "Modern, engaging web interfaces optimized for speed and conversion.",
    icon: <Monitor className="h-8 w-8 text-primary" />
  },
  {
    title: "SaaS Dashboard Design",
    description: "Complex data simplified into intuitive and powerful user dashboards.",
    icon: <Settings className="h-8 w-8 text-primary" />
  }
];

const faqs = [
  {
    q: "How long does a UI/UX design project take?",
    a: "A typical design phase ranges from 3 to 8 weeks depending on the complexity, number of screens, and depth of research required."
  }
];

export default function UiUxDesignPage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero 
        badge="Design Excellence"
        title={<>User-Centric <br /> <span className="text-primary">Digital Experiences</span></>}
        description="We craft intuitive interfaces that bridge the gap between user needs and business goals, ensuring every interaction is meaningful."
        primaryCta={{ text: "Get Free Consultation", href: "/contact" }}
        backgroundVideo="/vio/bg.mp4"
        illustration={
           <div className="relative bg-white/40 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-white/20 w-full max-w-lg">
              <div className="aspect-[4/3] rounded-2xl bg-slate-50/50 flex items-center justify-center border border-slate-100">
                <MousePointer2 className="h-24 w-24 text-primary opacity-20" />
              </div>
           </div>
        }
      />

      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our UI/UX Design Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Expertise across every stage of the design lifecycle.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {designServices.map((service, i) => (
              <Card key={i} className="border-none shadow-xl bg-slate-50/50 hover:bg-white transition-all group">
                <CardHeader>
                  <div className="mb-4 p-3 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
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
          <h2 className="text-4xl font-bold tracking-tight">Ready to Elevate Your Product?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Join dozens of successful brands who trust us with their digital identity.</p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-12 h-14 font-bold shadow-xl">
            <Link href="/contact">Book Your Design Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
