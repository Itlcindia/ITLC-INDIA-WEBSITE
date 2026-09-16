import { ShieldCheck, Target, Users, Database, FileSearch, Lock, Share2, Clock, UserCheck, AlertTriangle, Settings, Mail, Shield } from 'lucide-react';
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Data Protection Policy | ITLC INDIA PVT LTD',
  description: 'ITLC India Pvt Ltd Data Protection Policy outlining our commitment to protecting the privacy, confidentiality, and integrity of personal and business data.',
}

export default function DataProtectionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 flex items-center justify-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Data Protection Policy
              </h1>
              <p className="text-lg text-white/80">
                Protecting the privacy, confidentiality, and integrity of personal and business data.
              </p>
              <p className="text-sm text-white/60">Last updated: August 01, 2024</p>
            </div>
             <div className="relative flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10" />
                <Shield className="h-48 w-48 text-blue-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-screen-lg mx-auto px-4 text-gray-700 space-y-12">
          
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              ITLC India Pvt Ltd, recognized as a No.1 IT Company in Lucknow, India and among the best IT companies in India, is committed to protecting the privacy, confidentiality, and integrity of personal and business data. This Data Protection Policy outlines how we collect, use, store, and safeguard information in compliance with applicable data protection laws in India.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" /> Purpose
            </h2>
            <p>The purpose of this policy is to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Ensure the protection of personal and sensitive data</li>
              <li>Define responsibilities for data handling and security</li>
              <li>Comply with applicable data protection laws and regulations</li>
              <li>Maintain trust with clients, employees, and stakeholders</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" /> Scope
            </h2>
            <p>This policy applies to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>All employees (permanent, temporary, interns)</li>
              <li>Clients, vendors, and third-party partners</li>
              <li>All data processed, stored, or transmitted by ITLC India Pvt Ltd</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Database className="h-6 w-6 text-primary" /> Types of Data Collected
            </h2>
            <p>We may collect and process the following types of data:</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {[
                  "Personal information (name, email, contact details)",
                  "Business and project-related data",
                  "Technical data (IP address, browser type, device information)",
                  "Financial or transactional data (where applicable)"
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <FileSearch className="h-6 w-6 text-primary" /> Data Usage
            </h2>
            <p>Data collected is used for:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Providing and improving IT services</li>
              <li>Communication and customer support</li>
              <li>Legal and regulatory compliance</li>
              <li>Business operations and analytics</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Lock className="h-6 w-6 text-primary" /> Data Security
            </h2>
            <p>ITLC India Pvt Ltd implements appropriate technical and organizational measures to protect data, including:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Secure servers and encryption methods</li>
              <li>Access control and authentication systems</li>
              <li>Regular monitoring and security updates</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Share2 className="h-6 w-6 text-primary" /> Data Sharing
            </h2>
            <p>We do not sell or rent personal data. Data may be shared only:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>With authorized employees and partners</li>
              <li>When required by law or legal processes</li>
              <li>To protect company rights and prevent fraud</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" /> Data Retention
            </h2>
            <p>Data is retained only for as long as necessary to fulfill business, legal, or regulatory purposes. After that, it is securely deleted or anonymized.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <UserCheck className="h-6 w-6 text-primary" /> User Rights
            </h2>
            <p>Individuals have the right to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Access their personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent (where applicable)</li>
              <li>Raise concerns regarding data usage</li>
            </ul>
            <p className="flex items-center gap-2 font-medium mt-4">
              <Mail className="h-5 w-5 text-primary" />
              <span>Requests can be made via email at <a href="mailto:info@itlcindia.com" className="text-primary hover:underline">info@itlcindia.com</a></span>
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-primary" /> Data Breach Management
            </h2>
            <p>In the event of a data breach, ITLC India Pvt Ltd will take immediate action to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Contain and assess the breach</li>
              <li>Notify affected parties, if required</li>
              <li>Comply with legal reporting obligations</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-primary" /> Compliance
            </h2>
            <p>
              We comply with applicable Indian data protection and IT laws to ensure responsible handling of data.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Settings className="h-6 w-6 text-primary" /> Amendments
            </h2>
            <p>
              ITLC India Pvt Ltd reserves the right to update this policy at any time to reflect legal or operational changes.
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
