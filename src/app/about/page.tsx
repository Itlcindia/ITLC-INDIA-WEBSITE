import Image from 'next/image';
import { Award, Building, Users, Briefcase, BrainCircuit, Star, CheckCircle2, Linkedin, Instagram, Twitter, ShieldCheck, Building2, Rocket, CaseLower } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'About Us | ITLC INDIA PVT LTD',
  description: 'Founded in 2015, ITLC INDIA PVT LTD is a passionate team of developers and strategists dedicated to empowering businesses with transformative technology.',
}

const credentials = [
    { name: "ISO Certified", image: "/ca/2.png", hint: "iso certified logo badge" },
    { name: "MSME Udyam Registered", image: "/ca/1.png", hint: "msme udyam registered logo badge" },
    { name: "Startup India", image: "/ca/3.png", hint: "startup india logo badge" },
    { name: "Made in India", image: "/ca/4.jpg", hint: "made in india logo badge" },
    { name: "Govt. Recognized Partner", image: "/ca/5.png", hint: "government recognized partner logo badge" },
];

const values = [
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: "10+ Years of Excellence",
        description: "We are committed to delivering the highest quality solutions and services to our clients."
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Client-Centric Approach",
        description: "Our clients are our top priority. We build strong partnerships to ensure their success."
    },
    {
        icon: <Building className="h-8 w-8 text-primary" />,
        title: "Innovative Solutions",
        description: "We embrace innovation and continuously seek new ways to solve challenges with technology."
    },
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: "Dedicated Support",
        description: "We operate with transparency and integrity in all our business relationships."
    }
];

const leadershipTimeline = [
    { year: 2015, event: "Company Founded", description: "Established ITLC INDIA PVT LTD with a vision of tech-driven growth.", icon: <Star className="h-5 w-5" /> },
    { year: 2018, event: "Enterprise Expansion", description: "Delivered large-scale CRM and automation solutions.", icon: <Building2 className="h-5 w-5" /> },
    { year: 2021, event: "Government Projects", description: "Partnered in public sector digital transformation initiatives.", icon: <Briefcase className="h-5 w-5" /> },
    { year: 2023, event: "AI & Automation Focus", description: "Launched AI-powered business intelligence platforms.", icon: <BrainCircuit className="h-5 w-5" /> },
    { year: 2025, event: "National Growth", description: "Serving clients across multiple industries throughout India.", icon: <Rocket className="h-5 w-5" /> },
];

const trustIndicators = [
    { name: "ISO Certified", icon: <ShieldCheck className="h-5 w-5 text-white" /> },
    { name: "MSME Registered", icon: <CaseLower className="h-5 w-5 text-white" /> },
    { name: "Startup India Recognized", icon: <Rocket className="h-5 w-5 text-white" /> },
    { name: "Govt Project Partner", icon: <Briefcase className="h-5 w-5 text-white" /> },
];


const partners = [
  { name: 'AWS', hint: 'aws logo', image: "/patner/1.png" },
  { name: 'Azure', hint: 'azure logo', image: "/patner/3.png" },
  { name: 'Google Cloud', hint: 'google cloud logo', image: "/patner/4.png" },
  { name: 'OpenAI', hint: 'openai logo', image: "/patner/2.jpg" },
  { name: 'Firebase', hint: 'firebase logo', image: "/patner/2.png" },
];


