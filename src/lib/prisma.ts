import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Smart database configuration check
export function isDatabaseConfigured(): boolean {
  const url = process.env.DATABASE_URL;
  if (!url) return false;
  // If still dummy localhost root:password, mark unconfigured so requests don't hang
  if (url.includes('root:password@localhost') || url.includes('/itlc_db')) {
    return false;
  }
  return true;
}

let dbOfflineUntil = 0;

export function markDbOffline(durationMs = 30000) {
  dbOfflineUntil = Date.now() + durationMs;
}

export function resetDbCircuit() {
  dbOfflineUntil = 0;
}

export function isDbCircuitBroken(): boolean {
  // If database is unconfigured, instantly break circuit so all routes respond in 0ms!
  if (!isDatabaseConfigured()) return true;
  return Date.now() < dbOfflineUntil;
}

export function checkDbPort(_host = '127.0.0.1', _port = 3306, _timeoutMs = 1000): Promise<boolean> {
  return Promise.resolve(!isDbCircuitBroken());
}

function createPrismaClient(): PrismaClient {
  let connectionString = process.env.DATABASE_URL || 'mysql://root:password@localhost:3306/itlc_db';
  try {
    const url = new URL(connectionString);
    if (!url.searchParams.has('connectTimeout')) {
      url.searchParams.set('connectTimeout', '2000');
    }
    if (!url.searchParams.has('acquireTimeout')) {
      url.searchParams.set('acquireTimeout', '2000');
    }
    if (!url.searchParams.has('connectionLimit')) {
      url.searchParams.set('connectionLimit', '5');
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
