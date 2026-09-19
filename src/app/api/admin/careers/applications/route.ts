import { NextResponse } from "next/server";
import prisma, { isDbCircuitBroken, markDbOffline } from "@/lib/prisma";
import { localStore } from "@/lib/local-store";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim() || "";
  const status = searchParams.get("status")?.trim() || "";

  if (!isDbCircuitBroken()) {
    try {
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
      markDbOffline(30000);
      console.warn("Notice: Prisma job applications query failed, using localStore fallback:", error);
    }
  }

  // Instant fallback from localStore (<1ms)
  return NextResponse.json({ success: true, applications: localStore.getApplications() });
}
