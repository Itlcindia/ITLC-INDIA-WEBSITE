import { NextResponse } from 'next/server.js';
import type { NextRequest } from 'next/server.js';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'itlc-secret-jwt-key-2026-production-ready';
const SECRET_KEY = new TextEncoder().encode(JWT_SECRET);
const AUTH_COOKIE_NAME = 'itlc_auth_token';

interface TokenPayload {
  id: string;
  email: string;
  name: string;
  role: 'SUPER_ADMIN' | 'STAFF' | 'STUDENT' | 'CLIENT';
}

async function verifyTokenInEdge(token: string): Promise<TokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY, {
      algorithms: ['HS256'],
    });
    return payload as unknown as TokenPayload;
  } catch {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  const user = token ? await verifyTokenInEdge(token) : null;

  // 1. If visiting /login or /admin/login while already authenticated, redirect to appropriate dashboard
  if ((pathname === '/login' || pathname === '/admin/login') && user) {
    if (user.role === 'SUPER_ADMIN' || user.role === 'STAFF') {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
    if (user.role === 'STUDENT') {
      return NextResponse.redirect(new URL('/student/dashboard', request.url));
    }
    if (user.role === 'CLIENT') {
      return NextResponse.redirect(new URL('/products', request.url));
    }
  }

  // 2. Protect Admin routes (/admin/* except /admin/login)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    if (!user) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (user.role !== 'SUPER_ADMIN' && user.role !== 'STAFF') {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('error', 'unauthorized');
      return NextResponse.redirect(loginUrl);
    }
  }

  // 3. Protect Student portal (/student/*)
  if (pathname.startsWith('/student')) {
    if (!user) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (user.role !== 'STUDENT' && user.role !== 'SUPER_ADMIN') {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('error', 'unauthorized');
      return NextResponse.redirect(loginUrl);
    }
  }

  // 4. Protect Client portal (/client/*)
  if (pathname.startsWith('/client')) {
    if (!user) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (user.role !== 'CLIENT' && user.role !== 'SUPER_ADMIN') {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('error', 'unauthorized');
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/student/:path*',
    '/client/:path*',
    '/login',
  ],
};
