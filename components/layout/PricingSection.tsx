'use client'

import Link from 'next/link'
import { Check, Crown } from 'lucide-react'

export function PricingSection() {
  const features = [
    'Accès à tous les templates',
    'Mises à jour à vie',
    'Support prioritaire',
    'CLI simple d\'utilisation',
    'Code source complet',
    'Documentation détaillée',
  ]

  return (
    <section id="pricing" className=" px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Un paiement unique
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Pas d'abonnement mensuel. Payez une fois, utilisez à vie.
          </p>
        </div>

        <div className="max-w-lg mx-auto py-4">
          <div className="border-2 rounded-lg relative overflow-hidden bg-white dark:bg-black" style={{ borderColor: '#FFD700' }}>
            <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-lg text-sm font-semibold" style={{ backgroundColor: '#FFD700', color: '#000000' }}>
              POPULAIRE
            </div>
            
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <Crown size={48} style={{ color: '#FFD700' }} />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2 text-gray-900 dark:text-white">Accès complet</h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                Débloquez tous les templates immédiatement
              </p>
              
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-gray-900 dark:text-white">1 000</span>
                <span className="text-xl text-gray-600 dark:text-gray-400"> XAF</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Paiement unique · TVA incluse</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Check size={18} style={{ color: '#FFD700' }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="#">
                <button className="cursor-pointer w-full py-3 rounded-lg font-semibold text-lg transition-all hover:opacity-90" style={{ backgroundColor: '#FFD700', color: '#000000' }}>
                  Devener Premium
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}