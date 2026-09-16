
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Layers, 
  CreditCard, 
  ShieldCheck, 
  TrendingUp, 
  Rocket, 
  Zap, 
  Settings, 
  RefreshCw, 
  MessageSquare, 
  Users, 
  Code2, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Database,
  LayoutGrid,
  Bot,
  Laptop,
  Smartphone,
  ChevronRight,
  Globe,
  PieChart,
  Lock,
  Headset,
  Box,
  Cpu
} from 'lucide-react';
import { ServiceHero } from '@/components/service-hero';
import { SeoFaq } from '@/components/seo-faq';

const saasServices = [
  {
    title: "SaaS Product Consulting",
    description: "Expert business analysis, feature roadmapping, and product strategy to align your technical vision with market needs.",
    icon: <MessageSquare className="h-8 w-8 text-primary" />
  },
  {
    title: "SaaS MVP Development",
    description: "Rapidly build and launch a Minimum Viable Product to validate your business idea and secure early user feedback.",
    icon: <Rocket className="h-8 w-8 text-primary" />
  },
  {
    title: "Multi-Tenant SaaS Platforms",
    description: "Design and develop high-performance architectures that serve thousands of customers securely on a single code base.",
    icon: <Layers className="h-8 w-8 text-primary" />
  },
  {
    title: "SaaS Modernization",
    description: "Transform legacy on-premise software into modern, cloud-native SaaS platforms with improved accessibility and speed.",
    icon: <RefreshCw className="h-8 w-8 text-primary" />
  },
  {
    title: "Subscription & Billing Systems",
    description: "Integrated recurring billing solutions using Stripe, Razorpay, and PayPal for automated revenue management.",
    icon: <CreditCard className="h-8 w-8 text-primary" />
  },
  {
    title: "SaaS Maintenance & Scaling",
    description: "Ongoing optimization, proactive monitoring, and automated cloud scaling to ensure your product grows with your users.",
    icon: <Settings className="h-8 w-8 text-primary" />
  }
];

const saasSolutions = [
  "CRM Software", "ERP Platforms", "HRMS Solutions", "Accounting Software",
  "School Management Systems", "Healthcare Platforms", "Inventory Management", "Real Estate CRM",
  "Project Management Tools", "Help Desk Systems", "E-Commerce SaaS", "AI SaaS Platforms"
];

const coreFeatures = [
  { title: "Multi-Tenant Architecture", icon: <Layers className="h-5 w-5" /> },
  { title: "Subscription Management", icon: <CreditCard className="h-5 w-5" /> },
  { title: "Role-Based Access Control", icon: <Lock className="h-5 w-5" /> },
  { title: "Analytics Dashboard", icon: <BarChart3 className="h-5 w-5" /> },
  { title: "API Integrations", icon: <Box className="h-5 w-5" /> },
  { title: "User Management", icon: <Users className="h-5 w-5" /> },
  { title: "Cloud Storage", icon: <Cloud className="h-5 w-5" /> },
  { title: "Automated Backups", icon: <RefreshCw className="h-5 w-5" /> },
  { title: "Notifications System", icon: <Zap className="h-5 w-5" /> },
  { title: "Security & Compliance", icon: <ShieldCheck className="h-5 w-5" /> },
  { title: "Audit Logs", icon: <FileText className="h-5 w-5" /> },
  { title: "Mobile Responsive Access", icon: <Smartphone className="h-5 w-5" /> }
];

function FileText(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
    </svg>
  );
}

const techStack = [
  { category: "Frontend", items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "NestJS", "PHP Laravel"] },
  { category: "Database", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { category: "Cloud", items: ["AWS", "Google Cloud", "Azure", "DigitalOcean"] },
  { category: "Payments", items: ["Razorpay", "Stripe", "PayPal"] }
];

