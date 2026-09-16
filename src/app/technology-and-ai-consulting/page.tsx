import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Bot, Compass, CaseLower, Rocket, Building, ShoppingCart, Banknote, GraduationCap, Factory, BarChart, Zap, Lock, RefreshCcw, Handshake, ArrowRight, Clock, Smile, Shield, Users, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Technology & AI Consulting | ITLC INDIA PVT LTD',
  description: 'Expert technology and AI consulting services by ITLC INDIA PVT LTD. We help businesses navigate digital transformation and implement future-ready AI solutions.',
}

const consultingServices = [
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "AI Integration",
    description: "Integrating AI models and intelligent solutions into your existing systems.",
    features: [
      "GPT & ML model integration",
      "AI APIs for CRM, ERP, Mobile Apps",
      "Predictive analytics & automation",
      "Chatbots & recommendation engines",
    ],
    result: "Smarter systems, better decisions",
  },
  {
    icon: <Compass className="h-8 w-8 text-primary" />,
    title: "Technology Roadmapping",
    description: "Strategic planning for your technology stack and long-term growth.",
    features: [
      "Current system analysis",
      "Cloud & AI readiness assessment",
      "Scalable tech stack planning",
      "Cost optimization strategy",
    ],
    result: "Clear future growth path with less risk",
  },
  {
    icon: <CaseLower className="h-8 w-8 text-primary" />,
    title: "Solution Architecture",
    description: "Designing scalable, secure, and high-performance system architectures.",
    features: [
        "Microservices architecture",
        "Cloud-native design (AWS, Azure, GCP)",
        "API-first development approach",
        "Security & compliance planning",
    ],
    result: "Systems that grow with your business",
  },
];

const whoWeHelp = [
    { icon: <Rocket className="h-8 w-8 text-primary" />, name: "Startups building MVPs" },
    { icon: <Building className="h-8 w-8 text-primary" />, name: "Enterprises modernizing systems" },
    { icon: <ShoppingCart className="h-8 w-8 text-primary" />, name: "E-commerce platforms" },
    { icon: <Banknote className="h-8 w-8 text-primary" />, name: "Fintech & Banking solutions" },
    { icon: <GraduationCap className="h-8 w-8 text-primary" />, name: "Education platforms" },
    { icon: <Factory className="h-8 w-8 text-primary" />, name: "Manufacturing & Logistics" },
];

const processSteps = [
    { name: "Discovery & Requirement Analysis", description: "Understanding your business goals and technical needs." },
    { name: "Technology Audit & Gap Analysis", description: "Assessing your current stack and identifying improvement areas." },
    { name: "AI & System Architecture Design", description: "Designing a future-proof architecture and technology roadmap." },
    { name: "Implementation Support", description: "Guiding your development team or our own to build the solution." },
    { name: "Monitoring & Optimization", description: "Continuously monitoring performance and optimizing for success." },
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

const businessOutcomes = [
    { text: "Increased ROI", icon: <CheckCircle className="h-6 w-6 text-green-500" /> },
    { text: "Reduced Costs", icon: <CheckCircle className="h-6 w-6 text-green-500" /> },
    { text: "Improved Efficiency", icon: <CheckCircle className="h-6 w-6 text-green-500" /> },
    { text: "Enhanced Security", icon: <CheckCircle className="h-6 w-6 text-green-500" /> },
    { text: "Future-Ready Systems", icon: <CheckCircle className="h-6 w-6 text-green-500" /> },
    { text: "Scalable Growth", icon: <CheckCircle className="h-6 w-6 text-green-500" /> },
];

export default function TechnologyAndAiConsultingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4">
          <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl leading-tight">
            Technology & AI Consulting by ITLC INDIA PVT LTD
          </h1>
          <p className="mt-4 max-w-3xl mx-auto px-4 text-base text-white/80 md:text-lg">
            Leverage our expertise to navigate the complex technology landscape and unlock the true power of AI for your business.
          </p>
          <p className="mt-4 font-semibold text-cyan-300">
            We help you plan, build, and scale smart digital systems with future-ready AI integration.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/services">Learn More</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link href="/contact">Book Consultation</Link>
            </Button>
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

      {/* Consulting Services Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
              Our Consulting Services
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {consultingServices.map((service) => (
              <Card key={service.title} className="flex flex-col">
                <CardHeader className="flex-row items-center gap-4">
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-[#333333] mb-4">{service.description}</p>
                  <ul className="space-y-2 text-sm flex-grow">
                    {service.features.map((feature) => (
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

      {/* Industries We Serve Section */}
      <section className="py-16 bg-[#292019] text-primary-foreground">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Who We Help
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {whoWeHelp.map((industry) => (
              <div key={industry.name} className="flex flex-col items-center gap-3 transform hover:scale-110 transition-transform duration-300">
                {React.cloneElement(industry.icon, { className: "h-8 w-8 text-primary-foreground"})}
                <p className="font-semibold">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
                    Our Consulting Process
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

      {/* Business Outcomes Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
                Business Outcomes
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {businessOutcomes.map((outcome) => (
                <div key={outcome.text} className="flex items-center gap-4">
                    {outcome.icon}
                    <p className="font-semibold text-lg">{outcome.text}</p>
                </div>
            ))}
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
                ITLC INDIA PVT LTD provides advanced Technology & AI consulting services to help businesses adopt modern digital solutions with confidence. We bridge the gap between business goals and cutting-edge technology.
            </p>
        </div>
       </section>

    </>
  );
}
