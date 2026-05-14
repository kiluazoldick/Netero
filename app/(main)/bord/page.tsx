import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Realisation from '@/components/layout/realisation'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset } from '@/components/ui/sidebar'
import { Star } from 'lucide-react'
import Link from 'next/link'

export default async function DashboardsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const { data: subscription } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', user.id)
    .eq('status', 'paid')
    .maybeSingle()

  const isPremium = subscription?.status === "paid"
  const username = profile?.full_name || user.email

  return (
    <div>
      <AppSidebar user={user} isPremium={isPremium} />

      <SidebarInset>
        <header className="flex items-center justify-between px-6 py-2 bg-white dark:bg-gray-900 border-b">
          <h1 className="text-lg font-bold">Dashboard</h1>
        </header>

        <main className="p-6 flex-1">
          <div className="relative rounded-2xl px-9 py-8 flex justify-between"
            style={{ background: "linear-gradient(135deg, #e8e4ff, #fde8f5)" }}
          >
            {isPremium && (
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-yellow-400 text-yellow-900 text-xs px-3 py-1 rounded-full">
                <Star size={12} fill="currentColor" />
                Premium
              </div>
            )}

            <div>
              <h2 className="text-2xl font-bold mb-2">
                Bonjour, {username.split(" ")[0]} 👋
              </h2>

              <p className="text-sm mb-5">
                {isPremium
                  ? "🎉 Vous avez accès à tous les templates"
                  : "⭐ Passez premium pour accéder aux templates"}
              </p>

              <div className="flex gap-3">
                <Link href="/bord/pricing" className="bg-#fffff border border-violet-600 px-5 py-2 rounded-xl">
                  + Télécharger
                </Link>
                <Link href="/bord/templates" className="border border-violet-600 px-5 py-2 rounded-xl">
                  Explorer
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <Realisation />
          </div>

        </main>
      </SidebarInset>
    </div>
  )
}