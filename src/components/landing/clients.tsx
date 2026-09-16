
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const clients = [
  { name: 'Apex Inc.', hint: 'minimalist logo', image: "/cli/1.jpg" },
  { name: 'Quantum Corp', hint: 'abstract geometric logo', image: "/cli/3.jpg" },
  { name: 'Momentum Dynamics', hint: 'dynamic motion logo', image: "/cli/4.jpg" },
  { name: 'Celestial AI', hint: 'space themed logo', image: "/cli/5.jpg" },
  { name: 'Zenith Labs', hint: 'mountain peak logo', image: "/cli/6.jpg" },
  { name: 'Nova Systems', hint: 'star logo', image: "/cli/7.jpg" },
  { name: 'FusionWorks', hint: 'intersecting shapes logo', image: "/cli/8.png" },
  { name: 'Pinnacle Group', hint: 'peak logo', image: "/cli/9.webp" },
  { name: 'Echo Systems', hint: 'sound wave logo', image: "/cli/11.jpg" },
];

const duplicatedClients = [...clients, ...clients];

const titleVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Clients() {
  return (
    <motion.section 
      className="py-16 md:py-24 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div className="text-center space-y-4 mb-12" variants={titleVariants}>
          <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
            Our Clients Trust Us
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Our clients recognize us as a reliable ally to navigate the ever-evolving tech landscape.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
          variants={titleVariants}
        >
          <div className="flex w-max animate-scroll [animation-play-state:running] hover:[animation-play-state:paused]">
            {duplicatedClients.map((client, index) => (
              <div key={index} className="w-[200px] h-[100px] mx-4 flex-shrink-0 flex items-center justify-center p-4">
                <div className="relative group w-full h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/70 rounded-lg blur-sm opacity-0 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative w-full h-full flex items-center justify-center bg-card/80 backdrop-blur-md rounded-lg border border-border/50 shadow-sm">
                    <Image
                      src={client.image}
                      alt={`${client.name} Logo`}
                      width={120}
                      height={40}
                      className="object-contain"
                      data-ai-hint={client.hint}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="text-center mt-12" variants={titleVariants}>
          <p className="text-muted-foreground">Join 100+ businesses growing with ITLC INDIA PVT LTD.</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
