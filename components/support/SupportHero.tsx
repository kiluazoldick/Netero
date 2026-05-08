"use client";

import { useState } from "react";

const allQuestions = [
  "Comment télécharger un template après achat ?",
  "Le paiement est-il vraiment unique ?",
  "Comment configurer Supabase avec mon template ?",
  "La commande npx netero ne fonctionne pas.",
  "Comment déployer mon template sur Vercel ?",
  "Comment obtenir un remboursement ?",
  "Comment mettre à jour mon template ?",
  "Comment contacter le support ?",
];

export default function SupportHero() {
  const [search, setSearch] = useState("");

  const suggestions = allQuestions.filter((q) =>
    q.toLowerCase().includes(search.toLowerCase())
  );

  const showSuggestions = search.length > 0;

  return (
    <div className="text-center mb-16 ">
      {/* Badge */}
      <span className="inline-block   text-[#FFD700] text-3xl px-4 py-1.5 mb-6 bg-white dark:bg-black">
        Support Netero
      </span>

      {/* Titre */}
      <h1 className="text-4xl font-bold dark:text-white mb-4">
        Comment pouvons-nous vous aider ?
      </h1>

      {/* Sous-titre */}
      <p className="text-zinc-400 text-lg mb-8">
        Trouvez des réponses rapides ou contactez notre équipe.
      </p>

      {/* Barre de recherche */}
      <div className="relative max-w-xl mx-auto">
        <div className={`flex items-center bg-white dark:bg-black gap-3 border px-5 py-3.5 
          ${showSuggestions ? "border-[#FFD700] rounded-t-xl" : "rounded-xl hover:border-[#FFD700]"}`}
        >
          <svg
            className="w-4 h-4 text-zinc-500 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher une question..."
            className="bg-transparent outline-none text-sm  placeholder:text-zinc-500 w-full"
          />

          {/* Bouton effacer */}
          {search.length > 0 && (
            <button
              onClick={() => setSearch("")}
              className="text-zinc-500 hover:text-white text-lg transition"
            >
              ✕
            </button>
          )}
        </div>

        {/* Suggestions */}
        {showSuggestions && (
          <div className="absolute w-full bg-white dark:bg-black border border-t-0 border-[#FFD700] rounded-b-xl overflow-hidden z-10">
            {suggestions.length > 0 ? (
              suggestions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => setSearch(q)}
                  className="w-full flex items-center gap-3 px-5 py-3 text-left text-sm text-zinc-300 hover:bg-zinc-800 hover:text-[#FFD700] transition duration-150 border-t border-zinc-800"
                >
                  <svg
                    className="w-3.5 h-3.5 text-zinc-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                    />
                  </svg>
                  {q}
                </button>
              ))
            ) : (
              <div className="px-5 py-4 text-sm text-zinc-500 text-left">
                Aucune question trouvée pour &quot;{search}&quot;
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}