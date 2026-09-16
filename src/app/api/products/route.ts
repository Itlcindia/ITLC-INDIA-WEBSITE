import { NextResponse } from "next/server";
import prisma, { isDbCircuitBroken, markDbOffline } from "@/lib/prisma";
import { cacheGet, cacheSet } from "@/lib/redis";
import { localStore } from "@/lib/local-store";

export async function GET() {
  // If database has recently failed, skip Prisma immediately (0ms)
  if (isDbCircuitBroken()) {
    const localProducts = localStore.getProducts().filter(p => p.isLive);
    return NextResponse.json({ success: true, products: localProducts, source: "localStore" });
  }

  try {
    const cacheKey = "products:live";
    const cached = await cacheGet<any[]>(cacheKey).catch(() => null);
    if (cached && Array.isArray(cached) && cached.length > 0) {
      return NextResponse.json({ success: true, products: cached, source: "cache" });
    }

    const dbPromise = prisma.product.findMany({
      where: { isLive: true },
      orderBy: { sortOrder: "asc" },
    }).catch(() => null);

    const timeoutPromise = new Promise<null>((_, reject) =>
      setTimeout(() => reject(new Error("DB_TIMEOUT")), 300)
    );

    const products = await Promise.race([dbPromise, timeoutPromise]);
    if (products && products.length > 0) {
      await cacheSet(cacheKey, products, 600).catch(() => {});
      return NextResponse.json({ success: true, products, source: "database" });
    } else {
      markDbOffline();
    }
  } catch {
    markDbOffline();
  }

  // Instant response from localStore
  const localProducts = localStore.getProducts().filter(p => p.isLive);
  return NextResponse.json({ success: true, products: localProducts, source: "localStore" });
}
