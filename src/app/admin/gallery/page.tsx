"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Image as ImageIcon,
  Search,
  Plus,
  Trash2,
  RefreshCw,
  Loader2,
  Tag,
  Upload,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  sortOrder: number;
  createdAt: string;
}

export default function AdminGalleryPage() {
  const { toast } = useToast();
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("ALL");

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Events");
  const [sortOrder, setSortOrder] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (categoryFilter !== "ALL") query.set("category", categoryFilter);
      const res = await fetch(`/api/gallery?${query.toString()}`);
      const data = await res.json();
      if (data.success) setItems(data.items || []);
    } catch {
      toast({ title: "Error", description: "Failed to load gallery items", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }, [categoryFilter, toast]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      toast({ title: "Error", description: "Photo title is required.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("sortOrder", String(sortOrder));
      formData.append("imageUrl", imageUrl);
      if (selectedFile) formData.append("imageFile", selectedFile);

      const res = await fetch("/api/gallery", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        toast({ title: "Success", description: "Photo added to gallery!" });
        setIsModalOpen(false);
        setTitle("");
        setImageUrl("");
        setSelectedFile(null);
        fetchItems();
      } else {
        toast({ title: "Failed", description: data.error || "Could not add photo", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Upload failed", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (item: GalleryItem) => {
    if (!window.confirm(`Delete "${item.title}" from gallery?`)) return;
    try {
      const res = await fetch(`/api/admin/gallery/${item.id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Deleted", description: "Photo removed from gallery." });
        fetchItems();
      }
    } catch {
      toast({ title: "Error", description: "Failed to delete photo", variant: "destructive" });
    }
  };

  const categories = ["ALL", "Events", "Office", "Team", "Projects"];

  return (
    <div className="space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              Media & Showcase
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Gallery & Moments Manager
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage company culture photos, corporate events, and project milestones shown on `/gallery`.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={fetchItems}
            disabled={loading}
            className="rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 h-10"
          >
            <RefreshCw className={cn("w-4 h-4 mr-2", loading && "animate-spin text-blue-600")} />
            Refresh
          </Button>

          <Button
            onClick={() => setIsModalOpen(true)}
            className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 h-10 px-5 font-medium"
          >
            <Plus className="w-4 h-4 mr-2" />
            Upload Photo
          </Button>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-semibold transition-all",
              categoryFilter === cat
                ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
            )}
          >
            {cat === "ALL" ? "All Photos" : cat}
          </button>
        ))}
      </div>

      {/* Photos Grid */}
      {loading ? (
        <div className="py-24 flex flex-col items-center justify-center text-slate-400 gap-3">
          <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
          <p className="text-sm font-medium">Loading gallery...</p>
        </div>
      ) : items.length === 0 ? (
        <div className="py-20 text-center bg-white rounded-2xl border border-slate-200/80">
          <p className="text-sm text-slate-500">No photos found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-sm text-slate-800">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between gap-2">
                <div className="font-semibold text-xs text-slate-900 truncate" title={item.title}>
                  {item.title}
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDelete(item)}
                  className="h-8 w-8 p-0 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-100 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">Add Photo to Gallery</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddItem} className="space-y-4 mt-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Photo Title *
                </label>
                <Input
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Annual Tech Symposium 2026"
                  className="rounded-xl h-11 border-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Events">Events</option>
                  <option value="Office">Office</option>
                  <option value="Team">Team</option>
                  <option value="Projects">Projects</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Image File (Upload or URL)
                </label>
                <div className="space-y-2">
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                    className="block w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer border border-slate-200 rounded-xl p-1"
                  />
                  <Input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Or paste image URL (e.g. /gallry/1.png)"
                    className="rounded-xl h-10 border-slate-200 text-xs"
                  />
                </div>
              </div>

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
                  className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white h-11 px-6 font-medium"
                >
                  {submitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  Add Photo
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
