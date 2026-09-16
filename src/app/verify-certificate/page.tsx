"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  AlertCircle, 
  Search, 
  ShieldCheck, 
  Hash, 
  User, 
  GraduationCap, 
  Building2, 
  Download, 
  Eye,
  Calendar,
  Clock,
  Share2,
  QrCode,
  ShieldAlert,
  Ban,
  Hourglass,
  Loader2,
  FileText,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";

const normalizeCertificateNumber = (value: string) => {
  return value.trim().toUpperCase();
};

const isValidCertificateNumber = (value: string) => {
  return /^[A-Z0-9/-]+$/.test(value);
};

const safeFileName = (value: string) => {
  return value.replace(/[^A-Za-z0-9]/g, "_");
};

const normalizeDob = (value: string) => {
  if (!value) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const parts = value.split(/[\/\-]/);
  if (parts.length === 3) {
    const [mm, dd, yyyy] = parts;
    return `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
  }
  return value;
};

interface CertificateData {
  certificate_number: string;
  student_name: string;
  course_name: string;
  start_date: string;
  completion_date: string;
  issue_date: string;
  expiry_date?: string;
  date_of_birth?: string;
  verification_id: string;
  certificate_file_url: string;
  status: 'Verified' | 'Revoked' | 'Expired';
}

export default function VerifyCertificatePage() {
  const [certNumber, setCertNumber] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [resultData, setResultData] = useState<CertificateData | null>(null);

  // Security States
  const [showDobModal, setShowDobModal] = useState(false);
  const [dobPassword, setDobPassword] = useState("");
  const [fileAction, setFileAction] = useState<"view" | "download" | null>(null);
  const [verifyingDob, setVerifyingDob] = useState(false);
  const [dobError, setDobError] = useState<string | null>(null);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const formattedCertNumber = normalizeCertificateNumber(certNumber);
    if (!formattedCertNumber) return;
    if (!isValidCertificateNumber(formattedCertNumber)) {
      setStatus("error");
      setResultData(null);
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch(`/api/verify-certificate?certificate=${encodeURIComponent(formattedCertNumber)}`);
      if (response.ok) {
        const data = await response.json();
        
        // Use normalized fields from proxy top-level
        const mappedData: CertificateData = {
          certificate_number: data.certificate_number || formattedCertNumber,
          student_name: data.student_name || "N/A",
          course_name: data.course_name || "N/A",
          start_date: data.start_date || "",
          completion_date: data.completion_date || "",
          issue_date: data.issue_date || "",
          expiry_date: data.expiry_date || "",
          date_of_birth: data.date_of_birth || "",
          verification_id: data.verification_id || "",
          certificate_file_url: data.certificate_file_url || "",
          status: data.expired ? "Expired" : data.status || "Verified",
        };

        setResultData(mappedData);
        setStatus('success');
      } else {
        setStatus('error');
        setResultData(null);
      }
    } catch (err) {
      console.error('Verification fetch error:', err);
      setStatus('error');
      setResultData(null);
    }
  };

  const handleFileActionTrigger = (action: "view" | "download") => {
    setFileAction(action);
    setDobError(null);
    setDobPassword("");
    setShowDobModal(true);
  };

  const submitDobVerification = async () => {
    if (!dobPassword || !resultData) return;
    setVerifyingDob(true);
    setDobError(null);

    const normalizedDob = normalizeDob(dobPassword);
    const normalizedCert = normalizeCertificateNumber(resultData.certificate_number);

    try {
      const response = await fetch("/api/verify-certificate-file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          certificate_number: normalizedCert,
          date_of_birth: normalizedDob,
          action: fileAction,
          secure_file_action: fileAction,
        }),
      });

      const data = await response.json();

      if (data.success && (data.file_url || data.certificate_file_url || data.pdf_url)) {
        const fileUrl = data.file_url || data.certificate_file_url || data.pdf_url;
        setShowDobModal(false);
        if (fileAction === "view") {
          window.open(fileUrl, "_blank");
        } else {
          const a = document.createElement("a");
          a.href = fileUrl;
          a.download = `Certificate_${safeFileName(normalizedCert)}.pdf`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      } else {
        setDobError(data.message || data.error || "Incorrect Date of Birth. If the problem persists, contact admin.");
      }
    } catch {
      setDobError("An error occurred during verification. Please try again.");
    } finally {
      setVerifyingDob(false);
    }
  };

  const isVerified = resultData?.status === 'Verified';
  const isRevoked = resultData?.status === 'Revoked';
  const isExpired = resultData?.status === 'Expired';

  const formatDate = (dateStr: string | undefined) => {
    if (!dateStr || dateStr === '0000-00-00' || dateStr === 'N/A' || dateStr === '') return 'N/A';
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    } catch { return dateStr; }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f8fbff]">
      <section className="relative pt-[200px] pb-24 bg-[#0b1f3a] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent opacity-60" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full -mr-64 -mt-32" />
        </div>
        <div className="container relative z-10 max-w-screen-xl mx-auto px-6 text-right flex flex-col items-end">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 flex flex-col items-end">
            <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary bg-primary/10 rounded-full font-bold uppercase tracking-wider text-[10px]">
              Credential Authentication
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight max-w-4xl">
              Certificate Verification
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 -mt-12 relative z-20">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="max-w-4xl ml-auto space-y-12">
            <Card className="border-none shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[32px] overflow-hidden bg-white">
              <CardHeader className="bg-white border-b border-slate-50 p-8">
                <CardTitle className="text-xl font-bold flex items-center justify-end gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Search className="h-5 w-5" />
                  </div>
                  Authentication Panel
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleVerify} className="space-y-6">
                  <div className="space-y-3 text-right">
                    <Label htmlFor="certNumber" className="text-xs font-bold text-slate-500 uppercase tracking-widest">Certificate Number</Label>
                    <div className="relative">
                      <Hash className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input 
                        id="certNumber"
                        placeholder="ITLC/DM/26060001" 
                        className="pl-11 h-14 rounded-2xl border-slate-200 focus:ring-primary shadow-sm text-lg text-right"
                        value={certNumber}
                        onChange={(e) => setCertNumber(e.target.value.toUpperCase())}
                        required
                        pattern="[A-Za-z0-9/-]+"
                        title="Example: ITLC/DM/26060001"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full h-14 rounded-2xl text-lg font-black shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95" disabled={status === 'loading'}>
                    {status === 'loading' ? <span className="flex items-center gap-2"><Loader2 className="h-5 w-5 animate-spin" />Authenticating...</span> : 'Verify Certificate'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <AnimatePresence mode="wait">
              {status === 'success' && resultData && (
                <motion.div key="success-card" initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: -20 }} className="space-y-8">
                  <Card className="border-none shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)] rounded-[40px] overflow-hidden bg-white">
                    <div className={cn("p-8 text-white flex flex-col md:flex-row items-center justify-between gap-4", isVerified && "bg-[#10B981]", isRevoked && "bg-[#EF4444]", isExpired && "bg-[#F59E0B]")}>
                      <div className="flex items-center gap-4 flex-row-reverse">
                        <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                          {isVerified && <CheckCircle2 className="h-8 w-8" />}
                          {isRevoked && <Ban className="h-8 w-8" />}
                          {isExpired && <Hourglass className="h-8 w-8" />}
                        </div>
                        <div className="text-right">
                          <h2 className="text-2xl font-black tracking-tight leading-none">
                            {isVerified && "Certificate Authenticated"}
                            {isRevoked && "Certificate Revoked"}
                            {isExpired && "Certificate Expired"}
                          </h2>
                          <p className="text-sm text-white/80 mt-1 font-medium">Digital record status verified in real-time.</p>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-8 md:p-12">
                      <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-10 order-2 lg:order-1">
                          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 relative z-10">
                            <InfoItem label="Student Name" value={resultData.student_name} icon={<User />} isRight />
                            <InfoItem label="Certificate No." value={resultData.certificate_number} icon={<Hash />} isMono isRight />
                            <InfoItem label="Program / Course Name" value={resultData.course_name} icon={<GraduationCap />} fullWidth isRight />
                            <InfoItem label="Training Duration" value={resultData.start_date && resultData.completion_date ? `${formatDate(resultData.start_date)} - ${formatDate(resultData.completion_date)}` : 'N/A'} icon={<Clock />} isRight />
                            <InfoItem label="Issue Date" value={formatDate(resultData.issue_date)} icon={<Calendar />} isRight />
                            {resultData.expiry_date && resultData.expiry_date !== '0000-00-00' && (
                              <InfoItem label="Expiry Date" value={formatDate(resultData.expiry_date)} icon={<Calendar />} isRight />
                            )}
                            <InfoItem label="Issued By" value="ITLC India Pvt. Ltd." icon={<Building2 />} isRight />
                            <InfoItem label="Verification ID" value={resultData.verification_id} icon={<ShieldCheck />} isMono isRight />
                          </div>

                          {isVerified && (
                             <div className="pt-10 border-t border-slate-50 relative z-10 flex justify-end">
                               {resultData.certificate_file_url ? (
                                 <div className="flex flex-wrap gap-4 justify-end">
                                    <Button onClick={() => handleFileActionTrigger("view")} className="h-14 rounded-2xl font-black text-lg gap-2 shadow-xl shadow-primary/20">
                                      <Eye className="h-5 w-5" /> View Certificate
                                    </Button>
                                    <Button variant="outline" onClick={() => handleFileActionTrigger("download")} className="h-14 rounded-2xl font-black text-lg gap-2 border-slate-200 bg-white">
                                      <Download className="h-5 w-5" /> Download PDF
                                    </Button>
                                 </div>
                               ) : (
                                 <div className="flex items-center gap-3 p-6 bg-slate-50 rounded-2xl text-slate-500 font-bold border border-dashed border-slate-200">
                                   <FileText className="h-6 w-6 text-slate-300" />
                                   <span>Certificate PDF not uploaded.</span>
                                 </div>
                               )}
                             </div>
                          )}

                          {isRevoked && (
                            <div className="p-6 bg-red-50 border-2 border-red-100 rounded-3xl flex items-start flex-row-reverse gap-4 text-red-800">
                              <ShieldAlert className="h-6 w-6 shrink-0 mt-0.5" />
                              <div className="space-y-1 text-right">
                                <p className="font-black uppercase tracking-tight text-sm">Official Notice</p>
                                <p className="text-sm font-medium leading-relaxed">This certificate has been officially revoked by the institution and is no longer valid.</p>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col items-center justify-start gap-6 order-1 lg:order-2">
                            <div className="p-6 bg-slate-50 rounded-[32px] border-2 border-dashed border-slate-200 flex flex-col items-center gap-4 w-full max-w-[240px]">
                                <QrCode className="h-32 w-32 text-slate-300" />
                            </div>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="p-8 pt-0 bg-slate-50/50 flex flex-col sm:flex-row justify-end items-center border-t border-slate-100 gap-6">
                      <Button asChild variant="outline" className="flex-1 sm:flex-none h-12 rounded-xl font-bold gap-2 border-green-200 text-green-600 hover:bg-green-50 bg-white">
                        <a href={`https://wa.me/?text=${encodeURIComponent(`Verify my ITLC India certificate for ${resultData.course_name} - ${resultData.student_name} at: ${typeof window !== 'undefined' ? window.location.origin : ''}/verify-certificate?certificate=${resultData.certificate_number}`)}`} target="_blank" rel="noopener noreferrer">
                          <Share2 className="h-4 w-4" /> Share on WhatsApp
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div key="error-msg" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-8 rounded-[32px] bg-red-50 border-2 border-red-100 text-red-800 flex items-center flex-row-reverse gap-6 shadow-sm">
                  <div className="p-4 bg-red-100 rounded-2xl text-red-600"><AlertCircle className="h-8 w-8" /></div>
                  <div className="space-y-1 text-right">
                    <p className="font-black text-xl uppercase tracking-tight">Verification Failed</p>
                    <p className="text-red-700/80 font-medium leading-relaxed">The record could not be found. Please check the number or contact support.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Dialog open={showDobModal} onOpenChange={setShowDobModal}>
        <DialogContent className="max-w-md bg-white/90 backdrop-blur-xl border-none shadow-2xl rounded-[32px] p-0 overflow-hidden">
          <div className="bg-primary p-8 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-md"><Lock className="h-8 w-8 text-white" /></div>
            <DialogHeader><DialogTitle className="text-2xl font-black tracking-tight text-white">Security Verification</DialogTitle></DialogHeader>
            <p className="text-primary-foreground/70 text-sm mt-2 font-medium">Please enter the registered Date of Birth.</p>
          </div>
          <div className="p-8 space-y-6">
            <div className="space-y-3">
              <Label htmlFor="dobPassword" className="text-xs font-bold text-slate-500 uppercase tracking-widest text-right block">Date of Birth</Label>
              <Input id="dobPassword" type="date" className="h-14 rounded-2xl border-slate-200 shadow-sm text-lg text-right" value={dobPassword} onChange={(e) => setDobPassword(e.target.value)} />
            </div>
            <AnimatePresence>
              {dobError && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                  <Alert variant="destructive" className="rounded-2xl border-red-200 bg-red-50 text-red-800">
                    <AlertCircle className="h-4 w-4" /><AlertDescription className="font-medium text-xs">{dobError}</AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>
            <DialogFooter className="sm:justify-center">
              <Button onClick={submitDobVerification} disabled={verifyingDob || !dobPassword} className="w-full h-14 rounded-2xl text-lg font-black shadow-xl shadow-primary/20">
                {verifyingDob ? <span className="flex items-center gap-2"><Loader2 className="h-5 w-5 animate-spin" />Verifying...</span> : `Verify & ${fileAction === 'view' ? 'View' : 'Download'}`}
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function InfoItem({ label, value, icon, fullWidth = false, isMono = false, isRight = false }: { label: string; value: string; icon: React.ReactNode; fullWidth?: boolean; isMono?: boolean; isRight?: boolean }) {
  return (
    <div className={cn("space-y-2", fullWidth && "sm:col-span-2", isRight && "text-right")}>
      <p className={cn("text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2", isRight && "justify-end")}>
        {!isRight && React.cloneElement(icon as React.ReactElement<any>, { className: "h-3 w-3" })}
        {label}
        {isRight && React.cloneElement(icon as React.ReactElement<any>, { className: "h-3 w-3" })}
      </p>
      <p className={cn("text-lg font-bold text-slate-900 leading-tight", isMono && "font-mono")}>{value || 'N/A'}</p>
    </div>
  );
}
