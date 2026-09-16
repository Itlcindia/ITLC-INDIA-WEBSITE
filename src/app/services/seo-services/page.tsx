import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Search, 
  BarChart3, 
  TrendingUp, 
  CheckCircle2, 
  Target, 
  ListChecks, 
  Zap, 
  Globe, 
  Sparkles, 
  ShieldCheck, 
  Users2, 
  Building2,
  PieChart,
  LineChart,
  FileSearch,
  Key
} from 'lucide-react';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'SEO Services Company in India | ITLC India',
  description: 'Professional SEO services to improve Google rankings, increase organic traffic, and generate quality leads. Get a free SEO consultation from ITLC India.',
  keywords: 'SEO Services, Search Engine Optimization, ITLC India SEO, SEO Company India, Higher Google Rankings',
  openGraph: {
    title: 'SEO Services Company in India | ITLC India',
    description: 'Rank higher on Google and generate more qualified leads with our data-driven SEO strategies.',
    url: 'https://itlcindia.com/services/seo-services',
    type: 'website',
  },
};

const seoSolutions = [
  { title: "Technical SEO", icon: <ShieldCheck className="h-6 w-6" /> },
  { title: "On-Page SEO", icon: <FileSearch className="h-6 w-6" /> },
  { title: "Off-Page SEO", icon: <Globe className="h-6 w-6" /> },
  { title: "Local SEO", icon: <Target className="h-6 w-6" /> },
  { title: "E-Commerce SEO", icon: <TrendingUp className="h-6 w-6" /> },
  { title: "Enterprise SEO", icon: <Building2 className="h-6 w-6" /> },
  { title: "SEO Content Strategy", icon: <Sparkles className="h-6 w-6" /> },
  { title: "Keyword Research", icon: <Key className="h-6 w-6" /> },
  { title: "Competitor Analysis", icon: <BarChart3 className="h-6 w-6" /> },
  { title: "Link Building", icon: <Zap className="h-6 w-6" /> },
];

const seoProcess = [
  { step: "01", title: "SEO Audit & Analysis", desc: "Comprehensive technical and content audit of your current digital presence.", icon: <FileSearch /> },
  { step: "02", title: "Keyword Research", desc: "Identifying high-intent search terms that drive valuable traffic and conversions.", icon: <Key /> },
  { step: "03", title: "On-Page Optimization", desc: "Refining meta tags, headers, and structure for maximum search visibility.", icon: <ListChecks /> },
  { step: "04", title: "Technical SEO Improvements", desc: "Enhancing site speed, mobile-friendliness, and crawlability architecture.", icon: <Zap /> },
  { step: "05", title: "Content Optimization", desc: "Creating and refining high-quality content that satisfies user intent.", icon: <Sparkles /> },
  { step: "06", title: "Authority Building & Backlinks", desc: "Developing a robust backlink profile through ethical white-hat outreach.", icon: <Globe /> },
  { step: "07", title: "Performance Monitoring", desc: "Tracking keyword positions and organic growth through advanced tools.", icon: <LineChart /> },
  { step: "08", title: "Monthly Reporting", desc: "Detailed insights and growth metrics delivered transparently every month.", icon: <PieChart /> }
];

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "SEO typically starts showing measurable improvements within 3–6 months depending on competition, current website condition, and industry authority."
  },
  {
    q: "Do you provide local SEO services?",
    a: "Yes, we optimize Google Business Profiles, local citations, and location-specific keywords to ensure you dominate your local market."
  },
  {
    q: "Can SEO help generate more leads?",
    a: "Absolutely. Effective SEO attracts targeted visitors who are actively searching for your products or services, resulting in higher quality inquiries."
  },
  {
    q: "Do you provide monthly SEO reports?",
    a: "Yes, we provide detailed monthly reports covering rankings, traffic, conversions, and a summary of all optimization activities performed."
  },
  {
    q: "Is SEO better than paid advertising?",
    a: "SEO provides sustainable, long-term organic visibility and lower cost-per-lead over time, while paid ads deliver immediate traffic. A balanced combination often yields the best ROI."
  }
];

