'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Zap, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4" style={{ background: 'linear-gradient(to bottom right, #FFD700/5, transparent)' }}>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-2 mb-6" style={{ borderColor: '#FFD700', background: '#FFD700/10' }}>
            <Zap size={18} style={{ color: '#FFD700' }} />
            <span className="text-sm" style={{ color: '#FFD700' }}>Boilerplates nouvelle génération</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            Créez des apps{' '}
            <span style={{ color: '#FFD700' }} className="inline-block">
              plus rapidement
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Des templates Next.js prêts à l'emploi, avec paiement unique. Téléchargez, installez et commencez à coder en 30 secondes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/template">
              <button className="px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 group hover:opacity-90" style={{ backgroundColor: '#FFD700', color: '#000000' }}>
                Voir les templates
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/pricing">
              <button className="px-6 py-3 rounded-lg font-medium transition-all border hover:bg-[#FFD700]/10" style={{ borderColor: '#FFD700', color: '#FFD700' }}>
                Offre unique à 100 000 XAF
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}