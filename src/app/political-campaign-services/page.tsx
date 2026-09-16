'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  CheckCircle2, 
  BarChart3, 
  Megaphone, 
  Globe, 
  ArrowRight, 
  Target, 
  Zap, 
  ChevronRight,
  Award,
  Briefcase,
  ArrowRightCircle,
  ArrowLeftCircle,
  Newspaper,
  ShieldAlert,
  Sparkles,
  Users2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

const services = [
  {
    title: "Campaign Strategy",
    description: "Data-driven roadmaps and feasibility studies to define your path to victory using advanced predictive analytics.",
    icon: <Target className="h-8 w-8 text-primary" />
  },
  {
    title: "Digital Campaign",
    description: "Dominating the digital landscape through social media, WhatsApp networks, and precision-targeted SEO.",
    icon: <Globe className="h-8 w-8 text-primary" />
  },
  {
    title: "Branding & Identity",
    description: "Crafting a powerful personal brand that resonates with every voter demographic across the constituency.",
    icon: <Award className="h-8 w-8 text-primary" />
  },
  {
    title: "Promotion & Outreach",
    description: "High-impact OOH, print, and field promotion strategies for maximum visibility and engagement.",
    icon: <Megaphone className="h-8 w-8 text-primary" />
  },
  {
    title: "Analytics & Data",
    description: "Real-time voter sentiment analysis and booth-level performance tracking for strategic deployment.",
    icon: <BarChart3 className="h-8 w-8 text-primary" />
  },
  {
    title: "Web Development",
    description: "High-performance, secure portals for volunteer management and seamless voter engagement.",
    icon: <Briefcase className="h-8 w-8 text-primary" />
  }
];

const prExpertise = [
  {
    title: "Media Coverage",
    description: "We ensure your news reaches leading media outlets through press releases, media outreach, and interview coordination.",
    icon: <Newspaper className="h-6 w-6 text-primary" />
  },
  {
    title: "Crisis Management",
    description: "During negative publicity or critical situations, our experts implement strategic communication plans to protect your company’s reputation.",
    icon: <ShieldAlert className="h-6 w-6 text-primary" />
  },
  {
    title: "Brand Building",
    description: "Through consistent PR campaigns, storytelling, and engagement strategies, we build a strong and credible brand identity.",
    icon: <Sparkles className="h-6 w-6 text-primary" />
  },
  {
    title: "Public Engagement",
    description: "We create meaningful connections between your brand and your audience, fostering long-term relationships.",
    icon: <Users2 className="h-6 w-6 text-primary" />
  }
];

const processSteps = [
  { step: "01", title: "Discovery & Analysis", description: "In-depth constituency research and historical trend analysis." },
  { step: "02", title: "Strategic Roadmap", description: "Defining messaging, target demographics, and resource allocation." },
  { step: "03", title: "Deployment", description: "Launching digital assets and ground-level mobilization forces." },
  { step: "04", title: "Engagement", description: "Active voter dialogue through multi-channel communication streams." },
  { step: "05", title: "Victory Operation", description: "GOTV (Get Out The Vote) strategy and poll day management." }
];

const pricingTiers = [
  {
    name: "Base",
    price: "Custom",
    description: "Essential constituency research and digital footprint setup.",
    features: ["Constituency Survey", "Social Media Setup", "Basic PR Support", "Voter List Analysis"]
  },
  {
    name: "Growth",
    price: "Custom",
    description: "Integrated campaign management for active contenders.",
    features: ["Everything in Base", "WhatsApp Marketing", "Ad Campaign Mgmt", "Booth Level Strategy", "24/7 War Room"]
  },
  {
    name: "Victory",
    price: "Custom",
    description: "Full-scale 360° operation for high-stakes elections.",
    features: ["Everything in Growth", "Influence Networks", "Mass Field Promotion", "Advanced Analytics", "Exclusive Strategy Lead"]
  }
];

const leftBoxes = [
  "क्षेत्र में प्रमुख रुझान रखने वाले लोगों का सर्वे संकलन",
  "क्षेत्र की साक्षरता का सर्वे संकलन",
  "क्षेत्र में घटित महत्वपूर्ण घटनाओं का सर्वे संकलन"
];

const rightBoxes = [
  "जनता की समस्याओं का सर्वे संकलन",
  "जातिगत समीकरण सर्वे संकलन",
  "क्षेत्र की आधारभूत सुविधाओं की अनुपस्थिति का सर्वे"
];

