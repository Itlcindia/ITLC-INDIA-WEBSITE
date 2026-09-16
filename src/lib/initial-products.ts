export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  icon?: string | null;
  features: string;
  directLoginUrl?: string | null;
  externalWebsiteUrl?: string | null;
  demoUrl?: string | null;
  isLive: boolean;
  sortOrder: number;
  createdAt?: string;
  updatedAt?: string;
}

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
  },
];