export default function SeoServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SEO Services",
            "serviceType": "Search Engine Optimization",
            "provider": {
              "@type": "Organization",
              "name": "ITLC India Pvt Ltd"
            },
            "description": "Professional SEO services to improve Google rankings, increase organic traffic, and generate quality leads."
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <PolygonHeroBackground />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Comprehensive SEO Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Strategically engineered optimization to drive sustainable business growth.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {seoSolutions.map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all text-center space-y-4">
                <div className="mx-auto p-3 bg-white rounded-xl w-fit shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm tracking-tight">{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-5 gap-8 text-center bg-slate-900 rounded-[40px] p-12 text-white">
            {[
              { label: "Higher Google Rankings", icon: <CheckCircle2 className="h-5 w-5 text-primary" /> },
              { label: "Increased Organic Traffic", icon: <CheckCircle2 className="h-5 w-5 text-primary" /> },
              { label: "Better Brand Visibility", icon: <CheckCircle2 className="h-5 w-5 text-primary" /> },
              { label: "More Leads & Sales", icon: <CheckCircle2 className="h-5 w-5 text-primary" /> },
              { label: "Long-Term Growth", icon: <CheckCircle2 className="h-5 w-5 text-primary" /> }
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="p-3 bg-white/10 rounded-full">{benefit.icon}</div>
                <span className="font-bold text-sm uppercase tracking-wider">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Proven SEO Methodology</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A transparent, data-first approach to climbing the search results.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoProcess.map((step, i) => (
              <Card key={i} className="border-none shadow-lg rounded-3xl bg-white hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        {step.icon}
                    </div>
                    <span className="text-4xl font-black text-slate-100">{step.step}</span>
                  </div>
                  <CardTitle className="text-xl font-bold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Businesses Trust ITLC India</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Experienced SEO Specialists",
                  "Transparent Reporting",
                  "White-Hat SEO Techniques",
                  "Local & National Expertise",
                  "Industry-Specific Strategies",
                  "Dedicated Account Manager",
                  "Performance-Focused Approach",
                  "Continuous Optimization"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-bold text-slate-800 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-slate-900 rounded-3xl text-white space-y-6">
                <h4 className="font-bold text-lg border-b border-white/10 pb-4">Industries We Dominantly Serve:</h4>
                <div className="flex flex-wrap gap-3">
                  {['Healthcare', 'Education', 'Real Estate', 'Manufacturing', 'Retail', 'Travel', 'Finance', 'IT Services'].map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold border border-white/5">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full" />
                <div className="relative bg-slate-50 rounded-[40px] border border-slate-100 p-8 shadow-2xl">
                    <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                            <span className="font-bold text-slate-900">Traffic Growth</span>
                            <span className="text-green-600 font-black">+240%</span>
                        </div>
                        <div className="h-48 flex items-end gap-2">
                            {[40, 25, 60, 45, 80, 55, 95].map((h, i) => (
                                <div key={i} className="flex-1 bg-primary/20 rounded-t-lg relative group transition-all hover:bg-primary">
                                    <div style={{ height: `${h}%` }} className="bg-primary rounded-t-lg w-full" />
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-slate-400 text-center uppercase tracking-widest font-bold">SEO Performance Metrics (Active Clients)</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-md mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">SEO Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-2xl border border-slate-200 mb-4 overflow-hidden">
                <AccordionTrigger className="font-bold text-left hover:no-underline py-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-slate-950 text-white text-center">
        <div className="container max-w-screen-xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to Grow Your Business?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">Partner with ITLC India to improve search rankings, increase website traffic, and generate more business opportunities.</p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Button asChild size="lg" className="rounded-full px-12 h-14 font-bold shadow-xl shadow-primary/20">
              <Link href="/contact">Book Free SEO Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-12 h-14 font-bold border-white/20 hover:bg-white/10">
              <Link href="/contact">Request SEO Audit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
