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

    const blogs = await prisma.blog.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    if (blogs && blogs.length > 0) {
      return NextResponse.json({ success: true, blogs });
    }
  } catch (error) {
    console.warn("Prisma blog fetch failed, falling back to localStore:", error);
  }

  // Instant fallback from localStore if database is empty
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

    let savedBlog: any = null;

    // Primary: Save directly to MySQL database
    try {
      savedBlog = await prisma.blog.create({
        data: {
          title: data.title,
          slug: cleanSlug,
          category: data.category || "AI & Automation",
          excerpt: data.excerpt || null,
          content: data.content,
          coverImageUrl: coverImageUrl || "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
          author: data.author || "ITLC Editorial Team",
          authorRole: data.authorRole || "Technical Lead",
          isPublished: Boolean(data.isPublished),
          publishedAt: new Date(),
        },
      });
    } catch (dbError) {
      console.error("Prisma blog creation error:", dbError);
    }

    if (!savedBlog) {
      savedBlog = localStore.addBlog({
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
    } else {
      localStore.addBlog({
        id: savedBlog.id,
        title: savedBlog.title,
        slug: savedBlog.slug,
        category: savedBlog.category,
        excerpt: savedBlog.excerpt || "",
        content: savedBlog.content,
        coverImageUrl: savedBlog.coverImageUrl || "",
        author: savedBlog.author,
        authorRole: savedBlog.authorRole || "",
        isPublished: savedBlog.isPublished,
        publishedAt: savedBlog.publishedAt?.toISOString() || new Date().toISOString(),
      });
    }

    // Invalidate public blog cache so changes appear immediately
    await cacheDelete("blogs:published::").catch(() => {});
    await cacheDelete(`blog:detail:${cleanSlug}`).catch(() => {});

    return NextResponse.json({
      success: true,
      message: "Blog article published successfully",
      blog: savedBlog,
    });
  } catch (error: any) {
    console.error("Admin create blog error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create blog article" },
      { status: 500 }
    );
  }
}
