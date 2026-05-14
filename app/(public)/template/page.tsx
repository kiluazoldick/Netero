"use client";

import Link from "next/link";
import { templates } from "./data";
import { useState } from "react";
import { Funnel } from 'lucide-react';

const categories = [
  "Tous",
  "E-commerce",
  "Marketing Digital",
  "Automatisation",
  "Développement",
  "Web Design",
  "IA",
];

function useIsLoggedIn() {
  return false;
}

export default function TemplateCard() {
  const isLoggedIn = useIsLoggedIn();
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered = activeFilter === "Tous"
    ? templates
    : templates.filter((t) => t.category === activeFilter);

  return (
    <section className="py-20 bg-white dark:bg-black overflow-x-hidden px-10">
      <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-black dark:text-white py-5">
        Templates disponibles
      </h2>

      <p className="text-zinc-400  text-xl">
        Démarrez votre prochain projet en quelques secondes.
      </p>
      </div>
      
      {/* Barre de filtres */}
      <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">

         <Funnel className="dark:text-white" />
        

        {/* Boutons catégories */}
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${activeFilter === cat
                ? "bg-[#FFD700] text-zinc-900 border border-[#FFD700]"
                : "bg-transparent text-black dark:text-white border border-zinc-600 hover:border-[#FFD700] hover:text-[#FFD700]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille filtrée */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((template) => (
          <div
            key={template.slug}
            className={`group flex flex-col   rounded-2xl 
              transition-all duration-300
              hover:shadow-[0_0_24px_rgba(255,215,0,0.15)]
              ${
                template.popular
                  ? "border-2 border-[#FFD700]"
                  : "border-2 border-[#FFD700]"
              }`}
          >
            {/* Image */}
            <div className="px-3 pt-3">
              <div
                className="relative w-full overflow-hidden bg-zinc-800 rounded-2xl"
                style={{ height: "192px" }}
              >
                <img
                  src={template.image}
                  alt={template.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
                {template.popular && (
                  <span className="absolute top-3 right-3 bg-[#FFD700] text-yellow-900 text-xs font-semibold px-3 py-1 rounded-lg">
                    Populaire
                  </span>
                )}
              </div>
            </div>

            {/* Contenu */}
            <div className="flex flex-col flex-1 px-5 py-4 gap-3">
              <h3 className="font-bold text-lg dark:text-white px-3">{template.name}</h3>

              <p className="text-sm text-zinc-400 leading-relaxed flex-1 px-3">
                {template.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 px-3">
                {template.tags.map((tag, index) => (
                  <span key={index} className="text-xs text-[#FFD700]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Boutons */}
              <div className="flex gap-3 pt-1 pb-1 mt-auto">
                <Link
                  href={template.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border rounded-xl py-2.5 text-sm  border-[#FFD700] text-[#FFD700] transition duration-200"
                >
                  👁 Preview
                </Link>

                <Link
                  href={isLoggedIn ? "/pricing" : "/login"}
                  className="flex-1 bg-[#FFD700] rounded-xl py-2.5 text-center text-sm font-bold text-black text-zinc-900 hover:bg-yellow-300 transition duration-200"
                >
                  Obtenir le code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message si aucun résultat */}
      {filtered.length === 0 && (
        <p className="text-center text-zinc-500 mt-20">
          Aucun template dans cette catégorie.
        </p>
      )}
    </section>
  );
}