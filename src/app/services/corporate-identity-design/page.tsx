import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  PenTool, 
  BookOpen, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Briefcase, 
  Palette, 
  FileText, 
  Contact, 
  Share2, 
  Package, 
  Layers, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight,
  Search,
  Presentation,
  Check
} from 'lucide-react';
import { ServiceHero } from '@/components/service-hero';
import { SeoFaq } from '@/components/seo-faq';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Corporate Identity Design Services Company | Branding & Logo Design | ITLC INDIA',
  description: 'ITLC INDIA offers professional corporate identity design services including logo design, brand guidelines, company profiles, stationery, marketing collateral, and complete branding solutions.',
  keywords: 'corporate identity design, branding services company, logo design services, brand identity design, company profile design, business branding solutions, corporate branding agency, professional logo design company',
};

const stats = [
  { label: "Brand Recognition Increase", value: "75%" },
  { label: "Stronger Customer Trust", value: "Verified" },
  { label: "Consistent Brand Presence", value: "Global" },
  { label: "Higher Business Credibility", value: "Premium" }
];

const brandingServices = [
  { title: "Logo Design", desc: "Professional and memorable logo creation.", icon: <PenTool className="h-6 w-6" /> },
  { title: "Brand Identity Design", desc: "Complete visual identity systems.", icon: <Palette className="h-6 w-6" /> },
  { title: "Brand Guidelines", desc: "Comprehensive brand usage manuals.", icon: <BookOpen className="h-6 w-6" /> },
  { title: "Business Stationery", desc: "Cards, letterheads, and corporate documents.", icon: <Contact className="h-6 w-6" /> },
  { title: "Company Profile Design", desc: "Professional presentation materials.", icon: <FileText className="h-6 w-6" /> },
  { title: "Marketing Collateral", desc: "Brochures, flyers, and promotional assets.", icon: <Layers className="h-6 w-6" /> },
  { title: "Packaging Design", desc: "Product packaging and label solutions.", icon: <Package className="h-6 w-6" /> },
  { title: "Digital Brand Assets", desc: "Social kits, banners, and digital materials.", icon: <Share2 className="h-6 w-6" /> },
];

const deliverables = [
  "Logo Variations", "Brand Color Palette", "Typography System", "Brand Guidelines PDF",
  "Business Card Design", "Letterhead Design", "Envelope Design", "Email Signature Design",
  "Social Media Kit", "Presentation Templates", "Company Profile Design", "Marketing Materials"
];

const processSteps = [
  { step: "01", title: "Brand Discovery & Research", desc: "Understanding your vision and values." },
  { step: "02", title: "Market & Competitor Analysis", desc: "Positioning your brand for success." },
  { step: "03", title: "Concept Development", desc: "Crafting multiple creative directions." },
  { step: "04", title: "Logo & Identity Design", desc: "Refining the visual soul of your brand." },
  { step: "05", title: "Brand System Creation", desc: "Building consistent collateral assets." },
  { step: "06", title: "Guidelines & Delivery", desc: "Final files and usage rulebook." }
];

