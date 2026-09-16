
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from 'framer-motion';
import galleryData from '@/app/lib/placeholder-images.json';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

const { gallery: galleryImages } = galleryData;

type GalleryImage = {
  id: string;
  src: string;
  width: number;
  height: number;
  hint: string;
  category: string;
};

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Our Work Gallery
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
            Explore our latest projects, events and achievements
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background min-h-[600px]">
        <div className="container max-w-screen-xl mx-auto px-4">
          {/* Gallery Grid - Only render dynamic content after mounting to avoid hydration mismatch */}
          {mounted ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              <AnimatePresence>
                {galleryImages.map((image) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image.src}
                      alt={image.hint}
                      width={image.width}
                      height={image.height}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={image.hint}
                    />
                    <div className="absolute inset-0 bg-black/30 transition-colors duration-300 flex flex-col justify-end items-end p-4 space-y-1">
                      <Image 
                        src="/logo/lo.png" 
                        alt="ITLC Logo" 
                        width={40} 
                        height={14} 
                        className="brightness-0 invert object-contain opacity-60" 
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {/* Static placeholder to maintain layout structure during SSR */}
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-video bg-muted rounded-lg animate-pulse" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
          {selectedImage && (
            <Image
              src={selectedImage.src}
              alt={selectedImage.hint}
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg"
              data-ai-hint={selectedImage.hint}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
