"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Layers,
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
  Lock,
  Globe,
  Check,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  icon?: string | null;
  features: string;
  directLoginUrl?: string | null;
  externalWebsiteUrl?: string | null;
  demoUrl?: string | null;
  isLive: boolean;
  sortOrder: number;
  createdAt: string;
}

export default function AdminProductsPage() {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    category: "Enterprise Software",
    tagline: "",
    description: "",
    icon: "Layers",
    featuresText: "",
    directLoginUrl: "/api/auth/login",
    externalWebsiteUrl: "",
    demoUrl: "/contact",
    isLive: true,
    sortOrder: 0,
  });

  // Fetch Products
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (search) query.set("q", search);

      const res = await fetch(`/api/admin/products?${query.toString()}`);
      const data = await res.json();
      if (data.success) {
        setProducts(data.products || []);
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to load products",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Connection Error",
        description: "Could not connect to products database",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [search, toast]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts();
    }, 250);
    return () => clearTimeout(timer);
  }, [fetchProducts]);

  // Open Create Modal
  const handleOpenCreate = () => {
    setEditingProduct(null);
    setFormData({
      name: "",
      slug: "",
      category: "Enterprise Software",
      tagline: "",
      description: "",
      icon: "Layers",
      featuresText: "Automated Workflow Engine\nReal-time Analytics Dashboard\nRole-Based Access Control (RBAC)\nSecure Cloud Data Backup",
      directLoginUrl: "/api/auth/login",
      externalWebsiteUrl: "https://",
      demoUrl: "/contact",
      isLive: true,
      sortOrder: products.length + 1,
    });
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEdit = (p: Product) => {
    setEditingProduct(p);

    let featLines = "";
    try {
      const parsed = JSON.parse(p.features);
      if (Array.isArray(parsed)) {
        featLines = parsed.join("\n");
      } else {
        featLines = p.features;
      }
    } catch {
      featLines = p.features;
    }

    setFormData({
      name: p.name,
      slug: p.slug,
      category: p.category,
      tagline: p.tagline,
      description: p.description,
      icon: p.icon || "Layers",
      featuresText: featLines,
      directLoginUrl: p.directLoginUrl || "/api/auth/login",
      externalWebsiteUrl: p.externalWebsiteUrl || "",
      demoUrl: p.demoUrl || "/contact",
      isLive: p.isLive,
      sortOrder: p.sortOrder,
    });
    setIsModalOpen(true);
  };

  // Submit Form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.category) {
      toast({
        title: "Validation Error",
        description: "Product name and category are required.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const featuresArray = formData.featuresText
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

      const payload = {
        name: formData.name,
        slug: formData.slug || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        category: formData.category,
        tagline: formData.tagline,
        description: formData.description,
        icon: formData.icon,
        features: featuresArray,
        directLoginUrl: formData.directLoginUrl,
        externalWebsiteUrl: formData.externalWebsiteUrl,
        demoUrl: formData.demoUrl,
        isLive: formData.isLive,
        sortOrder: formData.sortOrder,
      };

      const url = editingProduct
        ? `/api/admin/products/${editingProduct.id}`
        : `/api/admin/products`;
      const method = editingProduct ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        toast({
          title: editingProduct ? "Product Updated" : "Product Created",
          description: `${formData.name} saved successfully.`,
        });
        setIsModalOpen(false);
        fetchProducts();
      } else {
        toast({
          title: "Failed",
          description: data.error || "Failed to save product",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "An error occurred while saving product",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Toggle Live Status
  const handleToggleLive = async (product: Product) => {
    try {
      const res = await fetch(`/api/admin/products/${product.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isLive: !product.isLive }),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: !product.isLive ? "Product Published" : "Product Hidden",
          description: `${product.name} is now ${!product.isLive ? "Live" : "Draft"}.`,
        });
        fetchProducts();
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to update product status",
        variant: "destructive",
      });
    }
  };

  // Delete Product
  const handleDelete = async (product: Product) => {
    if (!window.confirm(`Are you sure you want to delete ${product.name}?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/products/${product.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "Product Deleted",
          description: `${product.name} has been removed.`,
        });
        fetchProducts();
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to delete product",
        variant: "destructive",
      });
    }
  };

  const totalCount = products.length;
  const liveCount = products.filter((p) => p.isLive).length;

  return (
    <div className="space-y-8 font-sans">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              Enterprise Suite
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Products & SaaS Suite Management
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage software product listings, configure direct workspace login, and external subdomain portals.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={fetchProducts}
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
            Add New Product
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">{totalCount}</div>
            <div className="text-xs font-medium text-slate-500">Total Software Products</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-600">{liveCount}</div>
            <div className="text-xs font-medium text-slate-500">Active & Live on Website</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">Enabled</div>
            <div className="text-xs font-medium text-slate-500">Direct In-Place Login</div>
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
            placeholder="Search products by title, category, or keyword..."
            className="pl-10 h-10 rounded-xl border-slate-200 focus-visible:ring-blue-500 bg-slate-50/50"
          />
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            <p className="text-sm font-medium">Loading products catalogue...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="py-20 text-center px-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-100">
              <Layers className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">No Products Configured</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
              Add your first software product to show in the navbar and public showcase page.
            </p>
            <Button onClick={handleOpenCreate} className="rounded-xl bg-blue-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50/80 text-xs uppercase font-semibold text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Product Name</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">External Portal URL</th>
                  <th className="py-3.5 px-4">Direct Login</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {products.map((prod) => (
                  <tr key={prod.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-4 sm:px-6">
                      <div className="font-bold text-slate-900 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{prod.name}</span>
                      </div>
                      <div className="text-xs text-slate-500 truncate max-w-xs mt-0.5">
                        {prod.tagline}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                        {prod.category}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-xs">
                      {prod.externalWebsiteUrl ? (
                        <a
                          href={prod.externalWebsiteUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 hover:underline max-w-[200px] truncate"
                        >
                          <Globe className="w-3.5 h-3.5 shrink-0" />
                          <span>{prod.externalWebsiteUrl}</span>
                          <ExternalLink className="w-3 h-3 shrink-0" />
                        </a>
                      ) : (
                        <span className="text-slate-400 italic">None</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-xs">
                      <span className="inline-flex items-center gap-1 text-purple-700 font-semibold bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100">
                        <Lock className="w-3 h-3" />
                        In-Place
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      {prod.isLive ? (
                        <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 gap-1 rounded-lg">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Live
                        </Badge>
                      ) : (
                        <Badge className="bg-slate-100 text-slate-600 border-slate-200 gap-1 rounded-lg">
                          <XCircle className="w-3 h-3 text-slate-400" />
                          Draft
                        </Badge>
                      )}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleToggleLive(prod)}
                          title={prod.isLive ? "Set to Draft" : "Make Live"}
                          className={cn(
                            "h-8 w-8 p-0 rounded-lg",
                            prod.isLive ? "text-emerald-600 hover:bg-emerald-50" : "text-slate-400 hover:bg-slate-100"
                          )}
                        >
                          <Check className="w-4 h-4" />
                        </Button>

                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleOpenEdit(prod)}
                          className="h-8 w-8 p-0 rounded-lg text-slate-600 hover:bg-slate-100"
                          title="Edit Product"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>

                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDelete(prod)}
                          className="h-8 w-8 p-0 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                          title="Delete Product"
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

      {/* Create / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {editingProduct ? "Edit Product" : "Add New Software Product"}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Configure product details, dual login links, and core capabilities.
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Product Name *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. ITLC Smart HRMS"
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
                    placeholder="e.g. HR & Payroll, Sales CRM, ERP"
                    className="rounded-xl h-11 border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  App Icon / Symbol
                </label>
                <select
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  className="w-full h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Calculator">Calculator (Accounting & Finance)</option>
                  <option value="Users">Users (HRMS & Payroll)</option>
                  <option value="TrendingUp">TrendingUp (CRM & Sales)</option>
                  <option value="Layers">Layers (Enterprise ERP)</option>
                  <option value="PenTool">PenTool (Digital Sign & Legal)</option>
                  <option value="Bot">Bot (AI Studio & Chatbot)</option>
                  <option value="FileText">FileText (Document Vault & OCR)</option>
                  <option value="CheckSquare">CheckSquare (Projects & Kanban)</option>
                  <option value="Repeat">Repeat (Subscriptions & Billing)</option>
                  <option value="HardHat">HardHat (Infra Construction)</option>
                  <option value="GraduationCap">GraduationCap (Student Academy)</option>
                  <option value="ShoppingCart">ShoppingCart (Point of Sale)</option>
                  <option value="Globe">Globe (Web & Cloud SaaS)</option>
                  <option value="Shield">Shield (Security & Compliance)</option>
                  <option value="Zap">Zap (Workflows & Automation)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Tagline *
                </label>
                <Input
                  required
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  placeholder="e.g. Smart Biometric Attendance & Payroll Automation"
                  className="rounded-xl h-11 border-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Detailed description of what this software solves..."
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Core Capabilities / Features (One per line)
                </label>
                <textarea
                  rows={4}
                  value={formData.featuresText}
                  onChange={(e) => setFormData({ ...formData, featuresText: e.target.value })}
                  placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Card Action URLs: Sign In (Bottom-Left) & View (Bottom-Right) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center justify-between">
                    <span>Sign In URL (Bottom-Left)</span>
                    <span className="text-[10px] text-blue-600 lowercase font-normal">sign in button</span>
                  </label>
                  <Input
                    value={formData.directLoginUrl}
                    onChange={(e) => setFormData({ ...formData, directLoginUrl: e.target.value })}
                    placeholder="https://hrms.itlcindia.com/login"
                    className="rounded-xl h-11 border-slate-200 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center justify-between">
                    <span>View URL (Bottom-Right)</span>
                    <span className="text-[10px] text-slate-500 lowercase font-normal">view button</span>
                  </label>
                  <Input
                    value={formData.externalWebsiteUrl}
                    onChange={(e) => setFormData({ ...formData, externalWebsiteUrl: e.target.value })}
                    placeholder="https://hrms.itlcindia.com"
                    className="rounded-xl h-11 border-slate-200 text-xs"
                  />
                </div>
              </div>

              {/* Status and Sort Order */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Publish Status
                  </label>
                  <select
                    value={formData.isLive ? "true" : "false"}
                    onChange={(e) => setFormData({ ...formData, isLive: e.target.value === "true" })}
                    className="w-full h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="true">Live (Visible on Products Page)</option>
                    <option value="false">Draft (Hidden)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Display Sort Order
                  </label>
                  <Input
                    type="number"
                    value={formData.sortOrder}
                    onChange={(e) => setFormData({ ...formData, sortOrder: Number(e.target.value) })}
                    className="rounded-xl h-11 border-slate-200"
                  />
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
                  {editingProduct ? "Update Product" : "Save & Publish"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
