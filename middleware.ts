import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protected routes
  if (!session && (
    req.nextUrl.pathname.startsWith('/daily-challenge') ||
    req.nextUrl.pathname.startsWith('/culture-quest')
  )) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  // Redirect if logged in
  if (session && (
    req.nextUrl.pathname.startsWith('/auth/login') ||
    req.nextUrl.pathname.startsWith('/auth/signup')
  )) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return res
}

export const config = {
  matcher: ['/daily-challenge/:path*', '/culture-quest/:path*', '/auth/:path*'],
} 