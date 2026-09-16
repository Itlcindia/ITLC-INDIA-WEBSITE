import fs from 'fs';
import path from 'path';
import galleryData from '@/app/lib/placeholder-images.json';

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  sortOrder: number;
  createdAt: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  imageUrl: string;
  tags: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface JobItem {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string;
  status: 'ACTIVE' | 'CLOSED';
  createdAt: string;
  updatedAt: string;
}

export interface JobApplicationItem {
  id: string;
  jobId: string;
  fullName: string;
  email: string;
  phone: string;
  message?: string;
  resumeUrl: string;
  status: 'NEW' | 'REVIEWED' | 'SHORTLISTED' | 'REJECTED';
  notes?: string;
  createdAt: string;
  updatedAt: string;
  job?: {
    title: string;
    department: string;
  };
}

export interface StudentItem {
  id: string;
  applicationNumber: string;
  fullName: string;
  fatherName: string;
  email: string;
  mobileNumber: string;
  whatsappNumber?: string;
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
  passportPhotoUrl?: string;
  resumeUrl?: string;
  aadhaarCardUrl?: string;
  collegeIdCardUrl?: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CertificateItem {
  id: string;
  certificateNumber: string;
  studentName: string;
  courseName: string;
  startDate?: string;
  completionDate?: string;
  issueDate: string;
  expiryDate?: string;
  dateOfBirth: string;
  verificationId: string;
  certificateFileUrl?: string;
  status: 'VERIFIED' | 'REVOKED' | 'EXPIRED';
  revokedReason?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  icon?: string;
  features: string;
  directLoginUrl?: string;
  externalWebsiteUrl?: string;
  demoUrl?: string;
  isLive: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface BlogItem {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  coverImageUrl?: string;
  category: string;
  author: string;
  authorRole?: string;
  isPublished: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactItem {
  id: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  status: 'NEW' | 'CONTACTED' | 'CLOSED';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// Pre-seed 54 Real Gallery Images
function buildInitialGallery(): GalleryItem[] {
  const { gallery } = galleryData as { gallery: Array<{ id: string; src: string; hint: string; category: string }> };

  return gallery.map((item, index) => {
    let displayTitle = item.hint
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    if (!displayTitle || displayTitle === 'Company Gallery Image') {
      displayTitle = `ITLC Corporate Showcase - Photo ${index + 1}`;
    }

    return {
      id: item.id || `gallery_${index + 1}`,
      title: displayTitle,
      imageUrl: item.src,
      category: item.category || 'Events',
      sortOrder: index + 1,
      createdAt: new Date(Date.now() - index * 3600000 * 24).toISOString(),
    };
  });
}

// Pre-seed Real Portfolio
const initialPortfolio: PortfolioItem[] = [
  {
    id: 'port_1',
    title: 'UP State Government Digital Services & Citizen Portal',
    category: 'Government Tech',
    client: 'Uttar Pradesh State Dept',
    description: 'A high-throughput citizen service delivery platform designed to streamline applications, document verification, and administrative workflow automation for over 2 million residents.',
    imageUrl: '/pot/11.png',
    tags: 'Government, Next.js, Cloud, Security',
    sortOrder: 1,
    createdAt: new Date('2026-01-10').toISOString(),
    updatedAt: new Date('2026-01-10').toISOString(),
  },
  {
    id: 'port_2',
    title: 'Enterprise AI CRM & Intelligent Sales Pipeline Automation',
    category: 'AI & Automation',
    client: 'TechCorp International',
    description: 'An AI-powered customer relationship platform with predictive lead scoring, automated WhatsApp/Email follow-up agents, and deep revenue pipeline analytics.',
    imageUrl: '/pot/12.png',
    tags: 'AI, CRM, Automation, Analytics',
    sortOrder: 2,
    createdAt: new Date('2026-01-20').toISOString(),
    updatedAt: new Date('2026-01-20').toISOString(),
  },
  {
    id: 'port_3',
    title: 'Campus-Wide High-Speed Fiber Networking & CCTV Grid',
    category: 'IT Infrastructure',
    client: 'Apex Educational University',
    description: 'End-to-end design and deployment of 10G fiber backbone, enterprise WiFi 6 access points, and AI-driven perimeter surveillance across a 50-acre university campus.',
    imageUrl: '/pot/f2.png',
    tags: 'Networking, CCTV, Surveillance, Fiber',
    sortOrder: 3,
    createdAt: new Date('2026-02-05').toISOString(),
    updatedAt: new Date('2026-02-05').toISOString(),
  },
  {
    id: 'port_4',
    title: 'Omnichannel Retail & E-Commerce Scalable Platform',
    category: 'Custom Software',
    client: 'LuxeLiving Brands',
    description: 'Modern headless e-commerce store with real-time inventory synchronization across 15 physical retail branches and automated logistics dispatch.',
    imageUrl: '/pot/f3.png',
    tags: 'E-Commerce, Next.js, Node.js, Cloud',
    sortOrder: 4,
    createdAt: new Date('2026-02-18').toISOString(),
    updatedAt: new Date('2026-02-18').toISOString(),
  },
  {
    id: 'port_5',
    title: 'Smart City Civil & Commercial Infrastructure Surveillance',
    category: 'Enterprise ERP',
    client: 'Urban Development Consortium',
    description: 'Integrated monitoring and asset maintenance management software for municipal smart-city projects.',
    imageUrl: '/pot/f4.png',
    tags: 'Smart City, Enterprise, IoT',
    sortOrder: 5,
    createdAt: new Date('2026-02-28').toISOString(),
    updatedAt: new Date('2026-02-28').toISOString(),
  },
];

// Pre-seed Real Jobs
const initialJobs: JobItem[] = [
  {
    id: 'job_1',
    title: 'Senior Full Stack React / Next.js Developer',
    department: 'Engineering',
    location: 'Lucknow, Uttar Pradesh (Hybrid)',
    type: 'Full-time',
    experience: '3-5 Years',
    salary: '₹8 LPA - ₹15 LPA',
    description: 'Lead the architecture and scaling of enterprise client portals, AI-integrated SaaS products, and high-concurrency microservices.',
    requirements: 'Proficiency in Next.js 15, TypeScript, Tailwind CSS, PostgreSQL/MySQL, Prisma, and Docker.',
    status: 'ACTIVE',
    createdAt: new Date('2026-02-01').toISOString(),
    updatedAt: new Date('2026-02-01').toISOString(),
  },
  {
    id: 'job_2',
    title: 'AI / Machine Learning Engineer',
    department: 'AI & Innovation',
    location: 'Remote / Lucknow',
    type: 'Full-time',
    experience: '2-4 Years',
    salary: '₹10 LPA - ₹18 LPA',
    description: 'Build enterprise LLM workflows, conversational chatbots, computer vision pipelines, and intelligent ERP automation solutions.',
    requirements: 'Python, PyTorch, LangChain, OpenAI APIs, Vector Databases, and edge deployment.',
    status: 'ACTIVE',
    createdAt: new Date('2026-02-10').toISOString(),
    updatedAt: new Date('2026-02-10').toISOString(),
  },
  {
    id: 'job_3',
    title: 'Digital Marketing & Brand Growth Specialist',
    department: 'Marketing',
    location: 'Lucknow, Uttar Pradesh',
    type: 'Full-time',
    experience: '2-4 Years',
    salary: '₹5 LPA - ₹9 LPA',
    description: 'Spearhead enterprise lead generation funnels, Google & Meta advertising campaigns, SEO optimization, and B2B branding.',
    requirements: 'Demonstrated experience in Google Ads, Meta Ads Manager, technical SEO, and analytics.',
    status: 'ACTIVE',
    createdAt: new Date('2026-02-15').toISOString(),
    updatedAt: new Date('2026-02-15').toISOString(),
  },
  {
    id: 'job_4',
    title: 'HR & Talent Acquisition Lead',
    department: 'Human Resources',
    location: 'Lucknow, Uttar Pradesh',
    type: 'Full-time',
    experience: '3-5 Years',
    salary: '₹6 LPA - ₹10 LPA',
    description: 'Manage full-cycle tech hiring, campus placements, employee engagement programs, and corporate HR policies.',
    requirements: 'Strong technical recruiting background, stellar communication, and human resource management skills.',
    status: 'ACTIVE',
    createdAt: new Date('2026-02-20').toISOString(),
    updatedAt: new Date('2026-02-20').toISOString(),
  },
];

const initialApplications: JobApplicationItem[] = [
  {
    id: 'app_1',
    jobId: 'job_1',
    fullName: 'Amitabh Sen',
    email: 'amitabh.sen@example.com',
    phone: '+91 9876543210',
    message: 'Having 4 years of solid experience in Next.js 14/15, Tailwind, and high-load web systems.',
    resumeUrl: '/sample-resume.pdf',
    status: 'NEW',
    notes: 'Strong portfolio, scheduled for technical round',
    createdAt: new Date('2026-03-01').toISOString(),
    updatedAt: new Date('2026-03-01').toISOString(),
    job: {
      title: 'Senior Full Stack React / Next.js Developer',
      department: 'Engineering',
    },
  },
  {
    id: 'app_2',
    jobId: 'job_2',
    fullName: 'Neha Srivastava',
    email: 'neha.srivastava@example.com',
    phone: '+91 9812345678',
    message: 'Published researcher in NLP with hands-on LangChain and PyTorch agent development experience.',
    resumeUrl: '/sample-resume.pdf',
    status: 'SHORTLISTED',
    notes: 'Exceptional AI portfolio, recommended by tech lead',
    createdAt: new Date('2026-03-04').toISOString(),
    updatedAt: new Date('2026-03-04').toISOString(),
    job: {
      title: 'AI / Machine Learning Engineer',
      department: 'AI & Innovation',
    },
  },
];

// Pre-seed Real Students
const initialStudents: StudentItem[] = [
  {
    id: 'stud_1',
    applicationNumber: 'ITLC-ADM-2026-001',
    fullName: 'Rahul Sharma',
    fatherName: 'Rajesh Sharma',
    email: 'rahul.sharma@example.com',
    mobileNumber: '+91 9876501234',
    whatsappNumber: '+91 9876501234',
    dob: '2002-05-12',
    gender: 'Male',
    collegeName: 'BBD University Lucknow',
    courseApplied: 'Full Stack Web & AI Development',
    qualification: 'B.Tech CSE',
    yearSemester: '4th Year / 7th Sem',
    address: 'Flat 402, Gomti Nagar',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    pincode: '226010',
    passportPhotoUrl: '/gallry/1.jpg',
    resumeUrl: '/sample-resume.pdf',
    aadhaarCardUrl: '/sample-id.pdf',
    collegeIdCardUrl: '/sample-id.pdf',
    status: 'APPROVED',
    notes: 'Documents fully verified. Fee payment completed.',
    createdAt: new Date('2026-02-12').toISOString(),
    updatedAt: new Date('2026-02-12').toISOString(),
  },
  {
    id: 'stud_2',
    applicationNumber: 'ITLC-ADM-2026-002',
    fullName: 'Pooja Verma',
    fatherName: 'Suresh Verma',
    email: 'pooja.verma@example.com',
    mobileNumber: '+91 9876505678',
    whatsappNumber: '+91 9876505678',
    dob: '2001-08-23',
    gender: 'Female',
    collegeName: 'Amity University Lucknow',
    courseApplied: 'Python Data Science & Machine Learning',
    qualification: 'BCA',
    yearSemester: '3rd Year / Final Sem',
    address: 'Sector 5, Indira Nagar',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    pincode: '226016',
    passportPhotoUrl: '/gallry/2.jpg',
    resumeUrl: '/sample-resume.pdf',
    aadhaarCardUrl: '/sample-id.pdf',
    collegeIdCardUrl: '/sample-id.pdf',
    status: 'APPROVED',
    notes: 'Batch assigned: Morning 10 AM',
    createdAt: new Date('2026-02-18').toISOString(),
    updatedAt: new Date('2026-02-18').toISOString(),
  },
  {
    id: 'stud_3',
    applicationNumber: 'ITLC-ADM-2026-003',
    fullName: 'Vikramaditya Singh',
    fatherName: 'Birendra Singh',
    email: 'vikram.singh@example.com',
    mobileNumber: '+91 9918273645',
    whatsappNumber: '+91 9918273645',
    dob: '2003-11-04',
    gender: 'Male',
    collegeName: 'SRM University',
    courseApplied: 'Cyber Security & Network Infrastructure',
    qualification: 'B.Tech IT',
    yearSemester: '3rd Year / 5th Sem',
    address: 'Aliganj, Near Kapoor Crossing',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    pincode: '226024',
    passportPhotoUrl: '/gallry/3.jpg',
    resumeUrl: '/sample-resume.pdf',
    status: 'PENDING',
    notes: 'Awaiting college NOC letter',
    createdAt: new Date('2026-03-02').toISOString(),
    updatedAt: new Date('2026-03-02').toISOString(),
  },
];

// Pre-seed Real Certificates
const initialCertificates: CertificateItem[] = [
  {
    id: 'cert_1',
    certificateNumber: 'ITLC-2026-00123',
    studentName: 'Rahul Sharma',
    courseName: 'Full Stack Web Development & Cloud Architecture',
    startDate: '2025-08-01',
    completionDate: '2026-01-10',
    issueDate: '2026-01-15',
    expiryDate: '2030-01-15',
    dateOfBirth: '2002-05-12',
    verificationId: 'ITLC-VER-9821',
    certificateFileUrl: '/sample-certificate.pdf',
    status: 'VERIFIED',
    createdAt: new Date('2026-01-15').toISOString(),
    updatedAt: new Date('2026-01-15').toISOString(),
  },
  {
    id: 'cert_2',
    certificateNumber: 'ITLC-2026-00124',
    studentName: 'Pooja Verma',
    courseName: 'Python Data Science & Machine Learning Engineering',
    startDate: '2025-09-01',
    completionDate: '2026-02-05',
    issueDate: '2026-02-10',
    expiryDate: '2030-02-10',
    dateOfBirth: '2001-08-23',
    verificationId: 'ITLC-VER-9822',
    certificateFileUrl: '/sample-certificate.pdf',
    status: 'VERIFIED',
    createdAt: new Date('2026-02-10').toISOString(),
    updatedAt: new Date('2026-02-10').toISOString(),
  },
  {
    id: 'cert_3',
    certificateNumber: 'ITLC-2026-00125',
    studentName: 'Amitabh Sen',
    courseName: 'Advanced Cyber Security & Network Defense',
    startDate: '2025-07-15',
    completionDate: '2025-12-20',
    issueDate: '2025-12-28',
    expiryDate: '2029-12-28',
    dateOfBirth: '2000-11-19',
    verificationId: 'ITLC-VER-9823',
    certificateFileUrl: '/sample-certificate.pdf',
    status: 'VERIFIED',
    createdAt: new Date('2025-12-28').toISOString(),
    updatedAt: new Date('2025-12-28').toISOString(),
  },
  {
    id: 'cert_4',
    certificateNumber: 'ITLC-2026-00126',
    studentName: 'Neha Srivastava',
    courseName: 'Generative AI & LLM Automation Architecture',
    startDate: '2025-10-01',
    completionDate: '2026-02-25',
    issueDate: '2026-03-01',
    expiryDate: '2030-03-01',
    dateOfBirth: '2002-01-14',
    verificationId: 'ITLC-VER-9824',
    certificateFileUrl: '/sample-certificate.pdf',
    status: 'VERIFIED',
    createdAt: new Date('2026-03-01').toISOString(),
    updatedAt: new Date('2026-03-01').toISOString(),
  },
];

// Pre-seed Real Products (Modular Enterprise Suite)
export const initialProducts: ProductItem[] = [
  {
    id: 'prod_1',
    name: 'Accounting & GST Invoicing',
    slug: 'accounting-invoicing',
    category: 'Finance',
    tagline: 'Automated GST invoices, bank reconciliation, and profit & loss analytics',
    description: 'Compliant Indian accounting system supporting E-Invoicing, E-Way bills, vendor reconciliation, and automated tax filings.',
    icon: 'Calculator',
    features: JSON.stringify([
      { title: 'GST & E-Invoicing', description: 'One-click GST-compliant invoices with QR codes and E-Way generation.' },
      { title: 'Automated Reconciliation', description: 'Match bank statements directly with ledger entries in seconds.' },
      { title: 'Real-Time Financial Reports', description: 'Instant P&L, Balance Sheets, and Cash Flow analytics.' }
    ]),
    directLoginUrl: 'https://accounts.itlcindia.com/login',
    externalWebsiteUrl: 'https://accounts.itlcindia.com',
    isLive: true,
    sortOrder: 1,
    createdAt: new Date('2026-01-01').toISOString(),
    updatedAt: new Date('2026-01-01').toISOString(),
  },
  {
    id: 'prod_2',
    name: 'ITLC Smart HRMS & Payroll',
    slug: 'itlc-hrms',
    category: 'Human Resources',
    tagline: 'Enterprise attendance, biometric sync, payroll & compliance engine',
    description: 'Complete HR automation suite with GPS geo-fencing, facial recognition attendance, tax computation, and employee self-service portal.',
    icon: 'Users',
    features: JSON.stringify([
      { title: 'Geo-Fenced Attendance', description: 'Real-time check-in tracking with mobile GPS and facial verification.' },
      { title: 'One-Click Payroll', description: 'Automated PF, ESI, TDS, and salary slip generation.' },
      { title: 'Leave & Roster Management', description: 'Multi-level approval workflows for shift planning.' }
    ]),
    directLoginUrl: 'https://hrms.itlcindia.com/login',
    externalWebsiteUrl: 'https://hrms.itlcindia.com',
    isLive: true,
    sortOrder: 2,
    createdAt: new Date('2026-01-02').toISOString(),
    updatedAt: new Date('2026-01-02').toISOString(),
  },
  {
    id: 'prod_3',
    name: 'ITLC Omni-Channel CRM',
    slug: 'itlc-ai-crm',
    category: 'Sales & Marketing',
    tagline: 'Automate WhatsApp, email leads, deal pipelines and revenue forecast',
    description: 'AI-driven CRM designed to ingest inquiries from multiple channels, score lead intent, and assign tasks to sales reps automatically.',
    icon: 'TrendingUp',
    features: JSON.stringify([
      { title: 'AI Intent Scoring', description: 'Instantly categorizes hot leads from web forms and WhatsApp.' },
      { title: 'Automated Follow-ups', description: 'Trigger personalized drip sequences via WhatsApp and Email.' },
      { title: 'Visual Sales Pipeline', description: 'Drag-and-drop Kanban view of enterprise client deals.' }
    ]),
    directLoginUrl: 'https://crm.itlcindia.com/login',
    externalWebsiteUrl: 'https://crm.itlcindia.com',
    isLive: true,
    sortOrder: 3,
    createdAt: new Date('2026-01-03').toISOString(),
    updatedAt: new Date('2026-01-03').toISOString(),
  },
  {
    id: 'prod_4',
    name: 'ITLC Cloud ERP Suite',
    slug: 'itlc-cloud-erp',
    category: 'Enterprise ERP',
    tagline: 'Unified inventory, purchase orders, vendor invoices and financial ledger',
    description: 'Robust ERP solution for manufacturing, construction, and service firms to coordinate operations, assets, and accounting in real time.',
    icon: 'Layers',
    features: JSON.stringify([
      { title: 'Multi-Warehouse Inventory', description: 'Real-time stock valuation and low-stock reorder triggers.' },
      { title: 'GST Invoicing & Billing', description: 'E-Way bill and GST compliant invoice generation.' },
      { title: 'Vendor Portal', description: 'Direct purchase order approvals and dispatch tracking.' }
    ]),
    directLoginUrl: 'https://erp.itlcindia.com/login',
    externalWebsiteUrl: 'https://erp.itlcindia.com',
    isLive: true,
    sortOrder: 4,
    createdAt: new Date('2026-01-04').toISOString(),
    updatedAt: new Date('2026-01-04').toISOString(),
  },
  {
    id: 'prod_5',
    name: 'Digital Sign & E-Contracts',
    slug: 'digital-sign',
    category: 'Operations',
    tagline: 'Legally binding e-signatures, audit trails, and contract automation',
    description: 'Secure paperless signing platform supporting Aadhaar eSign, digital certificates, and automated approval workflows.',
    icon: 'PenTool',
    features: JSON.stringify([
      { title: 'Aadhaar eSign & OTP', description: 'Legally compliant paperless authentication for Indian contracts.' },
      { title: 'Audit Trail & Timestamp', description: 'Cryptographically secured logs of every signature event.' },
      { title: 'Template Automation', description: 'Reusable NDAs, employee agreements, and client quotes.' }
    ]),
    directLoginUrl: 'https://sign.itlcindia.com/login',
    externalWebsiteUrl: 'https://sign.itlcindia.com',
    isLive: true,
    sortOrder: 5,
    createdAt: new Date('2026-01-05').toISOString(),
    updatedAt: new Date('2026-01-05').toISOString(),
  },
  {
    id: 'prod_6',
    name: 'ITLC AI Copilot & Chatbot Studio',
    slug: 'ai-copilot-studio',
    category: 'AI & Automation',
    tagline: '24/7 intelligent customer assistance, automated agent ticketing, and LLM queries',
    description: 'Deploy custom LLM business bots trained on your company knowledge base to handle inquiries and automate tasks.',
    icon: 'Bot',
    features: JSON.stringify([
      { title: 'Private Document RAG', description: 'Trained securely on internal PDFs, guides, and client manuals.' },
      { title: 'WhatsApp & Web Widget', description: 'Embed seamlessly across your customer-facing touchpoints.' },
      { title: 'Automated Action Triggers', description: 'Create support tickets, book meetings, or fetch CRM data.' }
    ]),
    directLoginUrl: 'https://ai.itlcindia.com/login',
    externalWebsiteUrl: 'https://ai.itlcindia.com',
    isLive: true,
    sortOrder: 6,
    createdAt: new Date('2026-01-06').toISOString(),
    updatedAt: new Date('2026-01-06').toISOString(),
  },
  {
    id: 'prod_7',
    name: 'Document Vault & OCR',
    slug: 'document-vault',
    category: 'Operations',
    tagline: 'Secure cloud archiving, intelligent OCR indexing, and role-based permissions',
    description: 'Centralized institutional repository for Aadhaar cards, trade licenses, bills, and contracts with intelligent text search.',
    icon: 'FileText',
    features: JSON.stringify([
      { title: 'Automated OCR Indexing', description: 'Search inside scanned PDFs, receipts, and images effortlessly.' },
      { title: 'Encrypted Storage', description: 'AES-256 bank-grade encryption at rest and in transit.' },
      { title: 'Fine-Grained Permissions', description: 'Control access per department, branch, or clearance level.' }
    ]),
    directLoginUrl: 'https://docs.itlcindia.com/login',
    externalWebsiteUrl: 'https://docs.itlcindia.com',
    isLive: true,
    sortOrder: 7,
    createdAt: new Date('2026-01-07').toISOString(),
    updatedAt: new Date('2026-01-07').toISOString(),
  },
  {
    id: 'prod_8',
    name: 'Projects & Agile Kanban',
    slug: 'projects-kanban',
    category: 'Productivity',
    tagline: 'Sprint planning, milestone tracking, timesheets and deliverables management',
    description: 'Modern project management system enabling engineering and creative teams to execute on deadlines with Kanban boards.',
    icon: 'CheckSquare',
    features: JSON.stringify([
      { title: 'Visual Kanban Boards', description: 'Drag-and-drop task progression with customized stage gates.' },
      { title: 'Timesheets & Costing', description: 'Log billable hours linked directly to client invoicing.' },
      { title: 'Milestone Tracking', description: 'Gantt timeline view with automated dependency alerts.' }
    ]),
    directLoginUrl: 'https://projects.itlcindia.com/login',
    externalWebsiteUrl: 'https://projects.itlcindia.com',
    isLive: true,
    sortOrder: 8,
    createdAt: new Date('2026-01-08').toISOString(),
    updatedAt: new Date('2026-01-08').toISOString(),
  },
  {
    id: 'prod_9',
    name: 'Subscriptions & Recurring Invoicing',
    slug: 'subscriptions-billing',
    category: 'Finance',
    tagline: 'Automated recurring billing, payment gateway integration, and client portal',
    description: 'Manage SaaS plans, monthly retainers, AMC contracts, and automatic payment reminders with instant reconciliation.',
    icon: 'Repeat',
    features: JSON.stringify([
      { title: 'Automated Renewal Invoices', description: 'Generates and delivers GST invoices on scheduled renewal dates.' },
      { title: 'Multiple Payment Gateways', description: 'Supports UPI AutoPay, Razorpay, Cashfree, and credit cards.' },
      { title: 'Self-Serve Customer Portal', description: 'Clients can upgrade plans, view receipts, and update details.' }
    ]),
    directLoginUrl: 'https://billing.itlcindia.com/login',
    externalWebsiteUrl: 'https://billing.itlcindia.com',
    isLive: true,
    sortOrder: 9,
    createdAt: new Date('2026-01-09').toISOString(),
    updatedAt: new Date('2026-01-09').toISOString(),
  },
  {
    id: 'prod_10',
    name: 'Infra-Vision Construction ERP',
    slug: 'infra-vision-erp',
    category: 'Infrastructure',
    tagline: 'Civil construction site tracking, material requisitions, and contractor measurement books',
    description: 'Specialized enterprise platform for construction contractors and developers to monitor site labor, cement/steel inventory, and project budgets.',
    icon: 'HardHat',
    features: JSON.stringify([
      { title: 'Daily Progress Reports (DPR)', description: 'Capture site photos, weather conditions, and labor turnout daily.' },
      { title: 'Digital Measurement Book (MB)', description: 'Accurate joint measurements for contractor bill verification.' },
      { title: 'Material Requisitions', description: 'Eliminate site pilferage with gate pass and barcode entry.' }
    ]),
    directLoginUrl: 'https://infra-vision.itlcindia.com/',
    externalWebsiteUrl: 'https://infra-vision.itlcindia.com/',
    isLive: true,
    sortOrder: 10,
    createdAt: new Date('2026-01-10').toISOString(),
    updatedAt: new Date('2026-01-10').toISOString(),
  },
  {
    id: 'prod_11',
    name: 'Student Admissions & Academy Portal',
    slug: 'student-admissions-portal',
    category: 'Education',
    tagline: 'Online student registrations, document verification, and verifiable QR certificates',
    description: 'Complete institutional portal for educational academies, skill institutes, and colleges to handle end-to-end admissions and credentials.',
    icon: 'GraduationCap',
    features: JSON.stringify([
      { title: 'Online Admission Portal', description: 'Public application form with Aadhaar and document upload.' },
      { title: 'Verifiable Digital Certificates', description: 'QR-coded completion certificates protected against forgery.' },
      { title: 'Course Progression & Fees', description: 'Track fee installments, student status, and academic records.' }
    ]),
    directLoginUrl: 'https://itlcindia.com/admin/students',
    externalWebsiteUrl: 'https://itlcindia.com/admin/students',
    isLive: true,
    sortOrder: 11,
    createdAt: new Date('2026-01-11').toISOString(),
    updatedAt: new Date('2026-01-11').toISOString(),
  },
  {
    id: 'prod_12',
    name: 'Point of Sale (POS) & Retail Desk',
    slug: 'point-of-sale-retail',
    category: 'Retail',
    tagline: 'Lightning fast counter checkout, barcode scanner, and offline billing sync',
    description: 'High-speed retail billing interface that works seamlessly even during internet outages, synchronizing transactions once reconnected.',
    icon: 'ShoppingCart',
    features: JSON.stringify([
      { title: 'Sub-90ms Fast Checkout', description: 'Touchscreen and barcode optimized for peak rush hours.' },
      { title: 'Offline-First Billing', description: 'Continue generating bills uninterrupted without internet.' },
      { title: 'Thermal Receipt Printing', description: 'Compatible with standard USB/Bluetooth 80mm ESC/POS printers.' }
    ]),
    directLoginUrl: 'https://pos.itlcindia.com/login',
    externalWebsiteUrl: 'https://pos.itlcindia.com',
    isLive: true,
    sortOrder: 12,
    createdAt: new Date('2026-01-12').toISOString(),
    updatedAt: new Date('2026-01-12').toISOString(),
  },
];

// Pre-seed Real Blogs
const initialBlogs: BlogItem[] = [
  {
    id: 'blog_1',
    title: 'The Future of AI-Powered ERP and Intelligent Automation in 2026',
    slug: 'future-of-ai-powered-erp-automation-2026',
    category: 'AI & Automation',
    excerpt: 'Discover how modern machine learning models and predictive automation are transforming enterprise resource planning and operational workflows.',
    content: `## The Modern Evolution of Enterprise Resource Planning\n\nOver the past decade, Enterprise Resource Planning (ERP) systems served primarily as relational databases with administrative user interfaces. Today, in 2026, artificial intelligence has fundamentally inverted this model.\n\n### 1. Autonomous Predictive Supply Chains\nRather than relying on human managers to notice supply chain shortfalls, intelligent ERP systems continuously analyze market demand, weather forecasts, and historical delivery times to automatically generate purchase orders before bottlenecks occur.\n\n### 2. Generative Interfaces for Business Intelligence\nInstead of complex SQL queries or static dashboards, department heads can now communicate in plain natural language.\n\n### Looking Ahead\nAt ITLC India, our enterprise software engineering division is actively integrating cognitive automation into our core software suite. Businesses that adopt these architectures today position themselves for unprecedented operational leverage in the coming decade.`,
    coverImageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
    author: 'Prashant Srivastava',
    authorRole: 'Chief Technology Officer',
    isPublished: true,
    publishedAt: '2026-02-15T10:00:00Z',
    createdAt: '2026-02-15T10:00:00Z',
    updatedAt: '2026-02-15T10:00:00Z',
  },
  {
    id: 'blog_2',
    title: 'Architecting Scalable Next.js 15 Applications for High-Concurrency Portals',
    slug: 'architecting-scalable-nextjs-15-applications',
    category: 'Software Engineering',
    excerpt: 'A deep technical dive into React 19 Server Components, streaming SSR, Redis distributed caching, and zero-downtime database migrations.',
    content: `## Engineering High-Performance Web Applications\n\nBuilding web platforms that handle millions of student verifications, real-time client registrations, and SaaS multi-tenancy requires uncompromising architecture.\n\n### The Power of React 19 Server Components (RSC)\nWith Next.js 15 and React 19, the boundary between client and server execution is seamless. By running data-intensive queries directly on server components, we eliminate massive client-side bundle sizes and achieve sub-second First Contentful Paint (FCP).\n\n### Database Connection Pooling with Prisma 7\nLeveraging MariaDB/MySQL connection adapters allows us to maintain stable database connections without exhausting database socket limits during traffic spikes.`,
    coverImageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    author: 'Ananya Mishra',
    authorRole: 'Lead Full-Stack Architect',
    isPublished: true,
    publishedAt: '2026-03-01T14:30:00Z',
    createdAt: '2026-03-01T14:30:00Z',
    updatedAt: '2026-03-01T14:30:00Z',
  },
  {
    id: 'blog_3',
    title: 'How Indian Enterprises Are Leveraging Biometric Cloud HRMS for Workforce Excellence',
    slug: 'biometric-cloud-hrms-indian-enterprises',
    category: 'Enterprise Tech',
    excerpt: 'A practical guide to implementing geo-fenced attendance, automated tax compliance, and self-service mobile portals for distributed teams.',
    content: `## Transforming People Operations Across India\n\nManaging dispersed workforces across multi-city branches, construction sites, and remote hubs presents severe operational hurdles for growing enterprises.\n\n### The Shift from Manual Biometrics to Cloud Geo-Fencing\nTraditional fingerprint scanners frequently suffer from hardware breakdowns, network disconnects, and manual synchronization delays. Cloud-native HRMS solutions solve this with GPS geo-fencing and facial verification.`,
    coverImageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    author: 'Vikram Rajput',
    authorRole: 'Head of Product Strategy',
    isPublished: true,
    publishedAt: '2026-03-10T09:15:00Z',
    createdAt: '2026-03-10T09:15:00Z',
    updatedAt: '2026-03-10T09:15:00Z',
  },
];

// Pre-seed Real Contact Inquiries
const initialContacts: ContactItem[] = [
  {
    id: 'contact_1',
    name: 'Sunil Agarwal',
    company: 'Agarwal Industries Ltd.',
    email: 'sunil@agarwalindustries.in',
    phone: '+91 9839012345',
    service: 'Custom Software Development',
    message: 'We require an end-to-end ERP and inventory monitoring software for our 3 manufacturing plants in Kanpur and Lucknow.',
    status: 'NEW',
    notes: 'High priority lead, follow-up scheduled for tomorrow',
    createdAt: new Date('2026-03-08T11:20:00Z').toISOString(),
    updatedAt: new Date('2026-03-08T11:20:00Z').toISOString(),
  },
  {
    id: 'contact_2',
    name: 'Dr. Meera Nambiar',
    company: 'St. Mary Hospital Group',
    email: 'meera@stmaryhospitals.org',
    phone: '+91 9711098765',
    service: 'AI Automation Services',
    message: 'Looking to integrate AI automated patient scheduling and digital record management across our OPD counters.',
    status: 'CONTACTED',
    notes: 'Initial demo shared on email',
    createdAt: new Date('2026-03-11T14:45:00Z').toISOString(),
    updatedAt: new Date('2026-03-11T14:45:00Z').toISOString(),
  },
  {
    id: 'contact_3',
    name: 'Kavita Saxena',
    company: 'Horizon Infraventures',
    email: 'kavita@horizoninfra.com',
    phone: '+91 9935043210',
    service: 'IT Support & Managed Services',
    message: 'Requesting proposal for campus network security audit and 24/7 server infrastructure management AMC.',
    status: 'NEW',
    createdAt: new Date('2026-03-14T09:30:00Z').toISOString(),
    updatedAt: new Date('2026-03-14T09:30:00Z').toISOString(),
  },
];

const DB_FILE_PATH = path.resolve(process.cwd(), 'data', 'local-db.json');

class LocalStore {
  public gallery: GalleryItem[] = buildInitialGallery();
  public portfolio: PortfolioItem[] = initialPortfolio;
  public jobs: JobItem[] = initialJobs;
  public applications: JobApplicationItem[] = initialApplications;
  public students: StudentItem[] = initialStudents;
  public certificates: CertificateItem[] = initialCertificates;
  public products: ProductItem[] = initialProducts;
  public blogs: BlogItem[] = initialBlogs;
  public contacts: ContactItem[] = initialContacts;

  constructor() {
    this.loadFromDisk();
    if (this.products.length < initialProducts.length) {
      this.products = initialProducts;
      this.saveToDisk();
    }
  }

  private loadFromDisk() {
    try {
      if (fs.existsSync(DB_FILE_PATH)) {
        const raw = fs.readFileSync(DB_FILE_PATH, 'utf-8');
        const data = JSON.parse(raw);
        if (data.gallery) this.gallery = data.gallery;
        if (data.portfolio) this.portfolio = data.portfolio;
        if (data.jobs) this.jobs = data.jobs;
        if (data.applications) this.applications = data.applications;
        if (data.students) this.students = data.students;
        if (data.certificates) this.certificates = data.certificates;
        if (data.products && Array.isArray(data.products) && data.products.length >= initialProducts.length) {
          this.products = data.products;
        } else {
          this.products = initialProducts;
          this.saveToDisk();
        }
        if (data.blogs) this.blogs = data.blogs;
        if (data.contacts) this.contacts = data.contacts;
      } else {
        this.saveToDisk();
      }
    } catch {
      // Fall back to pre-seeded defaults
    }
  }

  private saveToDisk() {
    try {
      const dir = path.dirname(DB_FILE_PATH);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      const data = {
        gallery: this.gallery,
        portfolio: this.portfolio,
        jobs: this.jobs,
        applications: this.applications,
        students: this.students,
        certificates: this.certificates,
        products: this.products,
        blogs: this.blogs,
        contacts: this.contacts,
      };
      fs.writeFileSync(DB_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
    } catch {
      // Silent error handling in dev
    }
  }

  // Gallery CRUD
  getGallery(category?: string) {
    if (!category || category === 'ALL') return this.gallery;
    return this.gallery.filter(item => item.category.toLowerCase() === category.toLowerCase());
  }

  addGalleryItem(item: Omit<GalleryItem, 'id' | 'createdAt'>): GalleryItem {
    const newItem: GalleryItem = {
      ...item,
      id: `gallery_${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    this.gallery.unshift(newItem);
    this.saveToDisk();
    return newItem;
  }

  deleteGalleryItem(id: string): boolean {
    const prevLen = this.gallery.length;
    this.gallery = this.gallery.filter(i => i.id !== id);
    const deleted = this.gallery.length < prevLen;
    if (deleted) this.saveToDisk();
    return deleted;
  }

  // Portfolio CRUD
  getPortfolio(category?: string) {
    if (!category || category === 'ALL') return this.portfolio;
    return this.portfolio.filter(item => item.category.toLowerCase() === category.toLowerCase());
  }

  addPortfolioItem(item: Omit<PortfolioItem, 'id' | 'createdAt' | 'updatedAt'>): PortfolioItem {
    const newItem: PortfolioItem = {
      ...item,
      id: `port_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.portfolio.unshift(newItem);
    this.saveToDisk();
    return newItem;
  }

  updatePortfolioItem(id: string, updates: Partial<Omit<PortfolioItem, 'id' | 'createdAt'>>): PortfolioItem | null {
    const item = this.portfolio.find(p => p.id === id);
    if (!item) return null;
    Object.assign(item, updates);
    item.updatedAt = new Date().toISOString();
    this.saveToDisk();
    return item;
  }

  deletePortfolioItem(id: string): boolean {
    const prevLen = this.portfolio.length;
    this.portfolio = this.portfolio.filter(i => i.id !== id);
    const deleted = this.portfolio.length < prevLen;
    if (deleted) this.saveToDisk();
    return deleted;
  }

  // Careers CRUD
  getJobs(status?: string) {
    if (status && status !== 'all') {
      return this.jobs.filter(j => j.status === status);
    }
    return this.jobs;
  }

  addJob(job: Omit<JobItem, 'id' | 'createdAt' | 'updatedAt'>): JobItem {
    const newJob: JobItem = {
      ...job,
      id: `job_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.jobs.unshift(newJob);
    this.saveToDisk();
    return newJob;
  }

  updateJob(id: string, updates: Partial<Omit<JobItem, 'id' | 'createdAt'>>): JobItem | null {
    const job = this.jobs.find(j => j.id === id);
    if (!job) return null;
    Object.assign(job, updates);
    job.updatedAt = new Date().toISOString();
    this.saveToDisk();
    return job;
  }

  deleteJob(id: string): boolean {
    const prevLen = this.jobs.length;
    this.jobs = this.jobs.filter(j => j.id !== id);
    const deleted = this.jobs.length < prevLen;
    if (deleted) this.saveToDisk();
    return deleted;
  }

  getApplications(jobId?: string) {
    if (!jobId) return this.applications;
    return this.applications.filter(a => a.jobId === jobId);
  }

  addApplication(app: Omit<JobApplicationItem, 'id' | 'createdAt' | 'updatedAt'>): JobApplicationItem {
    const newApp: JobApplicationItem = {
      ...app,
      id: `app_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.applications.unshift(newApp);
    this.saveToDisk();
    return newApp;
  }

  updateApplicationStatus(id: string, status: JobApplicationItem['status']): boolean {
    const app = this.applications.find(a => a.id === id);
    if (app) {
      app.status = status;
      app.updatedAt = new Date().toISOString();
      this.saveToDisk();
      return true;
    }
    return false;
  }

  // Students CRUD
  getStudents(query?: string, status?: string) {
    return this.students.filter(s => {
      const matchQ = !query || 
        s.fullName.toLowerCase().includes(query.toLowerCase()) ||
        s.applicationNumber.toLowerCase().includes(query.toLowerCase()) ||
        s.email.toLowerCase().includes(query.toLowerCase()) ||
        s.courseApplied.toLowerCase().includes(query.toLowerCase());
      const matchStatus = !status || status === 'ALL' || s.status === status;
      return matchQ && matchStatus;
    });
  }

  addStudent(student: Omit<StudentItem, 'id' | 'createdAt' | 'updatedAt'>): StudentItem {
    const newStudent: StudentItem = {
      ...student,
      id: `stud_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.students.unshift(newStudent);
    this.saveToDisk();
    return newStudent;
  }

  updateStudentStatus(id: string, status: StudentItem['status']): boolean {
    const student = this.students.find(s => s.id === id);
    if (student) {
      student.status = status;
      student.updatedAt = new Date().toISOString();
      this.saveToDisk();
      return true;
    }
    return false;
  }

  // Certificates CRUD
  getCertificates(query?: string, status?: string) {
    return this.certificates.filter(c => {
      const matchQ = !query ||
        c.certificateNumber.toLowerCase().includes(query.toLowerCase()) ||
        c.studentName.toLowerCase().includes(query.toLowerCase()) ||
        c.courseName.toLowerCase().includes(query.toLowerCase());
      const matchStatus = !status || status === 'ALL' || c.status === status;
      return matchQ && matchStatus;
    });
  }

  addCertificate(cert: Omit<CertificateItem, 'id' | 'createdAt' | 'updatedAt'>): CertificateItem {
    const newCert: CertificateItem = {
      ...cert,
      id: `cert_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.certificates.unshift(newCert);
    this.saveToDisk();
    return newCert;
  }

  // Products CRUD
  getProducts(query?: string) {
    if (this.products.length < initialProducts.length) {
      this.products = initialProducts;
      this.saveToDisk();
    }
    return this.products.filter(p => {
      return !query ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase());
    });
  }

  addProduct(product: Omit<ProductItem, 'id' | 'createdAt' | 'updatedAt'>): ProductItem {
    const newProd: ProductItem = {
      ...product,
      id: `prod_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.products.push(newProd);
    this.saveToDisk();
    return newProd;
  }

  updateProduct(id: string, data: Partial<ProductItem>): ProductItem | null {
    const idx = this.products.findIndex(p => p.id === id);
    if (idx !== -1) {
      this.products[idx] = {
        ...this.products[idx],
        ...data,
        updatedAt: new Date().toISOString(),
      };
      this.saveToDisk();
      return this.products[idx];
    }
    return null;
  }

  deleteProduct(id: string): boolean {
    const initialLen = this.products.length;
    this.products = this.products.filter(p => p.id !== id);
    const deleted = this.products.length < initialLen;
    if (deleted) this.saveToDisk();
    return deleted;
  }

  // Blogs CRUD
  getBlogs(category?: string, query?: string) {
    return this.blogs.filter(b => {
      const matchCat = !category || category === 'ALL' || b.category.toLowerCase() === category.toLowerCase();
      const matchQ = !query || b.title.toLowerCase().includes(query.toLowerCase()) || b.content.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }

  addBlog(blog: Omit<BlogItem, 'id' | 'createdAt' | 'updatedAt'>): BlogItem {
    const newBlog: BlogItem = {
      ...blog,
      id: `blog_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.blogs.unshift(newBlog);
    this.saveToDisk();
    return newBlog;
  }

  updateBlog(id: string, updates: Partial<Omit<BlogItem, 'id' | 'createdAt'>>): BlogItem | null {
    const blog = this.blogs.find(b => b.id === id);
    if (!blog) return null;
    Object.assign(blog, updates);
    blog.updatedAt = new Date().toISOString();
    this.saveToDisk();
    return blog;
  }

  deleteBlog(id: string): boolean {
    const prevLen = this.blogs.length;
    this.blogs = this.blogs.filter(b => b.id !== id);
    const deleted = this.blogs.length < prevLen;
    if (deleted) this.saveToDisk();
    return deleted;
  }

  // Contacts CRUD
  getContacts(query?: string, status?: string) {
    return this.contacts.filter(c => {
      const matchQ = !query || c.name.toLowerCase().includes(query.toLowerCase()) || c.email.toLowerCase().includes(query.toLowerCase());
      const matchStatus = !status || status === 'ALL' || c.status === status;
      return matchQ && matchStatus;
    });
  }

  addContact(contact: Omit<ContactItem, 'id' | 'createdAt' | 'updatedAt'>): ContactItem {
    const newContact: ContactItem = {
      ...contact,
      id: `contact_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.contacts.unshift(newContact);
    this.saveToDisk();
    return newContact;
  }

  // Summary Metrics for Admin Dashboard (Instant 0ms calculation!)
  getDashboardStats() {
    const totalCertificates = this.certificates.length;
    const verifiedCertificates = this.certificates.filter(c => c.status === 'VERIFIED').length;
    const pendingStudents = this.students.filter(s => s.status === 'PENDING').length;
    const totalStudents = this.students.length;
    const newInquiries = this.contacts.filter(c => c.status === 'NEW').length;
    const activeJobs = this.jobs.filter(j => j.status === 'ACTIVE').length;
    const totalApplications = this.applications.length;
    const publishedBlogs = this.blogs.filter(b => b.isPublished).length;
    const totalProducts = this.products.length;

    return {
      stats: {
        totalCertificates,
        verifiedCertificates,
        pendingStudents,
        totalStudents,
        newInquiries,
        activeJobs,
        totalApplications,
        publishedBlogs,
        totalProducts,
      },
      recentStudents: this.students.slice(0, 5),
      recentCertificates: this.certificates.slice(0, 5),
    };
  }
}

export const localStore = new LocalStore();

export default localStore;
