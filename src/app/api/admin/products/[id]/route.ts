import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cacheDelete } from "@/lib/redis";
import { localStore } from "@/lib/local-store";

/**
 * PATCH /api/admin/products/[id]
 * Updates product details or toggles live status.
 */
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updateData: any = {};
    if (body.name !== undefined) updateData.name = body.name.trim();
    if (body.slug !== undefined) updateData.slug = body.slug.trim().toLowerCase();
    if (body.category !== undefined) updateData.category = body.category.trim();
    if (body.tagline !== undefined) updateData.tagline = body.tagline.trim();
    if (body.description !== undefined) updateData.description = body.description.trim();
    if (body.icon !== undefined) updateData.icon = body.icon.trim();
    if (body.directLoginUrl !== undefined) updateData.directLoginUrl = body.directLoginUrl?.trim() || null;
    if (body.externalWebsiteUrl !== undefined) updateData.externalWebsiteUrl = body.externalWebsiteUrl?.trim() || null;
    if (body.demoUrl !== undefined) updateData.demoUrl = body.demoUrl?.trim() || "/contact";
    if (body.isLive !== undefined) updateData.isLive = Boolean(body.isLive);
    if (body.sortOrder !== undefined) updateData.sortOrder = Number(body.sortOrder);

    if (body.features !== undefined) {
      updateData.features = Array.isArray(body.features)
        ? JSON.stringify(body.features)
        : typeof body.features === "string"
        ? body.features
        : JSON.stringify([]);
    }

    // Always update localStore immediately
    const updatedLocal = localStore.updateProduct(id, updateData);

    // Asynchronously try updating database
    try {
      await prisma.product.update({
        where: { id },
        data: updateData,
      });
    } catch {
      // Offline fallback
    }

    await cacheDelete("products:live").catch(() => {});

    return NextResponse.json({
      success: true,
      message: "Product updated successfully",
      product: updatedLocal,
    });
  } catch (error: any) {
    console.error("Admin update product error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update product" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/admin/products/[id]
 * Deletes a product.
 */
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Remove from localStore immediately
    const deleted = localStore.deleteProduct(id);

    // Try deleting from database
    try {
      await prisma.product.delete({
        where: { id },
      });
    } catch {
      // Offline fallback
    }

    await cacheDelete("products:live").catch(() => {});

    return NextResponse.json({
      success: true,
      message: "Product deleted successfully",
      deleted,
    });
  } catch (error: any) {
    console.error("Admin delete product error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to delete product" },
      { status: 500 }
    );
  }
}
