import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cacheDelete } from "@/lib/redis";
import { localStore } from "@/lib/local-store";

/**
 * GET /api/admin/products
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim() || "";

  try {
    const where: any = {};
    if (q) {
      where.OR = [
        { name: { contains: q } },
        { category: { contains: q } },
        { tagline: { contains: q } },
      ];
    }

    const dbPromise = prisma.product.findMany({
      where,
      orderBy: { sortOrder: "asc" },
    });

    const timeoutPromise = new Promise<null>((_, reject) =>
      setTimeout(() => reject(new Error("DB_TIMEOUT")), 400)
    );

    const products = await Promise.race([dbPromise, timeoutPromise]);
    if (products && products.length > 0) {
      return NextResponse.json({ success: true, products });
    }
  } catch {
    // Database offline or timed out
  }

  // Instant response from localStore
  return NextResponse.json({ success: true, products: localStore.getProducts(q) });
}

/**
 * POST /api/admin/products
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.category) {
      return NextResponse.json(
        { success: false, error: "Product name and category are required." },
        { status: 400 }
      );
    }

    const slug =
      body.slug?.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-") ||
      body.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    // Features can be an array or string
    const features = Array.isArray(body.features)
      ? JSON.stringify(body.features)
      : typeof body.features === "string"
      ? body.features
      : JSON.stringify([]);

    // Add to localStore immediately
    const localProduct = localStore.addProduct({
      name: body.name.trim(),
      slug,
      category: body.category.trim(),
      tagline: body.tagline?.trim() || "",
      description: body.description?.trim() || "",
      icon: body.icon?.trim() || "Layers",
      features,
      directLoginUrl: body.directLoginUrl?.trim() || "/api/auth/login",
      externalWebsiteUrl: body.externalWebsiteUrl?.trim() || null,
      demoUrl: body.demoUrl?.trim() || "/contact",
      isLive: body.isLive !== false,
      sortOrder: Number(body.sortOrder) || 0,
    });

    // Try saving to database asynchronously
    try {
      await prisma.product.create({
        data: {
          name: body.name.trim(),
          slug,
          category: body.category.trim(),
          tagline: body.tagline?.trim() || "",
          description: body.description?.trim() || "",
          icon: body.icon?.trim() || "Layers",
          features,
          directLoginUrl: body.directLoginUrl?.trim() || "/api/auth/login",
          externalWebsiteUrl: body.externalWebsiteUrl?.trim() || null,
          demoUrl: body.demoUrl?.trim() || "/contact",
          isLive: body.isLive !== false,
          sortOrder: Number(body.sortOrder) || 0,
        },
      });
    } catch {
      // Offline DB fallback
    }

    // Invalidate public cache
    await cacheDelete("products:live").catch(() => {});

    return NextResponse.json({
      success: true,
      message: "Product created successfully",
      product: localProduct,
    });
  } catch (error: any) {
    console.error("Admin create product error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create product" },
      { status: 500 }
    );
  }
}
