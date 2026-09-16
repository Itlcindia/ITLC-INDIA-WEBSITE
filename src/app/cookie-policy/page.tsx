import { Cookie, FileText, Info, Settings, ShieldCheck, Mail, Clock } from 'lucide-react';
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Cookie Policy | ITLC INDIA PVT LTD',
  description: 'This Cookie Policy explains how ITLC India Pvt Ltd uses cookies and similar technologies when you visit our website.',
}

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 flex items-center justify-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Cookie Policy
              </h1>
              <p className="text-lg text-white/80">
                Understanding how we use cookies to improve your experience on our website.
              </p>
              <p className="text-sm text-white/60">Last updated: August 01, 2024</p>
            </div>
             <div className="relative flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10" />
                <Cookie className="h-48 w-48 text-blue-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-screen-lg mx-auto px-4 text-gray-700 space-y-12">
          
          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Info className="h-6 w-6 text-primary" />Introduction</h2>
            <p>This Cookie Policy explains how ITLC India Pvt Ltd ("Company", "we", "our", or "us") uses cookies and similar technologies when you visit our website. It describes what cookies are, how we use them, and your choices regarding their use.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Cookie className="h-6 w-6 text-primary" />What Are Cookies</h2>
            <p>Cookies are small text files that are stored on your device when you visit a website. They help websites function efficiently and provide information to the website owners.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Settings className="h-6 w-6 text-primary" />How We Use Cookies</h2>
            <p>We use cookies to improve user experience and enhance website performance. Specifically, we use cookies to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Ensure proper website functionality</li>
              <li>Understand how visitors interact with our website</li>
              <li>Improve website performance and usability</li>
              <li>Support marketing and communication efforts</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><FileText className="h-6 w-6 text-primary" />Types of Cookies We Use</h2>
            <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">Essential Cookies</h3>
                    <p className="text-sm">These cookies are necessary for the website to function properly. They enable core functionalities such as security, network management, and accessibility.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">Performance Cookies</h3>
                    <p className="text-sm">These cookies collect information about how visitors use our website. The data is used to improve how the website works.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">Functional Cookies</h3>
                    <p className="text-sm">These cookies allow the website to remember choices you make, such as language preferences, to provide a more personalized experience.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">Advertising Cookies</h3>
                    <p className="text-sm">These cookies are used to deliver relevant advertisements and measure the effectiveness of marketing campaigns.</p>
                </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Settings className="h-6 w-6 text-primary" />Managing Cookies</h2>
            <p>You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the website.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><ShieldCheck className="h-6 w-6 text-primary" />Data Protection</h2>
            <p>Any information collected through cookies is handled securely and in accordance with applicable data protection laws and regulations.</p>
          </div>

          <div className="space-y-4 pt-12 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800">Company Information</h2>
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

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Clock className="h-6 w-6 text-primary" />Updates to This Policy</h2>
            <p>We may update this Cookie Policy from time to time to reflect changes in legal or regulatory requirements or our practices. Any updates will be posted on this page.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Mail className="h-6 w-6 text-primary" />Contact Us</h2>
            <p>If you have any questions regarding this Cookie Policy, you may contact us at: <a href="mailto:info@itlcindia.com" className="text-primary hover:underline">info@itlcindia.com</a></p>
          </div>

        </div>
      </section>
    </>
  );
}
