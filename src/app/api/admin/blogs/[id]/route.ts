import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cacheDelete } from "@/lib/redis";
import { saveUploadedFile } from "@/lib/upload";
import { localStore } from "@/lib/local-store";

/**
 * GET /api/admin/blogs/[id]
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    let blog: any = null;
    try {
      blog = await prisma.blog.findUnique({
        where: { id },
      });
    } catch {
      // Offline fallback
    }

    if (!blog) {
      blog = localStore.getBlogs().find((b) => b.id === id);
    }

    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    console.error("Admin blog fetch error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/admin/blogs/[id]
 */
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const contentType = request.headers.get("content-type") || "";

    let updateData: any = {};

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      if (formData.has("title")) updateData.title = String(formData.get("title")).trim();
      if (formData.has("slug")) updateData.slug = String(formData.get("slug")).trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
      if (formData.has("category")) updateData.category = String(formData.get("category")).trim();
      if (formData.has("excerpt")) updateData.excerpt = String(formData.get("excerpt")).trim();
      if (formData.has("content")) updateData.content = String(formData.get("content")).trim();
      if (formData.has("author")) updateData.author = String(formData.get("author")).trim();
      if (formData.has("authorRole")) updateData.authorRole = String(formData.get("authorRole")).trim();
      if (formData.has("isPublished")) updateData.isPublished = formData.get("isPublished") === "true";

      const file = formData.get("coverImage");
      if (file instanceof File && file.size > 0) {
        updateData.coverImageUrl = await saveUploadedFile(file, "blogs");
      } else if (formData.has("coverImageUrl")) {
        updateData.coverImageUrl = String(formData.get("coverImageUrl")).trim();
      }
    } else {
      updateData = await request.json();
    }

    // Always update localStore immediately
    const updatedLocal = localStore.updateBlog(id, updateData);

    let updatedPrisma: any = null;
    try {
      updatedPrisma = await prisma.blog.update({
        where: { id },
        data: updateData,
      });
    } catch {
      // Prisma offline fallback
    }

    const finalBlog = updatedLocal || updatedPrisma;
    if (!finalBlog) {
      return NextResponse.json(
        { success: false, error: "Blog article not found" },
        { status: 404 }
      );
    }

    // Invalidate Redis cache
    await cacheDelete("blogs:published::").catch(() => {});
    if (finalBlog.slug) {
      await cacheDelete(`blog:detail:${finalBlog.slug}`).catch(() => {});
    }

    return NextResponse.json({
      success: true,
      message: "Blog article updated successfully",
      blog: finalBlog,
    });
  } catch (error: any) {
    console.error("Admin update blog error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update blog article" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/admin/blogs/[id]
 */
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Remove from localStore immediately
    const deletedLocal = localStore.deleteBlog(id);

    try {
      await prisma.blog.delete({
        where: { id },
      });
    } catch {
      // Offline fallback
    }

    // Invalidate cache
    await cacheDelete("blogs:published::").catch(() => {});

    return NextResponse.json({
      success: true,
      message: "Blog article deleted successfully",
      deleted: deletedLocal,
    });
  } catch (error) {
    console.error("Admin delete blog error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete blog article" },
      { status: 500 }
    );
  }
}
