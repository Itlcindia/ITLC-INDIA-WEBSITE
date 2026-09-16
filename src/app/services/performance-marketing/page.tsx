'use client';

import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  Zap, 
  BarChart3, 
  Search, 
  Globe, 
  MousePointer2, 
  LineChart, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  Users2,
  Smartphone,
  Activity,
  MessageSquare,
} from 'lucide-react';
import { ServiceHero } from '@/components/service-hero';
import { SeoFaq } from '@/components/seo-faq';

const performanceServices = [
  { title: "Google Ads Management", desc: "Search, Display, Shopping, and Performance Max campaigns for high-intent traffic.", icon: <Search className="h-6 w-6" /> },
  { title: "Meta Ads Management", desc: "Facebook and Instagram lead generation campaigns targeting your ideal demographics.", icon: <Smartphone className="h-6 w-6" /> },
  { title: "LinkedIn Advertising", desc: "Premium B2B lead generation and professional audience targeting for high-value services.", icon: <Users2 className="h-6 w-6" /> },
  { title: "YouTube Advertising", desc: "Video marketing campaigns designed for brand awareness and high-conversion retargeting.", icon: <Zap className="h-6 w-6" /> },
  { title: "Remarketing Campaigns", desc: "Reconnect with website visitors and drive them back through the conversion funnel.", icon: <Activity className="h-6 w-6" /> },
  { title: "Conversion Rate Optimization (CRO)", desc: "Scientific optimization of landing pages and sales funnels to maximize every click.", icon: <MousePointer2 className="h-6 w-6" /> },
  { title: "Lead Generation Campaigns", desc: "Consistent and scalable acquisition of high-quality business leads and inquiries.", icon: <Target className="h-6 w-6" /> },
  { title: "Marketing Analytics & Reporting", desc: "Deep-dive transparent reporting with advanced tracking via GA4 and Looker Studio.", icon: <BarChart3 className="h-6 w-6" /> },
];

const industries = [
  "Solar Energy", "Real Estate", "Healthcare", "Education", "Manufacturing", "E-Commerce", "SaaS & Tech", "Finance", "Hospitality", "Professional Services"
];

const processSteps = [
  { step: "01", title: "Business Analysis", desc: "Deep audit of competitors, market trends, and current performance gaps." },
  { step: "02", title: "Audience Research", desc: "Defining precise customer personas and behavioral targeting segments." },
  { step: "03", title: "Strategy Planning", desc: "Crafting a multi-channel funnel strategy with clear ROI objectives." },
  { step: "04", title: "Creative & LP Design", desc: "Building conversion-focused landing pages and high-impact ad creatives." },
  { step: "05", title: "Launch & Monitoring", desc: "Live campaign deployment with 24/7 technical surveillance." },
  { step: "06", title: "Optimize & Scale", desc: "Iterative testing and budget scaling based on real-time ROAS data." }
];

const kpiCards = [
  { label: "Cost Per Lead", val: "CPL", desc: "Optimizing for lowest qualified lead cost." },
  { label: "Return On Ad Spend", val: "ROAS", desc: "Maximizing every rupee spent on ads." },
  { label: "Conversion Rate", val: "CR", desc: "Improving percentage of visitors who convert." },
  { label: "Cost Per Acquisition", val: "CPA", desc: "Lowering total cost to acquire a customer." }
];

const tools = [
  "Google Analytics 4", "Google Tag Manager", "Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "Microsoft Clarity", "Hotjar", "Looker Studio", "CRM Integration", "Call Tracking"
];

const caseStudies = [
  { 
    industry: "Solar Energy", 
    challenge: "High CPL and poor lead quality from generic social ads.", 
    strategy: "Implemented search-intent Google Ads with strict geographic targeting.", 
    results: "45% reduction in CPL and 3x increase in installation closures." 
  },
  { 
    industry: "Real Estate", 
    challenge: "Low conversion on high-value luxury apartment projects.", 
    strategy: "Deployed lookalike Meta audiences with interactive 3D tour landing pages.", 
    results: "Generated 400+ qualified site visits within 60 days." 
  },
  { 
    industry: "SaaS Tech", 
    challenge: "Global competition making US/EU customer acquisition expensive.", 
    strategy: "Targeted LinkedIn B2B campaigns focused on decision-makers with case studies.", 
    results: "Achieved a 4.2x ROAS and secured 12 enterprise-level contracts." 
  }
];

