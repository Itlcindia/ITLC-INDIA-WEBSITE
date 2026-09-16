"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  MessageSquare,
  Search,
  Mail,
  Phone,
  Building,
  Calendar,
  CheckCircle2,
  Clock,
  Archive,
  Trash2,
  Eye,
  RefreshCw,
  Loader2,
  Save,
  Send,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface Contact {
  id: string;
  name: string;
  company?: string | null;
  email: string;
  phone?: string | null;
  service?: string | null;
  message: string;
  status: "NEW" | "CONTACTED" | "CLOSED";
  notes?: string | null;
  createdAt: string;
}

export default function AdminContactsPage() {
  const { toast } = useToast();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  // Selected for review modal
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [adminNotes, setAdminNotes] = useState("");
  const [updating, setUpdating] = useState(false);

  const fetchContacts = useCallback(async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (search) query.set("q", search);
      if (statusFilter !== "ALL") query.set("status", statusFilter);

      const res = await fetch(`/api/admin/contacts?${query.toString()}`);
      const data = await res.json();
      if (data.success) {
        setContacts(data.contacts || []);
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to load inquiries",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [search, statusFilter, toast]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchContacts();
    }, 250);
    return () => clearTimeout(timer);
  }, [fetchContacts]);

  const handleOpenInspect = (c: Contact) => {
    setSelectedContact(c);
    setAdminNotes(c.notes || "");
  };

  const handleUpdateStatus = async (newStatus: "NEW" | "CONTACTED" | "CLOSED") => {
    if (!selectedContact) return;
    setUpdating(true);
    try {
      const res = await fetch(`/api/admin/contacts/${selectedContact.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus, notes: adminNotes }),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "Status Updated",
          description: `Inquiry marked as ${newStatus}.`,
        });
        setSelectedContact(data.contact);
        fetchContacts();
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    } finally {
      setUpdating(false);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedContact) return;
    try {
      const res = await fetch(`/api/admin/contacts/${selectedContact.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes: adminNotes }),
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Notes Saved", description: "Internal remarks updated." });
        setSelectedContact(data.contact);
        fetchContacts();
      }
    } catch {
      toast({ title: "Error", description: "Failed to save remarks", variant: "destructive" });
    }
  };

  const handleDelete = async (contact: Contact) => {
    if (!window.confirm(`Delete inquiry from ${contact.name}?`)) return;
    try {
      const res = await fetch(`/api/admin/contacts/${contact.id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Deleted", description: "Inquiry removed from inbox." });
        if (selectedContact?.id === contact.id) setSelectedContact(null);
        fetchContacts();
      }
    } catch {
      toast({ title: "Error", description: "Failed to delete", variant: "destructive" });
    }
  };

  const totalCount = contacts.length;
  const newCount = contacts.filter((c) => c.status === "NEW").length;
  const contactedCount = contacts.filter((c) => c.status === "CONTACTED").length;
  const closedCount = contacts.filter((c) => c.status === "CLOSED").length;

  return (
    <div className="space-y-8 font-sans">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              Client Relations
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Client Inquiries & Leads Inbox
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Review service requests and enterprise partnership inquiries submitted through the contact portal.
          </p>
        </div>

        <Button
          variant="outline"
          onClick={fetchContacts}
          disabled={loading}
          className="rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 h-10"
        >
          <RefreshCw className={cn("w-4 h-4 mr-2", loading && "animate-spin text-blue-600")} />
          Refresh
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">{totalCount}</div>
            <div className="text-xs font-medium text-slate-500">Total Inquiries</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-600">{newCount}</div>
            <div className="text-xs font-medium text-slate-500">New / Uncontacted</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
            <Send className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-indigo-600">{contactedCount}</div>
            <div className="text-xs font-medium text-slate-500">Follow-up In Progress</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-600">{closedCount}</div>
            <div className="text-xs font-medium text-slate-500">Closed / Converted</div>
          </div>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search leads by name, email, company, service..."
            className="pl-10 h-10 rounded-xl border-slate-200 focus-visible:ring-blue-500 bg-slate-50/50"
          />
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-stretch sm:self-auto">
          {[
            { id: "ALL", label: "All Leads" },
            { id: "NEW", label: "New Only" },
            { id: "CONTACTED", label: "In Progress" },
            { id: "CLOSED", label: "Closed" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id)}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-lg transition-all",
                statusFilter === tab.id
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            <p className="text-sm font-medium">Loading leads inbox...</p>
          </div>
        ) : contacts.length === 0 ? (
          <div className="py-20 text-center px-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-100">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">No Leads Found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              No inquiries match your query or have been submitted yet.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50/80 text-xs uppercase font-semibold text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Client / Prospect</th>
                  <th className="py-3.5 px-4">Service Required</th>
                  <th className="py-3.5 px-4">Message Snippet</th>
                  <th className="py-3.5 px-4">Received Date</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {contacts.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-4 sm:px-6">
                      <div className="font-semibold text-slate-900">{c.name}</div>
                      <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                        {c.company && <span className="font-medium text-slate-700">{c.company} •</span>}
                        <span>{c.email}</span>
                        {c.phone && <span>• {c.phone}</span>}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                        {c.service || "General"}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-600 max-w-xs truncate">
                      {c.message}
                    </td>
                    <td className="py-4 px-4 text-slate-500 text-xs">
                      {new Date(c.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="py-4 px-4">
                      {c.status === "NEW" && (
                        <Badge className="bg-amber-50 text-amber-700 border-amber-200 gap-1 rounded-lg">
                          <Clock className="w-3 h-3 text-amber-600" />
                          New
                        </Badge>
                      )}
                      {c.status === "CONTACTED" && (
                        <Badge className="bg-indigo-50 text-indigo-700 border-indigo-200 gap-1 rounded-lg">
                          <Send className="w-3 h-3 text-indigo-600" />
                          Contacted
                        </Badge>
                      )}
                      {c.status === "CLOSED" && (
                        <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 gap-1 rounded-lg">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Closed
                        </Badge>
                      )}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleOpenInspect(c)}
                          className="rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 h-8 px-3 font-medium text-xs border border-blue-200/60 shadow-none"
                        >
                          <Eye className="w-3.5 h-3.5 mr-1.5" />
                          Inspect
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDelete(c)}
                          className="h-8 w-8 p-0 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
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

      {/* Modal */}
      {selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{selectedContact.name}</h3>
                <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                  {selectedContact.company && <span className="font-semibold text-slate-700">{selectedContact.company}</span>}
                  <span>• Service: <strong>{selectedContact.service}</strong></span>
                </div>
              </div>
              <button
                onClick={() => setSelectedContact(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors text-sm"
              >
                ✕
              </button>
            </div>

            <div className="py-5 border-b border-slate-100 flex flex-wrap gap-3">
              <a
                href={`mailto:${selectedContact.email}`}
                className="inline-flex items-center gap-2 text-xs font-semibold bg-blue-50 text-blue-700 px-3.5 py-2 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                Reply: {selectedContact.email}
              </a>
              {selectedContact.phone && (
                <a
                  href={`tel:${selectedContact.phone}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold bg-emerald-50 text-emerald-700 px-3.5 py-2 rounded-xl border border-emerald-100 hover:bg-emerald-100 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call: {selectedContact.phone}
                </a>
              )}
            </div>

            <div className="py-5 border-b border-slate-100">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Inquiry Message
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm text-slate-800 whitespace-pre-wrap leading-relaxed">
                {selectedContact.message}
              </div>
            </div>

            <div className="py-5 border-b border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Internal Remarks & Action Notes
              </label>
              <div className="flex gap-2">
                <textarea
                  rows={2}
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  placeholder="e.g. Spoke with client, proposed initial demo for next Tuesday..."
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                />
                <Button
                  onClick={handleSaveNotes}
                  className="rounded-xl bg-slate-800 hover:bg-slate-900 text-white shrink-0 h-auto px-4"
                >
                  <Save className="w-4 h-4 mr-1.5" />
                  Save
                </Button>
              </div>
            </div>

            <div className="pt-6 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Status: <strong>{selectedContact.status}</strong>
              </span>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  disabled={updating}
                  onClick={() => handleUpdateStatus("NEW")}
                  className="rounded-xl border-amber-200 text-amber-700 hover:bg-amber-50 h-9 text-xs font-semibold"
                >
                  Mark New
                </Button>
                <Button
                  size="sm"
                  disabled={updating}
                  onClick={() => handleUpdateStatus("CONTACTED")}
                  className="rounded-xl bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 h-9 text-xs font-semibold shadow-none"
                >
                  Mark Contacted
                </Button>
                <Button
                  size="sm"
                  disabled={updating}
                  onClick={() => handleUpdateStatus("CLOSED")}
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white h-9 text-xs font-semibold shadow-md shadow-emerald-500/20 px-4"
                >
                  Close / Resolved
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
