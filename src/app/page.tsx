import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import Testimonials from "@/components/landing/testimonials";
import Clients from "@/components/landing/clients";
import CTA from "@/components/landing/cta";
import Partners from "@/components/landing/partners";
import Industries from "@/components/landing/industries";
import Portfolio from "@/components/landing/portfolio";
import Gallery from "@/components/landing/gallery";
import About from "@/components/landing/about";
import AiAutomationHighlight from "@/components/landing/ai-automation-highlight";
import ConstructionHighlight from "@/components/landing/construction-highlight";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ITLC INDIA PVT LTD | IT & AI Solutions for Modern Businesses',
  description: 'Welcome to ITLC INDIA PVT LTD. We deliver cutting-edge AI, SaaS, and enterprise software solutions to accelerate your growth and streamline operations.',
}

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <div className="relative z-10 space-y-0">
        <Services />
        <AiAutomationHighlight />
        <ConstructionHighlight />
        <About />
        <Industries />
        <Portfolio />
        <Gallery />
        <Clients />
        <Testimonials />
        <Partners />
        <CTA />
      </div>
    </div>
  );
}
