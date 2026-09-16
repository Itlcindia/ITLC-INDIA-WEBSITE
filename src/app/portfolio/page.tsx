import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | ITLC INDIA PVT LTD',
  description: 'Explore ITLC INDIA PVT LTD\'s successful projects in government portals, enterprise ERP systems, health-tech solutions, and AI integrations.',
}

const portfolioItems = [
  {
    title: 'UP Police Citizen Portal – Custom Government Web Solution',
    category: 'Custom Development',
    description: 'A comprehensive and secure citizen portal built for the UP Police, facilitating seamless online services, report tracking, and improved transparency for the public.',
    image: '/pot/f2.png',
    imageHint: 'government web portal interface design',
    tags: ['Government', 'Security', 'Web App',]
  },
  {
    title: 'MP POLICE CITIZEN PORTAL',
    category: 'Custom Development',
    description: 'The Online View FIR service allows citizens to access and view registered First Information Reports (FIRs) online from anywhere, ensuring transparency tracking.',
    image: '/pot/12.png',
    imageHint: 'mp poolice citizen portal',
    tags: ['Web App', 'UI/UX', 'Mobile App'],
  },
  {
    title: 'Sugar Industry Government Portal — IT Solution Project',
    category: 'Custom Development',
    description: 'Client: Uttar Pradesh State Sugar Corporation Ltd. Project Type: Government Enterprise System. Services Delivered: ✔ Annual Maintenance Contract (AMC) Support for 23 Sugar Mills',
    image: '/pot/f3.png',
    imageHint: 'government sugar industry portal',
    tags: ['Government', 'Enterprise'],
  },
  {
    title: '🎓 Government Training Council – IT Support & Helpdesk Solution',
    category: 'IT Support & Services',
    description: 'IT infrastructure support, helpdesk/call center setup, query management system, technical monitoring, and server–network maintenance.',
    image: '/pot/f4.png',
    imageHint: 'government it support office',
    tags: ['Government', 'IT Support', 'Helpdesk'],
  },
  {
    title: 'AI-Powered Sales CRM',
    category: 'SaaS Product',
    description: 'A comprehensive CRM platform with AI-driven lead scoring and sales forecasting to boost team productivity.',
    image: '/work/1.png',
    imageHint: 'crm dashboard',
    tags: ['SaaS', 'AI', 'Web App'],
  },
  {
    title: 'Enterprise ERP System',
    category: 'Custom Development',
    description: 'A bespoke Enterprise Resource Planning system built to streamline operations for a large manufacturing client.',
    image: '/work/2.png',
    imageHint: 'data analytics dashboard',
    tags: ['Web App', 'ERP', 'B2B'],
  },
  {
    title: 'HealthTech UI/UX Overhaul',
    category: 'UI/UX Design',
    description: 'Complete redesign of a health-tech platform, focusing on user-centric design to improve patient engagement.',
    image: '/work/3.png',
    imageHint: 'user interface design',
    tags: ['UI/UX', 'Healthcare', 'Design'],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Work</h1>
              <p className="max-w-[85%] leading-normal text-white/80 sm:text-lg sm:leading-7">
                We take pride in the solutions we've built. Here's a selection of projects that showcase our expertise and commitment to quality.
              </p>
            </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <Card key={item.title} className="overflow-hidden flex flex-col shadow-lg border-border/30 hover:border-primary transition-all duration-300">
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  data-ai-hint={item.imageHint}
                />
              </div>
              <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="font-headline text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground flex-grow text-sm leading-relaxed">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="bg-[#0090ff] text-white hover:bg-[#0090ff]/90"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
