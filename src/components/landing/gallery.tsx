"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import galleryData from "@/app/lib/placeholder-images.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface LandingGalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

const defaultGalleryImages: LandingGalleryItem[] = (galleryData.gallery || []).slice(0, 6).map((item, idx) => ({
  id: item.id || `ph_${idx}`,
  title: item.hint || `Gallery Photo ${idx + 1}`,
  imageUrl: item.src,
  category: item.category || "Events",
}));

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
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function Gallery() {
  const [items, setItems] = useState<LandingGalleryItem[]>(defaultGalleryImages);

  useEffect(() => {
    async function loadLatestPhotos() {
      try {
        const res = await fetch("/api/gallery", { cache: "no-store" });
        const data = await res.json();
        if (data.success && Array.isArray(data.items) && data.items.length > 0) {
          const formatted = data.items.slice(0, 6).map((item: any, idx: number) => ({
            id: item.id || `dyn_${idx}`,
            title: item.title || "Gallery Moment",
            imageUrl: item.imageUrl,
            category: item.category || "Events",
          }));
          setItems(formatted);
        }
      } catch (err) {
        console.warn("Notice: Landing gallery fetch used placeholder fallback:", err);
      }
    }

    loadLatestPhotos();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Life at ITLC
          </div>
          <h2 className="font-bold text-3xl tracking-tight sm:text-4xl text-slate-900">
            Moments & Corporate Showcase
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
            A glimpse into our vibrant company culture, tech symposiums, milestones, and high-energy teams.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {items.map((image) => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 aspect-video flex flex-col justify-end"
              variants={itemVariants}
            >
              <img
                src={image.imageUrl}
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/logo/lo.png";
                }}
              />

              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                    {image.category}
                  </span>
                  <Image
                    src="/logo/lo.png"
                    alt="ITLC Logo"
                    width={32}
                    height={12}
                    className="brightness-0 invert object-contain opacity-80"
                  />
                </div>
                <div className="text-sm font-semibold tracking-tight truncate">
                  {image.title}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 shadow-md shadow-blue-500/20 hover:shadow-lg transition-all"
          >
            <Link href="/gallery">Explore Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
