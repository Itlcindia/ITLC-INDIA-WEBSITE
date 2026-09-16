import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import net from 'net';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Database Circuit Breaker state
let dbOfflineUntil = 0;
let isDbPortOpenCached: boolean | null = null;
let lastDbPortCheckTime = 0;
const DB_PORT_CHECK_INTERVAL = 30000; // 30 seconds

export function markDbOffline(durationMs = 30000) {
  dbOfflineUntil = Date.now() + durationMs;
  isDbPortOpenCached = false;
  lastDbPortCheckTime = Date.now();
}

export function resetDbCircuit() {
  dbOfflineUntil = 0;
  isDbPortOpenCached = null;
  lastDbPortCheckTime = 0;
}

export function isDbCircuitBroken(): boolean {
  if (Date.now() < dbOfflineUntil) return true;
  if (isDbPortOpenCached === false && (Date.now() - lastDbPortCheckTime) < DB_PORT_CHECK_INTERVAL) {
    return true;
  }
  return false;
}

// Fast 50ms TCP port check to determine if local MySQL is actually alive
export function checkDbPort(host = '127.0.0.1', port = 3306, timeoutMs = 60): Promise<boolean> {
  const now = Date.now();
  if (isDbPortOpenCached !== null && (now - lastDbPortCheckTime) < DB_PORT_CHECK_INTERVAL) {
    return Promise.resolve(isDbPortOpenCached);
  }

  return new Promise<boolean>((resolve) => {
    let done = false;
    const socket = new net.Socket();

    const finish = (open: boolean) => {
      if (!done) {
        done = true;
        socket.destroy();
        isDbPortOpenCached = open;
        lastDbPortCheckTime = Date.now();
        if (!open) {
          markDbOffline(DB_PORT_CHECK_INTERVAL);
        }
        resolve(open);
      }
    };

    socket.setTimeout(timeoutMs);
    socket.once('connect', () => finish(true));
    socket.once('timeout', () => finish(false));
    socket.once('error', () => finish(false));
    socket.connect(port, host);
  });
}

function createPrismaClient(): PrismaClient {
  let connectionString = process.env.DATABASE_URL || 'mysql://root:password@localhost:3306/itlc_db';
  try {
    const url = new URL(connectionString);
    if (!url.searchParams.has('connectTimeout')) {
      url.searchParams.set('connectTimeout', '500');
    }
    if (!url.searchParams.has('acquireTimeout')) {
      url.searchParams.set('acquireTimeout', '500');
    }
    if (!url.searchParams.has('connectionLimit')) {
      url.searchParams.set('connectionLimit', '5');
    }
    connectionString = url.toString();
  } catch {}

  const adapter = new PrismaMariaDb(connectionString);
  const rawClient = new PrismaClient({
    adapter,
    log: ['error'],
  });

  // Wrap in a fail-fast Proxy so NO query hangs for 10 seconds across any API
  return new Proxy(rawClient, {
    get(target, prop, receiver) {
      const orig = Reflect.get(target, prop, receiver);
      if (
        typeof prop === 'string' &&
        !prop.startsWith('$') &&
        typeof orig === 'object' &&
        orig !== null
      ) {
        return new Proxy(orig, {
          get(modelTarget, modelProp, modelReceiver) {
            const method = Reflect.get(modelTarget, modelProp, modelReceiver);
            if (typeof method === 'function') {
              return async function(...args: any[]) {
                if (isDbCircuitBroken()) {
                  throw new Error('DATABASE_OFFLINE_CIRCUIT_BREAKER');
                }
                const queryPromise = method.apply(modelTarget, args);
                const timeoutPromise = new Promise((_, reject) =>
                  setTimeout(() => reject(new Error('DB_TIMEOUT')), 350)
                );
                try {
                  return await Promise.race([queryPromise, timeoutPromise]);
                } catch (err) {
                  markDbOffline();
                  throw err;
                }
              };
            }
            return method;
          }
        });
      }
      return orig;
    }
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
