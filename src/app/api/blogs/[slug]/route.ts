import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cacheGet, cacheSet } from "@/lib/redis";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const cleanSlug = slug.trim().toLowerCase();

    const cacheKey = `blog:detail:${cleanSlug}`;
    const cached = await cacheGet<any>(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }

    const blog = await prisma.blog.findUnique({
      where: { slug: cleanSlug },
    });

    if (!blog || !blog.isPublished) {
      return NextResponse.json(
        { success: false, error: "Blog article not found" },
        { status: 404 }
      );
    }

    // Fetch related articles
    const related = await prisma.blog.findMany({
      where: {
        isPublished: true,
        slug: { not: cleanSlug },
        category: blog.category,
      },
      take: 3,
      orderBy: { publishedAt: "desc" },
    });

    const payload = {
      success: true,
      blog,
      related: related.length > 0 ? related : await prisma.blog.findMany({
        where: { isPublished: true, slug: { not: cleanSlug } },
        take: 3,
        orderBy: { publishedAt: "desc" },
      }),
    };

    // Cache in Redis for 10 minutes
    await cacheSet(cacheKey, payload, 600);

    return NextResponse.json(payload);
  } catch (error) {
    console.error("Single blog fetch error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load blog article" },
      { status: 500 }
    );
  }
}
