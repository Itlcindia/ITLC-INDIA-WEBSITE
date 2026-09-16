import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Tag,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import prisma from "@/lib/prisma";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await prisma.blog.findUnique({ where: { slug } });
  if (!blog) return { title: "Blog Not Found | ITLC India" };

  return {
    title: `${blog.title} | ITLC India Technical Publication`,
    description: blog.excerpt || blog.title,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await prisma.blog.findUnique({
    where: { slug },
  });

  if (!blog || !blog.isPublished) {
    notFound();
  }

  // Fetch related articles
  const relatedArticles = await prisma.blog.findMany({
    where: {
      isPublished: true,
      slug: { not: slug },
      category: blog.category,
    },
    take: 3,
    orderBy: { publishedAt: "desc" },
  });

  const getReadTime = (content: string) => {
    const words = content.trim().split(/\s+/).length;
    return `${Math.max(2, Math.ceil(words / 200))} min read`;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Breadcrumb Header */}
      <section className="pt-32 pb-8 md:pt-36 border-b border-slate-100 bg-slate-50/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to All Publications
          </Link>

          <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
            <span className="font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              {blog.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {getReadTime(blog.content)}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {blog.excerpt}
            </p>
          )}

          {/* Author Badge */}
          <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                {blog.author.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{blog.author}</div>
                <div className="text-xs text-slate-500">{blog.authorRole || "Technical Contributor"}</div>
              </div>
            </div>

            <div className="text-xs text-slate-400 font-medium">
              ITLC India Knowledge Series
            </div>
          </div>
        </div>
      </section>

      {/* Main Cover Image & Article Body */}
      <article className="py-10 md:py-14 container max-w-4xl mx-auto px-4 sm:px-6">
        {/* Banner Image */}
        {blog.coverImageUrl && (
          <div className="rounded-3xl overflow-hidden mb-12 border border-slate-200 shadow-md">
            <img
              src={blog.coverImageUrl}
              alt={blog.title}
              className="w-full h-80 sm:h-[420px] object-cover"
            />
          </div>
        )}

        {/* Formatted Content */}
        <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-base prose-blockquote:border-l-blue-600 prose-blockquote:bg-blue-50/50 prose-blockquote:py-2 prose-blockquote:px-5 prose-blockquote:rounded-r-xl prose-blockquote:text-slate-700 prose-blockquote:italic">
          {blog.content.split("\n\n").map((para: string, idx: number) => {
            const trimmed = para.trim();
            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl font-bold text-slate-900 mt-8 mb-3">
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }
            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl font-black text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100">
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }
            if (trimmed.startsWith("> ")) {
              return (
                <blockquote key={idx} className="border-l-4 border-blue-600 bg-blue-50/60 p-4 rounded-r-2xl my-6 text-slate-800 text-sm font-medium italic">
                  {trimmed.replace("> ", "")}
                </blockquote>
              );
            }
            if (trimmed.startsWith("- ")) {
              const items = trimmed.split("\n").map((line: string) => line.replace(/^[*-]\s*/, ""));
              return (
                <ul key={idx} className="space-y-2 my-4 pl-2">
                  {items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx} className="my-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Post-Article Author Bio Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white font-bold text-xl flex items-center justify-center shrink-0 shadow-md">
            {blog.author.slice(0, 2).toUpperCase()}
          </div>
          <div className="space-y-1.5 text-center sm:text-left flex-1">
            <div className="text-sm font-bold text-slate-900">{blog.author}</div>
            <div className="text-xs font-semibold text-blue-600">{blog.authorRole || "Technical Team Lead"}</div>
            <p className="text-xs text-slate-500 leading-relaxed pt-1">
              Part of the ITLC India core engineering research division specializing in enterprise cloud architectures, AI automation workflows, and secure multi-tier systems.
            </p>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Related Publications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel: any) => (
                <Link
                  key={rel.id}
                  href={`/blogs/${rel.slug}`}
                  className="bg-white rounded-2xl border border-slate-200/80 p-5 hover:border-blue-300 hover:shadow-lg transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-md">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-2.5 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span>{new Date(rel.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                    <span className="font-semibold text-blue-600 flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                      Read <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
