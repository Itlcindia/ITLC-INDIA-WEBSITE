import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cacheGet, cacheSet } from "@/lib/redis";
import { localStore } from "@/lib/local-store";

export async function GET() {
  try {
    const cacheKey = "products:live";
    const cached = await cacheGet<any[]>(cacheKey).catch(() => null);
    if (cached && Array.isArray(cached) && cached.length > 0) {
      return NextResponse.json({ success: true, products: cached, source: "cache" });
    }

    const products = await prisma.product.findMany({
      where: { isLive: true },
      orderBy: { sortOrder: "asc" },
    });

    if (products && products.length > 0) {
      await cacheSet(cacheKey, products, 600).catch(() => {});
      return NextResponse.json({ success: true, products, source: "database" });
    }
  } catch (error) {
    console.warn("Notice: Public products query failed, using localStore fallback:", error);
  }

  // Instant response from localStore if database is empty
  const localProducts = localStore.getProducts().filter(p => p.isLive);
  return NextResponse.json({ success: true, products: localProducts, source: "localStore" });
}
