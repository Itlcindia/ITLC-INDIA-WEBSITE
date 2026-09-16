import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Puzzle, ListTodo, BarChart3, Lock, Zap, Cloud, RefreshCw, BrainCircuit, Building, Landmark, ShoppingCart, Factory, GraduationCap, HeartPulse, ArrowRight, Clock, Rocket, Smile, BarChart, Shield, Users, Bot, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Enterprise CRM & SaaS Products | ITLC INDIA PVT LTD',
  description: 'Custom SaaS product development and enterprise CRM solutions by ITLC INDIA PVT LTD. We build scalable, high-performance platforms tailored to your business needs.',
}

const saasSolutions = [
    {
        icon: <Puzzle className="h-8 w-8 text-primary" />,
        title: "Enterprise CRM",
        description: "Custom-built CRM to manage customers, sales, and marketing efficiently.",
        features: [
            "Lead & opportunity management",
            "Sales pipeline tracking",
            "Customer communication history",
            "Marketing automation integration",
            "Role-based access control",
        ],
    },
    {
        icon: <ListTodo className="h-8 w-8 text-primary" />,
        title: "Project Management Suite",
        description: "Smart tools to plan tasks, track progress, and collaborate easily.",
        features: [
            "Task & milestone tracking",
            "Team collaboration tools",
            "Time tracking & reports",
            "Agile & workflow boards",
        ],
    },
    {
        icon: <BarChart3 className="h-8 w-8 text-primary" />,
        title: "Analytics Platform",
        description: "Powerful dashboards and reports for data-driven business decisions.",
        features: [
            "Real-time dashboards",
            "KPI tracking & reports",
            "Custom business metrics",
            "Export & API integrations",
        ],
    },
];

const stats = [
    { icon: <Clock className="h-8 w-8" />, value: "10+", label: "Years Experience" },
    { icon: <Rocket className="h-8 w-8" />, value: "250+", label: "Projects Delivered" },
    { icon: <Smile className="h-8 w-8" />, value: "120+", label: "Happy Clients" },
    { icon: <BarChart className="h-8 w-8" />, value: "99.9%", label: "Project Success Rate" },
];

const valueProps = [
    { icon: <Bot className="h-8 w-8" />, title: "AI-First Approach", description: "Smart automation and data-driven solutions." },
    { icon: <Shield className="h-8 w-8" />, title: "Enterprise-Grade Security", description: "Secure cloud and compliance-ready systems." },
    { icon: <Users className="h-8 w-8" />, title: "Dedicated Project Teams", description: "Agile squads for faster delivery." },
    { icon: <CheckCircle className="h-8 w-8" />, title: "End-to-End Support", description: "From planning to post-launch growth." },
];

const industries = [
    { icon: <Building className="h-10 w-10 text-blue-600" />, name: "Enterprises", description: "Scalable solutions for large organizations" },
    { icon: <Landmark className="h-10 w-10 text-blue-600" />, name: "Finance & Fintech", description: "Secure digital financial platforms" },
    { icon: <ShoppingCart className="h-10 w-10 text-blue-600" />, name: "E-commerce", description: "Smart online retail systems" },
    { icon: <Factory className="h-10 w-10 text-blue-600" />, name: "Manufacturing", description: "Automation and production intelligence" },
    { icon: <GraduationCap className="h-10 w-10 text-blue-600" />, name: "Education", description: "EdTech platforms and learning systems" },
    { icon: <HeartPulse className="h-10 w-10 text-blue-600" />, name: "Healthcare", description: "Secure patient and hospital solutions" },
];

const processSteps = [
    { name: "Requirement Analysis & Product Planning", description: "Strategy, feasibility, roadmap creation" },
    { name: "UI/UX Design & Architecture Setup", description: "Wireframes, design systems, scalable backend planning" },
    { name: "Agile Development & Testing", description: "Sprint-based coding, QA automation, bug fixing" },
    { name: "Cloud Deployment & Security Setup", description: "CI/CD, server setup, data protection" },
    { name: "Ongoing Support & Feature Upgrades", description: "Monitoring, performance optimization, new features" },
];

