import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Backwards-compatible circuit breaker stubs (will never block live database operations)
export function markDbOffline(_durationMs = 0) {
  // Safe no-op in production: do not lock out live MySQL operations
}

export function resetDbCircuit() {
  // Safe no-op
}

export function isDbCircuitBroken(): boolean {
  // Always allow live database traffic
  return false;
}

export function checkDbPort(_host = '127.0.0.1', _port = 3306, _timeoutMs = 1000): Promise<boolean> {
  return Promise.resolve(true);
}

function createPrismaClient(): PrismaClient {
  let connectionString = process.env.DATABASE_URL || 'mysql://root:password@localhost:3306/itlc_db';
  try {
    const url = new URL(connectionString);
    if (!url.searchParams.has('connectTimeout')) {
      url.searchParams.set('connectTimeout', '5000');
    }
    if (!url.searchParams.has('acquireTimeout')) {
      url.searchParams.set('acquireTimeout', '5000');
    }
    if (!url.searchParams.has('connectionLimit')) {
      url.searchParams.set('connectionLimit', '8');
    }
    connectionString = url.toString();
  } catch {}

  const adapter = new PrismaMariaDb(connectionString);
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

// Always persist instance in globalThis to prevent multiple connection pools
globalForPrisma.prisma = prisma;

export default prisma;
