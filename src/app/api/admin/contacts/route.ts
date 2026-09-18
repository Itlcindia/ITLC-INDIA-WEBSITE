import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { localStore } from "@/lib/local-store";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim() || "";
  const status = searchParams.get("status")?.trim() || "";

  try {
    const where: any = {};
    if (status && status !== "ALL") {
      where.status = status;
    }
    if (q) {
      where.OR = [
        { name: { contains: q } },
        { email: { contains: q } },
        { phone: { contains: q } },
        { company: { contains: q } },
        { service: { contains: q } },
      ];
    }

    const contacts = await prisma.contactInquiry.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, contacts });
  } catch (error) {
    console.warn("Notice: Prisma contacts query failed, using localStore fallback:", error);
  }

  // Instant response from localStore
  return NextResponse.json({ success: true, contacts: localStore.getContacts(q, status) });
}
