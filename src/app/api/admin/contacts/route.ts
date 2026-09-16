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

    const dbPromise = prisma.contactInquiry.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    const timeoutPromise = new Promise<null>((_, reject) =>
      setTimeout(() => reject(new Error("DB_TIMEOUT")), 400)
    );

    const contacts = await Promise.race([dbPromise, timeoutPromise]);
    if (contacts && contacts.length > 0) {
      return NextResponse.json({ success: true, contacts });
    }
  } catch {
    // Database offline or timed out
  }

  // Instant response from localStore
  return NextResponse.json({ success: true, contacts: localStore.getContacts(q, status) });
}
