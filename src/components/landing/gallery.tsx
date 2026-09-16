"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import galleryData from '@/app/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const { gallery: galleryImages } = galleryData;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Gallery() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
            Our Gallery
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5f6f86]">
            A glimpse into our culture, team, and workspace.
          </p>
        </div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {galleryImages.slice(0, 6).map((image) => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-2xl"
              variants={itemVariants}
            >
              <Image
                src={image.src}
                alt={image.hint}
                width={image.width}
                height={image.height}
                className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint={image.hint}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-[#00b4ff] to-[#0077ff] text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all">
            <Link href="/gallery">View Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
