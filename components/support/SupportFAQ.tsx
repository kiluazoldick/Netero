"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Comment télécharger un template après achat ?",
    answer: "Après votre achat, connectez-vous à votre dashboard et utilisez la commande npx netero download <slug> pour télécharger votre template.",
  },
  {
    question: "Le paiement est-il vraiment unique ?",
    answer: "Oui, vous payez une seule fois et accédez à vie à tous les templates disponibles, y compris les futures mises à jour.",
  },
  {
    question: "Comment configurer Supabase avec mon template ?",
    answer: "Créez un projet sur supabase.com, copiez l'URL et la clé publique, puis collez-les dans votre fichier .env.local.",
  },
  {
    question: "La commande npx netero ne fonctionne pas.",
    answer: "Vérifiez que vous avez Node.js 18+ installé avec node -v. Si le problème persiste, contactez notre équipe sur Discord.",
  },
];

export default function SupportFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mb-16">
      {/* Titre section */}
      <h2 className="text-black dark:text-white font-semibold text-lg mb-6">
        Questions fréquentes
      </h2>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-black border  rounded-xl overflow-hidden  
              ${openIndex === index ? "border-[#FFD700]" : "border-zinc-800 hover:border-[#FFD700]"}`}
          >
            {/* Question */}
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <span className="text-sm text-black dark:text-white">{faq.question}</span>
              <span
                className={`text-zinc-500 text-lg transition-transform duration-200
                  ${openIndex === index ? "rotate-90 text-[#FFD700]" : ""}`}
              >
                ›
              </span>
            </button>

            {/* Réponse */}
            {openIndex === index && (
              <div className="px-5 pb-4">
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}