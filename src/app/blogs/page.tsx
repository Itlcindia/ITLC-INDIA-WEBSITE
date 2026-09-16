"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Calendar,
  User,
  Clock,
  ArrowRight,
  Search,
  Sparkles,
  ChevronRight,
  Loader2,
  Tag,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import PolygonHeroBackground from "@/components/ui/polygon-hero-background";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content: string;
  coverImageUrl?: string | null;
  category: string;
  author: string;
  authorRole?: string | null;
  isPublished: boolean;
  publishedAt: string;
}

export default function BlogsDirectoryPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  useEffect(() => {
    async function loadBlogs() {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        if (data.success) {
          setBlogs(data.blogs || []);
        }
      } catch (err) {
        console.error("Failed to load blog directory:", err);
      } finally {
        setLoading(false);
      }
    }
    loadBlogs();
  }, []);

  const categories = ["ALL", ...Array.from(new Set(blogs.map((b) => b.category)))];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "ALL" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      (blog.excerpt && blog.excerpt.toLowerCase().includes(search.toLowerCase())) ||
      blog.author.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const gridBlogs = filteredBlogs.length > 1 ? filteredBlogs.slice(1) : [];

  // Estimate read time
  const getReadTime = (content: string) => {
    const words = content.trim().split(/\s+/).length;
    return `${Math.max(2, Math.ceil(words / 200))} min read`;
  };

  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Hero Header */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-14 border-b border-slate-800/80 bg-[#060813] text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-6 shadow-sm backdrop-blur-sm">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            Knowledge Base & Technical Insights
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-[1.15]">
            Engineering, AI &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
              Industry Insights
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Deep technical explorations, architecture breakdowns, AI developments, and operational case studies from the engineering team at ITLC India.
          </p>

          {/* Search Bar */}
          <div className="mt-10 max-w-xl mx-auto flex items-center gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles by title, topic, or keyword..."
                className="pl-10 h-11 rounded-xl border-none shadow-none focus-visible:ring-0 text-sm"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-semibold transition-all",
                  selectedCategory === cat
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                )}
              >
                {cat === "ALL" ? "All Categories" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-20 container max-w-6xl mx-auto px-4 sm:px-6">
        {loading ? (
          <div className="py-24 flex flex-col items-center justify-center text-slate-400 gap-3">
            <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
            <p className="text-sm font-medium">Loading technical publications...</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="py-20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-100">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No Articles Found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              No published articles match your search or filter query. Try selecting another category.
            </p>
          </div>
        ) : (
          <div className="space-y-14">
            {/* Spotlight Featured Post */}
            {featuredBlog && (
              <div className="group relative bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[320px] overflow-hidden bg-slate-100">
                  <img
                    src={
                      featuredBlog.coverImageUrl ||
                      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                    }
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold text-white uppercase tracking-wider bg-blue-600/90 backdrop-blur-md px-3 py-1 rounded-full shadow-md">
                      Featured Publication
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <span className="font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                        {featuredBlog.category}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {getReadTime(featuredBlog.content)}
                      </span>
                    </div>

                    <Link href={`/blogs/${featuredBlog.slug}`}>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors leading-snug">
                        {featuredBlog.title}
                      </h2>
                    </Link>

                    <p className="text-sm text-slate-600 mt-3.5 leading-relaxed line-clamp-3">
                      {featuredBlog.excerpt}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">{featuredBlog.author}</div>
                      <div className="text-[11px] text-slate-400">{featuredBlog.authorRole || "Author"}</div>
                    </div>

                    <Button
                      asChild
                      className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs h-10 px-5 shadow-md shadow-blue-500/20"
                    >
                      <Link href={`/blogs/${featuredBlog.slug}`}>
                        Read Article <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Grid of Remaining Articles */}
            {gridBlogs.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Latest Publications
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {gridBlogs.map((blog) => (
                    <article
                      key={blog.id}
                      className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col overflow-hidden group"
                    >
                      {/* Thumbnail */}
                      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                        <img
                          src={
                            blog.coverImageUrl ||
                            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
                          }
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-sm">
                            {blog.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1 justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                            <span>
                              {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                            <span>•</span>
                            <span>{getReadTime(blog.content)}</span>
                          </div>

                          <Link href={`/blogs/${blog.slug}`}>
                            <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                              {blog.title}
                            </h4>
                          </Link>

                          <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                            {blog.excerpt}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                          <div className="text-xs font-semibold text-slate-700 truncate max-w-[150px]">
                            {blog.author}
                          </div>

                          <Link
                            href={`/blogs/${blog.slug}`}
                            className="inline-flex items-center text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform"
                          >
                            Read More <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
