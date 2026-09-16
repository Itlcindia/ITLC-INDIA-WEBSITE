import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { saveUploadedFile } from "@/lib/upload";
import { localStore } from "@/lib/local-store";

const DEFAULT_PORTFOLIO = [
  {
    title: "UP Police Citizen Portal – Custom Government Web Solution",
    category: "Custom Development",
    client: "Uttar Pradesh Police",
    description: "A comprehensive and secure citizen portal built for the UP Police, facilitating seamless online services, report tracking, and improved transparency for the public.",
    imageUrl: "/pot/f2.png",
    tags: "Government, Security, Web App",
    sortOrder: 1,
  },
  {
    title: "MP Police Citizen Portal – Online FIR Verification",
    category: "Custom Development",
    client: "Madhya Pradesh Police",
    description: "The Online View FIR service allows citizens to access and view registered First Information Reports (FIRs) online from anywhere, ensuring transparency tracking.",
    imageUrl: "/pot/12.png",
    tags: "Web App, UI/UX, Mobile App",
    sortOrder: 2,
  },
  {
    title: "Sugar Industry Government Portal — IT Solution Project",
    category: "Custom Development",
    client: "UP State Sugar Corporation Ltd.",
    description: "Annual Maintenance Contract (AMC) Support and centralized operational monitoring system for 23 Sugar Mills across the state.",
    imageUrl: "/pot/f3.png",
    tags: "Government, Enterprise, Operations",
    sortOrder: 3,
  },
  {
    title: "Government Training Council – IT Support & Helpdesk Solution",
    category: "IT Support & Services",
    client: "Government Training Council",
    description: "IT infrastructure support, helpdesk/call center setup, query management system, technical monitoring, and server–network maintenance.",
    imageUrl: "/pot/f4.png",
    tags: "Government, IT Support, Helpdesk",
    sortOrder: 4,
  },
];

export async function GET() {
  try {
    const dbPromise = prisma.portfolioItem.findMany({
      orderBy: { sortOrder: "asc" },
    }).catch(() => null);

    const timeoutPromise = new Promise<null>((_, reject) =>
      setTimeout(() => reject(new Error("DB_TIMEOUT")), 500)
    );

    const items = await Promise.race([dbPromise, timeoutPromise]);
    if (items && items.length > 0) {
      return NextResponse.json({ success: true, items });
    }
  } catch {
    // Database offline or timed out
  }

  // Instant fallback from localStore
  return NextResponse.json({ success: true, items: localStore.getPortfolio() });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let data: any = {};
    let imageUrl = "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      data = {
        title: String(formData.get("title") || "").trim(),
        category: String(formData.get("category") || "Custom Development").trim(),
        client: String(formData.get("client") || "").trim(),
        description: String(formData.get("description") || "").trim(),
        tags: String(formData.get("tags") || "").trim(),
        sortOrder: Number(formData.get("sortOrder")) || 0,
      };

      const file = formData.get("imageFile");
      if (file instanceof File && file.size > 0) {
        imageUrl = await saveUploadedFile(file, "portfolio");
      } else {
        imageUrl = String(formData.get("imageUrl") || "").trim();
      }
    } else {
      data = await request.json();
      imageUrl = data.imageUrl?.trim() || "";
    }

    if (!data.title || !data.category) {
      return NextResponse.json(
        { success: false, error: "Title and category are required." },
        { status: 400 }
      );
    }

    const newItem = await prisma.portfolioItem.create({
      data: {
        title: data.title,
        category: data.category,
        client: data.client || null,
        description: data.description || "",
        imageUrl: imageUrl || "/pot/f2.png",
        tags: data.tags || "Enterprise",
        sortOrder: data.sortOrder || 0,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Case study created successfully",
      item: newItem,
    });
  } catch (error: any) {
    console.error("Create portfolio error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create portfolio item" },
      { status: 500 }
    );
  }
}
