import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { localStore } from "@/lib/local-store";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q")?.trim() || "";
    const status = searchParams.get("status")?.trim() || "";

    const where: any = {};
    if (status && status !== "ALL") {
      where.status = status;
    }
    if (q) {
      where.OR = [
        { fullName: { contains: q } },
        { email: { contains: q } },
        { phone: { contains: q } },
      ];
    }

    const applications = await prisma.jobApplication.findMany({
      where,
      include: { job: { select: { title: true, department: true } } },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, applications });
  } catch (error) {
    console.warn("Notice: Prisma job applications query failed, using localStore fallback:", error);
  }

  // Instant fallback from localStore
  return NextResponse.json({ success: true, applications: localStore.getApplications() });
}
