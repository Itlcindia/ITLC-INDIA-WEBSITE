"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Layers, 
  Layout, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Code2, 
  Rocket, 
  Activity, 
  Users, 
  Clock, 
  TrendingUp,
  Settings,
  Database,
  Cloud,
  ChevronRight,
  HeartPulse,
  GraduationCap,
  Building2,
  ShoppingCart,
  Factory,
  Truck,
  Landmark,
  Briefcase,
  Star,
  Phone,
  Monitor
} from 'lucide-react';
import { ServiceHero } from '@/components/service-hero';
import { SeoFaq } from '@/components/seo-faq';

const AndroidIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2C10.34 2 9 3.34 9 5v1h6V5c0-1.66-1.34-3-3-3zM7 10v7c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2v-7H7zM5 10v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1zm12 0v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1zM9 22v-3h6v3H9z" />
  </svg>
);

const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 20.94c1.88 0 3.05-1.11 4.54-1.11 1.43 0 2.25.96 4.3 1.01 1.76.04 2.16-1.33 2.16-1.33s-3.23-1.07-3.19-4.8c.04-3.73 3.19-4.94 3.19-4.94s-1.85-2.73-5.22-2.73c-2.48 0-3.35.91-4.83.91-1.48 0-2.85-1.16-5.54-1.16-3.7 0-6.41 3.25-6.41 7.42 0 4.14 2.22 8.73 5.31 8.73zm1.61-16.79c.68-1.04.4-2.5.4-2.5s-1.52.27-2.3 1.25c-.75.95-.57 2.45-.57 2.45s1.42.3 2.47-1.2z" />
  </svg>
);

const mobileServices = [
  {
    title: "Android App Development",
    description: "Custom native Android applications built for maximum performance, security, and scalability across the entire Android ecosystem.",
    icon: <AndroidIcon className="h-8 w-8 text-primary" />
  },
  {
    title: "iOS App Development",
    description: "Premium native iPhone and iPad app solutions following Apple's Human Interface Guidelines for a superior user experience.",
    icon: <AppleIcon className="h-8 w-8 text-primary" />
  },
  {
    title: "Flutter App Development",
    description: "Beautiful, natively compiled applications for mobile from a single codebase, ensuring faster time-to-market and reduced costs.",
    icon: <Zap className="h-8 w-8 text-primary" />
  },
  {
    title: "React Native Development",
    description: "Highly responsive and scalable cross-platform mobile solutions that provide a true native look and feel with high performance.",
    icon: <Layers className="h-8 w-8 text-primary" />
  },
  {
    title: "Enterprise Mobility Solutions",
    description: "Full-scale CRM, ERP, and HRMS mobile platforms designed to automate complex business workflows and on-the-go management.",
    icon: <Building2 className="h-8 w-8 text-primary" />
  },
  {
    title: "App Maintenance & Support",
    description: "Ongoing optimization, regular security patches, bug fixing, and platform upgrades to ensure your app stays ahead of the competition.",
    icon: <Settings className="h-8 w-8 text-primary" />
  }
];

const industries = [
  { name: "Healthcare", icon: <HeartPulse /> },
  { name: "Education", icon: <GraduationCap /> },
  { name: "Real Estate", icon: <Building2 /> },
  { name: "Retail & E-Commerce", icon: <ShoppingCart /> },
  { name: "Manufacturing", icon: <Factory /> },
  { name: "Logistics", icon: <Truck /> },
  { name: "Finance", icon: <Landmark /> },
  { name: "Hospitality", icon: <Briefcase /> },
  { name: "Startups", icon: <Rocket /> },
  { name: "Government", icon: <ShieldCheck /> },
];

const categories = [
  "E-Commerce Apps", "Healthcare Apps", "Food Delivery Apps", "Taxi Booking Apps",
  "Learning Management Apps", "CRM Apps", "ERP Apps", "HRMS Apps",
  "Attendance Apps", "Real Estate Apps", "SaaS Mobile Apps", "Marketplace Apps"
];

const processSteps = [
  { step: "01", title: "Discovery & Analysis", desc: "Understanding your business vision, target audience, and functional requirements." },
  { step: "02", title: "UI/UX & Wireframing", desc: "Creating intuitive blueprints and stunning visual designs focused on user engagement." },
  { step: "03", title: "App Development", desc: "High-quality coding of the frontend and robust scalable backend infrastructure." },
  { step: "04", title: "QA & Testing", desc: "Rigorous testing across multiple devices and network conditions for a bug-free experience." },
  { step: "05", title: "Deployment & Launch", desc: "Managing the entire App Store and Play Store submission process for a smooth launch." },
  { step: "06", title: "Support & Maintenance", desc: "Continuous monitoring and proactive updates to ensure peak performance post-launch." }
];

