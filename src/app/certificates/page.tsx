import Image from 'next/image';
import { ShieldCheck, CheckCircle2, Building, Star, Rocket, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Certifications & Compliance | ITLC INDIA PVT LTD',
  description: 'View the official certifications and recognitions of ITLC INDIA PVT LTD, including ISO 9001:2015, MSME, and Startup India credentials.',
}

const detailedCertificates = [
    {
        title: "ISO 9001:2015 Certified",
        description: "Certified for quality management systems in providing IT services, software development, and digital marketing solutions. This certification ensures that we meet international standards of quality and customer satisfaction.",
        image: "/ca/2.png",
        icon: <ShieldCheck className="h-12 w-12 text-primary" />
    },
    {
        title: "MSME Udyam Registered",
        description: "Registered under the Ministry of Micro, Small and Medium Enterprises, Government of India. This recognition empowers us to contribute significantly to the digital growth of the Indian economy.",
        image: "/ca/1.png",
        icon: <Building className="h-12 w-12 text-primary" />
    },
    {
        title: "Startup India Recognized",
        description: "Recognized by the Department for Promotion of Industry and Internal Trade (DPIIT), Startup India initiative. We are committed to innovation, development, and improvement of technology-driven products.",
        image: "/ca/3.png",
        icon: <Rocket className="h-12 w-12 text-primary" />
    },
    {
        title: "Made in India",
        description: "Proudly supporting the 'Make in India' vision by delivering indigenous software solutions and enterprise-grade systems designed and built locally with global standards.",
        image: "/ca/4.jpg",
        icon: <Star className="h-12 w-12 text-primary" />
    },
    {
        title: "Govt. Recognized Partner",
        description: "Authorized partner for various government digital transformation projects. We have a proven track record of delivering secure and scalable solutions for public sector initiatives.",
        image: "/ca/5.png",
        icon: <Briefcase className="h-12 w-12 text-primary" />
    }
];

export default function CertificatesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Our Certifications & <br /> <span className="text-primary">Official Recognitions</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80">
            Committed to excellence, quality, and government compliance. Verified credentials of ITLC INDIA PVT LTD.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid gap-24">
            {detailedCertificates.map((cert, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-6">
                  <div className="inline-block p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    {cert.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{cert.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Officially Verified & Authenticated</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Compliant with Indian Corporate Standards</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative p-8 bg-white rounded-3xl border border-slate-100 shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={300}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification CTA */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
          <div className="container max-w-screen-md mx-auto px-4 text-center space-y-8">
              <h2 className="text-3xl font-bold">Need Verification?</h2>
              <p className="text-muted-foreground">For enterprise partners and government bodies requiring physical verification or soft copies of our credentials, please reach out to our compliance department.</p>
              <Button asChild size="lg" className="rounded-full px-12 h-14 font-bold shadow-xl">
                  <Link href="/contact">Contact Compliance Team</Link>
              </Button>
          </div>
      </section>
    </div>
  );
}
