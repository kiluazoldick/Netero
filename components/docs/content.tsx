import Step from "./step";

export default function Content() {
  return (
    <main className="flex-1 p-10 overflow-y-auto">

      {/* Breadcrumb */}
      <p className="text-xs text-gray-500 mb-6">
        Docs <span className="text-[#FFD700]">/ Démarrage / Installation</span>
      </p>

      {/* Title */}
      <h1 className="text-2xl font-semibold mb-2">Installation</h1>
      <p className="text-gray-400 mb-8">
        Téléchargez et lancez votre template en 2 minutes.
      </p>

      {/* Callout */}
      <div className="bg-[#1a1600] border border-[#3a3000] text-yellow-400 p-4 rounded-lg mb-6">
        ⚠️ Node.js 18+ requis. Vérifiez avec <code>node -v</code>
      </div>

      {/* Steps */}
      <Step
        step="Étape 1"
        title="Télécharger le template"
        code={`npx netero download saas-starter`}
      />

      <Step
        step="Étape 2"
        title="Installer les dépendances"
        code={`cd saas-starter\nnpm install`}
      />

      <Step
        step="Étape 3"
        title="Lancer le projet"
        code={`npm run dev`}
      />

    </main>
  );
}