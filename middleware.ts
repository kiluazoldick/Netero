import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    '/bord/:path*',      // toutes les pages du dashboard
    '/auth/:path*',      // login + register
  ],
}