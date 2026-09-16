# ITLC India - Database Schema & Data Package

This package contains the complete database schema, SQL scripts, and seed data for the ITLC India website and management portal.

---

## Files in this Package:

1. **schema.sql**:
   - Ready-to-import SQL script for MySQL / MariaDB / phpMyAdmin / MySQL Workbench / DBeaver.
   - Contains all table definitions (CREATE TABLE), Enums, Primary Keys, Unique Keys, Indexes, and Foreign Key constraints.

2. **schema.prisma**:
   - Complete Prisma ORM data model.
   - Use this if you are developing or migrating with Prisma:
     npx prisma db push
     # or
     npx prisma migrate dev

3. **seed-data.json**:
   - Complete JSON seed data containing real records for:
     - Gallery items
     - Portfolio / Case studies
     - Job openings & Candidate applications
     - Student registrations
     - Verifiable certificates
     - Products suite (HRMS, CRM, ERP, etc.)
     - Blog articles
     - Contact inquiries & leads

---

## Database Tables Overview:

- User: Administrative users, staff, and RBAC authentication
- StaffProfile: Staff department & JSON-based module permissions
- Certificate: Student completion certificates with verification ID & DOB check
- StudentRegistration: Student admissions, documents (Aadhaar, photo, ID card), course info
- Product: Enterprise software products, features, demo & direct login URLs
- Job: Career vacancies with salary, department, type, status (ACTIVE/CLOSED)
- JobApplication: Candidate applications with resume upload links & hiring status
- ContactInquiry: Customer contact leads & inquiry messages
- Blog: CMS articles, categories, authors, slugs, and rich content
- GalleryItem: Corporate photo gallery categorized by events, team, office
- PortfolioItem: Case studies, client names, tags, and showcase images
- Testimonial: Client reviews, star ratings, company names, and avatars

---

## How to Import into MySQL / phpMyAdmin:

### Option A: Using phpMyAdmin
1. Open phpMyAdmin (http://localhost/phpmyadmin).
2. Create a new database named `itlc_db` (Collation: utf8mb4_unicode_ci).
3. Click on the newly created database, go to the Import tab.
4. Choose the schema.sql file and click Go. All tables and constraints will be created automatically.

### Option B: Using MySQL Command Line
```bash
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS itlc_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
mysql -u root -p itlc_db < schema.sql
```

### Option C: Using Prisma ORM
In your project .env file, configure:
DATABASE_URL="mysql://username:password@localhost:3306/itlc_db"

Then run:
npx prisma db push
