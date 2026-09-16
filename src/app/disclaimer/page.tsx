import { AlertTriangle, FileText, Info, ShieldAlert, Link as LinkIcon, Star, UserCheck, Clock, Mail } from 'lucide-react';
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Disclaimer | ITLC INDIA PVT LTD',
  description: 'Disclaimer – ITLC India Pvt Ltd. Recognized as a leading and No.1 IT Company in Lucknow, India.',
}

export default function DisclaimerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 flex items-center justify-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Disclaimer
              </h1>
              <p className="text-lg text-white/80">
                ITLC India Pvt Ltd – Recognizing our responsibility and providing clear information.
              </p>
              <p className="text-sm text-white/60">Last updated: August 01, 2024</p>
            </div>
             <div className="relative flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10" />
                <AlertTriangle className="h-48 w-48 text-blue-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-screen-lg mx-auto px-4 text-gray-700 space-y-12">
          
          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Info className="h-6 w-6 text-primary" />Welcome to ITLC India Pvt Ltd</h2>
            <p>Recognized as a leading and No.1 IT Company in Lucknow, India. The information provided on this website is for general informational and business purposes only.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><FileText className="h-6 w-6 text-primary" />General Disclaimer</h2>
            <p>All content, services, and information provided by ITLC India Pvt Ltd are published in good faith and for general use. While we strive to keep the information accurate and up to date, we make no warranties or guarantees of any kind regarding completeness, reliability, or accuracy.</p>
            <p>Any action you take based on the information found on this website is strictly at your own risk. ITLC India Pvt Ltd will not be liable for any losses or damages in connection with the use of our website.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><UserCheck className="h-6 w-6 text-primary" />Professional Disclaimer</h2>
            <p>The website may contain information related to IT services, digital solutions, software development, and business consulting. This information is not a substitute for professional advice. You should consult with qualified professionals before making any business or technical decisions.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><LinkIcon className="h-6 w-6 text-primary" />External Links Disclaimer</h2>
            <p>Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with ITLC India Pvt Ltd. While we aim to provide only quality links, we have no control over the content and nature of these external sites.</p>
            <p>We do not guarantee the accuracy, relevance, or completeness of any information on third-party websites.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Star className="h-6 w-6 text-primary" />Testimonials Disclaimer</h2>
            <p>The website may contain testimonials and reviews from clients. These reflect real-life experiences and opinions. However, individual results may vary, and we do not claim that all users will achieve the same results.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><ShieldAlert className="h-6 w-6 text-primary" />Limitation of Liability</h2>
            <p>Under no circumstances shall ITLC India Pvt Ltd be held liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use of our website or services.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><UserCheck className="h-6 w-6 text-primary" />Consent</h2>
            <p>By using our website, you hereby consent to this Disclaimer and agree to its terms.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Clock className="h-6 w-6 text-primary" />Updates</h2>
            <p>We reserve the right to update, amend, or make changes to this Disclaimer at any time without prior notice. Any changes will be prominently posted here.</p>
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
