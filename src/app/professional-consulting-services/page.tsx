
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Target, 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  Users2, 
  Rocket, 
  Settings, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Lightbulb,
  Building2,
  Cpu,
  RefreshCcw,
  PieChart,
  LineChart,
  ClipboardCheck,
  Search,
  Map,
  Scale,
  Smile,
  Clock,
  LayoutGrid
} from 'lucide-react';
import { ServiceHero } from '@/components/service-hero';
import { SeoFaq } from '@/components/seo-faq';

const consultingServices = [
  { title: "Business Strategy Consulting", desc: "Growth planning, business expansion, and market positioning.", icon: <Target className="h-6 w-6" /> },
  { title: "Digital Transformation Consulting", desc: "Technology adoption and digital modernization strategies.", icon: <Zap className="h-6 w-6" /> },
  { title: "IT Consulting Services", desc: "Infrastructure, software, cybersecurity, and technology advisory.", icon: <Cpu className="h-6 w-6" /> },
  { title: "Process Improvement Consulting", desc: "Workflow optimization and operational efficiency enhancement.", icon: <RefreshCcw className="h-6 w-6" /> },
  { title: "Startup & Business Advisory", desc: "Business planning, MVP strategy, and growth consulting.", icon: <Rocket className="h-6 w-6" /> },
  { title: "ERP & CRM Consulting", desc: "Implementation planning and process automation consulting.", icon: <LayoutGrid className="h-6 w-6" /> },
  { title: "HR & Organizational Consulting", desc: "Workforce planning, HR transformation, and productivity improvement.", icon: <Users2 className="h-6 w-6" /> },
  { title: "Risk & Compliance Consulting", desc: "Governance, compliance, and operational risk management.", icon: <ShieldCheck className="h-6 w-6" /> },
];

const expertiseAreas = [
  "Business Process Optimization", "Technology Consulting", "ERP Strategy", "CRM Implementation",
  "Cloud Transformation", "Digital Operations", "Project Management", "Organizational Development",
  "Business Automation", "Data Analytics", "Change Management", "Growth Strategy"
];

const methodologySteps = [
  { step: "01", title: "Business Assessment", desc: "Evaluating current operations and potential growth opportunities." },
  { step: "02", title: "Research & Analysis", desc: "Deep-dive data collection and market trend benchmarking." },
  { step: "03", title: "Gap Identification", desc: "Pinpointing bottlenecks and areas for strategic improvement." },
  { step: "04", title: "Strategy Development", desc: "Crafting a bespoke roadmap for business success." },
  { step: "05", title: "Implementation Roadmap", desc: "Detailed step-by-step guidance for execution." },
  { step: "06", title: "Monitoring & Optimization", desc: "Continuous performance tuning and strategic adjustments." }
];

const engagementModels = [
  { title: "One-Time Consulting", desc: "Business audits and strategic assessments.", icon: <ClipboardCheck className="h-8 w-8 text-primary" /> },
  { title: "Project-Based Consulting", desc: "Consulting for specific initiatives and implementations.", icon: <Target className="h-8 w-8 text-primary" /> },
  { title: "Ongoing Advisory Services", desc: "Long-term consulting and strategic guidance.", icon: <LineChart className="h-8 w-8 text-primary" /> },
  { title: "Virtual CXO Services", desc: "Technology, operations, and growth leadership support.", icon: <Briefcase className="h-8 w-8 text-primary" /> },
];

