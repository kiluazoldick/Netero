import {Shield} from 'lucide-react'

export default function PrivacyHero() {
  return (
    <div className="text-center mb-12">
      {/* Icône */}
      <div className="flex justify-center mb-6">
        <div className="w-14 h-14 rounded-full bg-yellow-100 border flex items-center justify-center text-2xl">
          <Shield className=' w-10 h-10 text-yellow-800 '/>
        </div>
      </div>

      {/* Titre */}
      <h1 className="text-4xl font-bold text-black dark:text-white mb-3">
        Politique de Confidentialité
      </h1>

      {/* Date */}
      <p className="text-zinc-500 text-sm mb-8">
        Dernière mise à jour : 07/05/2026
      </p>

      {/* Introduction */}
      <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl mx-auto">
        Chez Netero, nous accordons une grande importance à la protection de vos données
        personnelles. Cette politique de confidentialité explique comment nous collectons,
        utilisons, protégeons et partageons vos informations personnelles lorsque vous
        utilisez nos services.
      </p>
    </div>
  );
}