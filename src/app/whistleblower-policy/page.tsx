import { ShieldCheck, Target, Users, AlertTriangle, Mail, Lock, ShieldAlert, Search, UserX, Settings, Building2 } from 'lucide-react';
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Whistleblower Policy | ITLC INDIA PVT LTD',
  description: 'Whistleblower Policy of ITLC India Pvt Ltd, providing a secure and confidential mechanism for reporting unethical practices and misconduct.',
}

export default function WhistleblowerPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 flex items-center justify-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Whistleblower Policy
              </h1>
              <p className="text-lg text-white/80">
                Maintaining the highest standards of ethics, integrity, and transparency through secure reporting.
              </p>
              <p className="text-sm text-white/60">Last updated: August 01, 2024</p>
            </div>
             <div className="relative flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10" />
                <ShieldCheck className="h-48 w-48 text-blue-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-screen-lg mx-auto px-4 text-gray-700 space-y-12">
          
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              ITLC India Pvt Ltd, recognized as a No.1 IT Company in Lucknow, India and among the best IT companies in India, is committed to maintaining the highest standards of ethics, integrity, and transparency. This Whistleblower Policy provides a mechanism for reporting unethical practices, misconduct, or violations within the organization.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" /> Purpose
            </h2>
            <p>The purpose of this policy is to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Encourage employees and stakeholders to report unethical behavior</li>
              <li>Provide a secure and confidential reporting mechanism</li>
              <li>Ensure protection against retaliation</li>
              <li>Promote accountability and ethical business practices</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" /> Scope
            </h2>
            <p>This policy applies to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Employees (permanent, temporary, interns)</li>
              <li>Directors and management</li>
              <li>Vendors, consultants, and business partners associated with ITLC India Pvt Ltd</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-primary" /> Reportable Concerns
            </h2>
            <p>Whistleblowers can report concerns including but not limited to:</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {[
                  "Fraud, corruption, or bribery",
                  "Financial irregularities or mismanagement",
                  "Violation of company policies or legal requirements",
                  "Harassment or unethical behavior",
                  "Data breaches or misuse of confidential information"
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                    <ShieldAlert className="h-5 w-5 text-red-500 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Mail className="h-6 w-6 text-primary" /> Reporting Mechanism
            </h2>
            <p>Any individual can report concerns through:</p>
            <ul className="list-disc list-inside space-y-3 pl-4">
              <li><strong>Email:</strong> <a href="mailto:info@itlcindia.com" className="text-primary hover:underline font-medium">info@itlcindia.com</a></li>
              <li><strong>Written complaint:</strong> Direct submission to the management</li>
            </ul>
            <p className="text-sm bg-blue-50 p-4 rounded-lg border border-blue-100 italic">
              Reports should include sufficient details and evidence, where possible, to facilitate investigation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Lock className="h-6 w-6 text-primary" /> Confidentiality
            </h2>
            <p>
              ITLC India Pvt Ltd ensures that all whistleblower reports are treated with strict confidentiality. The identity of the whistleblower will be protected to the fullest extent possible.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-primary" /> Protection Against Retaliation
            </h2>
            <p>
              The company strictly prohibits any form of retaliation against whistleblowers who report concerns in good faith. Any act of retaliation will be treated as a serious violation and may result in disciplinary action.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Search className="h-6 w-6 text-primary" /> Investigation Process
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>All reported concerns will be reviewed promptly</li>
              <li>A fair and unbiased investigation will be conducted</li>
              <li>Appropriate corrective actions will be taken based on findings</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <UserX className="h-6 w-6 text-primary" /> False Complaints
            </h2>
            <p>
              While the company encourages genuine reporting, any false or malicious complaints made intentionally may lead to disciplinary action.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Settings className="h-6 w-6 text-primary" /> Compliance
            </h2>
            <p>
              ITLC India Pvt Ltd ensures compliance with applicable laws and regularly reviews this policy to maintain effectiveness.
            </p>
          </div>

          <div className="space-y-4 pt-12 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800">Contact Information</h2>
            <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Company Name</p>
                    <p className="font-medium">ITLC INDIA PVT LTD</p>
                </div>
                <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                    <p className="font-medium"><a href="mailto:info@itlcindia.com" className="text-primary hover:underline">info@itlcindia.com</a></p>
                </div>
                <div className="space-y-1 sm:col-span-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Address</p>
                    <p className="font-medium">G1/0049, Olive Wood Villa, Golf City, Lucknow, Uttar Pradesh – 226030</p>
                </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