const faqs = [
  {
    question: "What is SaaS product development?",
    answer: "SaaS (Software as a Service) development is the process of building cloud-based software applications that are delivered to users over the internet. At ITLC India, we focus on creating centrally hosted software that allows for seamless multi-tenant architecture, automated updates, and flexible subscription models. This eliminates the need for users to install complex software locally, providing a scalable and accessible solution for businesses of all sizes while ensuring a consistent user experience across different devices and platforms."
  },
  {
    question: "How much does it cost to develop a SaaS platform?",
    answer: "The cost of developing a SaaS platform with ITLC India varies depending on the complexity of features, integration requirements, and the scale of the user base. Generally, an initial Minimum Viable Product (MVP) helps in validating the market at a lower cost, while full-scale enterprise SaaS solutions involve higher investment. We provide transparent, project-based pricing and flexible engagement models to ensure your investment delivers maximum ROI, focusing on building high-quality, scalable architectures that reduce long-term operational and infrastructure overheads."
  },
  {
    question: "How long does SaaS development take?",
    answer: "SaaS development timelines typically range from 3 to 6 months for a comprehensive MVP, and longer for complex enterprise-grade products. ITLC India follows an agile development methodology, breaking the project into manageable sprints. This allows us to deliver functional modules every few weeks, ensuring you have early visibility into the product's progress. The total duration depends on factors like the depth of the subscription logic, data security requirements, and the extent of third-party API integrations needed for your specific business logic."
  },
  {
    question: "Can you build multi-tenant SaaS software?",
    answer: "Yes, ITLC India specializes in building secure and scalable multi-tenant SaaS architectures. This approach allows a single instance of the software to serve multiple customers (tenants) while ensuring complete data isolation and security for each user. We implement robust database partitioning, custom domain mapping, and role-based access controls to manage different user groups efficiently. This architecture is essential for SaaS products as it simplifies maintenance, reduces hosting costs, and enables seamless global scalability as your customer base grows."
  },
  {
    question: "Do you provide cloud deployment?",
    answer: "Absolutely. ITLC India provides end-to-end cloud deployment and infrastructure management services. We work with leading cloud providers such as AWS, Google Cloud, Microsoft Azure, and DigitalOcean to set up secure, high-availability environments for your SaaS product. Our team handles everything from server configuration and database setup to CI/CD pipeline implementation and SSL security. We ensure your application is deployed using modern containerization technologies like Docker and Kubernetes for maximum reliability, performance, and automated scaling capabilities."
  },
  {
    question: "Can SaaS products integrate payment gateways?",
    answer: "Yes, seamless payment integration is a core component of our SaaS development services. We integrate popular global and Indian payment gateways including Razorpay, Stripe, and PayPal to handle recurring billing, subscription management, and automated invoicing. Our systems support multiple currency transactions, coupon management, and complex billing cycles (monthly, quarterly, or annually). We prioritize PCI-DSS compliance and security to ensure all financial transactions are processed safely, providing your users with a smooth and trustworthy checkout and renewal experience."
  },
  {
    question: "Do you offer maintenance and upgrades?",
    answer: "Yes, ITLC India offers comprehensive long-term maintenance and upgrade packages to ensure your SaaS product remains competitive and secure. The technology landscape is constantly evolving, and we provide regular security patches, performance tuning, and feature enhancements based on user feedback. Our support team monitors system uptime 24/7 and proactively addresses potential bottlenecks. We act as your ongoing technology partner, helping you scale your infrastructure and refine your product roadmap as your business reaches new milestones in the market."
  },
  {
    question: "Can you develop AI-powered SaaS applications?",
    answer: "Yes, ITLC India has extensive expertise in developing AI-powered SaaS applications. We can integrate advanced Generative AI models, predictive analytics, and natural language processing into your platform to provide smarter user experiences. Whether you need automated content generation, intelligent recommendation engines, or AI-driven data visualization, we have the skills to build it. By leveraging APIs from OpenAI, Google Gemini, and custom machine learning models, we help you create unique SaaS products that offer superior value and innovation to your target audience."
  }
];

