import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // ✅ getUser() au lieu de getSession() — vérifie le token côté serveur
  const { data: { user } } = await supabase.auth.getUser()

  // 🔒 Utilisateur NON connecté qui tente d'accéder au dashboard
  if (!user && request.nextUrl.pathname.startsWith('/bord')) {
    const url = request.nextUrl.clone()
    url.pathname = '/auth/register'
    return NextResponse.redirect(url)
  }

  // ✅ Utilisateur CONNECTÉ qui tente d'accéder aux pages auth
  if (
    user &&
    (request.nextUrl.pathname.startsWith('/auth/login') ||
      request.nextUrl.pathname.startsWith('/auth/register'))
  ) {
    const url = request.nextUrl.clone()
    url.pathname = '/bord'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}