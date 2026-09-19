import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { localStore } from "@/lib/local-store";
import { cacheDelete } from "@/lib/redis";
import { revalidatePath } from "next/cache";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    localStore.deleteGalleryItem(id);

    try {
      await prisma.galleryItem.delete({
        where: { id },
      });
    } catch {
      // Offline fallback
    }

    // Invalidate gallery caches and revalidate pages
    const categories = ["ALL", "Events", "Office", "Team", "Projects"];
    for (const cat of categories) {
      await cacheDelete(`gallery:items:${cat}`).catch(() => {});
    }
    try {
      revalidatePath("/gallery");
      revalidatePath("/");
    } catch {}

    return NextResponse.json({
      success: true,
      message: "Gallery item deleted successfully",
    });
  } catch (error) {
    console.error("Delete gallery error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete gallery item" },
      { status: 500 }
    );
  }
}