const faqs = [
  {
    question: "What is corporate identity design?",
    answer: "Corporate identity design is the visual representation of a company's values and personality. At ITLC India, this involves creating a cohesive system that includes logos, typography, color palettes, and brand voice. It is the comprehensive 'look and feel' that ensures your business is instantly recognizable across all physical and digital touchpoints, projecting a professional image that builds instant credibility with your target audience and stakeholders."
  },
  {
    question: "Why is branding important for businesses?",
    answer: "Branding is critical because it is the first point of contact between your business and potential customers. Professional branding by ITLC India establishes a unique market position, builds emotional connections, and differentiates you from competitors. A strong identity signals reliability and quality, which directly influences purchasing decisions. It transforms a generic business into a reputable brand, facilitating faster customer acquisition and long-term retention through a consistent and trustworthy visual narrative."
  },
  {
    question: "What is included in a corporate identity package?",
    answer: "A standard corporate identity package from ITLC India is a complete visual ecosystem. It typically includes a primary logo with several variations, a curated color palette, typography selection, business stationery (business cards, letterheads, envelopes), email signatures, and basic social media templates. We ensure that every element is designed to work harmoniously, providing your business with all the necessary assets to present a unified and professional front to the world from day one."
  },
  {
    question: "Do you provide brand guidelines?",
    answer: "Yes, we provide comprehensive Brand Guideline manuals, often referred to as a 'Brand Bible'. This document outlines the specific rules for using your brand assets, including logo spacing, minimum sizes, incorrect usage, color codes (CMYK, RGB, HEX), and font pairings. These guidelines are essential for maintaining brand consistency as your company grows, ensuring that any future designers, printers, or marketers stay true to your original visual identity and brand values."
  },
  {
    question: "Can you redesign an existing brand identity?",
    answer: "Absolutely. ITLC India specializes in brand modernization and rebranding services. We can perform a strategic 'facelift' that preserves your brand's existing equity and recognition while updating the aesthetic to meet modern design standards. This process often involves simplifying the logo, refreshing the color palette, and refining the typography to ensure your brand remains relevant and competitive in an increasingly digital and design-conscious marketplace."
  },
  {
    question: "Do you create company profiles and brochures?",
    answer: "Yes, we offer expert design services for company profiles, brochures, and digital presentations. We understand that these documents are vital sales tools. Our creative team focuses on storytelling and information architecture, ensuring that your corporate brochures and profiles are not only visually stunning but also strategically organized to highlight your strengths, services, and achievements, effectively converting readers into prospective clients and partners."
  },
  {
    question: "Are print-ready files included?",
    answer: "Yes, all our corporate identity deliverables include high-resolution, print-ready files. We provide assets in various industry-standard formats such as vector (AI, EPS, SVG) for unlimited scalability and raster (PNG, JPG) for digital use. Our print-ready PDFs include proper bleed, margin settings, and color profiles, ensuring that your business cards, letterheads, and brochures look exactly as intended when they come off the professional printing press."
  },
  {
    question: "Do you provide social media branding assets?",
    answer: "Yes, digital brand assets are a core part of our corporate identity services. We provide a social media branding kit that includes optimized profile pictures, cover banners for platforms like LinkedIn, Facebook, and Twitter, and a set of custom post templates. This ensures your brand looks professional and consistent across all digital platforms, helping you maintain a high-quality online presence that aligns perfectly with your offline corporate branding."
  }
];