export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-14 md:pt-36 md:pb-16 flex items-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
                About Us - ITLC INDIA PVT LTD
              </h1>
              <p className="text-base sm:text-lg font-semibold text-blue-400">
                Empowering Businesses Since 2015
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                ITLC INDIA PVT LTD was founded with a simple mission: to empower businesses with transformative technology solutions. We are a passionate team of developers, designers, and strategists dedicated to helping our clients innovate, build, and grow through AI, custom software, and digital marketing.
              </p>
              <div className="flex items-center gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                      <Award className="h-5 w-5 text-blue-400" />
                      <span>10+ Years of Excellence</span>
                  </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center p-2">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl -z-10" />
              <Image
                src="/ab1.png"
                alt="Dr. Arun kumar Yadav, Founder & Director"
                width={360}
                height={360}
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-gray-800/50"
                data-ai-hint="professional indian man portrait"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
       <section className="py-16 md:py-24 bg-background">
          <div className="max-w-screen-xl mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
                      Certifications & Compliance
                  </h2>
                  <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
                      Officially recognized. Fully compliant. Enterprise ready.
                  </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                      <h3 className="font-bold text-2xl text-foreground">Trusted by Government & Industry Bodies</h3>
                      <ul className="space-y-4 text-muted-foreground">
                          <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                              <span>DPIIT recognized startup, committed to innovation and growth.</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                              <span>MSME registered enterprise, supporting the backbone of the Indian economy.</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                              <span>ISO quality compliance, ensuring the highest standards in our services.</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                              <span>Authorized government project partner, delivering reliable solutions.</span>
                          </li>
                      </ul>
                      <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all">
                          <Link href="/certificates">View Official Certificates</Link>
                      </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {credentials.map((partner) => (
                      <Link key={partner.name} href="/certificates" className="group relative flex flex-col items-center justify-center p-6 bg-background/60 backdrop-blur-sm rounded-2xl border border-border shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="absolute inset-0 rounded-2xl bg-primary opacity-0 group-hover:opacity-10 blur-xl"></div>
                        <div className="relative">
                          <Image
                            src={partner.image}
                            alt={`${partner.name} Logo`}
                            width={150}
                            height={50}
                            className="object-contain transition-all duration-300"
                            data-ai-hint={partner.hint}
                          />
                          <div className="absolute -top-2 -right-2">
                              <div className="relative flex items-center justify-center h-8 w-8">
                                  <div className="absolute h-full w-full bg-green-500 rounded-full animate-ping opacity-75"></div>
                                  <CheckCircle2 className="relative h-6 w-6 text-green-500 bg-background rounded-full"/>
                              </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
              </div>
          </div>
      </section>

      {/* Company Highlights Section */}
        <section className="py-16 md:py-24">
            <div className="container max-w-screen-xl mx-auto px-4">
                 <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">Company Highlights</h2>
                    <p className="max-w-3xl text-muted-foreground md:text-xl">
                        Our values guide our actions and define who we are as a company.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((value) => (
                        <div key={value.title} className="p-6 rounded-lg border border-border/30 bg-card/50 backdrop-blur-sm shadow-lg text-center flex flex-col items-center transform transition-transform hover:-translate-y-2 hover:border-primary">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                            <p className="text-muted-foreground">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CEO Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-screen-xl mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">Leadership That Drives Innovation</h2>
                  <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">A decade of vision, technology excellence, and business growth.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative flex flex-col items-center justify-center">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                      <div className="relative p-2 rounded-full shadow-2xl bg-background/60 backdrop-blur-sm border border-border">
                          <Image
                              src="/director.webp"
                              alt="Dr. Arun kumar Yadav, Founder & Director"
                              width={400}
                              height={400}
                              className="rounded-full object-cover"
                              data-ai-hint="confident indian male ceo"
                          />
                      </div>
                      <div className="text-center mt-6">
                          <h3 className="text-2xl font-bold text-foreground">Dr. Arun kumar Yadav</h3>
                          <p className="text-muted-foreground font-medium">Founder & Director</p>
                          <div className="flex justify-center gap-4 mt-4">
                              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-6 w-6" /></Link>
                              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-6 w-6" /></Link>
                              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-6 w-6" /></Link>
                          </div>
                      </div>
                  </div>
                  <div className="space-y-8">
                      <p className="text-xl italic text-muted-foreground border-l-4 border-primary pl-6">
                          “Our mission is to empower businesses through intelligent, secure, and scalable technology.”
                      </p>
                      <p className="text-muted-foreground">
                          A technology entrepreneur with 10+ years of experience in AI, enterprise software, and government technology projects, leading ITLC towards innovation-driven digital transformation.
                      </p>
                      <div>
                          <h4 className="font-semibold text-lg text-foreground mb-4">Leadership Journey</h4>
                          <div className="relative">
                              <div className="absolute left-3.5 top-0 h-full w-px bg-border"></div>
                              {leadershipTimeline.map((item, index) => (
                                  <div key={index} className="relative flex items-start mb-6">
                                      <div className="z-10 flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground shadow-md">
                                          {item.icon}
                                      </div>
                                      <div className="ml-6">
                                          <p className="font-bold text-foreground">{item.year} — {item.event}</p>
                                          <p className="text-sm text-muted-foreground">{item.description}</p>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                          {trustIndicators.map(item => (
                              <Link key={item.name} href="/certificates" className="p-3 bg-primary rounded-lg text-xs font-medium text-primary-foreground flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
                                  {item.icon}
                                  <span>{item.name}</span>
                              </Link>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
        </section>


      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-accent/50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
              Our Technology Partners
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              We collaborate with trusted technology leaders to deliver secure and scalable digital solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="group relative flex items-center justify-center p-4 bg-background/50 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                 <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary transition-all duration-300"></div>
                <Image
                    src={partner.image}
                    alt={`${partner.name} Logo`}
                    width={120}
                    height={40}
                    className="object-contain w-3/4 h-3/4 transition-all duration-300"
                    data-ai-hint={partner.hint}
                />
            </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground">Trusted partnerships. Powerful technology. Real business impact.</p>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-16 md:py-24 bg-accent/50">
        <div className="container max-w-screen-md mx-auto px-4 text-center">
          <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl mb-6">Innovating Since 2015</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>ITLC INDIA PVT LTD was founded in 2015 with a mission to empower businesses through technology. Our approach is collaborative and client-centric; we believe in building strong partnerships to understand your unique challenges and deliver solutions that drive real results.</p>
            <p>From initial concept to final deployment and ongoing support, we are with you every step of the way, ensuring your project's success and your business's growth.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="container max-w-screen-xl mx-auto px-4 py-16 rounded-lg bg-primary/10">
          <div className="grid items-center justify-center gap-4 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold font-headline tracking-tighter md:text-4xl/tight">
                Let’s Build the Future Together
              </h2>
              <p className="mx-auto max-w-2xl text-primary/80 md:text-xl/relaxed">
                Ready to start your next project or need a technology partner? We're here to help.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="default" size="lg" className="w-full sm:w-auto">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Link href="/contact">Get Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
