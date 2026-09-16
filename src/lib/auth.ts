import bcrypt from 'bcryptjs';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers.js';

const JWT_SECRET = process.env.JWT_SECRET || 'itlc-secret-jwt-key-2026-production-ready';
const SECRET_KEY = new TextEncoder().encode(JWT_SECRET);
export const AUTH_COOKIE_NAME = 'itlc_auth_token';

export type UserRole = 'SUPER_ADMIN' | 'STAFF' | 'STUDENT' | 'CLIENT';

export interface AuthUserPayload {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

/**
 * Hashes a plain password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

/**
 * Compares plain password with hashed password
 */
export async function verifyPassword(password: string, hashed: string): Promise<boolean> {
  return bcrypt.compare(password, hashed);
}

/**
 * Signs a JWT token with user payload (valid for 7 days)
 */
export async function signToken(payload: AuthUserPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(SECRET_KEY);
}

/**
 * Verifies a JWT token and returns the payload
 */
export async function verifyToken(token: string): Promise<AuthUserPayload | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY, {
      algorithms: ['HS256'],
    });
    return payload as unknown as AuthUserPayload;
  } catch {
    return null;
  }
}

/**
 * Get currently authenticated user from Next.js server cookies
 */
export async function getSessionUser(): Promise<AuthUserPayload | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
    if (!token) return null;
    return await verifyToken(token);
  } catch {
    return null;
  }
}
