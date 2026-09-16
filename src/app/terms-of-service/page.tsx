import React from 'react';
import { 
  FileText, 
  User, 
  Shield, 
  AlertTriangle, 
  Scale, 
  LifeBuoy, 
  CheckCircle2, 
  Mail, 
  Globe 
} from 'lucide-react';
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Terms & Conditions | ITLC INDIA PVT LTD',
  description: 'Official Terms & Conditions governing your access and use of ITLC INDIA PVT LTD website and enterprise software development services.',
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 flex items-center justify-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wider uppercase">
                <Scale className="w-3.5 h-3.5" /> Legal Agreement
              </div>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Terms & Conditions
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                Please read these Terms & Conditions carefully before accessing or using ITLC INDIA PVT LTD's website and IT services.
              </p>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Last Updated: September 16, 2026</span>
              </div>
            </div>
            <div className="relative flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10" />
              <Scale className="h-48 w-48 text-blue-400/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-white text-slate-800">
        <div className="container max-w-screen-lg mx-auto px-4 space-y-12">

          {/* Introductory Notice Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-4">
            <p className="text-base sm:text-lg leading-relaxed font-medium text-slate-900">
              Welcome to <span className="font-bold text-blue-700">ITLC INDIA PVT LTD</span>. These Terms & Conditions govern your access to and use of the website{' '}
              <a href="https://www.itlcindia.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">
                https://www.itlcindia.com/
              </a>{' '}
              and the services provided by ITLC INDIA PVT LTD.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              By accessing or using this website, you acknowledge that you have read, understood, and agreed to be bound by these Terms & Conditions. If you do not agree with any part of these Terms & Conditions, you should not access or use this website or our services.
            </p>
          </div>

          {/* 1. Acceptance of Terms */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">1</span>
              Acceptance of Terms
            </h2>
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <p>
                By accessing, browsing, or using this website, you agree to comply with these Terms & Conditions, all applicable laws and regulations, and any additional terms that may apply to specific services provided by ITLC INDIA PVT LTD.
              </p>
              <p>
                ITLC INDIA PVT LTD reserves the right to modify, update, or replace these Terms & Conditions at any time without prior notice. Any changes will become effective once they are published on this website.
              </p>
              <p>
                Your continued use of the website after any changes are posted constitutes your acceptance of the revised Terms & Conditions.
              </p>
            </div>
          </div>

          {/* 2. Use License */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">2</span>
              Use License
            </h2>
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <p>
                Permission is granted to temporarily download one copy of the materials (including information or software) available on ITLC INDIA PVT LTD's website for personal, non-commercial, and temporary viewing only.
              </p>
              <p className="font-medium text-slate-800">
                This permission constitutes a license and not a transfer of ownership or title. Under this license, you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-slate-600">
                <li>Modify, reproduce, or copy the materials without prior written permission.</li>
                <li>Use the materials for any commercial purpose or public display, whether commercial or non-commercial.</li>
                <li>Attempt to decompile, reverse engineer, disassemble, or otherwise attempt to extract the source code of any software contained on the website.</li>
                <li>Remove copyright, trademark, or other proprietary notices from the materials.</li>
                <li>Reproduce, distribute, publish, sell, license, or otherwise exploit any website materials without prior written permission.</li>
                <li>Transfer the materials to another person or organization or mirror the materials on any other server.</li>
              </ul>
              <p>
                This license will automatically terminate if you violate any of these restrictions and may also be terminated by ITLC INDIA PVT LTD at any time.
              </p>
              <p>
                Upon termination of this license, you must immediately delete or destroy any downloaded materials in your possession, whether in electronic or printed form.
              </p>
            </div>
          </div>

          {/* 3. Website & Software Development Services */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">3</span>
              Website & Software Development Services
            </h2>
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <p>
                ITLC INDIA PVT LTD may provide website development, web application development, software development, mobile application development, maintenance, technical support, and other related IT services.
              </p>
              <p>
                The scope of work, project specifications, timelines, deliverables, fees, payment schedules, technologies, and other applicable terms may be defined separately in a quotation, proposal, work order, invoice, service agreement, or other written communication between ITLC INDIA PVT LTD and the client.
              </p>
              <p>
                Any services or features not specifically included in the agreed scope of work may be treated as additional work and may be subject to additional charges.
              </p>
            </div>
          </div>

          {/* 4. Maintenance & Support Requirement */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">4</span>
              Maintenance & Support Requirement
            </h2>
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-blue-900 font-medium">
                For any website, software, web application, mobile application, or other development project provided by ITLC INDIA PVT LTD, the client shall be required to avail a minimum maintenance and technical support period of three (3) years, unless otherwise agreed in a separate written agreement.
              </div>
              <p className="font-medium text-slate-800">
                The maintenance and support services may include, as applicable:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> Technical support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> Bug fixing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> Routine maintenance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> Security-related updates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> Compatibility updates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> Minor technical modifications
                </li>
                <li className="flex items-center gap-2 sm:col-span-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> General troubleshooting and support
                </li>
              </ul>
              <p>
                The exact scope of maintenance services, response times, exclusions, and applicable charges shall be determined by the relevant quotation, proposal, invoice, or maintenance/service agreement.
              </p>
              <p>
                Major modifications, new features, redesigns, additional modules, integrations, or development work outside the agreed maintenance scope may be charged separately.
              </p>
            </div>
          </div>

          {/* 5. Source Code & Complete Code Transfer */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">5</span>
              Source Code & Complete Code Transfer
            </h2>
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <p>
                Unless expressly agreed otherwise in writing, development of a website or software project does not automatically include the immediate transfer of the complete source code, development files, repositories, credentials, or other underlying development materials to the client.
              </p>
              <p>
                If a client requires complete source-code ownership, authority, possession, or transfer of the developed website, software, application, or project, including the complete and final source code and applicable development materials, such transfer shall be subject to separate source-code transfer charges.
              </p>
              <p className="font-medium text-slate-800">
                The applicable source-code transfer charges will be communicated separately and may depend on factors including:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
                <li>Project scope and complexity</li>
                <li>Development time and resources</li>
                <li>Technology and framework used</li>
                <li>Third-party integrations</li>
                <li>Development materials and documentation</li>
                <li>Repository or deployment requirements</li>
                <li>Other applicable project-specific factors</li>
              </ul>
              <p>
                The client must pay the agreed source-code transfer charges in full before ITLC INDIA PVT LTD transfers the complete source code and other agreed development materials.
              </p>
              <p>
                The transfer of source code shall be considered completed only after the agreed charges have been received in full and the agreed materials have been formally handed over to the client.
              </p>
            </div>
          </div>

          {/* 6. Maintenance or Source-Code Transfer Option */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">6</span>
              Maintenance or Source-Code Transfer Option
            </h2>
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <p>
                If the client does not wish to avail the applicable three-year maintenance and support arrangement and instead requests complete source-code transfer, the client may request such transfer subject to the applicable separate source-code transfer charges and written agreement.
              </p>
              <p>
                Payment of the applicable source-code transfer charges shall be a prerequisite for the transfer of the complete source code and other agreed development materials.
              </p>
              <p>
                Unless and until the applicable source-code transfer charges are paid in full and the transfer is formally completed, ITLC INDIA PVT LTD shall retain control over the source code and development materials, subject to the terms of the applicable project or service agreement.
              </p>
            </div>
          </div>

          {/* 7. Intellectual Property Rights */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">7</span>
              Intellectual Property Rights
            </h2>
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <p>
                Unless otherwise agreed in writing, ITLC INDIA PVT LTD retains ownership of its pre-existing intellectual property, proprietary tools, reusable code, frameworks, libraries, templates, methodologies, systems, processes, know-how, and other materials used in providing its services.
              </p>
              <p>
                Third-party software, libraries, plugins, APIs, fonts, images, themes, frameworks, and other materials shall remain subject to their respective licenses and terms.
              </p>
              <p>
                Where complete source-code ownership or intellectual property rights are expressly transferred to the client under a separate written agreement, such transfer shall be limited to the rights specifically stated in that agreement.
              </p>
            </div>
          </div>

          {/* 8. Client Responsibilities */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">8</span>
              Client Responsibilities
            </h2>
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <p>
                The client is responsible for providing accurate and timely information, content, images, documents, credentials, approvals, and other materials required for completion of the project.
              </p>
              <p>
                The client shall ensure that any content or materials supplied to ITLC INDIA PVT LTD do not violate applicable laws or third-party intellectual property rights.
              </p>
              <p>
                Delays caused by the client's failure to provide required information, approvals, content, access, or feedback may affect the project timeline.
              </p>
            </div>
          </div>

          {/* 9. Third-Party Services */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">9</span>
              Third-Party Services
            </h2>
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <p>
                Certain websites and software projects may require third-party services, including but not limited to hosting, domain registration, payment gateways, APIs, plugins, software licenses, cloud services, SMS services, email services, or other external platforms.
              </p>
              <p>
                Such third-party services may be subject to separate fees, licenses, policies, terms, and availability. ITLC INDIA PVT LTD shall not be responsible for changes, interruptions, suspension, or termination of third-party services beyond its reasonable control.
              </p>
            </div>
          </div>

          {/* 10. Disclaimer */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">10</span>
              Disclaimer
            </h2>
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <p>
                The materials and information available on the ITLC INDIA PVT LTD website are provided on an "as is" and "as available" basis.
              </p>
              <p>
                ITLC INDIA PVT LTD makes no representations or warranties, express or implied, regarding the accuracy, reliability, completeness, availability, merchantability, fitness for a particular purpose, non-infringement, or uninterrupted availability of the website or its materials.
              </p>
              <p>
                ITLC INDIA PVT LTD does not warrant that the website or its materials will always be error-free, secure, uninterrupted, or free from viruses or other harmful components.
              </p>
            </div>
          </div>

          {/* 11. Limitations of Liability */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">11</span>
              Limitations of Liability
            </h2>
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <p>
                To the maximum extent permitted by applicable law, ITLC INDIA PVT LTD and its suppliers, employees, affiliates, or representatives shall not be liable for any indirect, incidental, special, consequential, or exemplary damages arising from or relating to the use of, or inability to use, the website, materials, or services.
              </p>
              <p>
                This may include, without limitation, loss of data, loss of profits, loss of business opportunities, business interruption, or other commercial losses.
              </p>
              <p>
                Nothing in these Terms & Conditions shall exclude or limit liability to the extent such exclusion or limitation is prohibited by applicable law.
              </p>
            </div>
          </div>

          {/* 12. Website Availability */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">12</span>
              Website Availability
            </h2>
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <p>
                ITLC INDIA PVT LTD may modify, suspend, restrict, or discontinue any part of the website or its services at any time.
              </p>
              <p>
                We shall not be liable for temporary or permanent unavailability resulting from maintenance, technical issues, server problems, internet connectivity, third-party services, security incidents, or circumstances beyond our reasonable control.
              </p>
            </div>
          </div>

          {/* 13. Copyright & Trademarks */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">13</span>
              Copyright & Trademarks
            </h2>
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <p>
                All content available on this website, including text, graphics, logos, designs, images, software, layouts, and other materials, may be protected by applicable copyright, trademark, and intellectual property laws.
              </p>
              <p>
                No content from this website may be reproduced, copied, modified, distributed, republished, or commercially exploited without prior written permission from ITLC INDIA PVT LTD, except where expressly permitted by applicable law.
              </p>
            </div>
          </div>

          {/* 14. Prohibited Use */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">14</span>
              Prohibited Use
            </h2>
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <p className="font-medium text-slate-800">You agree not to use this website:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
                <li>For any unlawful or fraudulent purpose.</li>
                <li>To violate any applicable law or regulation.</li>
                <li>To infringe the intellectual property rights of ITLC INDIA PVT LTD or any third party.</li>
                <li>To attempt unauthorized access to the website, servers, databases, or systems.</li>
                <li>To introduce viruses, malware, or other harmful code.</li>
                <li>To interfere with the security or functionality of the website.</li>
                <li>To copy, reproduce, or exploit website materials without authorization.</li>
              </ul>
              <p>
                ITLC INDIA PVT LTD reserves the right to restrict or terminate access to the website where it reasonably believes that these Terms & Conditions have been violated.
              </p>
            </div>
          </div>

          {/* 15. Governing Law & Jurisdiction */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">15</span>
              Governing Law & Jurisdiction
            </h2>
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <p>
                These Terms & Conditions shall be governed by and construed in accordance with the laws applicable in India.
              </p>
              <p>
                Subject to applicable law, any dispute arising out of or relating to these Terms & Conditions or the use of the website or services shall be subject to the jurisdiction of the competent courts in Uttar Pradesh, India.
              </p>
            </div>
          </div>

          {/* 16. Severability */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">16</span>
              Severability
            </h2>
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <p>
                If any provision of these Terms & Conditions is determined to be invalid, unlawful, or unenforceable by a competent authority, that provision shall be limited or removed to the extent necessary, while the remaining provisions shall continue to remain valid and enforceable.
              </p>
            </div>
          </div>

          {/* 17. Entire Agreement */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">17</span>
              Entire Agreement
            </h2>
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <p>
                These Terms & Conditions, together with any applicable quotation, proposal, invoice, work order, service agreement, or other written agreement between ITLC INDIA PVT LTD and the client, constitute the applicable understanding regarding the use of the website and provision of services.
              </p>
              <p>
                Where a separate written agreement exists for a particular project or service, the specific terms of that agreement shall apply to the extent of any inconsistency.
              </p>
            </div>
          </div>

          {/* 18. Contact Information */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">18</span>
              Contact Information
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base pl-11">
              <p>
                If you have any questions, concerns, or comments regarding these Terms & Conditions, please contact us at:
              </p>
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3 max-w-lg">
                <h4 className="font-bold text-slate-900 text-lg">ITLC INDIA PVT LTD</h4>
                <div className="flex items-center gap-2.5 text-sm text-slate-600">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Email:</span>
                  <a href="mailto:info@itlcindia.com" className="text-blue-600 font-semibold hover:underline">
                    info@itlcindia.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-600">
                  <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Website:</span>
                  <a href="https://www.itlcindia.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                    https://www.itlcindia.com/
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">
                We will make reasonable efforts to respond to your queries regarding these Terms & Conditions.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