export default function SaasProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4">
          <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl leading-tight">
            Enterprise CRM Development by ITLC INDIA PVT LTD
          </h1>
          <p className="mt-4 max-w-3xl mx-auto px-4 text-base text-white/80 md:text-lg">
            Launch and scale your business with our end-to-end SaaS product development services, delivering secure, scalable, and high-performance solutions tailored to your business needs.
          </p>
          <p className="mt-4 font-semibold text-cyan-300">
            From idea to enterprise-grade product — we build it all.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/services">Learn More</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our SaaS Solutions */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
              Our SaaS Solutions
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {saasSolutions.map((solution) => (
              <Card key={solution.title} className="flex flex-col">
                <CardHeader className="flex-row items-center gap-4">
                  {solution.icon}
                  <CardTitle>{solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-[#333333] mb-4">{solution.description}</p>
                  <ul className="space-y-2 text-sm flex-grow">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button asChild variant="outline" className="w-full bg-gradient-to-r from-[#00aaff] to-[#0088cc] text-white font-semibold rounded-lg px-6 py-3 shadow-md hover:from-[#33c4ff] hover:to-[#0077aa] hover:shadow-lg transition transform hover:-translate-y-1">
                        <Link href="/contact">
                            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
          <div className="max-w-screen-xl mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
                      Why Choose ITLC INDIA PVT LTD?
                  </h2>
                  <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5f6f86]">
                      A decade of innovation, trust, and technology excellence.
                  </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                  {stats.map((stat, index) => (
                      <div key={index} className="text-center p-6 bg-[#f8fbff] rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                          <div className="inline-block relative mb-4 text-primary">
                              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-lg transition-all duration-300 group-hover:opacity-40 group-hover:scale-110"></div>
                              <div className="relative inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20">
                                  {stat.icon}
                              </div>
                          </div>
                          <p className="text-4xl font-bold bg-gradient-to-r from-[#00aaff] to-[#0088cc] bg-clip-text text-transparent mb-1">{stat.value}</p>
                          <p className="text-sm font-medium text-[#5f6f86]">{stat.label}</p>
                      </div>
                  ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {valueProps.map((prop, index) => (
                      <div key={index} className="group relative p-8 bg-[#f8fbff] rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                          <div className="absolute -inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300">
                              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00b4ff] to-[#0077ff] opacity-0 group-hover:opacity-10 blur-xl"></div>
                          </div>
                          <div className="relative text-center">
                              <div className="inline-block relative mb-4 text-primary">
                                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-lg transition-all duration-300 group-hover:opacity-40 group-hover:scale-110"></div>
                                  <div className="relative inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20">
                                      {prop.icon}
                                  </div>
                              </div>
                              <h3 className="text-xl font-bold text-[#0b1f3a] mb-2">{prop.title}</h3>
                              <p className="text-[#5f6f86]">{prop.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
              Industries We Serve
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5f6f86]">
              Delivering tailored technology solutions across diverse industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="group relative p-8 bg-[#f8fbff] rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="absolute -inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00b4ff] to-[#0077ff] opacity-0 group-hover:opacity-10 blur-xl"></div>
                </div>
                <div className="relative text-center">
                  <div className="inline-block relative mb-4">
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-lg transition-all duration-300 group-hover:opacity-40 group-hover:scale-110"></div>
                     <div className="relative inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20">
                       {industry.icon}
                     </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0b1f3a] mb-2">{industry.name}</h3>
                  <p className="text-[#5f6f86]">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-16">
             <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-[#00b4ff] to-[#0077ff] text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all">
               <Link href="/industries">Explore Industry Solutions</Link>
             </Button>
           </div>
        </div>
      </section>

      {/* Our Development Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
                    Our Development Process
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5f6f86]">
                    From idea to launch — we build secure, scalable, and future-ready solutions.
                </p>
            </div>
            <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00b4ff] to-[#0077ff] hidden md:block"></div>
                {processSteps.map((step, index) => (
                    <div key={index} className={`flex items-center w-full mb-8 md:mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        <div className="hidden md:flex w-5/12"></div>
                        <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-[#0077ff] shadow-lg">
                           <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00b4ff] to-[#0077ff] flex items-center justify-center text-white font-bold">
                                {String(index + 1).padStart(2, '0')}
                           </div>
                        </div>
                        <div className="w-full md:w-5/12 px-4 md:px-8">
                            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-blue-200/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <h3 className="font-bold text-lg text-[#0b1f3a] mb-2">{step.name}</h3>
                                <p className="text-[#5f6f86] text-sm">{step.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-[#00b4ff] to-[#0077ff] text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all">
                    <Link href="/contact">Start Your Project with ITLC</Link>
                </Button>
            </div>
        </div>
    </section>

       {/* About Section */}
       <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl mb-4">
                About ITLC INDIA PVT LTD
            </h2>
            <p className="text-lg text-[#333333]">
                ITLC INDIA PVT LTD specializes in enterprise SaaS solutions, CRM systems, AI-powered platforms, and custom software development to help businesses grow digitally.
            </p>
            <p className="mt-4 font-semibold text-[#33c4ff]">We build products that scale.</p>
        </div>
       </section>
    </>
  );
}