const faqs = [
  {
    question: "What professional consulting services do you provide?",
    answer: "ITLC India provides a comprehensive suite of professional consulting services designed to guide businesses through every stage of their digital and operational journey. Our expertise spans business strategy, where we focus on growth and market positioning; digital transformation, ensuring seamless technology adoption; and specialized IT consulting for infrastructure and security. We also offer process improvement to optimize workflows, startup advisory for MVPs, and dedicated consulting for ERP and CRM implementations. Our holistic approach ensures that every aspect of your organization—from HR to risk management—is aligned with your long-term objectives and industry standards."
  },
  {
    question: "How can consulting improve business performance?",
    answer: "Professional consulting improves business performance by bringing an outside, expert perspective to identify inefficiencies and missed opportunities. At ITLC India, our consultants use data-driven methodologies to audit your current operations, pinpointing bottlenecks in workflows and technology gaps. By implementing our strategic recommendations, businesses can achieve higher operational efficiency, reduced overhead costs, and improved resource utilization. Consulting also provides the frameworks necessary for scalable growth, enabling your leadership team to make informed, lower-risk decisions that directly contribute to increased profitability and a stronger competitive edge in your specific market niche."
  },
  {
    question: "Do you provide digital transformation consulting?",
    answer: "Yes, digital transformation is a core pillar of our professional consulting services at ITLC India. We help organizations modernize their legacy systems and adopt cutting-edge digital technologies to remain relevant in today’s fast-paced economy. Our transformation roadmap includes infrastructure assessment, cloud readiness evaluation, and the strategic implementation of AI and automation. We guide your team through the complexities of changing business models, ensuring that technology serves as a catalyst for growth rather than a source of friction. Our goal is to create a future-ready digital ecosystem that enhances user experience and operational agility."
  },
  {
    question: "Can you help with ERP and CRM implementation planning?",
    answer: "Absolutely. ITLC India specializes in the strategic planning and implementation of enterprise systems like ERP and CRM. We understand that these platforms are the backbone of modern business operations. Our consulting process begins with a deep dive into your requirements to ensure the chosen solution perfectly fits your unique business logic. We handle everything from vendor selection and system architecture to change management and user training. By planning meticulously, we minimize the risks of project failure and ensure that your ERP or CRM delivers immediate value, improving data visibility and customer engagement across your entire organization."
  },
  {
    question: "Do you work with startups and SMEs?",
    answer: "Yes, ITLC India is deeply committed to supporting the growth of startups and Small-to-Medium Enterprises (SMEs). We recognize the unique challenges faced by smaller organizations, such as limited resources and the need for rapid scalability. Our startup advisory services focus on building lean MVPs (Minimum Viable Products), refining business plans, and establishing a robust technology foundation. For SMEs, we provide the enterprise-level consulting expertise needed to modernize operations and compete with larger players. We offer flexible engagement models that provide high-value strategic guidance tailored to the budget and growth targets of emerging businesses."
  },
  {
    question: "How long does a consulting engagement last?",
    answer: "The duration of a consulting engagement at ITLC India depends entirely on the scope and complexity of the project. A one-time business audit or strategic assessment might be completed in 2 to 4 weeks. Larger initiatives, such as a full digital transformation roadmap or an enterprise ERP implementation plan, typically last between 3 to 6 months. We also offer long-term ongoing advisory services where our consultants act as virtual CXOs, providing monthly strategic guidance for a year or more. We focus on delivering value at every stage, ensuring that even short-term engagements result in actionable insights and measurable improvements."
  },
  {
    question: "Do you provide implementation support?",
    answer: "Yes, ITLC India distinguishes itself by providing practical, end-to-end implementation support alongside our strategic consulting. We believe that a great strategy is only valuable if it is executed correctly. Our team can either guide your internal developers and project managers through the implementation process or provide our own specialized technical squads to build the solutions we recommend. This ensures that there is no disconnect between the strategic roadmap and the final technical output. We remain involved from the initial assessment through to post-launch optimization, ensuring your project achieves its defined business impact."
  },
  {
    question: "Can consulting help reduce operational costs?",
    answer: "One of the primary goals of ITLC India’s professional consulting is to identify and eliminate unnecessary operational costs. By conducting a thorough business assessment, our consultants can pinpoint redundant processes, wasteful resource allocation, and inefficient technology usage. We recommend automation strategies that reduce manual labor hours and suggest cloud optimizations that lower infrastructure overhead. Over the long term, our strategic guidance helps prevent costly mistakes in technology adoption and business expansion. Most of our clients see their consulting investment pay for itself through the significant operational savings achieved by following our expert recommendations."
  }
];

