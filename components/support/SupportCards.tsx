import Link from "next/link";
import { LayoutTemplate, BadgeDollarSign,Cog } from 'lucide-react';

const cards = [
  {
    icon:  <LayoutTemplate className="text-[#FFD700]"/>,
    title: "Utiliser les templates",
    description: "Installation, configuration et personnalisation de vos templates.",
    link: "/docs/installation",
    label: "Voir les guides →",
  },
  {
    icon: <BadgeDollarSign className="text-[#FFD700]"/>,
    title: "Paiement & accès",
    description: "Questions sur l'achat, les remboursements et l'accès à vie.",
    link: "/docs/paiement",
    label: "En savoir plus →",
  },
  {
    icon: <Cog className="text-[#FFD700]"/>,
    title: "Problèmes techniques",
    description: "Erreurs d'installation, CLI, et bugs liés aux templates.",
    link: "/docs/cli",
    label: "Obtenir de l'aide →",
  },
];

export default function SupportCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
      {cards.map((card) => (
        <Link
          key={card.title}
          href={card.link}
          className="flex flex-col bg-white dark:bg-black border rounded-2xl p-6 hover:border-[#FFD700] "
        >
          {/* Icône */}
          <span className="text-2xl mb-4">{card.icon}</span>

          {/* Titre */}
          <h3 className="text-black dark:text-white font-semibold text-sm mb-2">
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-zinc-500 text-xs leading-relaxed flex-1">
            {card.description}
          </p>

          {/* Lien */}
          <span className="text-[#FFD700] text-xs mt-4 group-hover:underline">
            {card.label}
          </span>
        </Link>
      ))}
    </div>
  );
}