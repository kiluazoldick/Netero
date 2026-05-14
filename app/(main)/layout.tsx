'use client'

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<any>(null)
  const [subscription, setSubscription] = useState<any>(null)

  const supabase = createClient()

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) return

      setUser(user)

      const { data: sub } = await supabase
        .from("subscriptions")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle()

      setSubscription(sub)
    }

    load()
  }, [])

  const isPremium = user ? subscription?.status === "paid" : false

  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">

        {/* ✅ ICI on passe les vraies données */}
        <AppSidebar user={user} isPremium={isPremium} />

        <main className="flex-1">
          <SidebarTrigger />
          {children}
        </main>

      </div>
    </SidebarProvider>
  )
}