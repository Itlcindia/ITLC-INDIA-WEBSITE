import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { saveUploadedFile } from "@/lib/upload";
import { localStore } from "@/lib/local-store";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category")?.trim() || "";

  try {
    const where: any = {};
    if (category && category !== "ALL") {
      where.category = category;
    }

    const items = await prisma.galleryItem.findMany({
      where,
      orderBy: { sortOrder: "asc" },
    });

    if (items && items.length > 0) {
      return NextResponse.json({ success: true, items });
    }
  } catch (error) {
    console.warn("Gallery DB query failed, falling back to local store:", error);
  }

  // Instant response with fallback images if database has no entries
  const items = localStore.getGallery(category);
  return NextResponse.json({ success: true, items });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let title = "";
    let category = "Events";
    let sortOrder = 0;
    let imageUrl = "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      title = String(formData.get("title") || "").trim();
      category = String(formData.get("category") || "Events").trim();
      sortOrder = Number(formData.get("sortOrder")) || 0;

      const file = formData.get("imageFile");
      if (file instanceof File && file.size > 0) {
        imageUrl = await saveUploadedFile(file, "gallery");
      } else {
        imageUrl = String(formData.get("imageUrl") || "").trim();
      }
    } else {
      const body = await request.json();
      title = body.title?.trim() || "";
      category = body.category?.trim() || "Events";
      sortOrder = Number(body.sortOrder) || 0;
      imageUrl = body.imageUrl?.trim() || "";
    }

    if (!title || !imageUrl) {
      return NextResponse.json(
        { success: false, error: "Title and image are required." },
        { status: 400 }
      );
    }

    let savedItem: any = null;

    // Primary: Save directly to MySQL database
    try {
      savedItem = await prisma.galleryItem.create({
        data: {
          title,
          category,
          imageUrl,
          sortOrder,
        },
      });
    } catch (dbError) {
      console.error("Prisma gallery create error:", dbError);
    }

    if (!savedItem) {
      // Fallback to local store if DB is completely unreachable
      savedItem = localStore.addGalleryItem({
        title,
        category,
        imageUrl,
        sortOrder,
      });
    } else {
      // Sync to local store with real database ID
      localStore.addGalleryItem({
        id: savedItem.id,
        title: savedItem.title,
        category: savedItem.category,
        imageUrl: savedItem.imageUrl,
        sortOrder: savedItem.sortOrder,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Photo added to gallery successfully",
      item: savedItem,
    });
  } catch (error: any) {
    console.error("Add gallery item error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to add gallery item" },
      { status: 500 }
    );
  }
}
