import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { localStore } from "@/lib/local-store";

const DEFAULT_JOBS = [
  {
    title: "Senior Full Stack React / Next.js Developer",
    department: "Engineering",
    location: "Lucknow, Uttar Pradesh (Hybrid)",
    type: "Full-time",
    experience: "3-5 Years",
    salary: "₹8 LPA - ₹15 LPA",
    description: "We are seeking a senior full-stack software engineer proficient in Next.js 15, TypeScript, React 19, and Node.js. You will lead the architecture and scaling of enterprise client portals and internal SaaS products.",
    requirements: "Hands-on experience with App Router, Tailwind CSS, PostgreSQL/MySQL, Prisma ORM, and high-concurrency caching patterns.",
    status: "ACTIVE" as const,
  },
  {
    title: "AI / Machine Learning Engineer",
    department: "AI & Innovation",
    location: "Remote / Lucknow",
    type: "Full-time",
    experience: "2-4 Years",
    salary: "₹10 LPA - ₹18 LPA",
    description: "Join our core AI research division building automated LLM workflows, conversational chatbots, computer vision pipelines, and intelligent enterprise ERP integrations.",
    requirements: "Proficiency in Python, PyTorch/TensorFlow, LangChain, OpenAI APIs, Vector Databases, and edge model deployments.",
    status: "ACTIVE" as const,
  },
  {
    title: "Digital Marketing & Brand Growth Specialist",
    department: "Marketing",
    location: "Lucknow, Uttar Pradesh",
    type: "Full-time",
    experience: "2-4 Years",
    salary: "₹5 LPA - ₹9 LPA",
    description: "Lead digital marketing campaigns, enterprise B2B lead generation funnels, SEO strategy, social storytelling, and performance advertising for ITLC brand and SaaS products.",
    requirements: "Proven track record in Google Ads, Meta Ads Manager, technical SEO, and LinkedIn B2B campaigns.",
    status: "ACTIVE" as const,
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");

  try {
    const whereClause = status && status !== "all" ? { status: status as any } : undefined;
    const dbPromise = prisma.job.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
    }).catch(() => null);

    const timeoutPromise = new Promise<null>((_, reject) =>
      setTimeout(() => reject(new Error("DB_TIMEOUT")), 500)
    );

    const jobs = await Promise.race([dbPromise, timeoutPromise]);
    if (jobs && jobs.length > 0) {
      return NextResponse.json({ success: true, jobs });
    }
  } catch {
    // Database offline or timed out
  }

  // Instant fallback from localStore
  const jobs = localStore.getJobs(status || undefined);
  return NextResponse.json({ success: true, jobs });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.title || !body.department || !body.location) {
      return NextResponse.json(
        { success: false, error: "Title, department, and location are required." },
        { status: 400 }
      );
    }

    // Always persist to localStore immediately
    const newJob = localStore.addJob({
      title: body.title.trim(),
      department: body.department.trim(),
      location: body.location.trim(),
      type: body.type?.trim() || "Full-time",
      experience: body.experience?.trim() || "1-3 Years",
      salary: body.salary?.trim() || "Best in Industry",
      description: body.description?.trim() || "",
      requirements: body.requirements?.trim() || "",
      status: body.status === "CLOSED" ? "CLOSED" : "ACTIVE",
    });

    // Try persisting to Prisma if online
    try {
      await prisma.job.create({
        data: {
          title: body.title.trim(),
          department: body.department.trim(),
          location: body.location.trim(),
          type: body.type?.trim() || "Full-time",
          experience: body.experience?.trim() || "1-3 Years",
          salary: body.salary?.trim() || "Best in Industry",
          description: body.description?.trim() || "",
          requirements: body.requirements?.trim() || "",
          status: body.status === "CLOSED" ? "CLOSED" : "ACTIVE",
        },
      });
    } catch {
      // Database optional fallback
    }

    return NextResponse.json({
      success: true,
      message: "Job opening posted successfully",
      job: newJob,
    });
  } catch (error: any) {
    console.error("Create job error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to post job" },
      { status: 500 }
    );
  }
}
