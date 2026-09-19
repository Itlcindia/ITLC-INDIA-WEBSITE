import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { getSessionUser } from '@/lib/auth';
import { localStore } from '@/lib/local-store';
import { cacheGet, cacheSet } from '@/lib/redis';
import { 
  Award, 
  GraduationCap, 
  Mail, 
  Briefcase, 
  FileText, 
  ArrowRight, 
  Plus, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Package
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const user = await getSessionUser();

  // Fetch real-time KPI metrics with instant 0ms fallback from localStore
  const localData = localStore.getDashboardStats();
  let stats = localData.stats;
  let recentStudents: any[] = localData.recentStudents;
  let recentCertificates: any[] = localData.recentCertificates;

  const cacheKey = 'admin:dashboard:summary';
  const cached = await cacheGet<{ stats: typeof stats; recentStudents: any[]; recentCertificates: any[] }>(cacheKey).catch(() => null);

  if (cached && cached.stats) {
    stats = cached.stats;
    recentStudents = cached.recentStudents || recentStudents;
    recentCertificates = cached.recentCertificates || recentCertificates;
  } else {
    try {
      const [
        totalCert,
        verifiedCert,
        pendingStud,
        totalStud,
        inquiries,
        jobs,
        apps,
        blogs,
        products,
        studentsList,
        certsList
      ] = await Promise.all([
        prisma.certificate.count().catch(() => stats.totalCertificates),
        prisma.certificate.count({ where: { status: 'VERIFIED' } }).catch(() => stats.verifiedCertificates),
        prisma.studentRegistration.count({ where: { status: 'PENDING' } }).catch(() => stats.pendingStudents),
        prisma.studentRegistration.count({ where: { status: 'APPROVED' } }).catch(() => stats.totalStudents),
        prisma.contactInquiry.count({ where: { status: 'NEW' } }).catch(() => stats.newInquiries),
        prisma.job.count({ where: { status: 'ACTIVE' } }).catch(() => stats.activeJobs),
        prisma.jobApplication.count().catch(() => stats.totalApplications),
        prisma.blog.count({ where: { isPublished: true } }).catch(() => stats.publishedBlogs),
        prisma.product.count().catch(() => stats.totalProducts),
        prisma.studentRegistration.findMany({
          take: 5,
          orderBy: { createdAt: 'desc' },
          select: {
            id: true,
            fullName: true,
            courseApplied: true,
            collegeName: true,
            status: true,
          },
        }).catch(() => recentStudents),
        prisma.certificate.findMany({
          take: 5,
          orderBy: { createdAt: 'desc' },
          select: {
            id: true,
            certificateNumber: true,
            studentName: true,
            courseName: true,
            status: true,
          },
        }).catch(() => recentCertificates),
      ]);

      stats = {
        totalCertificates: totalCert,
        verifiedCertificates: verifiedCert,
        pendingStudents: pendingStud,
        totalStudents: totalStud,
        newInquiries: inquiries,
        activeJobs: jobs,
        totalApplications: apps,
        publishedBlogs: blogs,
        totalProducts: products,
      };
      if (studentsList && studentsList.length > 0) recentStudents = studentsList;
      if (certsList && certsList.length > 0) recentCertificates = certsList;

      await cacheSet(cacheKey, { stats, recentStudents, recentCertificates }, 30).catch(() => {});
    } catch (error) {
      console.warn("Notice: Dashboard metric fetch used local store fallback:", error);
    }
  }

  return (
    <div className="space-y-8 font-body">
      {/* Welcome Banner - Homepage Design Aesthetic */}
      <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white p-8 md:p-10 overflow-hidden shadow-xl shadow-slate-900/10">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary-foreground text-xs font-bold backdrop-blur-md">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span>ITLC INDIA Command Center</span>
            </div>
            <h1 className="font-headline font-black text-2xl md:text-3xl lg:text-4xl tracking-tight text-white">
              Welcome back, {user?.name || 'Administrator'}
            </h1>
            <p className="text-slate-300 text-sm max-w-xl">
              Monitor certificates, student enrollment, customer leads, and company content in real-time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              className="rounded-2xl font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 h-11 px-5 gap-2 cursor-pointer"
            >
              <Link href="/admin/certificates?action=new">
                <Plus className="h-4 w-4" />
                <span>Issue Certificate</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-2xl font-bold border-white/20 bg-white/10 hover:bg-white/20 text-white h-11 px-5 cursor-pointer backdrop-blur-md"
            >
              <Link href="/admin/students">
                <span>View Admissions</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Certificates */}
        <Link href="/admin/certificates" className="group block">
          <Card className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs hover:shadow-md transition-all group-hover:border-primary/40">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Certificates
              </span>
              <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4">
              <span className="font-headline font-black text-3xl text-slate-900 block">
                {stats.totalCertificates}
              </span>
              <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {stats.verifiedCertificates} Active Verified
              </span>
            </div>
          </Card>
        </Link>

        {/* Student Admissions */}
        <Link href="/admin/students" className="group block">
          <Card className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs hover:shadow-md transition-all group-hover:border-primary/40">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Student Admissions
              </span>
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4">
              <span className="font-headline font-black text-3xl text-slate-900 block">
                {stats.totalStudents}
              </span>
              <span className="text-xs font-semibold text-amber-600 flex items-center gap-1 mt-1">
                <Clock className="h-3.5 w-3.5" />
                {stats.pendingStudents} Pending Review
              </span>
            </div>
          </Card>
        </Link>

        {/* Inquiries & Leads */}
        <Link href="/admin/contacts" className="group block">
          <Card className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs hover:shadow-md transition-all group-hover:border-primary/40">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Contact Leads
              </span>
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4">
              <span className="font-headline font-black text-3xl text-slate-900 block">
                {stats.newInquiries}
              </span>
              <span className="text-xs font-semibold text-blue-600 flex items-center gap-1 mt-1">
                <TrendingUp className="h-3.5 w-3.5" />
                New inquiries submitted
              </span>
            </div>
          </Card>
        </Link>

        {/* Careers & Applications */}
        <Link href="/admin/careers" className="group block">
          <Card className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs hover:shadow-md transition-all group-hover:border-primary/40">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Job Applicants
              </span>
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Briefcase className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4">
              <span className="font-headline font-black text-3xl text-slate-900 block">
                {stats.totalApplications}
              </span>
              <span className="text-xs font-semibold text-purple-600 flex items-center gap-1 mt-1">
                {stats.activeJobs} Active job openings
              </span>
            </div>
          </Card>
        </Link>
      </div>

      {/* Quick Action Shortcuts Grid */}
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 md:p-8 shadow-xs">
        <h3 className="font-headline font-bold text-slate-900 text-lg mb-4">
          Quick Management Shortcuts
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <Button asChild variant="outline" className="h-20 flex flex-col items-center justify-center rounded-2xl border-slate-200 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all">
            <Link href="/admin/certificates?action=new">
              <Award className="h-6 w-6 text-primary mb-1" />
              <span className="text-xs font-bold">Issue Certificate</span>
            </Link>
          </Button>

          <Button asChild variant="outline" className="h-20 flex flex-col items-center justify-center rounded-2xl border-slate-200 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all">
            <Link href="/admin/students">
              <GraduationCap className="h-6 w-6 text-amber-500 mb-1" />
              <span className="text-xs font-bold">Admissions</span>
            </Link>
          </Button>

          <Button asChild variant="outline" className="h-20 flex flex-col items-center justify-center rounded-2xl border-slate-200 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all">
            <Link href="/admin/products">
              <Package className="h-6 w-6 text-indigo-500 mb-1" />
              <span className="text-xs font-bold">Products Suite</span>
            </Link>
          </Button>

          <Button asChild variant="outline" className="h-20 flex flex-col items-center justify-center rounded-2xl border-slate-200 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all">
            <Link href="/admin/blogs">
              <FileText className="h-6 w-6 text-emerald-500 mb-1" />
              <span className="text-xs font-bold">Blog CMS</span>
            </Link>
          </Button>

          <Button asChild variant="outline" className="h-20 flex flex-col items-center justify-center rounded-2xl border-slate-200 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all">
            <Link href="/admin/contacts">
              <Mail className="h-6 w-6 text-blue-500 mb-1" />
              <span className="text-xs font-bold">Review Leads</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Two-Column Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Student Applications */}
        <Card className="rounded-3xl border border-slate-200/80 bg-white shadow-xs">
          <CardHeader className="flex flex-row items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <CardTitle className="font-headline font-bold text-base text-slate-900">
                Recent Student Applications
              </CardTitle>
              <CardDescription className="text-xs text-slate-500">
                Latest admission submissions via website
              </CardDescription>
            </div>
            <Button asChild variant="ghost" size="sm" className="text-xs font-bold text-primary">
              <Link href="/admin/students">
                View All <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            {recentStudents.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-sm">
                No admission applications recorded yet.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {recentStudents.map((stud) => (
                  <div key={stud.id} className="p-4 flex items-center justify-between hover:bg-slate-50/60 transition-colors">
                    <div className="space-y-0.5">
                      <p className="font-bold text-sm text-slate-900">{stud.fullName}</p>
                      <p className="text-xs text-slate-500">{stud.courseApplied} • {stud.collegeName}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant="outline" 
                        className={
                          stud.status === 'APPROVED' 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                            : stud.status === 'REJECTED' 
                            ? 'bg-red-50 text-red-700 border-red-200' 
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }
                      >
                        {stud.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Latest Certificates Issued */}
        <Card className="rounded-3xl border border-slate-200/80 bg-white shadow-xs">
          <CardHeader className="flex flex-row items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <CardTitle className="font-headline font-bold text-base text-slate-900">
                Official Certificates
              </CardTitle>
              <CardDescription className="text-xs text-slate-500">
                Recently issued verifiable credentials
              </CardDescription>
            </div>
            <Button asChild variant="ghost" size="sm" className="text-xs font-bold text-primary">
              <Link href="/admin/certificates">
                View All <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            {recentCertificates.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-sm">
                No certificates issued in database yet.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {recentCertificates.map((cert) => (
                  <div key={cert.id} className="p-4 flex items-center justify-between hover:bg-slate-50/60 transition-colors">
                    <div className="space-y-0.5">
                      <p className="font-bold text-sm text-slate-900 font-mono">{cert.certificateNumber}</p>
                      <p className="text-xs text-slate-500">{cert.studentName} — {cert.courseName}</p>
                    </div>
                    <Badge 
                      variant="outline"
                      className={
                        cert.status === 'VERIFIED'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-red-50 text-red-700 border-red-200'
                      }
                    >
                      {cert.status}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
