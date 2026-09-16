import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cacheDelete } from "@/lib/redis";
import { saveUploadedFile } from "@/lib/upload";
import { localStore } from "@/lib/local-store";

/**
 * GET /api/admin/blogs
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim() || "";
  const category = searchParams.get("category")?.trim() || "";

  // Fast DB check with 400ms timeout
  try {
    const where: any = {};
    if (category && category !== "ALL") {
      where.category = category;
    }
    if (q) {
      where.OR = [
        { title: { contains: q } },
        { excerpt: { contains: q } },
        { author: { contains: q } },
      ];
    }

    const dbPromise = prisma.blog.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    const timeoutPromise = new Promise<null>((_, reject) =>
      setTimeout(() => reject(new Error("DB_TIMEOUT")), 400)
    );

    const blogs = await Promise.race([dbPromise, timeoutPromise]);
    if (blogs && blogs.length > 0) {
      return NextResponse.json({ success: true, blogs });
    }
  } catch {
    // Database offline or timed out
  }

  // Instant fallback from localStore (0ms)
  const blogs = localStore.getBlogs(category, q);
  return NextResponse.json({ success: true, blogs });
}

/**
 * POST /api/admin/blogs
 */
export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let data: any = {};
    let coverImageUrl = "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      data = {
        title: String(formData.get("title") || "").trim(),
        slug: String(formData.get("slug") || "").trim().toLowerCase(),
        category: String(formData.get("category") || "Technology").trim(),
        excerpt: String(formData.get("excerpt") || "").trim(),
        content: String(formData.get("content") || "").trim(),
        author: String(formData.get("author") || "ITLC Editorial Team").trim(),
        authorRole: String(formData.get("authorRole") || "Technical Lead").trim(),
        isPublished: formData.get("isPublished") === "true",
      };

      const file = formData.get("coverImage");
      if (file instanceof File && file.size > 0) {
        coverImageUrl = await saveUploadedFile(file, "blogs");
      } else {
        coverImageUrl = String(formData.get("coverImageUrl") || "").trim();
      }
    } else {
      data = await request.json();
      coverImageUrl = data.coverImageUrl || "";
    }

    if (!data.title || !data.content) {
      return NextResponse.json(
        { success: false, error: "Title and content are required." },
        { status: 400 }
      );
    }

    const cleanSlug =
      data.slug?.replace(/[^a-z0-9]+/g, "-") ||
      data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 60);

    const newBlog = localStore.addBlog({
      title: data.title,
      slug: cleanSlug,
      category: data.category || "AI & Automation",
      excerpt: data.excerpt || "Enterprise IT & Technology article from ITLC India.",
      content: data.content,
      coverImageUrl: coverImageUrl || "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      author: data.author || "ITLC Editorial Team",
      authorRole: data.authorRole || "Technical Lead",
      isPublished: Boolean(data.isPublished),
      publishedAt: new Date().toISOString(),
    });

    try {
      await prisma.blog.create({
        data: {
          title: data.title,
          slug: cleanSlug,
          category: data.category,
          excerpt: data.excerpt || null,
          content: data.content,
          coverImageUrl: coverImageUrl || "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
          author: data.author || "ITLC Editorial Team",
          authorRole: data.authorRole || "Technical Lead",
          isPublished: Boolean(data.isPublished),
          publishedAt: new Date(),
        },
      });
    } catch {
      // Offline fallback
    }

    // Invalidate public blog cache
    await cacheDelete("blogs:published::");
    await cacheDelete(`blog:detail:${cleanSlug}`);

    return NextResponse.json({
      success: true,
      message: "Blog article published successfully",
      blog: newBlog,
    });
  } catch (error: any) {
    console.error("Admin create blog error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create blog article" },
      { status: 500 }
    );
  }
}
