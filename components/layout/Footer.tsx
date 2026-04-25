import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-[#FFD700]/20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#FFD700' }}>Netero</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Des boilerplates Next.js prêts à l'emploi pour démarrer vos projets plus vite.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Produit</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/#templates" className="hover:text-[#FFD700]">Templates</Link></li>
              <li><Link href="/#pricing" className="hover:text-[#FFD700]">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Ressources</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/docs" className="hover:text-[#FFD700]">Documentation</Link></li>
              <li><Link href="/support" className="hover:text-[#FFD700]">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Légal</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/privacy" className="hover:text-[#FFD700]">Confidentialité</Link></li>
              <li><Link href="/terms" className="hover:text-[#FFD700]">Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#FFD700]/20 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Netero. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}