export default function PrivacyHero() {
  return (
    <div className="mb-12">
      {/* Badge */}
      <span className="inline-block  bg-white dark:bg-black  text-[#FFD700] text-3xl px-4 py-1.5 rounded-full mb-6">
        Politique de confidentialité
      </span>

      {/* Titre */}
      <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
        Vos données, notre responsabilité
      </h1>
      <p className="py-5">Bienvenue sur Netero ! En utilisant nos services, vous acceptez d'être lié par les présentes conditions générales d'utilisation (les 'Conditions d'Utilisation' ou 'Contrat'). Veuillez les lire attentivement.</p>

      {/* Date */}
      <p className="text-zinc-500 text-sm">
        Dernière mise à jour : 1er mai 2025
      </p>
    </div>
  );
}