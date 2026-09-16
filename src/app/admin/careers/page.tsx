"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Briefcase,
  Search,
  Plus,
  Edit,
  Trash2,
  ExternalLink,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Loader2,
  Users,
  FileText,
  Download,
  Clock,
  Eye,
  Check,
  UserCheck,
  Building,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience?: string | null;
  salary?: string | null;
  description: string;
  requirements?: string | null;
  status: "ACTIVE" | "CLOSED";
  createdAt: string;
}

interface Application {
  id: string;
  fullName: string;
  email: string;
  phone?: string | null;
  message?: string | null;
  resumeUrl: string;
  status: "NEW" | "REVIEWED" | "SHORTLISTED" | "REJECTED";
  notes?: string | null;
  createdAt: string;
  job: {
    title: string;
    department: string;
  };
}

export default function AdminCareersPage() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"jobs" | "applications">("jobs");

  // Jobs state
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [jobFormData, setJobFormData] = useState({
    title: "",
    department: "Engineering",
    location: "Lucknow, Uttar Pradesh",
    type: "Full-time",
    experience: "2-4 Years",
    salary: "Best in Industry",
    description: "",
    requirements: "",
    status: "ACTIVE" as "ACTIVE" | "CLOSED",
  });

  // Applications state
  const [applications, setApplications] = useState<Application[]>([]);
  const [loadingApps, setLoadingApps] = useState(true);
  const [appSearch, setAppSearch] = useState("");
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);

  // Fetch Jobs
  const fetchJobs = useCallback(async () => {
    setLoadingJobs(true);
    try {
      const res = await fetch("/api/careers");
      const data = await res.json();
      if (data.success) setJobs(data.jobs || []);
    } catch {
      toast({ title: "Error", description: "Failed to load jobs", variant: "destructive" });
    } finally {
      setLoadingJobs(false);
    }
  }, [toast]);

  // Fetch Applications
  const fetchApplications = useCallback(async () => {
    setLoadingApps(true);
    try {
      const query = new URLSearchParams();
      if (appSearch) query.set("q", appSearch);
      const res = await fetch(`/api/admin/careers/applications?${query.toString()}`);
      const data = await res.json();
      if (data.success) setApplications(data.applications || []);
    } catch {
      toast({ title: "Error", description: "Failed to load applicants", variant: "destructive" });
    } finally {
      setLoadingApps(false);
    }
  }, [appSearch, toast]);

  useEffect(() => {
    fetchJobs();
    fetchApplications();
  }, [fetchJobs, fetchApplications]);

  // Handle Save Job
  const handleSaveJob = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingJob ? `/api/careers/${editingJob.id}` : `/api/careers`;
      const method = editingJob ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobFormData),
      });

      const data = await res.json();
      if (data.success) {
        toast({
          title: editingJob ? "Job Updated" : "Job Posted",
          description: `${jobFormData.title} saved successfully.`,
        });
        setIsJobModalOpen(false);
        setEditingJob(null);
        setJobFormData({
          title: "",
          department: "Engineering",
          location: "Lucknow, Uttar Pradesh",
          type: "Full-time",
          experience: "2-4 Years",
          salary: "Best in Industry",
          description: "",
          requirements: "",
          status: "ACTIVE",
        });
        fetchJobs();
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to save job opening",
          variant: "destructive",
        });
      }
    } catch {
      toast({ title: "Error", description: "Failed to save job opening", variant: "destructive" });
    }
  };

  // Toggle Job Status
  const handleToggleJobStatus = async (job: Job) => {
    const next = job.status === "ACTIVE" ? "CLOSED" : "ACTIVE";
    try {
      const res = await fetch(`/api/careers/${job.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: next }),
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Status Changed", description: `Job marked as ${next}.` });
        fetchJobs();
      } else {
        toast({ title: "Error", description: data.error || "Failed to update status", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Failed to update status", variant: "destructive" });
    }
  };

  // Delete Job
  const handleDeleteJob = async (job: Job) => {
    if (!window.confirm(`Delete job opening "${job.title}"?`)) return;
    try {
      const res = await fetch(`/api/careers/${job.id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Deleted", description: "Job removed." });
        fetchJobs();
      } else {
        toast({ title: "Error", description: data.error || "Failed to delete job", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Failed to delete job", variant: "destructive" });
    }
  };

  // Update Application Status
  const handleUpdateAppStatus = async (appId: string, status: string) => {
    try {
      const res = await fetch(`/api/admin/careers/applications/${appId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Status Updated", description: `Candidate marked as ${status}.` });
        fetchApplications();
        if (selectedApp) setSelectedApp((prev) => (prev ? { ...prev, status: status as any } : null));
      }
    } catch {
      toast({ title: "Error", description: "Failed to update status", variant: "destructive" });
    }
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              Talent & Recruitment
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Careers & Recruitment Management
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Post job openings, review applicant profiles, and manage hiring pipelines.
          </p>
        </div>

        {activeTab === "jobs" && (
          <Button
            onClick={() => {
              setEditingJob(null);
              setJobFormData({
                title: "",
                department: "Engineering",
                location: "Lucknow, Uttar Pradesh",
                type: "Full-time",
                experience: "2-4 Years",
                salary: "Best in Industry",
                description: "",
                requirements: "",
                status: "ACTIVE",
              });
              setIsJobModalOpen(true);
            }}
            className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 h-10 px-5 font-medium"
          >
            <Plus className="w-4 h-4 mr-2" />
            Post New Job
          </Button>
        )}
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl w-fit">
        <button
          onClick={() => setActiveTab("jobs")}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all",
            activeTab === "jobs"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          )}
        >
          <Briefcase className="w-4 h-4 text-blue-600" />
          Job Openings ({jobs.length})
        </button>

        <button
          onClick={() => setActiveTab("applications")}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all",
            activeTab === "applications"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          )}
        >
          <Users className="w-4 h-4 text-emerald-600" />
          Candidate Applications ({applications.length})
        </button>
      </div>

      {/* TAB 1: Job Openings */}
      {activeTab === "jobs" && (
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          {loadingJobs ? (
            <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
              <p className="text-sm font-medium">Loading openings...</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="py-20 text-center px-4">
              <p className="text-sm text-slate-500">No job openings currently available.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50/80 text-xs uppercase font-semibold text-slate-500 border-b border-slate-200">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Position</th>
                    <th className="py-3.5 px-4">Department</th>
                    <th className="py-3.5 px-4">Location</th>
                    <th className="py-3.5 px-4">Type / Exp</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {jobs.map((j) => (
                    <tr key={j.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                        {j.title}
                        <div className="text-xs font-normal text-slate-500 line-clamp-1 mt-0.5">{j.description}</div>
                      </td>
                      <td className="py-4 px-4 text-xs font-semibold text-slate-700">{j.department}</td>
                      <td className="py-4 px-4 text-xs text-slate-600">{j.location}</td>
                      <td className="py-4 px-4 text-xs text-slate-500">{j.type} • {j.experience}</td>
                      <td className="py-4 px-4">
                        {j.status === "ACTIVE" ? (
                          <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">Active</Badge>
                        ) : (
                          <Badge className="bg-slate-100 text-slate-600 border-slate-200">Closed</Badge>
                        )}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleToggleJobStatus(j)}
                            title={j.status === "ACTIVE" ? "Close Opening" : "Reopen Opening"}
                            className={cn(
                              "h-8 w-8 p-0 rounded-lg",
                              j.status === "ACTIVE" ? "text-emerald-600 hover:bg-emerald-50" : "text-slate-400 hover:bg-slate-100"
                            )}
                          >
                            <Check className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {
                              setEditingJob(j);
                              setJobFormData({
                                title: j.title,
                                department: j.department,
                                location: j.location,
                                type: j.type,
                                experience: j.experience || "",
                                salary: j.salary || "",
                                description: j.description,
                                requirements: j.requirements || "",
                                status: j.status,
                              });
                              setIsJobModalOpen(true);
                            }}
                            className="h-8 w-8 p-0 rounded-lg text-slate-600 hover:bg-slate-100"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDeleteJob(j)}
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
      )}

      {/* TAB 2: Applications */}
      {activeTab === "applications" && (
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          {loadingApps ? (
            <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
              <p className="text-sm font-medium">Loading candidate applications...</p>
            </div>
          ) : applications.length === 0 ? (
            <div className="py-20 text-center px-4">
              <p className="text-sm text-slate-500">No candidate applications received yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50/80 text-xs uppercase font-semibold text-slate-500 border-b border-slate-200">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Candidate</th>
                    <th className="py-3.5 px-4">Position Applied</th>
                    <th className="py-3.5 px-4">Applied Date</th>
                    <th className="py-3.5 px-4">Resume</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">Review Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-4 px-4 sm:px-6">
                        <div className="font-bold text-slate-900">{app.fullName}</div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          <span>{app.email}</span>
                          {app.phone && <span> • {app.phone}</span>}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-xs font-semibold text-blue-700">
                        {app.job?.title || "General Application"}
                      </td>
                      <td className="py-4 px-4 text-xs text-slate-500">
                        {new Date(app.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </td>
                      <td className="py-4 px-4">
                        {app.resumeUrl && app.resumeUrl !== "No resume uploaded" ? (
                          <a
                            href={app.resumeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100"
                          >
                            <Download className="w-3 h-3" />
                            Resume
                          </a>
                        ) : (
                          <span className="text-xs text-slate-400 italic">None</span>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        <Badge
                          className={cn(
                            app.status === "NEW" && "bg-amber-50 text-amber-700 border-amber-200",
                            app.status === "REVIEWED" && "bg-blue-50 text-blue-700 border-blue-200",
                            app.status === "SHORTLISTED" && "bg-emerald-50 text-emerald-700 border-emerald-200",
                            app.status === "REJECTED" && "bg-rose-50 text-rose-700 border-rose-200"
                          )}
                        >
                          {app.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-right">
                        <select
                          value={app.status}
                          onChange={(e) => handleUpdateAppStatus(app.id, e.target.value)}
                          className="h-8 rounded-lg border border-slate-200 bg-white px-2 text-xs font-semibold text-slate-700"
                        >
                          <option value="NEW">New</option>
                          <option value="REVIEWED">Reviewed</option>
                          <option value="SHORTLISTED">Shortlisted</option>
                          <option value="REJECTED">Rejected</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Post/Edit Job Modal */}
      {isJobModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">
                {editingJob ? "Edit Job Opening" : "Post New Job Opening"}
              </h3>
              <button
                onClick={() => setIsJobModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveJob} className="space-y-4 mt-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Position Title *
                  </label>
                  <Input
                    required
                    value={jobFormData.title}
                    onChange={(e) => setJobFormData({ ...jobFormData, title: e.target.value })}
                    placeholder="e.g. Senior Next.js Developer"
                    className="rounded-xl h-11 border-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Department *
                  </label>
                  <Input
                    required
                    value={jobFormData.department}
                    onChange={(e) => setJobFormData({ ...jobFormData, department: e.target.value })}
                    placeholder="e.g. Engineering, Marketing, AI"
                    className="rounded-xl h-11 border-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Location
                  </label>
                  <Input
                    value={jobFormData.location}
                    onChange={(e) => setJobFormData({ ...jobFormData, location: e.target.value })}
                    className="rounded-xl h-11 border-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Employment Type
                  </label>
                  <Input
                    value={jobFormData.type}
                    onChange={(e) => setJobFormData({ ...jobFormData, type: e.target.value })}
                    className="rounded-xl h-11 border-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Experience
                  </label>
                  <Input
                    value={jobFormData.experience || ""}
                    onChange={(e) => setJobFormData({ ...jobFormData, experience: e.target.value })}
                    className="rounded-xl h-11 border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Job Description
                </label>
                <textarea
                  rows={4}
                  value={jobFormData.description}
                  onChange={(e) => setJobFormData({ ...jobFormData, description: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-100">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsJobModalOpen(false)}
                  className="rounded-xl border-slate-200 text-slate-600 h-11"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white h-11 px-6 font-medium"
                >
                  {editingJob ? "Update Job" : "Publish Job Opening"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
