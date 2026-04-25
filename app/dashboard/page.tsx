'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LogOut } from 'lucide-react'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [subscription, setSubscription] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
        return
      }
      setUser(user)

      // Récupérer le profil
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      setProfile(profile)

      // Récupérer la subscription
      const { data: subscription } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .single()
      setSubscription(subscription)
      setLoading(false)
    }

    getUser()
  }, [router, supabase])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>
  }

  if (!user) {
    return null
  }

  const isPremium = !!subscription

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <button 
            onClick={handleSignOut}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
          >
            <LogOut size={18} />
            Déconnexion
          </button>
        </div>

        <div className="grid gap-6">
          <div className="p-6 rounded-lg border border-[#FFD700]/30 bg-white dark:bg-black">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Bienvenue, {profile?.full_name || user.email}!
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {isPremium 
                ? "🎉 Vous avez l'accès premium à tous les templates !" 
                : "⭐ Pour accéder aux templates, souscrivez à l'offre unique à 100 000 XAF."
              }
            </p>
          </div>

          {!isPremium && (
            <div className="text-center">
              <Link href="/pricing">
                <button className="px-6 py-3 rounded-lg font-semibold text-lg" style={{ backgroundColor: '#FFD700', color: '#000000' }}>
                  Devenir premium - 100 000 XAF
                </button>
              </Link>
            </div>
          )}

          {isPremium && (
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Templates disponibles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <p className="text-gray-600 dark:text-gray-400">Liste des templates à venir...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}