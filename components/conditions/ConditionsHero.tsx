export default function ConditionsHero() {
  return (
    <div className="mb-12">
      {/* Badge */}
      <span className="inline-block  bg-white dark:bg-black text-[#FFD700] text-3xl px-4 py-1.5 rounded-full mb-6">
        Conditions d'utilisation
      </span>

      {/* Titre */}
      <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
        Règles d'utilisation de Netero
      </h1>

      {/* Date */}
      <p className="text-zinc-500 text-sm">
        Dernière mise à jour : 1er mai 2025
      </p>
    </div>
  );
}