export default function SaasProductDevelopmentPage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero 
        badge="Enterprise SaaS Excellence"
        title={<>Build, Launch & Scale <br /> <span className="text-primary">Powerful SaaS Products</span></>}
        description="ITLC INDIA helps startups and enterprises design, develop, and scale cloud-based SaaS products with modern secure architecture and subscription-ready platforms."
        primaryCta={{ text: "Start Your SaaS Project", href: "/contact" }}
        secondaryCta={{ text: "Book Free Consultation", href: "/contact" }}
        backgroundVideo="/vio/bg.mp4"
        illustration={
          <div className="relative group max-w-xl w-full">
            <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-slate-900 border-8 border-slate-800 rounded-[40px] shadow-2xl overflow-hidden aspect-video">
                <div className="absolute top-0 left-0 w-full h-8 bg-slate-800 flex items-center px-4 gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div className="mt-8 p-6 grid grid-cols-12 gap-4 h-full">
                    <div className="col-span-3 space-y-4 border-r border-slate-800 pr-4">
                        <div className="h-4 bg-slate-800 rounded w-full" />
                        <div className="h-4 bg-slate-800 rounded w-3/4" />
                        <div className="h-4 bg-slate-800 rounded w-5/6" />
                    </div>
                    <div className="col-span-9 space-y-6">
                        <div className="flex justify-between items-center">
                            <div className="h-8 bg-primary/20 rounded w-32 border border-primary/20" />
                            <div className="h-8 bg-slate-800 rounded w-16" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-20 bg-slate-800 rounded-xl" />
                            <div className="h-20 bg-slate-800 rounded-xl" />
                            <div className="h-20 bg-slate-800 rounded-xl" />
                        </div>
                        <div className="h-32 bg-slate-800/50 rounded-2xl border border-slate-700/50" />
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
                {["Multi-Tenant Architecture", "Subscription Billing", "Cloud Native Apps", "Enterprise Security", "Scalable Infrastructure"].map(badge => (
                    <div key={badge} className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{badge}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Why SaaS Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
                        <TrendingUp className="h-4 w-4" /> <span>Business Innovation</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-slate-900">
                        Transform Your Business <br /> With <span className="text-primary">SaaS Innovation</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Software-as-a-Service (SaaS) has become the preferred business model for modern companies. SaaS products enable recurring revenue, cloud accessibility, automatic updates, and scalable growth while significantly reducing traditional infrastructure costs.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        {[
                            { title: "99.9%", desc: "Cloud Accessibility" },
                            { title: "Recurring", desc: "Revenue Model" },
                            { title: "Global", desc: "Market Reach" },
                            { title: "Scalable", desc: "Infrastructure" }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all shadow-sm group">
                                <div className="text-3xl font-black text-primary mb-1 group-hover:scale-105 transition-transform">{stat.title}</div>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <div className="relative">
                    <div className="absolute -inset-10 bg-primary/5 blur-[100px] rounded-full" />
                    <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                        <img 
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop" 
                            alt="SaaS Analytics Dashboard" 
                            className="object-cover w-full h-full"
                            data-ai-hint="saas dashboard"
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
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">SaaS Development Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">End-to-end expertise in creating recurring-revenue cloud platforms.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saasServices.map((service, i) => (
              <Card key={i} className="border-none shadow-xl bg-white/60 backdrop-blur-md hover:bg-white transition-all group p-4 rounded-[40px]">
                <CardHeader>
                  <div className="mb-6 p-4 bg-primary/5 rounded-2xl w-fit shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-black tracking-tight text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500 leading-relaxed text-sm font-medium">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS Solutions Grid */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">SaaS Solutions We Build</h2>
            <p className="text-slate-500 font-medium">Specialized platforms tailored for every vertical.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {saasSolutions.map((sol, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:border-primary/50 hover:bg-white hover:shadow-xl transition-all group">
                <div className="h-1 w-12 bg-primary mb-6 group-hover:w-full transition-all duration-500 rounded-full" />
                <h3 className="font-bold text-lg leading-tight text-slate-900">{sol}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core SaaS Features Grid */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Core SaaS Features</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">Enterprise-grade components built into every product.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {coreFeatures.map((feat, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    {feat.icon}
                </div>
                <span className="font-bold text-sm text-slate-300">{feat.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Our Technology Stack</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {techStack.map((stack, i) => (
              <div key={i} className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 space-y-6">
                <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map(item => (
                    <span key={item} className="px-3 py-1.5 rounded-lg bg-slate-50 text-[11px] font-bold text-slate-700 border border-slate-100">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {["Healthcare", "Education", "Finance", "Retail", "Manufacturing", "Logistics", "Real Estate", "Hospitality", "Government", "Startups"].map((ind, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-slate-50/50 hover:bg-primary transition-all duration-500">
                <span className="font-bold text-sm text-slate-800 group-hover:text-white">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 bg-slate-900 text-white">
          <div className="container max-w-screen-xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                  {[
                      { val: "100+", label: "Apps Developed" },
                      { val: "50+", label: "SaaS Deployments" },
                      { val: "98%", label: "Client Satisfaction" },
                      { val: "24/7", label: "Technical Support" }
                  ].map((stat, i) => (
                      <div key={i} className="space-y-2">
                          <div className="text-4xl md:text-5xl font-black text-primary tracking-tighter">{stat.val}</div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{stat.label}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* SEO FAQs */}
      <SeoFaq serviceName="SaaS Product Development" faqs={faqs} />

      {/* Final CTA */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        <div className="container relative z-10 max-w-screen-xl mx-auto px-6 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Ready To Launch Your <br /> <span className="text-primary">SaaS Product?</span></h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">Partner with ITLC INDIA to build scalable, secure, and revenue-generating SaaS products that dominate global markets.</p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button asChild size="lg" className="rounded-full px-12 h-16 font-black text-xl shadow-2xl shadow-primary/20">
                    <Link href="/contact">Start Your SaaS Journey</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-12 h-16 border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-black text-xl">
                    <Link href="/contact">Request Proposal</Link>
                </Button>
            </div>

            <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto border-t border-white/10">
                <div className="flex items-center justify-center gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl"><Phone className="h-6 w-6 text-primary" /></div>
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

function Phone(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.7 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
    );
}