export default function ProfessionalConsultingServicesPage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero 
        badge="Enterprise Business Resilience"
        title={<>Strategic Consulting for <br /> <span className="text-primary">Growth & Transformation</span></>}
        description="ITLC INDIA provides strategic consulting services that help organizations improve efficiency, accelerate growth, and achieve long-term success through expert guidance."
        primaryCta={{ text: "Book Strategy Session", href: "/contact" }}
        secondaryCta={{ text: "Request Business Review", href: "/contact" }}
        backgroundVideo="/vio/bg.mp4"
        illustration={
          <div className="relative group max-w-lg w-full">
            <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-white border-8 border-slate-50 rounded-[40px] shadow-2xl p-8 overflow-hidden aspect-[4/5] flex flex-col gap-6">
                <div className="flex justify-between items-center border-b pb-4">
                    <div className="w-12 h-12 bg-primary rounded-xl" />
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-100" />
                        <div className="w-3 h-3 rounded-full bg-slate-200" />
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="h-40 bg-slate-50 rounded-2xl border border-slate-100 p-6 flex flex-col justify-center text-center space-y-4">
                        <BarChart3 className="h-12 w-12 text-primary mx-auto" />
                        <div className="w-full h-2 bg-slate-200 rounded" />
                        <div className="w-3/4 h-2 bg-slate-200 rounded mx-auto" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-32 bg-slate-50 rounded-2xl border border-slate-100 p-4">
                            <Lightbulb className="h-6 w-6 text-yellow-500 mb-2" />
                            <div className="w-full h-2 bg-slate-200 rounded" />
                        </div>
                        <div className="h-32 bg-slate-900 rounded-2xl p-4 text-white">
                            <Compass className="h-6 w-6 text-primary mb-2" />
                            <div className="w-1/2 h-2 bg-white/20 rounded" />
                        </div>
                    </div>
                </div>
                <div className="mt-auto flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>Business Roadmap v4.0</span>
                    <span>ITLC Consulting Group</span>
                </div>
            </div>
          </div>
        }
      />

      {/* Section 1: Importance */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">Expert Guidance for <br /> <span className="text-primary">Better Business Decisions</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Modern businesses face complex challenges including digital transformation, operational efficiency, technology adoption, and market competition. Professional consulting helps organizations make informed decisions, reduce risks, and maximize growth opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Better Decisions", value: "Verified" },
                  { label: "Operational Efficiency", value: "High ROI" },
                  { label: "Business Growth", value: "Scalable" },
                  { label: "Increased Profit", value: "Proven" }
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all shadow-sm">
                    <div className="text-2xl font-black text-primary mb-1">{stat.value}</div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-slate-50">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Consulting Team" className="object-cover w-full h-full" data-ai-hint="business meeting" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Our Consulting Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">End-to-end expertise tailored for the modern enterprise.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingServices.map((service, i) => (
              <Card key={i} className="border-none shadow-xl bg-white/60 backdrop-blur-md hover:bg-white transition-all group p-4 rounded-[32px]">
                <CardHeader>
                  <div className="mb-4 p-4 bg-primary/5 rounded-2xl w-fit shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-black tracking-tight leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Expertise Tags */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Areas of Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">Strategic knowledge across every business dimension.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {expertiseAreas.map((item, i) => (
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

      {/* Section 5: Methodology */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Our Methodology</h2>
          </div>
          <div className="relative">
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 hidden lg:block -translate-y-1/2" />
             <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
                {methodologySteps.map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-4">
                        <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-black text-xl shadow-xl shadow-primary/20">{step.step}</div>
                        <h4 className="font-black text-slate-900 text-sm leading-tight">{step.title}</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">{step.desc}</p>
                    </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Section 6: Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Consulting Benefits</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Improved Efficiency", "Better Resource Utilization", "Reduced Operational Costs", "Enhanced Productivity",
              "Stronger Decision Making", "Faster Digital Adoption", "Scalable Growth Framework", "Competitive Advantage"
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center gap-4 text-center p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-sm tracking-tight">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Metrics */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Projects Delivered", val: "200+", icon: <Briefcase className="h-8 w-8 text-primary" /> },
              { label: "Clients Served", val: "100+", icon: <Users2 className="h-8 w-8 text-primary" /> },
              { label: "Client Satisfaction", val: "98%", icon: <Smile className="h-8 w-8 text-primary" /> },
              { label: "Industries Supported", val: "15+", icon: <Building2 className="h-8 w-8 text-primary" /> }
            ].map((stat, i) => (
              <div key={i} className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center">{stat.icon}</div>
                <div>
                  <div className="text-4xl font-black text-primary tracking-tighter">{stat.val}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Engagement Models */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Engagement Models</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementModels.map((model, i) => (
              <Card key={i} className="border-none shadow-xl bg-slate-50/50 hover:bg-white transition-all p-8 rounded-3xl flex flex-col items-center text-center">
                <div className="mb-6">{model.icon}</div>
                <h3 className="text-xl font-bold mb-2">{model.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{model.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Case Studies */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "ERP Strategy", impact: "30% Efficiency Gain", industry: "Manufacturing" },
              { title: "Digital Transformation", impact: "Zero Downtime Migration", industry: "Healthcare" },
              { title: "Startup Advisory", impact: "MVP Launch in 45 Days", industry: "Fintech" }
            ].map((study, i) => (
              <Card key={i} className="border-none shadow-lg rounded-[40px] overflow-hidden bg-white">
                <div className="p-8 bg-slate-900 text-white">
                  <Badge className="bg-primary text-white mb-4">{study.industry}</Badge>
                  <h4 className="text-xl font-bold leading-tight">{study.title}</h4>
                </div>
                <CardContent className="p-8 space-y-6">
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Business Impact</p>
                    <p className="text-lg font-black text-slate-900">{study.impact}</p>
                  </div>
                  <Button asChild variant="link" className="p-0 h-auto text-primary font-bold">
                    <Link href="/portfolio" className="flex items-center gap-2">Read Case Study <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SeoFaq serviceName="Professional Consulting" faqs={faqs} />

      {/* Final CTA */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        <div className="container relative z-10 max-w-screen-xl mx-auto px-6 space-y-10">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Ready To Transform <br /> <span className="text-primary">Your Business?</span></h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">Partner with ITLC INDIA to gain strategic insights, improve performance, and achieve sustainable success through expert consulting.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button asChild size="lg" className="rounded-full px-12 h-16 font-black text-xl shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1">
                    <Link href="/contact">Book Strategy Call</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-12 h-16 border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-black text-xl transition-all hover:-translate-y-1">
                    <Link href="/contact">Request Business Review</Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}

function Phone(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.7 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
    );
}
