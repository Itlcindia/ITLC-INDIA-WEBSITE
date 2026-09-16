"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  FolderKanban,
  Search,
  Plus,
  Edit,
  Trash2,
  ExternalLink,
  RefreshCw,
  Loader2,
  Tag,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  client?: string | null;
  description: string;
  imageUrl: string;
  tags: string;
  sortOrder: number;
}

export default function AdminPortfolioPage() {
  const { toast } = useToast();
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    category: "Custom Development",
    client: "",
    description: "",
    tags: "Government, Security, Web App",
    imageUrl: "",
    sortOrder: 0,
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/portfolio");
      const data = await res.json();
      if (data.success) setItems(data.items || []);
    } catch {
      toast({ title: "Error", description: "Failed to load portfolio", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleOpenCreate = () => {
    setEditingItem(null);
    setFormData({
      title: "",
      category: "Custom Development",
      client: "",
      description: "",
      tags: "Enterprise, Web Solution",
      imageUrl: "/pot/f2.png",
      sortOrder: items.length + 1,
    });
    setSelectedFile(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: PortfolioItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      category: item.category,
      client: item.client || "",
      description: item.description,
      tags: item.tags,
      imageUrl: item.imageUrl,
      sortOrder: item.sortOrder,
    });
    setSelectedFile(null);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.category) {
      toast({ title: "Error", description: "Title and category are required.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const payload = new FormData();
      payload.append("title", formData.title);
      payload.append("category", formData.category);
      payload.append("client", formData.client);
      payload.append("description", formData.description);
      payload.append("tags", formData.tags);
      payload.append("sortOrder", String(formData.sortOrder));
      payload.append("imageUrl", formData.imageUrl);
      if (selectedFile) payload.append("imageFile", selectedFile);

      const url = editingItem ? `/api/admin/portfolio/${editingItem.id}` : `/api/portfolio`;
      const method = editingItem ? "PATCH" : "POST";

      const res = await fetch(url, { method, body: payload });
      const data = await res.json();

      if (data.success) {
        toast({
          title: editingItem ? "Case Study Updated" : "Case Study Created",
          description: `${formData.title} saved successfully.`,
        });
        setIsModalOpen(false);
        fetchItems();
      } else {
        toast({ title: "Failed", description: data.error || "Save failed", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Failed to save case study", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (item: PortfolioItem) => {
    if (!window.confirm(`Delete "${item.title}"?`)) return;
    try {
      const res = await fetch(`/api/admin/portfolio/${item.id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Deleted", description: "Case study removed." });
        fetchItems();
      }
    } catch {
      toast({ title: "Error", description: "Failed to delete item", variant: "destructive" });
    }
  };

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      (item.client && item.client.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              Work & Deployments
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Portfolio & Case Studies Manager
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage government projects, enterprise case studies, and client success stories shown on `/portfolio`.
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
            onClick={handleOpenCreate}
            className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 h-10 px-5 font-medium"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Case Study
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects by name, client, or category..."
            className="pl-10 h-10 rounded-xl border-slate-200 focus-visible:ring-blue-500 bg-slate-50/50"
          />
        </div>
      </div>

      {/* Portfolio Grid */}
      {loading ? (
        <div className="py-24 flex flex-col items-center justify-center text-slate-400 gap-3">
          <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
          <p className="text-sm font-medium">Loading portfolio case studies...</p>
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="py-20 text-center bg-white rounded-2xl border border-slate-200/80">
          <p className="text-sm text-slate-500">No case studies found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const tagList = item.tags.split(",").map((t) => t.trim()).filter(Boolean);

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-sm text-blue-700">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    {item.client && (
                      <div className="text-xs font-semibold text-slate-400 flex items-center gap-1 mb-1">
                        <Building className="w-3.5 h-3.5" />
                        {item.client}
                      </div>
                    )}
                    <h3 className="font-bold text-base text-slate-900 line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>

                    {tagList.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {tagList.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 bg-slate-50/60 border-t border-slate-100 flex items-center justify-end gap-1.5">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleOpenEdit(item)}
                    className="h-8 w-8 p-0 rounded-lg text-slate-600 hover:bg-slate-200"
                    title="Edit Case Study"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDelete(item)}
                    className="h-8 w-8 p-0 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">
                {editingItem ? "Edit Case Study" : "Add New Case Study"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Project Title *
                  </label>
                  <Input
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. UP Police Citizen Portal"
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
                    placeholder="e.g. Custom Development, SaaS Product"
                    className="rounded-xl h-11 border-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Client Name
                  </label>
                  <Input
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    placeholder="e.g. Uttar Pradesh Police"
                    className="rounded-xl h-11 border-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Tags (Comma separated)
                  </label>
                  <Input
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    placeholder="Government, Security, Web App"
                    className="rounded-xl h-11 border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Project Description
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Project Image (Upload or URL)
                </label>
                <div className="space-y-2">
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                    className="block w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer border border-slate-200 rounded-xl p-1"
                  />
                  <Input
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    placeholder="Or paste relative/absolute URL (e.g. /pot/f2.png)"
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
                  {editingItem ? "Update Case Study" : "Save Case Study"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
