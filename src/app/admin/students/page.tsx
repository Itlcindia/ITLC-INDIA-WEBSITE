"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Users,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  Clock,
  Download,
  ExternalLink,
  Trash2,
  Eye,
  FileText,
  AlertCircle,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Calendar,
  Building2,
  FileCheck,
  UserCheck,
  Loader2,
  Save,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface Student {
  id: string;
  applicationNumber: string;
  fullName: string;
  fatherName: string;
  email: string;
  mobileNumber: string;
  whatsappNumber?: string | null;
  dob: string;
  gender: string;
  collegeName: string;
  courseApplied: string;
  qualification: string;
  yearSemester: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  passportPhotoUrl?: string | null;
  resumeUrl?: string | null;
  aadhaarCardUrl?: string | null;
  collegeIdCardUrl?: string | null;
  status: "PENDING" | "APPROVED" | "REJECTED";
  notes?: string | null;
  createdAt: string;
}

export default function AdminStudentsPage() {
  const { toast } = useToast();
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  // Inspection Drawer/Modal State
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [adminNotes, setAdminNotes] = useState("");
  const [updatingStatus, setUpdatingStatus] = useState(false);

  // Fetch Students
  const fetchStudents = useCallback(async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (search) query.set("q", search);
      if (statusFilter !== "ALL") query.set("status", statusFilter);

      const res = await fetch(`/api/admin/students?${query.toString()}`);
      const data = await res.json();
      if (data.success) {
        setStudents(data.students || []);
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to load admissions",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Connection Error",
        description: "Could not fetch student admissions.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [search, statusFilter, toast]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchStudents();
    }, 250);
    return () => clearTimeout(timer);
  }, [fetchStudents]);

  // Open Inspection Modal
  const handleOpenInspect = (student: Student) => {
    setSelectedStudent(student);
    setAdminNotes(student.notes || "");
  };

  // Update Status (Approve / Reject / Pending)
  const handleUpdateStatus = async (newStatus: "PENDING" | "APPROVED" | "REJECTED") => {
    if (!selectedStudent) return;
    setUpdatingStatus(true);
    try {
      const res = await fetch(`/api/admin/students/${selectedStudent.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: newStatus,
          notes: adminNotes,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "Status Updated",
          description: `Application #${selectedStudent.applicationNumber} marked as ${newStatus}.`,
        });
        setSelectedStudent(data.student);
        fetchStudents();
      } else {
        toast({
          title: "Failed",
          description: data.error || "Could not update status",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    } finally {
      setUpdatingStatus(false);
    }
  };

  // Save Notes Only
  const handleSaveNotes = async () => {
    if (!selectedStudent) return;
    try {
      const res = await fetch(`/api/admin/students/${selectedStudent.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          notes: adminNotes,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "Notes Saved",
          description: "Internal remarks have been updated.",
        });
        setSelectedStudent(data.student);
        fetchStudents();
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to save remarks",
        variant: "destructive",
      });
    }
  };

  // Delete Student
  const handleDelete = async (student: Student) => {
    if (
      !window.confirm(
        `Are you sure you want to delete application #${student.applicationNumber} for ${student.fullName}?`
      )
    ) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/students/${student.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "Application Deleted",
          description: `Application #${student.applicationNumber} has been removed.`,
        });
        if (selectedStudent?.id === student.id) {
          setSelectedStudent(null);
        }
        fetchStudents();
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to delete student registration",
        variant: "destructive",
      });
    }
  };

  // Export to CSV
  const handleExportCSV = () => {
    const query = new URLSearchParams();
    if (search) query.set("q", search);
    if (statusFilter !== "ALL") query.set("status", statusFilter);
    query.set("export", "csv");
    window.open(`/api/admin/students?${query.toString()}`, "_blank");
  };

  // Counts
  const totalCount = students.length;
  const pendingCount = students.filter((s) => s.status === "PENDING").length;
  const approvedCount = students.filter((s) => s.status === "APPROVED").length;
  const rejectedCount = students.filter((s) => s.status === "REJECTED").length;

  return (
    <div className="space-y-8 font-sans">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              Admissions Portal
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Student Admissions Management
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Review online student registration applications, verify uploaded KYC documents, and approve admissions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={fetchStudents}
            disabled={loading}
            className="rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 h-10"
          >
            <RefreshCw className={cn("w-4 h-4 mr-2", loading && "animate-spin text-blue-600")} />
            Refresh
          </Button>

          <Button
            onClick={handleExportCSV}
            variant="outline"
            className="rounded-xl border-slate-200 hover:bg-slate-50 text-slate-700 h-10 px-4 font-medium"
          >
            <Download className="w-4 h-4 mr-2 text-slate-600" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">{totalCount}</div>
            <div className="text-xs font-medium text-slate-500">Total Applications</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-600">{pendingCount}</div>
            <div className="text-xs font-medium text-slate-500">Pending Review</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-600">{approvedCount}</div>
            <div className="text-xs font-medium text-slate-500">Approved Admissions</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
            <XCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-rose-600">{rejectedCount}</div>
            <div className="text-xs font-medium text-slate-500">Rejected Applications</div>
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
            placeholder="Search by student name, application #, email, phone..."
            className="pl-10 h-10 rounded-xl border-slate-200 focus-visible:ring-blue-500 bg-slate-50/50"
          />
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-stretch sm:self-auto">
          {[
            { id: "ALL", label: "All Records" },
            { id: "PENDING", label: "Pending" },
            { id: "APPROVED", label: "Approved" },
            { id: "REJECTED", label: "Rejected" },
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

      {/* Student Admissions Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            <p className="text-sm font-medium">Loading admission applications...</p>
          </div>
        ) : students.length === 0 ? (
          <div className="py-20 text-center px-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-100">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">No Applications Found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              {search || statusFilter !== "ALL"
                ? "No student applications match your search query or filters. Try adjusting your search term."
                : "No student applications have been submitted yet on the registration portal."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50/80 text-xs uppercase font-semibold text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Application ID</th>
                  <th className="py-3.5 px-4">Student Details</th>
                  <th className="py-3.5 px-4">Course Applied</th>
                  <th className="py-3.5 px-4">College / City</th>
                  <th className="py-3.5 px-4">Applied Date</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-mono font-medium text-slate-900">
                      <div className="flex items-center gap-2">
                        <FileCheck className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{student.applicationNumber}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-semibold text-slate-900">{student.fullName}</div>
                      <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                        <span>{student.mobileNumber}</span>
                        <span>•</span>
                        <span>{student.email}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-700 font-medium">
                      {student.courseApplied}
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      <div className="max-w-[180px] truncate">{student.collegeName}</div>
                      <div className="text-xs text-slate-400">{student.city}, {student.state}</div>
                    </td>
                    <td className="py-4 px-4 text-slate-500 text-xs">
                      {new Date(student.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="py-4 px-4">
                      {student.status === "APPROVED" && (
                        <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 gap-1 rounded-lg">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Approved
                        </Badge>
                      )}
                      {student.status === "PENDING" && (
                        <Badge className="bg-amber-50 text-amber-700 border-amber-200 gap-1 rounded-lg">
                          <Clock className="w-3 h-3 text-amber-600" />
                          Pending Review
                        </Badge>
                      )}
                      {student.status === "REJECTED" && (
                        <Badge className="bg-rose-50 text-rose-700 border-rose-200 gap-1 rounded-lg">
                          <XCircle className="w-3 h-3 text-rose-600" />
                          Rejected
                        </Badge>
                      )}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleOpenInspect(student)}
                          className="rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 border border-blue-200/60 h-8 px-3 font-medium text-xs shadow-none"
                        >
                          <Eye className="w-3.5 h-3.5 mr-1.5" />
                          Review
                        </Button>

                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDelete(student)}
                          className="h-8 w-8 p-0 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                          title="Delete Application"
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

      {/* Student Details & Document Inspection Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-4">
                {selectedStudent.passportPhotoUrl ? (
                  <img
                    src={selectedStudent.passportPhotoUrl}
                    alt={selectedStudent.fullName}
                    className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-sm"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl border border-blue-100">
                    {selectedStudent.fullName.slice(0, 2).toUpperCase()}
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      {selectedStudent.fullName}
                    </h3>
                    <Badge
                      className={cn(
                        "rounded-md text-xs",
                        selectedStudent.status === "APPROVED" && "bg-emerald-50 text-emerald-700 border-emerald-200",
                        selectedStudent.status === "PENDING" && "bg-amber-50 text-amber-700 border-amber-200",
                        selectedStudent.status === "REJECTED" && "bg-rose-50 text-rose-700 border-rose-200"
                      )}
                    >
                      {selectedStudent.status}
                    </Badge>
                  </div>
                  <p className="text-xs font-mono text-blue-600 mt-0.5">
                    Application ID: {selectedStudent.applicationNumber}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedStudent(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Profile Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-b border-slate-100 text-sm">
              <div className="space-y-2.5">
                <div className="flex items-center text-slate-600">
                  <span className="w-32 text-xs font-semibold text-slate-400 uppercase">Father's Name:</span>
                  <span className="font-medium text-slate-800">{selectedStudent.fatherName}</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <span className="w-32 text-xs font-semibold text-slate-400 uppercase">Date of Birth:</span>
                  <span className="font-medium text-slate-800">{selectedStudent.dob}</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <span className="w-32 text-xs font-semibold text-slate-400 uppercase">Gender:</span>
                  <span className="font-medium text-slate-800">{selectedStudent.gender}</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <span className="w-32 text-xs font-semibold text-slate-400 uppercase">Mobile Number:</span>
                  <a href={`tel:${selectedStudent.mobileNumber}`} className="font-medium text-blue-600 hover:underline">
                    {selectedStudent.mobileNumber}
                  </a>
                </div>
                <div className="flex items-center text-slate-600">
                  <span className="w-32 text-xs font-semibold text-slate-400 uppercase">Email:</span>
                  <a href={`mailto:${selectedStudent.email}`} className="font-medium text-blue-600 hover:underline">
                    {selectedStudent.email}
                  </a>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center text-slate-600">
                  <span className="w-32 text-xs font-semibold text-slate-400 uppercase">Course Applied:</span>
                  <span className="font-bold text-slate-900">{selectedStudent.courseApplied}</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <span className="w-32 text-xs font-semibold text-slate-400 uppercase">College:</span>
                  <span className="font-medium text-slate-800">{selectedStudent.collegeName}</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <span className="w-32 text-xs font-semibold text-slate-400 uppercase">Qualification:</span>
                  <span className="font-medium text-slate-800">
                    {selectedStudent.qualification} ({selectedStudent.yearSemester})
                  </span>
                </div>
                <div className="flex items-start text-slate-600">
                  <span className="w-32 text-xs font-semibold text-slate-400 uppercase shrink-0">Address:</span>
                  <span className="font-medium text-slate-800">
                    {selectedStudent.address}, {selectedStudent.city}, {selectedStudent.state} - {selectedStudent.pincode}
                  </span>
                </div>
              </div>
            </div>

            {/* Document Attachments Inspection */}
            <div className="py-5 border-b border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-blue-600" />
                Uploaded KYC Documents & Attachments
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Aadhaar Card */}
                <div className="p-3 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-5 h-5 text-slate-500" />
                    <div>
                      <div className="text-xs font-semibold text-slate-800">Aadhaar Card</div>
                      <div className="text-[11px] text-slate-400">Identity verification</div>
                    </div>
                  </div>
                  {selectedStudent.aadhaarCardUrl ? (
                    <a
                      href={selectedStudent.aadhaarCardUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100 flex items-center gap-1"
                    >
                      View <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 italic">Not Uploaded</span>
                  )}
                </div>

                {/* College ID */}
                <div className="p-3 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="w-5 h-5 text-slate-500" />
                    <div>
                      <div className="text-xs font-semibold text-slate-800">College ID Card</div>
                      <div className="text-[11px] text-slate-400">Student enrollment proof</div>
                    </div>
                  </div>
                  {selectedStudent.collegeIdCardUrl ? (
                    <a
                      href={selectedStudent.collegeIdCardUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100 flex items-center gap-1"
                    >
                      View <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 italic">Not Uploaded</span>
                  )}
                </div>

                {/* Resume / CV */}
                <div className="p-3 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-5 h-5 text-slate-500" />
                    <div>
                      <div className="text-xs font-semibold text-slate-800">Resume / CV</div>
                      <div className="text-[11px] text-slate-400">Applicant profile</div>
                    </div>
                  </div>
                  {selectedStudent.resumeUrl ? (
                    <a
                      href={selectedStudent.resumeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100 flex items-center gap-1"
                    >
                      Download <Download className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 italic">Not Uploaded</span>
                  )}
                </div>

                {/* Passport Photo */}
                <div className="p-3 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Users className="w-5 h-5 text-slate-500" />
                    <div>
                      <div className="text-xs font-semibold text-slate-800">Passport Photo</div>
                      <div className="text-[11px] text-slate-400">Student portrait</div>
                    </div>
                  </div>
                  {selectedStudent.passportPhotoUrl ? (
                    <a
                      href={selectedStudent.passportPhotoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100 flex items-center gap-1"
                    >
                      View <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 italic">Not Uploaded</span>
                  )}
                </div>
              </div>
            </div>

            {/* Admin Internal Notes */}
            <div className="py-5 border-b border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Internal Remarks & Admin Notes
              </label>
              <div className="flex gap-2">
                <textarea
                  rows={2}
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  placeholder="Add private evaluation notes, batch timing, fee status, etc..."
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                />
                <Button
                  onClick={handleSaveNotes}
                  className="rounded-xl bg-slate-800 hover:bg-slate-900 text-white shrink-0 h-auto px-4"
                  title="Save remarks"
                >
                  <Save className="w-4 h-4 mr-1.5" />
                  Save
                </Button>
              </div>
            </div>

            {/* Decision Status Actions */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Current status: <strong className="text-slate-800">{selectedStudent.status}</strong>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <Button
                  variant="outline"
                  disabled={updatingStatus}
                  onClick={() => handleUpdateStatus("PENDING")}
                  className={cn(
                    "rounded-xl border-amber-200 text-amber-700 hover:bg-amber-50 h-10 text-xs font-semibold",
                    selectedStudent.status === "PENDING" && "bg-amber-50"
                  )}
                >
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  Mark Pending
                </Button>

                <Button
                  disabled={updatingStatus}
                  onClick={() => handleUpdateStatus("REJECTED")}
                  className="rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 h-10 text-xs font-semibold shadow-none"
                >
                  <XCircle className="w-3.5 h-3.5 mr-1" />
                  Reject
                </Button>

                <Button
                  disabled={updatingStatus}
                  onClick={() => handleUpdateStatus("APPROVED")}
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white h-10 text-xs font-semibold shadow-md shadow-emerald-500/20 px-4"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  Approve Admission
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
