'use client'

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { PricingSection } from "@/components/landing/PricingSection"
import { AppSidebar } from "@/components/app-sidebar"

export default function PricingPage() {
  const [user, setUser] = useState<any>(null)
  const [subscription, setSubscription] = useState<any>(null)  
  const [loading, setLoading] = useState(true)

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
       setLoading(false) 
    }

    load()
  }, [])

    if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>
  }
  const isPremium = user ? subscription?.status === "paid" : false

  return (
    <div className="flex-1">
      <AppSidebar user={user} isPremium={isPremium} />

      <main className="flex-1 flex items-center justify-center min-h-screen">
        <PricingSection />
      </main>
    </div>
  )
}