export default function PoliticalCampaignServicesPage() {
  return (
    <div className="text-foreground min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />

        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white max-w-5xl mx-auto leading-tight">
              Lead the Future of <span className="text-primary">Political Excellence.</span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-base text-white/70 md:text-lg leading-relaxed">
              We engineer data-driven campaigns that turn voter sentiment into landslide victories. Professional strategy meets unmatched execution.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1">
                <Link href="/contact">Win Your Election</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-10 rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 font-bold text-lg transition-all hover:-translate-y-1">
                <Link href="/contact">Book Strategy Call</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter">Complete Election Solutions</h2>
            <p className="text-lg text-muted-foreground">Every tool you need to build, scale, and win your campaign in the digital age.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card key={i} className="border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 p-8 group bg-card">
                <div className="mb-6 p-4 bg-primary/10 rounded-xl border border-primary/20 w-fit group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Who This Is For */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground tracking-tighter">Tailored For Every Level <br /> of Leadership</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Whether you are a seasoned party leader or a first-time independent candidate, our solutions scale to your specific constituency needs.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Parliamentary Candidates', 'Political Parties', 'State Assembly Leaders', 'Independent Activists'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-white border border-border shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-bold text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-slate-200 rounded-2xl relative overflow-hidden">
                  <Image src="/ser/7.png" alt="Leadership" fill className="object-cover opacity-80" data-ai-hint="leadership podium" />
                </div>
                <div className="h-64 bg-primary rounded-2xl flex items-center justify-center p-8 text-white text-center">
                  <div className="space-y-2">
                    <p className="text-4xl font-bold">100%</p>
                    <p className="text-sm font-bold uppercase tracking-wider">Confidentiality Guaranteed</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-slate-900 rounded-2xl flex items-center justify-center p-8 text-white text-center">
                  <div className="space-y-2">
                    <p className="text-4xl font-bold">24/7</p>
                    <p className="text-sm font-bold uppercase tracking-wider">War Room Support</p>
                  </div>
                </div>
                <div className="h-48 bg-slate-200 rounded-2xl relative overflow-hidden">
                  <Image src="/ser/13.png" alt="Strategy" fill className="object-cover opacity-80" data-ai-hint="political team strategy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PR Services Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter">Strategic Public Relations Solutions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We amplify your brand’s voice across the right platforms. Our professional PR strategies strengthen your reputation, build trust, and position your brand ahead of the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {prExpertise.map((item, i) => (
              <Card key={i} className="border border-border/50 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-slate-900 rounded-3xl p-12 md:p-16 border border-white/10 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-12 text-center">Why Choose Our PR Services?</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Experienced Communication Strategists", desc: "Expert storytellers who know how to capture public attention." },
                  { title: "Strong Media Network", desc: "Established relationships with major news and digital outlets." },
                  { title: "Result-Driven Campaign Planning", desc: "Strategies designed around clear impact and measurable growth." },
                  { title: "Reputation Protection Expertise", desc: "Proactive monitoring and swift response to safeguard your image." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="h-1 w-12 bg-primary rounded-full"></div>
                    <h4 className="font-bold text-lg leading-tight">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
              <Zap className="h-4 w-4" />
              <span>Elevate Your Presence</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Ready to strengthen your brand image? <br className="hidden md:block" /> 
              Contact us today to build a powerful public presence.
            </h3>
            <Button asChild size="lg" className="h-14 px-12 rounded-full font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
              <Link href="/contact">Get PR Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Hindi Digital Evidence Section */}
      <section className="py-24 bg-slate-100">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
              क्षेत्र में सक्रियता का डिजिटल प्रमाण
            </h2>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              {leftBoxes.map((text, i) => (
                <div key={i} className="relative group">
                  <div className="bg-white border-2 border-primary/20 rounded-lg p-5 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
                    <p className="text-primary font-bold text-lg leading-relaxed text-center lg:text-right">
                      {text}
                    </p>
                  </div>
                  <div className="hidden lg:block absolute top-1/2 -right-8 -translate-y-1/2 text-primary/30">
                    <ArrowRightCircle className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center order-1 lg:order-2">
              <div className="relative w-full max-w-2xl bg-slate-800 rounded-xl p-2 shadow-2xl border-4 border-slate-700">
                <div className="aspect-video relative overflow-hidden rounded-lg bg-slate-900">
                  <Image 
                    src="/ser/14.png" 
                    alt="GIS Map Dashboard" 
                    fill 
                    className="object-cover opacity-90"
                    data-ai-hint="gis map dashboard"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-700 rounded-b-xl"></div>
                <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-48 h-2 bg-slate-600 rounded-full"></div>
              </div>
            </div>

            <div className="flex flex-col gap-8 order-3 lg:order-3">
              {rightBoxes.map((text, i) => (
                <div key={i} className="relative group">
                  <div className="bg-white border-2 border-primary/20 rounded-lg p-5 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
                    <p className="text-primary font-bold text-lg leading-relaxed text-center lg:text-left">
                      {text}
                    </p>
                  </div>
                  <div className="hidden lg:block absolute top-1/2 -left-8 -translate-y-1/2 text-primary/30">
                    <ArrowLeftCircle className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="font-bold text-4xl text-foreground tracking-tighter">Our Strategic Roadmap</h2>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-border hidden md:block"></div>
            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {processSteps.map((step, i) => (
                <div key={i} className="bg-white p-6 space-y-4 group rounded-xl border border-border shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg group-hover:bg-primary transition-colors duration-300">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Case Studies / Results */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter">Proven Outcomes</h2>
              <p className="text-slate-400 max-w-xl">From municipal wards to state assemblies, we have redefined what success looks like in modern Indian politics.</p>
            </div>
            <Button variant="link" className="text-primary font-bold p-0 h-auto" asChild>
              <Link href="/portfolio">
                View All Success Stories <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "2023 Assembly Surge", result: "Swing: +12%", tag: "State Election" },
              { title: "Digital Dominance Proj", result: "Engagement: 4x", tag: "Digital Transformation" },
              { title: "Constituency 360", result: "Turnout: +18%", tag: "Ground Mobilization" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group bg-slate-800/50">
                <Badge variant="outline" className="text-primary border-primary/30 mb-6">{item.tag}</Badge>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-3xl font-bold text-primary mb-4">{item.result}</p>
                <p className="text-slate-400 text-sm">Strategic deployment of targeted messaging and booth-level management resulted in unprecedented growth.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Pricing Plans */}
      <section className="py-24 bg-background">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-foreground tracking-tighter">Investment in Victory</h2>
            <p className="text-muted-foreground">Flexible structures designed for various scale requirements.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <Card key={i} className={`p-10 border border-border flex flex-col ${i === 1 ? 'shadow-2xl scale-105 relative z-10 border-primary/20' : 'shadow-sm'}`}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground text-sm">{tier.description}</p>
                </div>
                <div className="mb-8">
                  <p className="text-4xl font-bold text-foreground">{tier.price}</p>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Starting from</p>
                </div>
                <ul className="space-y-4 flex-grow mb-10">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-foreground/80 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className={`w-full rounded-full h-12 font-bold ${i === 1 ? 'bg-primary text-white hover:bg-primary/90' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                  <Link href="/contact">Inquire Now</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground tracking-tighter">Campaign FAQs</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "How do you protect candidate data?", a: "We use enterprise-grade encryption and strict internal NDAs to ensure every piece of campaign intelligence remains 100% confidential." },
              { q: "How soon should we start the strategy?", a: "Ideally, constituency-level research should begin at least 12 months before the scheduled election day." },
              { q: "Do you work with independent candidates?", a: "Yes, we have specialized teams that help independent leaders build the necessary infrastructure to challenge major party candidates." },
              { q: "Can you manage multi-state campaigns?", a: "Absolutely. Our distributed field force and central war room allow us to handle large-scale operations across multiple states simultaneously." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border px-2">
                <AccordionTrigger className="font-bold text-lg text-foreground hover:text-primary text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 11. Final CTA Banner */}
      <section className="py-24 bg-background">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="rounded-3xl bg-slate-900 p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] rotate-12"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter">The Future Belongs to the <br /> <span className="text-primary">Strategic.</span></h2>
              <p className="text-xl text-slate-400">Don't leave your election to chance. Deploy the industry's most advanced political intelligence suite today.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button asChild size="lg" className="h-14 px-12 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-xl shadow-primary/20">
                  <Link href="/contact">
                    Secure Your Victory <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