export default function CorporateIdentityDesignPage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero 
        badge="Enterprise Brand Strategy"
        title={<>Build A Powerful Brand Identity <br /> <span className="text-primary">That Lasts A Lifetime</span></>}
        description="ITLC INDIA helps businesses create professional, consistent, and memorable corporate identities that strengthen market presence and customer trust through strategic visual systems."
        primaryCta={{ text: "Get Branding Consultation", href: "/contact" }}
        secondaryCta={{ text: "Request Brand Proposal", href: "/contact" }}
        backgroundVideo="/vio/bg.mp4"
        illustration={
          <div className="relative group max-w-lg w-full">
            <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-white border-8 border-slate-50 rounded-[40px] shadow-2xl p-8 overflow-hidden aspect-[4/5] flex flex-col gap-6">
                <div className="flex justify-between items-center border-b pb-4">
                    <div className="w-12 h-12 bg-primary rounded-xl" />
                    <div className="flex gap-2">
                        <div className="w-4 h-4 rounded-full bg-slate-100" />
                        <div className="w-4 h-4 rounded-full bg-slate-200" />
                        <div className="w-4 h-4 rounded-full bg-slate-300" />
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="h-40 bg-slate-50 rounded-2xl border border-slate-100 p-4 flex flex-col justify-center text-center space-y-2">
                        <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                            <Sparkles className="h-10 w-10 text-primary" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-32 bg-slate-50 rounded-2xl border border-slate-100 p-4">
                            <div className="w-full h-2 bg-slate-200 rounded mb-2" />
                            <div className="w-3/4 h-2 bg-slate-200 rounded" />
                        </div>
                        <div className="h-32 bg-slate-900 rounded-2xl p-4 text-white">
                            <div className="w-8 h-8 bg-primary rounded-lg mb-2" />
                            <div className="w-1/2 h-2 bg-white/20 rounded" />
                        </div>
                    </div>
                </div>
                <div className="mt-auto flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>Corporate Identity v2.0</span>
                    <span>ITLC India Studio</span>
                </div>
            </div>
          </div>
        }
      />

      {/* Section 1: Why it matters */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">Your Brand Is More <br /> <span className="text-primary">Than Just A Logo</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A strong corporate identity creates trust, recognition, and credibility. It communicates your company's values, professionalism, and unique position in the market. Consistent branding helps businesses stand out, attract customers, and build long-term loyalty in a competitive landscape.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all shadow-sm">
                    <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-slate-50">
              <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop" alt="Branding Mockup" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Service Cards */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Corporate Identity Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">End-to-end creative expertise to build a cohesive and powerful brand system.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandingServices.map((service, i) => (
              <Card key={i} className="border-none shadow-xl bg-white/60 backdrop-blur-md hover:bg-white transition-all group p-4 rounded-[32px]">
                <CardHeader>
                  <div className="mb-4 p-4 bg-primary/5 rounded-2xl w-fit shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-black tracking-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Deliverables Grid */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Identity Deliverables</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">Every professional asset you need to maintain a unified brand image.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {deliverables.map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="p-2 bg-white/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="font-bold text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Process */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Our Branding Process</h2>
          </div>
          <div className="relative">
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 hidden lg:block -translate-y-1/2" />
             <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
                {processSteps.map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-4">
                        <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-black text-xl shadow-xl shadow-primary/20">{step.step}</div>
                        <h4 className="font-black text-slate-900 text-sm leading-tight">{step.title}</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{step.desc}</p>
                    </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose ITLC */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Why Choose ITLC INDIA?</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    "Strategic Branding Approach",
                    "Experienced Creative Team",
                    "Modern Design Standards",
                    "Consistent Brand Systems",
                    "Print & Digital Expertise",
                    "Fast Turnaround Time",
                    "Unlimited Creativity",
                    "Long-Term Brand Support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 p-1 bg-primary/10 rounded-full text-primary">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <span className="font-bold text-slate-800 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                  <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full" />
                  <div className="relative bg-slate-900 rounded-[50px] p-12 text-white shadow-2xl text-center space-y-8">
                     <div className="grid grid-cols-2 gap-8">
                        {[
                            { val: "500+", label: "Assets Designed" },
                            { val: "100+", label: "Businesses Served" },
                            { val: "98%", label: "Client Satisfaction" },
                            { val: "10+", label: "Industries Covered" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-1">
                                <div className="text-4xl font-black text-primary tracking-tighter">{stat.val}</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                     </div>
                     <div className="pt-8 border-t border-white/10">
                        <p className="text-slate-400 text-sm font-medium mb-8">Trusted by global enterprises for iconic brand transformations.</p>
                        <Button asChild size="lg" className="rounded-full px-10 h-14 font-black text-lg">
                          <Link href="/contact">Start Your Project</Link>
                        </Button>
                     </div>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <SeoFaq serviceName="Corporate Identity Design" faqs={faqs} />

      {/* Final CTA */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        <div className="container relative z-10 max-w-screen-xl mx-auto px-6 space-y-10">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Ready To Build A <br /> <span className="text-primary">Strong Corporate Brand?</span></h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">Partner with ITLC INDIA to create a professional corporate identity that strengthens your brand presence and builds trust.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button asChild size="lg" className="rounded-full px-12 h-16 font-black text-xl shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1">
                    <Link href="/contact">Start Branding Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-12 h-16 border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-black text-xl transition-all hover:-translate-y-1">
                    <Link href="/contact">Request Free Consultation</Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