const faqs = [
  {
    question: "What is performance marketing?",
    answer: "Performance marketing is a data-driven advertising strategy where businesses only pay when specific actions—such as a click, lead, or sale—are successfully completed. At ITLC India, we focus on measurable business outcomes rather than just impressions or reach. This ensures every marketing rupee is tracked and optimized for maximum Return on Ad Spend (ROAS). By combining advanced analytics with strategic multi-channel deployment, we provide a transparent and scalable way for businesses to grow their revenue with predictable costs."
  },
  {
    question: "How much advertising budget is required to see results?",
    answer: "The ideal advertising budget depends on your specific industry, target audience, and growth objectives. At ITLC India, we recommend starting with a pilot budget that allows for statistically significant testing across different platforms. Once we identify the highest-performing audiences and creatives, we scale the budget strategically. Our goal is to ensure that your customer acquisition cost (CAC) remains profitable, allowing you to reinvest and scale your operations without unnecessary financial risk."
  },
  {
    question: "Which platform is best for lead generation?",
    answer: "The choice of platform depends on user intent. For high-intent leads (people actively searching for solutions), Google Ads is typically superior. For demographic-based targeting or building desire for a new product, Meta (Facebook & Instagram) is highly effective. B2B enterprises often see the best results from LinkedIn. ITLC India performs a deep competitive analysis to recommend the optimal mix of platforms that will deliver the highest quality leads at the lowest possible cost for your specific business niche."
  },
  {
    question: "How long does it take to see measurable results from performance marketing?",
    answer: "One of the primary benefits of performance marketing is its speed. Unlike SEO, which takes months, paid campaigns can drive traffic and leads within 24-48 hours of launch. However, the first 30 days are typically a 'learning phase' where our AI models and experts optimize for the best-performing segments. Most clients see stabilized and highly profitable ROI after the first 4-8 weeks of consistent data-driven adjustments and creative testing conducted by our dedicated management team."
  },
  {
    question: "Do you manage both Google Ads and Facebook Ads simultaneously?",
    answer: "Yes, ITLC India specialized in omnichannel performance marketing. Managing multiple platforms allows us to implement full-funnel strategies. For example, we might capture interest on Google Search and then retarget those same users with engaging video content on Facebook or YouTube to close the sale. This integrated approach ensures your brand stays top-of-mind across the entire digital ecosystem, leading to significantly higher overall conversion rates compared to single-channel advertising."
  },
  {
    question: "Do you provide landing page optimization as part of the service?",
    answer: "Absolutely. A great ad is wasted on a poor landing page. We provide comprehensive Conversion Rate Optimization (CRO) as a core part of our performance marketing service. Our team reviews your current pages or builds custom, high-converting landing pages from scratch. We focus on page speed, clear value propositions, trust signals, and persuasive calls-to-action to ensure that the traffic we generate actually converts into revenue for your business."
  },
  {
    question: "Can you track phone calls, form leads, and sales conversions accurately?",
    answer: "Yes, data integrity is our top priority. We implement advanced tracking systems using Google Tag Manager (GTM) and Server-Side tracking to capture every conversion point. This includes tracking web form submissions, click-to-call buttons, WhatsApp inquiries, and even offline sales data. By mapping these conversions back to specific ad campaigns, we can see exactly which keywords or creatives are driving the most value, allowing us to optimize for profit rather than just traffic."
  },
  {
    question: "Do you provide transparent monthly reports and analysis?",
    answer: "Transparency is a core value at ITLC India. Every client receives a custom real-time dashboard powered by Looker Studio, providing 24/7 access to your campaign performance. Additionally, we provide detailed monthly reports that analyze key metrics like ROAS, CPL, and CPA. We don't just share numbers; we provide strategic analysis and recommendations for the upcoming month, ensuring that you are always aware of how your marketing budget is contributing to your business growth."
  }
];

