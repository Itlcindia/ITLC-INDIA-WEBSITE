import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { saveUploadedFile } from "@/lib/upload";
import { localStore } from "@/lib/local-store";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const contentType = request.headers.get("content-type") || "";
    let data: any = {};

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      if (formData.has("title")) data.title = String(formData.get("title")).trim();
      if (formData.has("category")) data.category = String(formData.get("category")).trim();
      if (formData.has("client")) data.client = String(formData.get("client")).trim();
      if (formData.has("description")) data.description = String(formData.get("description")).trim();
      if (formData.has("tags")) data.tags = String(formData.get("tags")).trim();
      if (formData.has("sortOrder")) data.sortOrder = Number(formData.get("sortOrder"));

      const file = formData.get("imageFile");
      if (file instanceof File && file.size > 0) {
        data.imageUrl = await saveUploadedFile(file, "portfolio");
      } else if (formData.has("imageUrl")) {
        data.imageUrl = String(formData.get("imageUrl")).trim();
      }
    } else {
      data = await request.json();
    }

    // Always update localStore immediately
    const updatedLocal = localStore.updatePortfolioItem(id, data);

    let updatedPrisma: any = null;
    try {
      updatedPrisma = await prisma.portfolioItem.update({
        where: { id },
        data,
      });
    } catch {
      // Offline fallback
    }

    const finalItem = updatedLocal || updatedPrisma;
    if (!finalItem) {
      return NextResponse.json(
        { success: false, error: "Case study not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Case study updated successfully",
      item: finalItem,
    });
  } catch (error: any) {
    console.error("Update portfolio error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update item" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Delete from localStore immediately
    const deletedLocal = localStore.deletePortfolioItem(id);

    try {
      await prisma.portfolioItem.delete({
        where: { id },
      });
    } catch {
      // Offline fallback
    }

    return NextResponse.json({
      success: true,
      message: "Case study deleted successfully",
      deleted: deletedLocal,
    });
  } catch (error) {
    console.error("Delete portfolio error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete item" },
      { status: 500 }
    );
  }
}
