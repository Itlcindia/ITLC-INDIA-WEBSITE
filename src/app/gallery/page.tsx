"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import galleryData from "@/app/lib/placeholder-images.json";
import PolygonHeroBackground from "@/components/ui/polygon-hero-background";
import { Loader2 } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  sortOrder?: number;
}

const defaultGalleryItems: GalleryItem[] = (galleryData.gallery || []).map((img, idx) => ({
  id: img.id || `ph_${idx}`,
  title: img.hint || `Gallery Photo ${idx + 1}`,
  imageUrl: img.src,
  category: img.category || "Events",
}));

const categories = ["ALL", "Events", "Office", "Team", "Projects"];

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>(defaultGalleryItems);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let isCancelled = false;
    async function fetchGallery() {
      setLoading(true);
      try {
        const query = selectedCategory !== "ALL" ? `?category=${encodeURIComponent(selectedCategory)}` : "";
        const res = await fetch(`/api/gallery${query}`, { cache: "no-store" });
        const data = await res.json();
        if (!isCancelled && data.success && Array.isArray(data.items) && data.items.length > 0) {
          setItems(data.items);
        }
      } catch (err) {
        console.warn("Notice: Gallery fetch fallback to pre-seeded items:", err);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    fetchGallery();
    return () => {
      isCancelled = true;
    };
  }, [selectedCategory]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20 mb-3 text-blue-200">
            Moments & Showcase
          </span>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Our Work & Life Gallery
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/80">
            Explore our company culture, corporate conferences, tech milestones, and team celebrations.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-white/10 hover:bg-white/20 border-white/30 text-white font-medium px-6">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-slate-50 min-h-[650px]">
        <div className="container max-w-screen-xl mx-auto px-4">
          {/* Categories Pill Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat === "ALL" ? "All Photos" : cat}
              </button>
            ))}
          </div>

          {/* Loading Indicator */}
          {loading && (
            <div className="py-6 flex items-center justify-center gap-2 text-sm text-slate-500">
              <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
              <span>Updating gallery...</span>
            </div>
          )}

          {/* Gallery Grid */}
          {mounted ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence>
                {items.map((image) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all cursor-pointer aspect-video flex flex-col"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.imageUrl}
                      alt={image.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/logo/lo.png";
                      }}
                    />

                    {/* Gradient Overlay & Info */}
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
                          className="brightness-0 invert object-contain opacity-75"
                        />
                      </div>
                      <div className="text-sm font-semibold tracking-tight drop-shadow-sm truncate">
                        {image.title}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-video bg-slate-200 rounded-2xl animate-pulse" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-2 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          {selectedImage && (
            <div className="flex flex-col gap-3">
              <div className="relative max-h-[75vh] w-full flex items-center justify-center bg-black/50 rounded-2xl overflow-hidden">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>
              <div className="px-4 py-2 flex items-center justify-between text-white">
                <div>
                  <h4 className="font-semibold text-base">{selectedImage.title}</h4>
                  <span className="text-xs text-slate-400">{selectedImage.category}</span>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSelectedImage(null)}
                  className="rounded-full border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