export default function PerformanceMarketingPage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero 
        badge="ROI-Driven Digital Growth"
        title={<>Performance Marketing That <br /> <span className="text-primary">Scales Your Revenue</span></>}
        description="ITLC INDIA helps businesses generate qualified leads, increase sales, and maximize ROI through data-driven advertising across Google, Meta, LinkedIn, and YouTube."
        primaryCta={{ text: "Get Free Marketing Audit", href: "/contact" }}
        secondaryCta={{ text: "Request Strategy", href: "/contact" }}
        backgroundVideo="/vio/bg.mp4"
        illustration={
          <div className="relative group max-w-lg w-full">
            <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-slate-900 border-8 border-slate-800 rounded-[40px] shadow-2xl p-8 overflow-hidden aspect-[4/3] flex flex-col gap-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="h-4 bg-white/10 rounded w-24" />
                </div>
                <div className="space-y-6">
                    <div className="flex justify-between items-end">
                        <div className="space-y-2">
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ad Spend ROI</div>
                            <div className="text-3xl font-black text-primary">4.8× ROAS</div>
                        </div>
                        <div className="flex items-end gap-1 h-12">
                            {[20, 40, 30, 60, 50, 80, 70].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className="w-2 bg-primary/30 rounded-t-sm" />
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <div className="text-[8px] font-bold text-slate-400 uppercase mb-1">Leads Generated</div>
                            <div className="text-xl font-bold text-white">1,240</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <div className="text-[8px] font-bold text-slate-400 uppercase mb-1">Cost Per Lead</div>
                            <div className="text-xl font-bold text-primary">₹145</div>
                        </div>
                    </div>
                    <div className="h-20 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center">
                        <LineChart className="h-10 w-10 text-primary opacity-50" />
                    </div>
                </div>
            </div>
          </div>
        }
      />

      {/* Trust Badges */}
      <div className="bg-slate-50 py-10 border-b border-slate-100">
        <div className="container max-w-screen-xl mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {["ROI Focused", "Lead Gen Experts", "Conversion Optimized", "Google & Meta Certified", "Analytics Driven"].map(badge => (
                    <div key={badge} className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{badge}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Section 1: Result Focus */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
                        <LineChart className="h-4 w-4" /> <span>Measurable Growth</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-slate-900">
                        Marketing That Focuses On <br /> <span className="text-primary">Results, Not Just Reach</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Performance marketing is a data-driven approach where every campaign is optimized for measurable business outcomes such as leads, sales, and return on ad spend. We ensure every marketing rupee is tracked and optimized for maximum profitability.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        {[
                            { title: "Higher", desc: "Conversion Rates" },
                            { title: "Precise", desc: "ROI Tracking" },
                            { title: "Real-Time", desc: "Analytics" },
                            { title: "Scalable", desc: "Revenue Growth" }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all shadow-sm group">
                                <div className="text-2xl font-black text-primary mb-1 group-hover:scale-105 transition-transform">{stat.title}</div>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full" />
                    <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                        <img 
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                            alt="Data Analytics Dashboard" 
                            className="object-cover w-full h-full"
                            data-ai-hint="marketing analytics"
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Performance Marketing Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">Strategic advertising across all high-intent digital channels.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceServices.map((service, i) => (
              <Card key={i} className="border-none shadow-xl bg-white/60 backdrop-blur-md hover:bg-white transition-all group p-4 rounded-[32px]">
                <CardHeader>
                  <div className="mb-4 p-4 bg-primary/5 rounded-2xl w-fit shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-black tracking-tight text-slate-900 leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Badges */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
            <div className="text-center mb-12">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Platforms We Master</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {["Google Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads", "YouTube Ads", "Search Ads", "Display Network", "Performance Max"].map(p => (
                    <span key={p} className="px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 hover:border-primary hover:text-primary transition-all cursor-default">{p}</span>
                ))}
            </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Metrics That Matter</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">We track and optimize for the KPIs that actually drive business value.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {kpiCards.map((feat, i) => (
              <div key={i} className="flex flex-col items-center gap-4 text-center group">
                <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl font-black text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {feat.val}
                </div>
                <div className="space-y-1">
                    <h4 className="font-bold text-lg">{feat.label}</h4>
                    <p className="text-xs text-slate-500">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Our Strategic Roadmap</h2>
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

      {/* Case Studies */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Real Results For Real Businesses</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {caseStudies.map((study, i) => (
                    <Card key={i} className="border-none shadow-lg rounded-[40px] overflow-hidden bg-white">
                        <div className="p-8 bg-slate-900 text-white">
                            <Badge className="bg-primary text-white mb-4">{study.industry}</Badge>
                            <h4 className="text-xl font-bold leading-tight">{study.industry} Growth Campaign</h4>
                        </div>
                        <CardContent className="p-8 space-y-6">
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Challenge</p>
                                <p className="text-sm text-slate-700 font-medium">{study.challenge}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Strategy</p>
                                <p className="text-sm text-slate-700 font-medium">{study.strategy}</p>
                            </div>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Results Achieved</p>
                                <p className="text-lg font-black text-slate-900">{study.results}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">The Performance Tech Stack</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map(tool => (
              <span key={tool} className="px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs font-black text-slate-700">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ITLC */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Why Choose ITLC INDIA?</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    "ROI Driven Methodology",
                    "Certified Ad Specialists",
                    "Data-Driven Decisions",
                    "Advanced Tracking Setup",
                    "Conversion Focused Strategy",
                    "Transparent Reporting",
                    "Industry Specific Context",
                    "Continuous Optimization"
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
                            { val: "1000+", label: "Campaigns Managed" },
                            { val: "500+", label: "Businesses Supported" },
                            { val: "98%", label: "Client Satisfaction" },
                            { val: "10M+", label: "Ad Impressions" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-1">
                                <div className="text-4xl font-black text-primary tracking-tighter">{stat.val}</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{stat.label}</div>
                            </div>
                        ))}
                     </div>
                     <div className="pt-8 border-t border-white/10">
                        <p className="text-slate-400 text-sm font-medium mb-8">Trusted by global enterprises for high-performance lead generation.</p>
                        <Button asChild size="lg" className="rounded-full px-10 h-14 font-black text-lg shadow-xl shadow-primary/20">
                          <Link href="/contact">Request Free Audit</Link>
                        </Button>
                     </div>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* SEO FAQs */}
      <SeoFaq serviceName="Performance Marketing" faqs={faqs} />

      {/* Final CTA */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        <div className="container relative z-10 max-w-screen-xl mx-auto px-6 space-y-10">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Ready To Scale Your <br /> <span className="text-primary">Business Growth?</span></h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">Partner with ITLC INDIA to generate qualified leads, maximize ROI, and accelerate business growth through strategic performance marketing campaigns.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button asChild size="lg" className="rounded-full px-12 h-16 font-black text-xl shadow-2xl shadow-primary/20">
                    <Link href="/contact">Start Growth Campaign</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-12 h-16 border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-black text-xl">
                    <Link href="/contact">Schedule Free Consultation</Link>
                </Button>
            </div>

            <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto border-t border-white/10">
                <div className="flex items-center justify-center gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl"><Smartphone className="h-6 w-6 text-primary" /></div>
                    <div className="text-left"><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Call Us</p><p className="font-bold">+91 9532341000</p></div>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl"><MessageSquare className="h-6 w-6 text-primary" /></div>
                    <div className="text-left"><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email Us</p><p className="font-bold">info@itlcindia.com</p></div>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl"><Globe className="h-6 w-6 text-primary" /></div>
                    <div className="text-left"><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Website</p><p className="font-bold">www.itlcindia.com</p></div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
