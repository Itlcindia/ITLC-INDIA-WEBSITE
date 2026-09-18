-- =============================================================
-- ITLC INDIA PVT LTD - HOSTINGER MYSQL DATABASE DUMP
-- Database: u997632379_itlcindia
-- Target: phpMyAdmin / MySQL 8.0 / MariaDB
-- =============================================================

SET FOREIGN_KEY_CHECKS = 0;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('SUPER_ADMIN', 'STAFF', 'STUDENT', 'CLIENT') NOT NULL DEFAULT 'STAFF',
    `phone` VARCHAR(191) NULL,
    `avatar` LONGTEXT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    INDEX `User_email_idx`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StaffProfile` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NOT NULL,
    `permissions` TEXT NOT NULL,

    UNIQUE INDEX `StaffProfile_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Certificate` (
    `id` VARCHAR(191) NOT NULL,
    `certificateNumber` VARCHAR(191) NOT NULL,
    `studentName` VARCHAR(191) NOT NULL,
    `courseName` VARCHAR(191) NOT NULL,
    `startDate` VARCHAR(191) NULL,
    `completionDate` VARCHAR(191) NULL,
    `issueDate` VARCHAR(191) NULL,
    `expiryDate` VARCHAR(191) NULL,
    `dateOfBirth` VARCHAR(191) NULL,
    `verificationId` VARCHAR(191) NULL,
    `certificateFileUrl` LONGTEXT NULL,
    `status` ENUM('VERIFIED', 'REVOKED', 'EXPIRED') NOT NULL DEFAULT 'VERIFIED',
    `revokedReason` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Certificate_certificateNumber_key`(`certificateNumber`),
    INDEX `Certificate_certificateNumber_idx`(`certificateNumber`),
    INDEX `Certificate_studentName_idx`(`studentName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StudentRegistration` (
    `id` VARCHAR(191) NOT NULL,
    `applicationNumber` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `fatherName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `mobileNumber` VARCHAR(191) NOT NULL,
    `whatsappNumber` VARCHAR(191) NULL,
    `dob` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `collegeName` VARCHAR(191) NOT NULL,
    `courseApplied` VARCHAR(191) NOT NULL,
    `qualification` VARCHAR(191) NOT NULL,
    `yearSemester` VARCHAR(191) NOT NULL,
    `address` TEXT NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `pincode` VARCHAR(191) NOT NULL,
    `passportPhotoUrl` LONGTEXT NULL,
    `resumeUrl` LONGTEXT NULL,
    `aadhaarCardUrl` LONGTEXT NULL,
    `collegeIdCardUrl` LONGTEXT NULL,
    `status` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    `notes` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `StudentRegistration_applicationNumber_key`(`applicationNumber`),
    INDEX `StudentRegistration_applicationNumber_idx`(`applicationNumber`),
    INDEX `StudentRegistration_email_idx`(`email`),
    INDEX `StudentRegistration_mobileNumber_idx`(`mobileNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `tagline` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `icon` VARCHAR(191) NULL,
    `features` TEXT NOT NULL,
    `directLoginUrl` VARCHAR(191) NULL,
    `externalWebsiteUrl` VARCHAR(191) NULL,
    `demoUrl` VARCHAR(191) NULL,
    `isLive` BOOLEAN NOT NULL DEFAULT true,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Product_slug_key`(`slug`),
    INDEX `Product_slug_idx`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Job` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `experience` VARCHAR(191) NULL,
    `salary` VARCHAR(191) NULL,
    `description` TEXT NOT NULL,
    `requirements` TEXT NULL,
    `status` ENUM('ACTIVE', 'CLOSED') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JobApplication` (
    `id` VARCHAR(191) NOT NULL,
    `jobId` VARCHAR(191) NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `message` TEXT NULL,
    `resumeUrl` LONGTEXT NOT NULL,
    `status` ENUM('NEW', 'REVIEWED', 'SHORTLISTED', 'REJECTED') NOT NULL DEFAULT 'NEW',
    `notes` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `JobApplication_jobId_idx`(`jobId`),
    INDEX `JobApplication_email_idx`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContactInquiry` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `service` VARCHAR(191) NULL,
    `message` TEXT NOT NULL,
    `status` ENUM('NEW', 'CONTACTED', 'CLOSED') NOT NULL DEFAULT 'NEW',
    `notes` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `ContactInquiry_email_idx`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Blog` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `excerpt` TEXT NULL,
    `content` LONGTEXT NOT NULL,
    `coverImageUrl` LONGTEXT NULL,
    `category` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL DEFAULT 'ITLC Editorial Team',
    `authorRole` VARCHAR(191) NULL DEFAULT 'Technical Lead',
    `isPublished` BOOLEAN NOT NULL DEFAULT true,
    `publishedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Blog_slug_key`(`slug`),
    INDEX `Blog_slug_idx`(`slug`),
    INDEX `Blog_category_idx`(`category`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GalleryItem` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `imageUrl` LONGTEXT NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `GalleryItem_category_idx`(`category`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PortfolioItem` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `client` VARCHAR(191) NULL,
    `description` TEXT NOT NULL,
    `imageUrl` LONGTEXT NOT NULL,
    `tags` VARCHAR(191) NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Testimonial` (
    `id` VARCHAR(191) NOT NULL,
    `clientName` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NULL,
    `review` TEXT NOT NULL,
    `rating` INTEGER NOT NULL DEFAULT 5,
    `avatarUrl` LONGTEXT NULL,
    `logoUrl` LONGTEXT NULL,
    `isFeatured` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `StaffProfile` ADD CONSTRAINT `StaffProfile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JobApplication` ADD CONSTRAINT `JobApplication_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `Job`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;


-- =============================================================
-- SEED DATA INSERTIONS
-- =============================================================

-- 1. Super Admin User (Email: admin@itlcindia.com | Password: Admin@123)
INSERT INTO `User` (`id`, `name`, `email`, `password`, `role`, `phone`, `status`, `createdAt`, `updatedAt`) VALUES
('user_admin_super', 'ITLC Super Admin', 'admin@itlcindia.com', '$2a$10$gJ66l4B3sBw1X0WfU1B00uFvjI0f6Y4fL9sM6zB9fM1zO2sW3fM4G', 'SUPER_ADMIN', '+91 99350 43210', 'ACTIVE', NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `password` = '$2a$10$gJ66l4B3sBw1X0WfU1B00uFvjI0f6Y4fL9sM6zB9fM1zO2sW3fM4G';

INSERT INTO `StaffProfile` (`id`, `userId`, `department`, `permissions`) VALUES
('staff_profile_admin', 'user_admin_super', 'Executive Management', '["dashboard","certificates","students","products","careers","inquiries","blogs","gallery","portfolio","staff","settings"]')
ON DUPLICATE KEY UPDATE `department` = 'Executive Management';

-- 2. Jobs
INSERT INTO `Job` (`id`, `title`, `department`, `location`, `type`, `experience`, `salary`, `description`, `requirements`, `status`, `createdAt`, `updatedAt`) VALUES
('job_1789558112489', 'ai ml', 'Engineering', 'Lucknow, Uttar Pradesh', 'Full-time', '2-4 Years', 'Best in Industry', 'wdfiuqgdqufgiuqfg', '', 'ACTIVE', NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `title` = 'ai ml';
INSERT INTO `Job` (`id`, `title`, `department`, `location`, `type`, `experience`, `salary`, `description`, `requirements`, `status`, `createdAt`, `updatedAt`) VALUES
('job_1', 'Senior Full Stack React / Next.js Developer', 'Engineering', 'Lucknow, Uttar Pradesh (Hybrid)', 'Full-time', '3-5 Years', '₹8 LPA - ₹15 LPA', 'Lead the architecture and scaling of enterprise client portals, AI-integrated SaaS products, and high-concurrency microservices.', 'Proficiency in Next.js 15, TypeScript, Tailwind CSS, PostgreSQL/MySQL, Prisma, and Docker.', 'ACTIVE', NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `title` = 'Senior Full Stack React / Next.js Developer';
INSERT INTO `Job` (`id`, `title`, `department`, `location`, `type`, `experience`, `salary`, `description`, `requirements`, `status`, `createdAt`, `updatedAt`) VALUES
('job_3', 'Digital Marketing & Brand Growth Specialist', 'Marketing', 'Lucknow, Uttar Pradesh', 'Full-time', '2-4 Years', '₹5 LPA - ₹9 LPA', 'Spearhead enterprise lead generation funnels, Google & Meta advertising campaigns, SEO optimization, and B2B branding.', 'Demonstrated experience in Google Ads, Meta Ads Manager, technical SEO, and analytics.', 'ACTIVE', NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `title` = 'Digital Marketing & Brand Growth Specialist';
INSERT INTO `Job` (`id`, `title`, `department`, `location`, `type`, `experience`, `salary`, `description`, `requirements`, `status`, `createdAt`, `updatedAt`) VALUES
('job_4', 'HR & Talent Acquisition Lead', 'Human Resources', 'Lucknow, Uttar Pradesh', 'Full-time', '3-5 Years', '₹6 LPA - ₹10 LPA', 'Manage full-cycle tech hiring, campus placements, employee engagement programs, and corporate HR policies.', 'Strong technical recruiting background, stellar communication, and human resource management skills.', 'ACTIVE', NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `title` = 'HR & Talent Acquisition Lead';

-- 3. Products
INSERT INTO `Product` (`id`, `name`, `slug`, `category`, `tagline`, `description`, `icon`, `features`, `directLoginUrl`, `externalWebsiteUrl`, `demoUrl`, `isLive`, `sortOrder`, `createdAt`, `updatedAt`) VALUES
('prod_1', 'Accounting & GST Invoicing', 'accounting-invoicing', 'Finance', 'Automated GST invoices, bank reconciliation, and profit & loss analytics', 'Compliant Indian accounting system supporting E-Invoicing, E-Way bills, vendor reconciliation, and automated tax filings.', 'Calculator', '[{"title":"GST & E-Invoicing","description":"One-click GST-compliant invoices with QR codes and E-Way generation."},{"title":"Automated Reconciliation","description":"Match bank statements directly with ledger entries in seconds."},{"title":"Real-Time Financial Reports","description":"Instant P&L, Balance Sheets, and Cash Flow analytics."}]', 'https://accounts.itlcindia.com/login', 'https://accounts.itlcindia.com', NULL, 1, 1, NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `name` = 'Accounting & GST Invoicing';
INSERT INTO `Product` (`id`, `name`, `slug`, `category`, `tagline`, `description`, `icon`, `features`, `directLoginUrl`, `externalWebsiteUrl`, `demoUrl`, `isLive`, `sortOrder`, `createdAt`, `updatedAt`) VALUES
('prod_2', 'ITLC Smart HRMS & Payroll', 'itlc-hrms', 'Human Resources', 'Enterprise attendance, biometric sync, payroll & compliance engine', 'Complete HR automation suite with GPS geo-fencing, facial recognition attendance, tax computation, and employee self-service portal.', 'Users', '[{"title":"Geo-Fenced Attendance","description":"Real-time check-in tracking with mobile GPS and facial verification."},{"title":"One-Click Payroll","description":"Automated PF, ESI, TDS, and salary slip generation."},{"title":"Leave & Roster Management","description":"Multi-level approval workflows for shift planning."}]', 'https://hrms.itlcindia.com/login', 'https://hrms.itlcindia.com', NULL, 1, 2, NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `name` = 'ITLC Smart HRMS & Payroll';
INSERT INTO `Product` (`id`, `name`, `slug`, `category`, `tagline`, `description`, `icon`, `features`, `directLoginUrl`, `externalWebsiteUrl`, `demoUrl`, `isLive`, `sortOrder`, `createdAt`, `updatedAt`) VALUES
('prod_3', 'ITLC Omni-Channel CRM', 'itlc-ai-crm', 'Sales & Marketing', 'Automate WhatsApp, email leads, deal pipelines and revenue forecast', 'AI-driven CRM designed to ingest inquiries from multiple channels, score lead intent, and assign tasks to sales reps automatically.', 'TrendingUp', '[{"title":"AI Intent Scoring","description":"Instantly categorizes hot leads from web forms and WhatsApp."},{"title":"Automated Follow-ups","description":"Trigger personalized drip sequences via WhatsApp and Email."},{"title":"Visual Sales Pipeline","description":"Drag-and-drop Kanban view of enterprise client deals."}]', 'https://crm.itlcindia.com/login', 'https://crm.itlcindia.com', NULL, 1, 3, NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `name` = 'ITLC Omni-Channel CRM';
INSERT INTO `Product` (`id`, `name`, `slug`, `category`, `tagline`, `description`, `icon`, `features`, `directLoginUrl`, `externalWebsiteUrl`, `demoUrl`, `isLive`, `sortOrder`, `createdAt`, `updatedAt`) VALUES
('prod_4', 'ITLC Cloud ERP Suite', 'itlc-cloud-erp', 'Enterprise ERP', 'Unified inventory, purchase orders, vendor invoices and financial ledger', 'Robust ERP solution for manufacturing, construction, and service firms to coordinate operations, assets, and accounting in real time.', 'Layers', '[{"title":"Multi-Warehouse Inventory","description":"Real-time stock valuation and low-stock reorder triggers."},{"title":"GST Invoicing & Billing","description":"E-Way bill and GST compliant invoice generation."},{"title":"Vendor Portal","description":"Direct purchase order approvals and dispatch tracking."}]', 'https://erp.itlcindia.com/login', 'https://erp.itlcindia.com', NULL, 1, 4, NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `name` = 'ITLC Cloud ERP Suite';
INSERT INTO `Product` (`id`, `name`, `slug`, `category`, `tagline`, `description`, `icon`, `features`, `directLoginUrl`, `externalWebsiteUrl`, `demoUrl`, `isLive`, `sortOrder`, `createdAt`, `updatedAt`) VALUES
('prod_5', 'Digital Sign & E-Contracts', 'digital-sign', 'Operations', 'Legally binding e-signatures, audit trails, and contract automation', 'Secure paperless signing platform supporting Aadhaar eSign, digital certificates, and automated approval workflows.', 'PenTool', '[{"title":"Aadhaar eSign & OTP","description":"Legally compliant paperless authentication for Indian contracts."},{"title":"Audit Trail & Timestamp","description":"Cryptographically secured logs of every signature event."},{"title":"Template Automation","description":"Reusable NDAs, employee agreements, and client quotes."}]', 'https://sign.itlcindia.com/login', 'https://sign.itlcindia.com', NULL, 1, 5, NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `name` = 'Digital Sign & E-Contracts';
INSERT INTO `Product` (`id`, `name`, `slug`, `category`, `tagline`, `description`, `icon`, `features`, `directLoginUrl`, `externalWebsiteUrl`, `demoUrl`, `isLive`, `sortOrder`, `createdAt`, `updatedAt`) VALUES
('prod_6', 'ITLC AI Copilot & Chatbot Studio', 'ai-copilot-studio', 'AI & Automation', '24/7 intelligent customer assistance, automated agent ticketing, and LLM queries', 'Deploy custom LLM business bots trained on your company knowledge base to handle inquiries and automate tasks.', 'Bot', '[{"title":"Private Document RAG","description":"Trained securely on internal PDFs, guides, and client manuals."},{"title":"WhatsApp & Web Widget","description":"Embed seamlessly across your customer-facing touchpoints."},{"title":"Automated Action Triggers","description":"Create support tickets, book meetings, or fetch CRM data."}]', 'https://ai.itlcindia.com/login', 'https://ai.itlcindia.com', NULL, 1, 6, NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `name` = 'ITLC AI Copilot & Chatbot Studio';
INSERT INTO `Product` (`id`, `name`, `slug`, `category`, `tagline`, `description`, `icon`, `features`, `directLoginUrl`, `externalWebsiteUrl`, `demoUrl`, `isLive`, `sortOrder`, `createdAt`, `updatedAt`) VALUES
('prod_7', 'Document Vault & OCR', 'document-vault', 'Operations', 'Secure cloud archiving, intelligent OCR indexing, and role-based permissions', 'Centralized institutional repository for Aadhaar cards, trade licenses, bills, and contracts with intelligent text search.', 'FileText', '[{"title":"Automated OCR Indexing","description":"Search inside scanned PDFs, receipts, and images effortlessly."},{"title":"Encrypted Storage","description":"AES-256 bank-grade encryption at rest and in transit."},{"title":"Fine-Grained Permissions","description":"Control access per department, branch, or clearance level."}]', 'https://docs.itlcindia.com/login', 'https://docs.itlcindia.com', NULL, 1, 7, NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `name` = 'Document Vault & OCR';
INSERT INTO `Product` (`id`, `name`, `slug`, `category`, `tagline`, `description`, `icon`, `features`, `directLoginUrl`, `externalWebsiteUrl`, `demoUrl`, `isLive`, `sortOrder`, `createdAt`, `updatedAt`) VALUES
('prod_8', 'Projects & Agile Kanban', 'projects-kanban', 'Productivity', 'Sprint planning, milestone tracking, timesheets and deliverables management', 'Modern project management system enabling engineering and creative teams to execute on deadlines with Kanban boards.', 'CheckSquare', '[{"title":"Visual Kanban Boards","description":"Drag-and-drop task progression with customized stage gates."},{"title":"Timesheets & Costing","description":"Log billable hours linked directly to client invoicing."},{"title":"Milestone Tracking","description":"Gantt timeline view with automated dependency alerts."}]', 'https://projects.itlcindia.com/login', 'https://projects.itlcindia.com', NULL, 1, 8, NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `name` = 'Projects & Agile Kanban';
INSERT INTO `Product` (`id`, `name`, `slug`, `category`, `tagline`, `description`, `icon`, `features`, `directLoginUrl`, `externalWebsiteUrl`, `demoUrl`, `isLive`, `sortOrder`, `createdAt`, `updatedAt`) VALUES
('prod_9', 'Subscriptions & Recurring Invoicing', 'subscriptions-billing', 'Finance', 'Automated recurring billing, payment gateway integration, and client portal', 'Manage SaaS plans, monthly retainers, AMC contracts, and automatic payment reminders with instant reconciliation.', 'Repeat', '[{"title":"Automated Renewal Invoices","description":"Generates and delivers GST invoices on scheduled renewal dates."},{"title":"Multiple Payment Gateways","description":"Supports UPI AutoPay, Razorpay, Cashfree, and credit cards."},{"title":"Self-Serve Customer Portal","description":"Clients can upgrade plans, view receipts, and update details."}]', 'https://billing.itlcindia.com/login', 'https://billing.itlcindia.com', NULL, 1, 9, NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `name` = 'Subscriptions & Recurring Invoicing';
INSERT INTO `Product` (`id`, `name`, `slug`, `category`, `tagline`, `description`, `icon`, `features`, `directLoginUrl`, `externalWebsiteUrl`, `demoUrl`, `isLive`, `sortOrder`, `createdAt`, `updatedAt`) VALUES
('prod_10', 'Infra-Vision Construction ERP', 'infra-vision-erp', 'Infrastructure', 'Civil construction site tracking, material requisitions, and contractor measurement books', 'Specialized enterprise platform for construction contractors and developers to monitor site labor, cement/steel inventory, and project budgets.', 'HardHat', '[{"title":"Daily Progress Reports (DPR)","description":"Capture site photos, weather conditions, and labor turnout daily."},{"title":"Digital Measurement Book (MB)","description":"Accurate joint measurements for contractor bill verification."},{"title":"Material Requisitions","description":"Eliminate site pilferage with gate pass and barcode entry."}]', 'https://infra-vision.itlcindia.com/', 'https://infra-vision.itlcindia.com/', NULL, 1, 10, NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `name` = 'Infra-Vision Construction ERP';
INSERT INTO `Product` (`id`, `name`, `slug`, `category`, `tagline`, `description`, `icon`, `features`, `directLoginUrl`, `externalWebsiteUrl`, `demoUrl`, `isLive`, `sortOrder`, `createdAt`, `updatedAt`) VALUES
('prod_11', 'Student Admissions & Academy Portal', 'student-admissions-portal', 'Education', 'Online student registrations, document verification, and verifiable QR certificates', 'Complete institutional portal for educational academies, skill institutes, and colleges to handle end-to-end admissions and credentials.', 'GraduationCap', '[{"title":"Online Admission Portal","description":"Public application form with Aadhaar and document upload."},{"title":"Verifiable Digital Certificates","description":"QR-coded completion certificates protected against forgery."},{"title":"Course Progression & Fees","description":"Track fee installments, student status, and academic records."}]', 'https://itlcindia.com/admin/students', 'https://itlcindia.com/admin/students', NULL, 1, 11, NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `name` = 'Student Admissions & Academy Portal';
INSERT INTO `Product` (`id`, `name`, `slug`, `category`, `tagline`, `description`, `icon`, `features`, `directLoginUrl`, `externalWebsiteUrl`, `demoUrl`, `isLive`, `sortOrder`, `createdAt`, `updatedAt`) VALUES
('prod_12', 'Point of Sale (POS) & Retail Desk', 'point-of-sale-retail', 'Retail', 'Lightning fast counter checkout, barcode scanner, and offline billing sync', 'High-speed retail billing interface that works seamlessly even during internet outages, synchronizing transactions once reconnected.', 'ShoppingCart', '[{"title":"Sub-90ms Fast Checkout","description":"Touchscreen and barcode optimized for peak rush hours."},{"title":"Offline-First Billing","description":"Continue generating bills uninterrupted without internet."},{"title":"Thermal Receipt Printing","description":"Compatible with standard USB/Bluetooth 80mm ESC/POS printers."}]', 'https://pos.itlcindia.com/login', 'https://pos.itlcindia.com', NULL, 1, 12, NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `name` = 'Point of Sale (POS) & Retail Desk';

-- 4. Blogs
INSERT INTO `Blog` (`id`, `title`, `slug`, `excerpt`, `content`, `coverImageUrl`, `category`, `author`, `authorRole`, `isPublished`, `publishedAt`, `createdAt`, `updatedAt`) VALUES
('blog_1', 'The Future of AI-Powered ERP and Intelligent Automation in 2026', 'future-of-ai-powered-erp-automation-2026', 'Discover how modern machine learning models and predictive automation are transforming enterprise resource planning and operational workflows.', '## The Modern Evolution of Enterprise Resource Planning

Over the past decade, Enterprise Resource Planning (ERP) systems served primarily as relational databases with administrative user interfaces. Today, in 2026, artificial intelligence has fundamentally inverted this model.

### 1. Autonomous Predictive Supply Chains
Rather than relying on human managers to notice supply chain shortfalls, intelligent ERP systems continuously analyze market demand, weather forecasts, and historical delivery times to automatically generate purchase orders before bottlenecks occur.

### 2. Generative Interfaces for Business Intelligence
Instead of complex SQL queries or static dashboards, department heads can now communicate in plain natural language.

### Looking Ahead
At ITLC India, our enterprise software engineering division is actively integrating cognitive automation into our core software suite. Businesses that adopt these architectures today position themselves for unprecedented operational leverage in the coming decade.', 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop', 'AI & Automation', 'Prashant Srivastava', 'Chief Technology Officer', 1, NOW(3), NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `title` = 'The Future of AI-Powered ERP and Intelligent Automation in 2026';
INSERT INTO `Blog` (`id`, `title`, `slug`, `excerpt`, `content`, `coverImageUrl`, `category`, `author`, `authorRole`, `isPublished`, `publishedAt`, `createdAt`, `updatedAt`) VALUES
('blog_2', 'Architecting Scalable Next.js 15 Applications for High-Concurrency Portals', 'architecting-scalable-nextjs-15-applications', 'A deep technical dive into React 19 Server Components, streaming SSR, Redis distributed caching, and zero-downtime database migrations.', '## Engineering High-Performance Web Applications

Building web platforms that handle millions of student verifications, real-time client registrations, and SaaS multi-tenancy requires uncompromising architecture.

### The Power of React 19 Server Components (RSC)
With Next.js 15 and React 19, the boundary between client and server execution is seamless. By running data-intensive queries directly on server components, we eliminate massive client-side bundle sizes and achieve sub-second First Contentful Paint (FCP).

### Database Connection Pooling with Prisma 7
Leveraging MariaDB/MySQL connection adapters allows us to maintain stable database connections without exhausting database socket limits during traffic spikes.', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop', 'Software Engineering', 'Ananya Mishra', 'Lead Full-Stack Architect', 1, NOW(3), NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `title` = 'Architecting Scalable Next.js 15 Applications for High-Concurrency Portals';
INSERT INTO `Blog` (`id`, `title`, `slug`, `excerpt`, `content`, `coverImageUrl`, `category`, `author`, `authorRole`, `isPublished`, `publishedAt`, `createdAt`, `updatedAt`) VALUES
('blog_3', 'How Indian Enterprises Are Leveraging Biometric Cloud HRMS for Workforce Excellence', 'biometric-cloud-hrms-indian-enterprises', 'A practical guide to implementing geo-fenced attendance, automated tax compliance, and self-service mobile portals for distributed teams.', '## Transforming People Operations Across India

Managing dispersed workforces across multi-city branches, construction sites, and remote hubs presents severe operational hurdles for growing enterprises.

### The Shift from Manual Biometrics to Cloud Geo-Fencing
Traditional fingerprint scanners frequently suffer from hardware breakdowns, network disconnects, and manual synchronization delays. Cloud-native HRMS solutions solve this with GPS geo-fencing and facial verification.', 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop', 'Enterprise Tech', 'Vikram Rajput', 'Head of Product Strategy', 1, NOW(3), NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `title` = 'How Indian Enterprises Are Leveraging Biometric Cloud HRMS for Workforce Excellence';

-- 5. Certificates
INSERT INTO `Certificate` (`id`, `certificateNumber`, `studentName`, `courseName`, `startDate`, `completionDate`, `issueDate`, `expiryDate`, `dateOfBirth`, `verificationId`, `certificateFileUrl`, `status`, `revokedReason`, `createdAt`, `updatedAt`) VALUES
('cert_1', 'ITLC-2026-00123', 'Rahul Sharma', 'Full Stack Web Development & Cloud Architecture', '2025-08-01', '2026-01-10', '2026-01-15', '2030-01-15', '2002-05-12', 'ITLC-VER-9821', '/sample-certificate.pdf', 'VERIFIED', NULL, NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `studentName` = 'Rahul Sharma';
INSERT INTO `Certificate` (`id`, `certificateNumber`, `studentName`, `courseName`, `startDate`, `completionDate`, `issueDate`, `expiryDate`, `dateOfBirth`, `verificationId`, `certificateFileUrl`, `status`, `revokedReason`, `createdAt`, `updatedAt`) VALUES
('cert_2', 'ITLC-2026-00124', 'Pooja Verma', 'Python Data Science & Machine Learning Engineering', '2025-09-01', '2026-02-05', '2026-02-10', '2030-02-10', '2001-08-23', 'ITLC-VER-9822', '/sample-certificate.pdf', 'VERIFIED', NULL, NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `studentName` = 'Pooja Verma';
INSERT INTO `Certificate` (`id`, `certificateNumber`, `studentName`, `courseName`, `startDate`, `completionDate`, `issueDate`, `expiryDate`, `dateOfBirth`, `verificationId`, `certificateFileUrl`, `status`, `revokedReason`, `createdAt`, `updatedAt`) VALUES
('cert_3', 'ITLC-2026-00125', 'Amitabh Sen', 'Advanced Cyber Security & Network Defense', '2025-07-15', '2025-12-20', '2025-12-28', '2029-12-28', '2000-11-19', 'ITLC-VER-9823', '/sample-certificate.pdf', 'VERIFIED', NULL, NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `studentName` = 'Amitabh Sen';
INSERT INTO `Certificate` (`id`, `certificateNumber`, `studentName`, `courseName`, `startDate`, `completionDate`, `issueDate`, `expiryDate`, `dateOfBirth`, `verificationId`, `certificateFileUrl`, `status`, `revokedReason`, `createdAt`, `updatedAt`) VALUES
('cert_4', 'ITLC-2026-00126', 'Neha Srivastava', 'Generative AI & LLM Automation Architecture', '2025-10-01', '2026-02-25', '2026-03-01', '2030-03-01', '2002-01-14', 'ITLC-VER-9824', '/sample-certificate.pdf', 'VERIFIED', NULL, NOW(3), NOW(3))
ON DUPLICATE KEY UPDATE `studentName` = 'Neha Srivastava';

SET FOREIGN_KEY_CHECKS = 1;
