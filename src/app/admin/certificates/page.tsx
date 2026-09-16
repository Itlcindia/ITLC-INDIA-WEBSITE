"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Award,
  Search,
  Plus,
  Filter,
  CheckCircle2,
  XCircle,
  Download,
  ExternalLink,
  Trash2,
  Edit,
  RefreshCw,
  Eye,
  FileText,
  AlertCircle,
  Calendar,
  Sparkles,
  Loader2,
  Check,
  Ban,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface Certificate {
  id: string;
  certificateNumber: string;
  studentName: string;
  courseName: string;
  startDate?: string | null;
  completionDate?: string | null;
  issueDate?: string | null;
  expiryDate?: string | null;
  dateOfBirth?: string | null;
  verificationId?: string | null;
  certificateFileUrl?: string | null;
  status: "VERIFIED" | "REVOKED";
  revokedReason?: string | null;
  createdAt: string;
}

export default function AdminCertificatesPage() {
  const { toast } = useToast();
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  // Modal State for Issuing / Editing Certificate
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCert, setEditingCert] = useState<Certificate | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    certificateNumber: "",
    studentName: "",
    courseName: "",
    startDate: "",
    completionDate: "",
    issueDate: new Date().toISOString().split("T")[0],
    expiryDate: "",
    dateOfBirth: "",
    status: "VERIFIED",
    revokedReason: "",
    certificateFileUrl: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Fetch Certificates
  const fetchCertificates = useCallback(async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (search) query.set("q", search);
      if (statusFilter !== "ALL") query.set("status", statusFilter);

      const res = await fetch(`/api/admin/certificates?${query.toString()}`);
      const data = await res.json();
      if (data.success) {
        setCertificates(data.certificates || []);
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to load certificates",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Connection Error",
        description: "Failed to connect to backend",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [search, statusFilter, toast]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCertificates();
    }, 250);
    return () => clearTimeout(timer);
  }, [fetchCertificates]);

  // Generate Unique Certificate Number
  const generateCertNumber = () => {
    const year = new Date().getFullYear();
    const random = Math.floor(100000 + Math.random() * 900000);
    const newNumber = `ITLC-CERT-${year}-${random}`;
    setFormData((prev) => ({ ...prev, certificateNumber: newNumber }));
  };

  // Open Create Modal
  const handleOpenCreate = () => {
    setEditingCert(null);
    const year = new Date().getFullYear();
    const random = Math.floor(100000 + Math.random() * 900000);
    setFormData({
      certificateNumber: `ITLC-CERT-${year}-${random}`,
      studentName: "",
      courseName: "",
      startDate: "",
      completionDate: "",
      issueDate: new Date().toISOString().split("T")[0],
      expiryDate: "",
      dateOfBirth: "",
      status: "VERIFIED",
      revokedReason: "",
      certificateFileUrl: "",
    });
    setSelectedFile(null);
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEdit = (cert: Certificate) => {
    setEditingCert(cert);
    setFormData({
      certificateNumber: cert.certificateNumber,
      studentName: cert.studentName,
      courseName: cert.courseName,
      startDate: cert.startDate || "",
      completionDate: cert.completionDate || "",
      issueDate: cert.issueDate || "",
      expiryDate: cert.expiryDate || "",
      dateOfBirth: cert.dateOfBirth || "",
      status: cert.status,
      revokedReason: cert.revokedReason || "",
      certificateFileUrl: cert.certificateFileUrl || "",
    });
    setSelectedFile(null);
    setIsModalOpen(true);
  };

  // Submit Create or Edit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.certificateNumber || !formData.studentName || !formData.courseName) {
      toast({
        title: "Validation Error",
        description: "Certificate number, student name, and course name are required.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const dataPayload = new FormData();
      dataPayload.append("certificateNumber", formData.certificateNumber);
      dataPayload.append("studentName", formData.studentName);
      dataPayload.append("courseName", formData.courseName);
      dataPayload.append("startDate", formData.startDate);
      dataPayload.append("completionDate", formData.completionDate);
      dataPayload.append("issueDate", formData.issueDate);
      dataPayload.append("expiryDate", formData.expiryDate);
      dataPayload.append("dateOfBirth", formData.dateOfBirth);
      dataPayload.append("status", formData.status);
      dataPayload.append("revokedReason", formData.revokedReason);
      dataPayload.append("certificateFileUrl", formData.certificateFileUrl);

      if (selectedFile) {
        dataPayload.append("certificateFile", selectedFile);
      }

      const url = editingCert
        ? `/api/admin/certificates/${editingCert.id}`
        : `/api/admin/certificates`;
      const method = editingCert ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        body: dataPayload,
      });

      const result = await res.json();
      if (result.success) {
        toast({
          title: editingCert ? "Certificate Updated" : "Certificate Issued",
          description: `Certificate #${formData.certificateNumber} saved successfully.`,
        });
        setIsModalOpen(false);
        fetchCertificates();
      } else {
        toast({
          title: "Operation Failed",
          description: result.error || "Failed to save certificate.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Network error occurred while saving certificate.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Toggle Revoke / Verify Status
  const handleToggleStatus = async (cert: Certificate) => {
    const nextStatus = cert.status === "VERIFIED" ? "REVOKED" : "VERIFIED";
    const promptReason =
      nextStatus === "REVOKED"
        ? window.prompt("Reason for revoking this certificate (Optional):") || "Revoked by Administrator"
        : null;

    try {
      const res = await fetch(`/api/admin/certificates/${cert.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: nextStatus,
          revokedReason: promptReason,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: nextStatus === "REVOKED" ? "Certificate Revoked" : "Certificate Activated",
          description: `Certificate #${cert.certificateNumber} is now marked as ${nextStatus}.`,
        });
        fetchCertificates();
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to toggle certificate status",
        variant: "destructive",
      });
    }
  };

  // Delete Certificate
  const handleDelete = async (cert: Certificate) => {
    if (
      !window.confirm(
        `Are you sure you want to permanently delete Certificate #${cert.certificateNumber} issued to ${cert.studentName}?`
      )
    ) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/certificates/${cert.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "Certificate Deleted",
          description: `Certificate #${cert.certificateNumber} has been removed.`,
        });
        fetchCertificates();
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to delete certificate",
        variant: "destructive",
      });
    }
  };

  // Counts
  const totalCount = certificates.length;
  const verifiedCount = certificates.filter((c) => c.status === "VERIFIED").length;
  const revokedCount = certificates.filter((c) => c.status === "REVOKED").length;

  return (
    <div className="space-y-8 font-sans">
      {/* Top Banner / Breadcrumb */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              Academics & Verification
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Certificate Management
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Issue, verify, revoke, and manage student training credentials and completion certificates.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={fetchCertificates}
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
            Issue Certificate
          </Button>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">{totalCount}</div>
            <div className="text-xs font-medium text-slate-500">Total Issued Certificates</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-600">{verifiedCount}</div>
            <div className="text-xs font-medium text-slate-500">Active & Verified</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
            <Ban className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-rose-600">{revokedCount}</div>
            <div className="text-xs font-medium text-slate-500">Revoked / Inactive</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by student, certificate #, or course..."
            className="pl-10 h-10 rounded-xl border-slate-200 focus-visible:ring-blue-500 bg-slate-50/50"
          />
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-stretch sm:self-auto">
          {[
            { id: "ALL", label: "All Records" },
            { id: "VERIFIED", label: "Verified Only" },
            { id: "REVOKED", label: "Revoked" },
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

      {/* Certificates Data Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            <p className="text-sm font-medium">Loading certificate database...</p>
          </div>
        ) : certificates.length === 0 ? (
          <div className="py-20 text-center px-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-100">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">No Certificates Found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
              {search || statusFilter !== "ALL"
                ? "No certificates match your search query or filters. Try resetting the filters."
                : "No certificates have been issued yet. Click the button below to issue the first certificate."}
            </p>
            <Button onClick={handleOpenCreate} className="rounded-xl bg-blue-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Issue New Certificate
            </Button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50/80 text-xs uppercase font-semibold text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Certificate #</th>
                  <th className="py-3.5 px-4">Student Name</th>
                  <th className="py-3.5 px-4">Course Program</th>
                  <th className="py-3.5 px-4">Issue Date</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4">PDF File</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {certificates.map((cert) => (
                  <tr key={cert.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-mono font-medium text-slate-900">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{cert.certificateNumber}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-semibold text-slate-800">
                      {cert.studentName}
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      <span className="inline-block max-w-[200px] truncate" title={cert.courseName}>
                        {cert.courseName}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-500">
                      {cert.issueDate || "N/A"}
                    </td>
                    <td className="py-4 px-4">
                      {cert.status === "VERIFIED" ? (
                        <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 gap-1 rounded-lg">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Verified
                        </Badge>
                      ) : (
                        <Badge className="bg-rose-50 text-rose-700 border-rose-200 gap-1 rounded-lg">
                          <XCircle className="w-3 h-3 text-rose-600" />
                          Revoked
                        </Badge>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      {cert.certificateFileUrl ? (
                        <a
                          href={cert.certificateFileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          View PDF
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-xs text-slate-400 italic">No File</span>
                      )}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {/* Toggle Status */}
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleToggleStatus(cert)}
                          title={cert.status === "VERIFIED" ? "Revoke Certificate" : "Re-activate Certificate"}
                          className={cn(
                            "h-8 w-8 p-0 rounded-lg",
                            cert.status === "VERIFIED"
                              ? "text-rose-600 hover:bg-rose-50"
                              : "text-emerald-600 hover:bg-emerald-50"
                          )}
                        >
                          {cert.status === "VERIFIED" ? (
                            <Ban className="w-4 h-4" />
                          ) : (
                            <ShieldCheck className="w-4 h-4" />
                          )}
                        </Button>

                        {/* Edit Button */}
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleOpenEdit(cert)}
                          className="h-8 w-8 p-0 rounded-lg text-slate-600 hover:bg-slate-100"
                          title="Edit Details"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>

                        {/* Delete Button */}
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDelete(cert)}
                          className="h-8 w-8 p-0 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                          title="Delete"
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

      {/* Create / Edit Certificate Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {editingCert ? "Edit Certificate" : "Issue New Certificate"}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Enter student details, course information, and upload certificate document.
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
              {/* Certificate Number with Generator */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Certificate Number *
                </label>
                <div className="flex gap-2">
                  <Input
                    required
                    value={formData.certificateNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, certificateNumber: e.target.value.toUpperCase() })
                    }
                    placeholder="e.g. ITLC-CERT-2026-102938"
                    className="font-mono rounded-xl h-11 border-slate-200 uppercase"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={generateCertNumber}
                    className="rounded-xl border-slate-200 hover:bg-blue-50 hover:text-blue-600 text-slate-600 shrink-0"
                  >
                    <Sparkles className="w-4 h-4 mr-1.5 text-blue-600" />
                    Auto Generate
                  </Button>
                </div>
              </div>

              {/* Student Name & Course Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Student Full Name *
                  </label>
                  <Input
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="rounded-xl h-11 border-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Course / Program Name *
                  </label>
                  <Input
                    required
                    value={formData.courseName}
                    onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                    placeholder="e.g. Full Stack Web Development"
                    className="rounded-xl h-11 border-slate-200"
                  />
                </div>
              </div>

              {/* Dates Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Issue Date
                  </label>
                  <Input
                    type="date"
                    value={formData.issueDate}
                    onChange={(e) => setFormData({ ...formData, issueDate: e.target.value })}
                    className="rounded-xl h-11 border-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Completion Date
                  </label>
                  <Input
                    type="date"
                    value={formData.completionDate}
                    onChange={(e) => setFormData({ ...formData, completionDate: e.target.value })}
                    className="rounded-xl h-11 border-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Date of Birth (DOB Auth)
                  </label>
                  <Input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="rounded-xl h-11 border-slate-200"
                  />
                </div>
              </div>

              {/* Status & Revoke Reason */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Certificate Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="VERIFIED">VERIFIED (Active & Authentic)</option>
                    <option value="REVOKED">REVOKED (Invalidated)</option>
                  </select>
                </div>

                {formData.status === "REVOKED" && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-rose-600 mb-1.5">
                      Revocation Reason
                    </label>
                    <Input
                      value={formData.revokedReason}
                      onChange={(e) => setFormData({ ...formData, revokedReason: e.target.value })}
                      placeholder="e.g. Incomplete coursework, fees default"
                      className="rounded-xl h-11 border-rose-200 bg-rose-50/40"
                    />
                  </div>
                )}
              </div>

              {/* PDF Document Upload */}
              <div className="pt-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Certificate PDF File (Upload or URL)
                </label>
                <div className="space-y-3">
                  <input
                    type="file"
                    accept=".pdf,image/png,image/jpeg"
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer border border-slate-200 rounded-xl p-1"
                  />
                  <div className="text-xs text-slate-400">Or provide direct file URL:</div>
                  <Input
                    value={formData.certificateFileUrl}
                    onChange={(e) => setFormData({ ...formData, certificateFileUrl: e.target.value })}
                    placeholder="https://example.com/certificates/sample.pdf"
                    className="rounded-xl h-10 border-slate-200 text-xs"
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
                  {editingCert ? "Update Certificate" : "Issue Certificate"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