const techStack = [
  { category: "Frontend", items: ["Flutter", "React Native", "Swift", "Kotlin"] },
  { category: "Backend", items: ["Node.js", "Express.js", "PHP", "Laravel"] },
  { category: "Database", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { category: "Cloud", items: ["AWS", "Google Cloud", "Firebase"] }
];

const successMetrics = [
  { val: "50+", label: "Projects Delivered" },
  { val: "25+", label: "Industries Served" },
  { val: "98%", label: "Client Satisfaction" },
  { val: "24/7", label: "Support Available" }
];

const faqs = [
  {
    question: "How much does mobile app development cost in India?",
    answer: "The cost of mobile app development at ITLC India is determined by several factors including application complexity, platform choice (Android, iOS, or Cross-platform), the number of features, and integration requirements. For a basic MVP, costs can start from a competitive range, while complex enterprise solutions with AI and real-time data processing involve higher investment. We provide a detailed cost breakdown after a thorough discovery phase, ensuring complete transparency and alignment with your budget and business objectives."
  },
  {
    question: "How long does it take to build a mobile app?",
    answer: "The timeline for building a mobile app typically ranges from 8 to 24 weeks. A simple application or MVP can often be launched within 2 to 3 months. More complex enterprise-grade products that require custom backend architectures, third-party API integrations, and extensive security testing may take 6 months or longer. At ITLC India, we follow an agile development methodology, delivering functional builds at every sprint, which allows for early feedback and ensures the project stays on schedule for a successful launch."
  },
  {
    question: "Do you develop both Android and iOS apps?",
    answer: "Yes, ITLC India is a full-stack mobile development agency specializing in both native and cross-platform solutions. We build high-performance native Android apps using Kotlin and Java, and native iOS apps using Swift. Additionally, we are experts in modern cross-platform frameworks like Flutter and React Native, which allow us to develop applications for both platforms from a single codebase. This approach ensures consistent performance and UI/UX across devices while significantly reducing development time and maintenance costs for our clients."
  },
  {
    question: "Can you publish apps on the Google Play Store and Apple App Store?",
    answer: "Absolutely. Our end-to-end service includes the entire deployment and publishing process for both the Google Play Store and the Apple App Store. We handle all technical requirements, including setting up developer accounts, preparing metadata, screenshots, and ensuring the app complies with the latest store guidelines and privacy policies. Our team also manages the submission and review process, providing support until your application is live and available for download by your target audience."
  },
  {
    question: "Do you provide maintenance and support services after launch?",
    answer: "Yes, ITLC India provides comprehensive post-launch maintenance and support packages. Mobile technology evolves rapidly, requiring regular updates for security patches, performance optimizations, and compatibility with new OS versions (Android and iOS). Our maintenance services include bug fixing, feature enhancements based on user feedback, server monitoring, and periodic performance audits. We act as your long-term technology partner, ensuring your mobile application remains secure, functional, and competitive in the ever-changing digital market."
  },
  {
    question: "Can you integrate payment gateways and third-party APIs?",
    answer: "Yes, we have extensive experience in integrating a wide range of third-party APIs and secure payment gateways into mobile applications. Whether you need to integrate global processors like Stripe and PayPal or Indian gateways like Razorpay, PayU, and CCAvenue, we ensure seamless and secure transactional flows. We also specialize in connecting apps with complex backend systems, CRM platforms, ERPs, social media APIs, and custom enterprise data sources, providing a unified and powerful digital experience for your users."
  }
];

export default function MobileAppDevelopmentPage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero 
        badge="Enterprise Mobility Excellence"
        title={<>Transform Ideas Into <br /> <span className="text-primary">Powerful Mobile Products</span></>}
        description="ITLC INDIA develops secure, scalable, and high-performance Android, iOS, Flutter, and React Native applications for startups, enterprises, and global organizations."
        primaryCta={{ text: "Get Free Consultation", href: "/contact" }}
        secondaryCta={{ text: "Request Proposal", href: "/contact" }}
        backgroundVideo="/vio/bg.mp4"
        illustration={
          <div className="relative group max-w-lg w-full">
            <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-slate-900 border-8 border-slate-800 rounded-[50px] shadow-2xl p-6 overflow-hidden">
                <div className="flex flex-col h-full gap-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-2 bg-slate-700 rounded-full" />
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/10 border border-primary/20 p-4">
                      <div className="w-1/2 h-4 bg-primary/30 rounded mb-2" />
                      <div className="w-full h-8 bg-white/5 rounded" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="h-32 rounded-2xl bg-slate-800 border border-slate-700" />
                       <div className="h-32 rounded-2xl bg-slate-800 border border-slate-700" />
                    </div>
                    <div className="h-40 rounded-2xl bg-slate-800 border border-slate-700 p-4 space-y-3">
                      <div className="w-full h-2 bg-slate-700 rounded" />
                      <div className="w-3/4 h-2 bg-slate-700 rounded" />
                      <div className="w-full h-2 bg-slate-700 rounded" />
                    </div>
                  </div>
                  <div className="mt-auto flex justify-around p-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20" />
                    <div className="w-8 h-8 rounded-full bg-slate-800" />
                    <div className="w-8 h-8 rounded-full bg-slate-800" />
                    <div className="w-8 h-8 rounded-full bg-slate-800" />
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
                {["Android Apps", "iOS Apps", "Flutter Development", "React Native Apps", "Enterprise Mobility"].map(badge => (
                    <div key={badge} className="flex items-center gap-2 text-slate-500 font-bold text-sm tracking-tight">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{badge}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Why Mobile Apps Matter */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
                        <Smartphone className="h-4 w-4" /> <span>Innovation at Scale</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
                        Accelerate Growth Through <br /> <span className="text-primary">Mobile Innovation</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Mobile applications help businesses improve customer engagement, automate operations, increase sales, and build stronger digital relationships with users. A professionally developed mobile app provides a competitive advantage and enhances customer experience.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                        {[
                            { title: "6+ Billion", desc: "Smartphone Users Worldwide" },
                            { title: "90%", desc: "Mobile Internet Usage Share" },
                            { title: "24/7", desc: "Direct Customer Engagement" },
                            { title: "Max", desc: "Business Process Efficiency" }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all shadow-sm">
                                <div className="text-3xl font-black text-primary mb-1">{stat.title}</div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <div className="relative">
                    <div className="absolute -inset-10 bg-primary/5 blur-[100px] rounded-full" />
                    <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                        <img 
                            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" 
                            alt="Mobile usage" 
                            className="object-cover w-full h-full"
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
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Mobile Development Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">End-to-end expertise in creating high-performance digital products for any platform.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileServices.map((service, i) => (
              <Card key={i} className="border-none shadow-xl bg-white/60 backdrop-blur-md hover:bg-white transition-all group p-4 rounded-[40px]">
                <CardHeader>
                  <div className="mb-6 p-4 bg-primary/5 rounded-2xl w-fit shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-black tracking-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500 leading-relaxed text-sm font-medium">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {industries.map((ind, i) => (
              <div key={i} className="group flex flex-col items-center gap-4 text-center p-8 rounded-3xl bg-slate-50/50 hover:bg-primary transition-all duration-500">
                <div className="p-4 rounded-2xl bg-white text-primary group-hover:bg-white/20 group-hover:text-white transition-colors shadow-sm">
                  {React.cloneElement(ind.icon as React.ReactElement<any>, { className: "h-8 w-8" })}
                </div>
                <span className="font-bold text-sm text-slate-800 group-hover:text-white">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Categories */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Limitless Application Categories</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">We build specialized solutions for every digital business model.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-primary/50 transition-all group">
                <div className="h-1 w-12 bg-primary mb-6 group-hover:w-full transition-all duration-500 rounded-full" />
                <h3 className="font-bold text-lg leading-tight">{cat}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Our Development Process</h2>
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

      {/* Tech Stack */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight">Our Technology Stack</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, i) => (
              <div key={i} className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 space-y-6">
                <h3 className="text-xs font-black text-primary uppercase tracking-[0.2em]">{stack.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {stack.items.map(item => (
                    <span key={item} className="px-4 py-2 rounded-xl bg-slate-50 text-xs font-bold text-slate-700 border border-slate-100">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ITLC */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">Why Choose ITLC INDIA?</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Experienced Development Team",
                  "Enterprise Grade Security",
                  "Agile Development Process",
                  "SEO Friendly Architecture",
                  "Scalable Infrastructure",
                  "Dedicated Support Team",
                  "Affordable Pricing",
                  "Timely Project Delivery"
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
                      {successMetrics.map((stat, i) => (
                          <div key={i} className="space-y-1">
                              <div className="text-4xl font-black text-primary tracking-tighter">{stat.val}</div>
                              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                          </div>
                      ))}
                   </div>
                   <div className="pt-8 border-t border-white/10">
                      <p className="text-slate-400 text-sm font-medium mb-8">Trusted by clients globally for excellence in mobility.</p>
                      <Button asChild size="lg" className="rounded-full px-10 h-14 font-black text-lg">
                        <Link href="/contact">Book Success Meeting</Link>
                      </Button>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO FAQs */}
      <SeoFaq serviceName="Mobile App Development" faqs={faqs} />

      {/* Final CTA Banner */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        <div className="container relative z-10 max-w-screen-xl mx-auto px-6 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Ready To Build Your <br /> <span className="text-primary">Mobile App?</span></h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">Partner with ITLC INDIA to develop innovative, scalable, and future-ready mobile applications that drive growth and digital transformation.</p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button asChild size="lg" className="rounded-full px-12 h-16 font-black text-xl shadow-2xl shadow-primary/20">
                    <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-12 h-16 border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-black text-xl">
                    <Link href="/contact">Schedule Consultation</Link>
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
