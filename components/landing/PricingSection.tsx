'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, Crown, X, Loader2, AlertCircle } from 'lucide-react'
import { createClient } from '@/lib/supabase/client' // adapte ce chemin si besoin

type Status = 'idle' | 'loading' | 'error'

export function PricingSection() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  })

  const features = [
    "Accès à tous les templates",
    "Mises à jour à vie",
    "Support prioritaire",
    "CLI simple d'utilisation",
    "Code source complet",
    "Documentation détaillée",
  ]

  // 1. Vérifier si l'utilisateur est connecté avant d'ouvrir le modal
  const handleCommanderClick = async () => {
    const supabase = createClient()
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      // Pas connecté → redirection vers la page de connexion
      router.push('/auth/login')
      return
    }

    // Pré-remplir l'email depuis la session
    setForm((prev) => ({ ...prev, email: session.user.email ?? '' }))
    setShowModal(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!form.first_name || !form.last_name || !form.email || !form.phone) {
      setErrorMsg('Veuillez remplir tous les champs.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/chariow/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data?.checkout_url) {
        window.location.href = data.checkout_url
      } else {
        setErrorMsg(data?.message || 'Une erreur est survenue. Réessayez.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Erreur réseau. Vérifiez votre connexion.')
      setStatus('error')
    }
  }

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Un paiement unique
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Pas d'abonnement mensuel. Payez une fois, utilisez à vie.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div
            className="border-2 rounded-lg relative overflow-hidden bg-white dark:bg-black"
            style={{ borderColor: '#FFD700' }}
          >
            <div
              className="absolute top-0 right-0 px-4 py-1 rounded-bl-lg text-sm font-semibold"
              style={{ backgroundColor: '#FFD700', color: '#000000' }}
            >
              POPULAIRE
            </div>

            <div className="p-6">
              <div className="flex justify-center mb-4">
                <Crown size={48} style={{ color: '#FFD700' }} />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2 text-gray-900 dark:text-white">
                Accès complet
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                Débloquez tous les templates immédiatement
              </p>

              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-gray-900 dark:text-white">1 000</span>
                <span className="text-xl text-gray-600 dark:text-gray-400"> XAF</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Paiement unique · TVA incluse
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <Check size={18} style={{ color: '#FFD700' }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleCommanderClick}
                className="w-full py-3 rounded-lg font-semibold text-lg transition-all hover:opacity-90"
                style={{ backgroundColor: '#FFD700', color: '#000000' }}
              >
                Commander maintenant
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MODAL ── */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center px-4" style={{ zIndex: 50 }}>
          {/* Fond sombre */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          {/* Carte */}
          <div className="relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-zinc-700">

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <Crown size={28} style={{ color: '#FFD700' }} />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                  Finaliser la commande
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Accès complet · 1 000 XAF
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Prénom</label>
                  <input
                    type="text"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                    placeholder="Jean"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom</label>
                  <input
                    type="text"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                    placeholder="Dupont"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jean@exemple.com"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Téléphone</label>
                <div className="flex gap-2">
                  <div className="flex items-center px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-sm text-gray-500 whitespace-nowrap">
                    🇨🇲 +237
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="699 000 000"
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">Orange Money, MTN MoMo, Wave acceptés</p>
              </div>
            </div>

            {status === 'error' && (
              <div className="mt-3 flex items-center gap-2 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 rounded-lg px-3 py-2">
                <AlertCircle size={15} />
                {errorMsg}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === 'loading'}
              className="w-full mt-5 py-3 rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#FFD700', color: '#000000' }}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Traitement...
                </>
              ) : (
                'Payer 1 000 XAF'
              )}
            </button>

            <p className="text-center text-xs text-gray-400 mt-3">
              Paiement sécurisé via Chariow
            </p>
          </div>
        </div>
      )}
    </section>
  )
}