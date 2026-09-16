"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  BookOpen,
  Search,
  Plus,
  Edit,
  Trash2,
  ExternalLink,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Loader2,
  Sparkles,
  Calendar,
  Eye,
  Check,
  FileText,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface Blog {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt?: string | null;
  content: string;
  coverImageUrl?: string | null;
  author: string;
  authorRole?: string | null;
  isPublished: boolean;
  publishedAt: string;
  createdAt: string;
}

export default function AdminBlogsPage() {
  const { toast } = useToast();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "AI & Automation",
    excerpt: "",
    content: "",
    coverImageUrl: "",
    author: "ITLC Editorial Team",
    authorRole: "Technical Lead",
    isPublished: true,
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Fetch Blogs
  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (search) query.set("q", search);

      const res = await fetch(`/api/admin/blogs?${query.toString()}`);
      const data = await res.json();
      if (data.success) {
        setBlogs(data.blogs || []);
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to load blogs",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Connection Error",
        description: "Could not connect to blog service",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [search, toast]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchBlogs();
    }, 250);
    return () => clearTimeout(timer);
  }, [fetchBlogs]);

  // Open Create Modal
  const handleOpenCreate = () => {
    setEditingBlog(null);
    setFormData({
      title: "",
      slug: "",
      category: "AI & Automation",
      excerpt: "",
      content: "## Overview\n\nWrite your technical article content here.\n\n### Key Takeaways\n- Point 1\n- Point 2\n\n### Practical Implementation\nDetailed explanation...",
      coverImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      author: "ITLC Editorial Team",
      authorRole: "Technical Lead",
      isPublished: true,
    });
    setSelectedFile(null);
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEdit = (b: Blog) => {
    setEditingBlog(b);
    setFormData({
      title: b.title,
      slug: b.slug,
      category: b.category,
      excerpt: b.excerpt || "",
      content: b.content,
      coverImageUrl: b.coverImageUrl || "",
      author: b.author,
      authorRole: b.authorRole || "Technical Lead",
      isPublished: b.isPublished,
    });
    setSelectedFile(null);
    setIsModalOpen(true);
  };

  // Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      toast({
        title: "Validation Error",
        description: "Title and content are required.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const dataPayload = new FormData();
      dataPayload.append("title", formData.title);
      dataPayload.append("slug", formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"));
      dataPayload.append("category", formData.category);
      dataPayload.append("excerpt", formData.excerpt);
      dataPayload.append("content", formData.content);
      dataPayload.append("author", formData.author);
      dataPayload.append("authorRole", formData.authorRole);
      dataPayload.append("isPublished", formData.isPublished ? "true" : "false");
      dataPayload.append("coverImageUrl", formData.coverImageUrl);

      if (selectedFile) {
        dataPayload.append("coverImage", selectedFile);
      }

      const url = editingBlog
        ? `/api/admin/blogs/${editingBlog.id}`
        : `/api/admin/blogs`;
      const method = editingBlog ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        body: dataPayload,
      });

      const data = await res.json();
      if (data.success) {
        toast({
          title: editingBlog ? "Article Updated" : "Article Published",
          description: `${formData.title} saved successfully.`,
        });
        setIsModalOpen(false);
        fetchBlogs();
      } else {
        toast({
          title: "Failed",
          description: data.error || "Failed to save blog",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "An error occurred while saving article",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Toggle Publish
  const handleTogglePublish = async (blog: Blog) => {
    try {
      const res = await fetch(`/api/admin/blogs/${blog.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isPublished: !blog.isPublished }),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: !blog.isPublished ? "Article Published" : "Article Moved to Drafts",
          description: `${blog.title} is now ${!blog.isPublished ? "Public" : "Draft"}.`,
        });
        fetchBlogs();
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to update article status",
        variant: "destructive",
      });
    }
  };

  // Delete
  const handleDelete = async (blog: Blog) => {
    if (!window.confirm(`Are you sure you want to permanently delete "${blog.title}"?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/blogs/${blog.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "Article Deleted",
          description: "Publication removed from database.",
        });
        fetchBlogs();
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to delete article",
        variant: "destructive",
      });
    }
  };

  const totalCount = blogs.length;
  const publishedCount = blogs.filter((b) => b.isPublished).length;
  const draftCount = blogs.filter((b) => !b.isPublished).length;

  return (
    <div className="space-y-8 font-sans">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              Content & Editorial
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Blog & Publications CMS
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Publish technical whitepapers, engineering insights, and company thought leadership articles.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={fetchBlogs}
            disabled={loading}
            className="rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 h-10"
          >
            <RefreshCw className={cn("w-4 h-4 mr-2", loading && "animate-spin text-blue-600")} />
            Refresh
          </Button>

          <Button
            onClick={handleOpenCreate}
            className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 h-10 px-5 font-medium transition-all"
          >
            <Plus className="w-4 h-4 mr-2" />
            Write New Article
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">{totalCount}</div>
            <div className="text-xs font-medium text-slate-500">Total Articles Written</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-600">{publishedCount}</div>
            <div className="text-xs font-medium text-slate-500">Live & Published</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-600">{draftCount}</div>
            <div className="text-xs font-medium text-slate-500">Drafts / In Progress</div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search publications by title or author..."
            className="pl-10 h-10 rounded-xl border-slate-200 focus-visible:ring-blue-500 bg-slate-50/50"
          />
        </div>
      </div>

      {/* Articles Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            <p className="text-sm font-medium">Loading articles...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="py-20 text-center px-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-100">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">No Articles Published</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
              Write and publish your first article to share tech insights with visitors.
            </p>
            <Button onClick={handleOpenCreate} className="rounded-xl bg-blue-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Write Article
            </Button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50/80 text-xs uppercase font-semibold text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Article</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Author</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {blogs.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-4 sm:px-6">
                      <div className="flex items-center gap-3">
                        {b.coverImageUrl ? (
                          <img
                            src={b.coverImageUrl}
                            alt=""
                            className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                            IT
                          </div>
                        )}
                        <div>
                          <div className="font-bold text-slate-900 line-clamp-1 max-w-xs sm:max-w-md">
                            {b.title}
                          </div>
                          <div className="text-xs text-slate-400 font-mono mt-0.5">
                            /blogs/{b.slug}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                        {b.category}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-xs font-medium text-slate-700">
                      {b.author}
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-500">
                      {new Date(b.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="py-4 px-4">
                      {b.isPublished ? (
                        <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 gap-1 rounded-lg">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Published
                        </Badge>
                      ) : (
                        <Badge className="bg-amber-50 text-amber-700 border-amber-200 gap-1 rounded-lg">
                          <FileText className="w-3 h-3 text-amber-600" />
                          Draft
                        </Badge>
                      )}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {/* View live article */}
                        {b.isPublished && (
                          <Button
                            asChild
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 rounded-lg text-blue-600 hover:bg-blue-50"
                            title="View Public Post"
                          >
                            <Link href={`/blogs/${b.slug}`} target="_blank">
                              <Eye className="w-4 h-4" />
                            </Link>
                          </Button>
                        )}

                        {/* Toggle Status */}
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleTogglePublish(b)}
                          title={b.isPublished ? "Unpublish to Draft" : "Publish"}
                          className={cn(
                            "h-8 w-8 p-0 rounded-lg",
                            b.isPublished ? "text-emerald-600 hover:bg-emerald-50" : "text-amber-600 hover:bg-amber-50"
                          )}
                        >
                          <Check className="w-4 h-4" />
                        </Button>

                        {/* Edit */}
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleOpenEdit(b)}
                          className="h-8 w-8 p-0 rounded-lg text-slate-600 hover:bg-slate-100"
                          title="Edit Article"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>

                        {/* Delete */}
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDelete(b)}
                          className="h-8 w-8 p-0 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                          title="Delete Article"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Write / Edit Article Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {editingBlog ? "Edit Article" : "Write New Technical Article"}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Compose your publication with markdown formatting and cover imagery.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Article Title *
                  </label>
                  <Input
                    required
                    value={formData.title}
                    onChange={(e) => {
                      const title = e.target.value;
                      setFormData({
                        ...formData,
                        title,
                        slug: formData.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 60),
                      });
                    }}
                    placeholder="e.g. Next-Gen Enterprise Micro-Frontends"
                    className="rounded-xl h-11 border-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Category *
                  </label>
                  <Input
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="e.g. AI & Automation, DevOps"
                    className="rounded-xl h-11 border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  URL Slug
                </label>
                <Input
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, "") })}
                  placeholder="e.g. next-gen-enterprise-micro-frontends"
                  className="rounded-xl h-10 border-slate-200 font-mono text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Summary / Excerpt (Shows in Card Previews)
                </label>
                <textarea
                  rows={2}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Brief 1-2 sentence overview of the article..."
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Full Article Content (Markdown format) *
                </label>
                <textarea
                  rows={8}
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write your article in markdown (## Heading 2, ### Heading 3, - Bullet item, > Quote)..."
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 leading-relaxed"
                />
              </div>

              {/* Cover Image */}
              <div className="pt-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Cover Banner Image (Upload or Image URL)
                </label>
                <div className="space-y-2">
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer border border-slate-200 rounded-xl p-1"
                  />
                  <Input
                    value={formData.coverImageUrl}
                    onChange={(e) => setFormData({ ...formData, coverImageUrl: e.target.value })}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="rounded-xl h-10 border-slate-200 text-xs"
                  />
                </div>
              </div>

              {/* Author & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Author Name
                  </label>
                  <Input
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="rounded-xl h-10 border-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Author Role
                  </label>
                  <Input
                    value={formData.authorRole}
                    onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
                    className="rounded-xl h-10 border-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Publish Status
                  </label>
                  <select
                    value={formData.isPublished ? "true" : "false"}
                    onChange={(e) => setFormData({ ...formData, isPublished: e.target.value === "true" })}
                    className="w-full h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="true">Published (Public)</option>
                    <option value="false">Draft (Internal)</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-100">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl border-slate-200 text-slate-600 h-11"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white h-11 px-6 font-medium shadow-md shadow-blue-500/20"
                >
                  {submitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  {editingBlog ? "Update Article" : "Publish Article"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
