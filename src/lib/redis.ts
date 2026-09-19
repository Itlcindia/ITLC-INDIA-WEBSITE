import Redis from 'ioredis';

// In-memory fallback map for offline / local environments where Redis is not active
const memoryCache = new Map<string, { value: string; expiry: number }>();
const memoryRateLimits = new Map<string, { count: number; expiresAt: number }>();

let redisClient: Redis | null = null;
let isRedisAvailable = false;

// Only initialize Redis if REDIS_URL is explicitly configured in environment
if (process.env.REDIS_URL && process.env.REDIS_URL.trim() !== "") {
  try {
    redisClient = new Redis(process.env.REDIS_URL, {
      lazyConnect: true,
      maxRetriesPerRequest: 1,
      connectTimeout: 2000,
      retryStrategy() {
        return null; // do not retry if failed
      },
    });

    redisClient.connect().then(() => {
      isRedisAvailable = true;
      console.log('[Redis] Connected to Redis cache service.');
    }).catch(() => {
      isRedisAvailable = false;
    });

    redisClient.on('error', () => {
      isRedisAvailable = false;
    });

    redisClient.on('connect', () => {
      isRedisAvailable = true;
    });
  } catch {
    isRedisAvailable = false;
  }
}

/**
 * Retrieve cached data from Redis (or in-memory fallback)
 */
export async function cacheGet<T>(key: string): Promise<T | null> {
  try {
    if (isRedisAvailable && redisClient) {
      const data = await redisClient.get(key);
      if (data) return JSON.parse(data) as T;
    }
  } catch {
    // Fall back to memory cache
  }

  const memory = memoryCache.get(key);
  if (memory) {
    if (Date.now() < memory.expiry) {
      try {
        return JSON.parse(memory.value) as T;
      } catch {
        return null;
      }
    } else {
      memoryCache.delete(key);
    }
  }

  return null;
}

/**
 * Store data in Redis (or in-memory fallback) with TTL in seconds
 */
export async function cacheSet<T>(key: string, value: T, ttlSeconds = 300): Promise<void> {
  const serialized = JSON.stringify(value);

  try {
    if (isRedisAvailable && redisClient) {
      await redisClient.setex(key, ttlSeconds, serialized);
      return;
    }
  } catch {
    // Fall back to memory
  }

  memoryCache.set(key, {
    value: serialized,
    expiry: Date.now() + ttlSeconds * 1000,
  });
}

/**
 * Invalidate / delete cache entry
 */
export async function cacheDelete(key: string): Promise<void> {
  try {
    if (isRedisAvailable && redisClient) {
      await redisClient.del(key);
    }
  } catch {
    // ignore
  }

  memoryCache.delete(key);
}

/**
 * Rate Limiter utility to prevent spam and brute-forcing (e.g. certificate lookups)
 * Returns { success: boolean, remaining: number, resetInSeconds: number }
 */
export async function rateLimit(
  identifier: string,
  maxRequests = 20,
  windowSeconds = 60
): Promise<{ success: boolean; remaining: number; resetInSeconds: number }> {
  const now = Date.now();
  const key = `ratelimit:${identifier}`;

  try {
    if (isRedisAvailable && redisClient) {
      const count = await redisClient.incr(key);
      if (count === 1) {
        await redisClient.expire(key, windowSeconds);
      }
      const ttl = await redisClient.ttl(key);
      return {
        success: count <= maxRequests,
        remaining: Math.max(0, maxRequests - count),
        resetInSeconds: ttl > 0 ? ttl : windowSeconds,
      };
    }
  } catch {
    // Fall back to in-memory rate limiting
  }

  const existing = memoryRateLimits.get(key);
  if (!existing || now > existing.expiresAt) {
    memoryRateLimits.set(key, {
      count: 1,
      expiresAt: now + windowSeconds * 1000,
    });
    return {
      success: true,
      remaining: maxRequests - 1,
      resetInSeconds: windowSeconds,
    };
  }

  existing.count += 1;
  const resetIn = Math.ceil((existing.expiresAt - now) / 1000);
  return {
    success: existing.count <= maxRequests,
    remaining: Math.max(0, maxRequests - existing.count),
    resetInSeconds: resetIn,
  };
}

export default redisClient;
