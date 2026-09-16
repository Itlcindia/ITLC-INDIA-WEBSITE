
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  image?: string;
  video?: string;
  imageHint: string;
  tags: string[];
};

const portfolioItems: PortfolioItem[] = [
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
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const titleVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Portfolio() {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
        >
          <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">Our Work</h2>
          <p className="max-w-3xl text-[#5f6f86] md:text-xl leading-relaxed">
            We take pride in the solutions we've built. Here's a selection of projects that showcase our expertise and commitment to quality.
          </p>
        </motion.div>
        
        <motion.div 
          className="space-y-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={containerVariants}
        >
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={item.title} 
              variants={itemVariants}
              className="group"
            >
              <div className="rounded-[40px] p-8 md:p-12 border border-border/30 transition-all duration-500 ease-in-out hover:shadow-2xl hover:border-primary/20 bg-background/30 backdrop-blur-sm">
                <div className={`grid gap-12 md:grid-cols-2 items-center`}>
                  <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-[40px] blur-3xl opacity-60 transition-all duration-500 ease-in-out group-hover:opacity-90"></div>
                    <div className="relative overflow-hidden rounded-[32px] shadow-2xl border-4 border-white transition-transform duration-700 ease-in-out group-hover:scale-[1.02]">
                      {item.video ? (
                        <video
                          src={item.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto object-cover"
                        />
                      ) : (
                        item.image && <Image
                          src={item.image}
                          alt={item.title}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                          data-ai-hint={item.imageHint}
                        />
                      )}
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="space-y-6">
                      <Badge variant="default" className="w-fit px-4 py-1.5 bg-gradient-to-r from-[#00b4ff] to-[#0077ff] text-white font-bold shadow-lg">
                        {item.category}
                      </Badge>
                      <h3 className="font-bold text-3xl md:text-4xl tracking-tight text-[#0b1f3a] leading-tight transition-colors group-hover:text-primary">{item.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="bg-slate-100 hover:bg-primary hover:text-white transition-colors cursor-default">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button asChild size="lg" className="rounded-full px-12 h-14 text-lg font-bold shadow-2xl">
            <Link href="/portfolio">View Our Full Portfolio</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
