import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cacheGet, cacheSet } from "@/lib/redis";
import { localStore } from "@/lib/local-store";

const DEFAULT_BLOGS = [
  {
    title: "The Future of AI-Powered ERP and Intelligent Automation in 2026",
    slug: "future-of-ai-powered-erp-automation-2026",
    category: "AI & Automation",
    excerpt: "Discover how modern machine learning models and predictive automation are transforming enterprise resource planning and operational workflows.",
    content: `## The Modern Evolution of Enterprise Resource Planning

Over the past decade, Enterprise Resource Planning (ERP) systems served primarily as relational databases with administrative user interfaces. Today, in 2026, artificial intelligence has fundamentally inverted this model.

### 1. Autonomous Predictive Supply Chains
Rather than relying on human managers to notice supply chain shortfalls, intelligent ERP systems continuously analyze market demand, weather forecasts, and historical delivery times to automatically generate purchase orders before bottlenecks occur.

### 2. Generative Interfaces for Business Intelligence
Instead of complex SQL queries or static dashboards, department heads can now communicate in plain natural language:
> "Compare last quarter's field maintenance expenditure with budget projections and highlight anomalies."

The system immediately synthesizes cross-departmental spreadsheets into interactive visual charts with actionable risk assessments.

### 3. Machine Learning at the Edge
For infrastructure and field operations, edge computing models run directly on rugged tablets and smartphones, allowing engineers to verify construction quality without requiring active internet connectivity.

### Looking Ahead
At ITLC India, our enterprise software engineering division is actively integrating cognitive automation into our core software suite. Businesses that adopt these architectures today position themselves for unprecedented operational leverage in the coming decade.`,
    coverImageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    author: "Prashant Srivastava",
    authorRole: "Chief Technology Officer",
    isPublished: true,
    publishedAt: new Date("2026-02-15T10:00:00Z"),
  },
  {
    title: "Architecting Scalable Next.js 15 Applications for High-Concurrency Portals",
    slug: "architecting-scalable-nextjs-15-applications",
    category: "Software Engineering",
    excerpt: "A deep technical dive into React 19 Server Components, streaming SSR, Redis distributed caching, and zero-downtime database migrations.",
    content: `## Engineering High-Performance Web Applications

Building web platforms that handle millions of student verifications, real-time client registrations, and SaaS multi-tenancy requires uncompromising architecture.

### The Power of React 19 Server Components (RSC)
With Next.js 15 and React 19, the boundary between client and server execution is seamless. By running data-intensive queries directly on server components, we eliminate massive client-side bundle sizes and achieve sub-second First Contentful Paint (FCP).

\`\`\`tsx
// Server Component directly fetching with zero client hydration overhead
export default async function CertificateDashboard() {
  const data = await getCachedVerificationMetrics();
  return <MetricsDisplay stats={data} />;
}
\`\`\`

### Multi-Tier Distributed Caching with Redis
To guarantee response times below 50 milliseconds during peak admission seasons, we employ a two-tier caching topology:
1. **In-Memory Local Cache**: Hot data held in server instance memory.
2. **Distributed Redis Cache**: Shared cluster across all edge server instances with automatic invalidation on mutation.

### Database Connection Pooling with Prisma 7
Leveraging MariaDB/MySQL connection adapters allows us to maintain stable database connections without exhausting database socket limits during traffic spikes.

### Conclusion
By combining React Server Components with distributed Redis caching, the ITLC India engineering team maintains 99.9% uptime while delivering instant user interactions.`,
    coverImageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    author: "Ananya Mishra",
    authorRole: "Lead Full-Stack Architect",
    isPublished: true,
    publishedAt: new Date("2026-03-01T14:30:00Z"),
  },
  {
    title: "How Indian Enterprises Are Leveraging Biometric Cloud HRMS for Workforce Excellence",
    slug: "biometric-cloud-hrms-indian-enterprises",
    category: "Enterprise Tech",
    excerpt: "A practical guide to implementing geo-fenced attendance, automated tax compliance, and self-service mobile portals for distributed teams.",
    content: `## Transforming People Operations Across India

Managing dispersed workforces across multi-city branches, construction sites, and remote hubs presents severe operational hurdles for growing enterprises.

### The Shift from Manual Biometrics to Cloud Geo-Fencing
Traditional fingerprint scanners frequently suffer from hardware breakdowns, network disconnects, and manual synchronization delays. Cloud-native HRMS solutions solve this by combining:
- Mobile GPS Geo-fencing with facial verification.
- Automatic offline logging with instant sync upon network reconnect.
- Real-time shift roster management and overtime computation.

### Compliance Automation
Indian statutory compliance—including Provident Fund (PF), Employee State Insurance (ESI), Professional Tax (PT), and TDS—can consume weeks of manual HR labor each month. Modern HRMS platforms automate these calculations directly according to the latest government schedules.

### Employee Self-Service (ESS)
Empowering staff to access salary slips, apply for leave, and view tax projections directly from their smartphone builds organizational transparency and cuts internal HR support tickets by over 70%.

Explore how the ITLC Smart HRMS suite can transform your corporate operations today.`,
    coverImageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    author: "Vikram Rajput",
    authorRole: "Head of Product Strategy",
    isPublished: true,
    publishedAt: new Date("2026-03-10T09:15:00Z"),
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category")?.trim() || "";
  const q = searchParams.get("q")?.trim() || "";

  const cacheKey = `blogs:published:${category}:${q}`;
  const cached = await cacheGet<any[]>(cacheKey);
  if (cached) {
    return NextResponse.json({ success: true, blogs: cached, source: "cache" });
  }

  try {
    const where: any = { isPublished: true };
    if (category && category !== "ALL") {
      where.category = category;
    }
    if (q) {
      where.OR = [
        { title: { contains: q } },
        { excerpt: { contains: q } },
        { content: { contains: q } },
      ];
    }

    const dbPromise = prisma.blog.findMany({
      where,
      orderBy: { publishedAt: "desc" },
    });

    const timeoutPromise = new Promise<null>((_, reject) =>
      setTimeout(() => reject(new Error("DB_TIMEOUT")), 400)
    );

    const blogs = await Promise.race([dbPromise, timeoutPromise]);
    if (blogs && blogs.length > 0) {
      await cacheSet(cacheKey, blogs, 600);
      return NextResponse.json({ success: true, blogs, source: "database" });
    }
  } catch {
    // Database offline or timed out - seamlessly serve localStore
  }

  // Instant response from localStore (0ms)
  const blogs = localStore.getBlogs(category, q);
  await cacheSet(cacheKey, blogs, 600);
  return NextResponse.json({ success: true, blogs, source: "localStore" });
}
