const sections = [
  {
    id: "acceptation",
    title: "Acceptation des conditions",
    content: "En utilisant Netero, vous acceptez pleinement ces conditions d'utilisation. Si vous n'êtes pas d'accord avec l'une de ces conditions, veuillez ne pas utiliser nos services.",
    tags: [],
    highlight: null,
  },
  {
    id: "licence",
    title: "Licence d'utilisation",
    content: "Après achat, vous obtenez une licence personnelle et non-exclusive pour utiliser les templates dans vos projets personnels ou commerciaux.",
    tags: ["Personnelle", "Non-exclusive"],
    highlight: "La revente ou redistribution des templates est strictement interdite.",
  },
  {
    id: "paiement",
    title: "Paiement unique",
    content: "Le paiement est effectué une seule fois et vous donne accès à vie à tous les templates disponibles ainsi qu'aux futures mises à jour.",
    tags: ["Accès à vie", "Pas d'abonnement", "Mises à jour incluses"],
    highlight: null,
  },
  {
    id: "restrictions",
    title: "Restrictions",
    content: "Il vous est interdit de revendre, redistribuer, ou partager les templates Netero avec des tiers, que ce soit gratuitement ou contre rémunération.",
    tags: [],
    highlight: "Toute violation entraînera la résiliation immédiate de votre accès sans remboursement.",
  },
  {
    id: "resiliation",
    title: "Résiliation",
    content: "Netero se réserve le droit de résilier votre accès en cas de violation des présentes conditions. Vous pouvez également supprimer votre compte à tout moment.",
    tags: [],
    highlight: null,
  },
  {
    id: "contact",
    title: "Contact",
    content: "Pour toute question concernant ces conditions d'utilisation, contactez-nous à l'adresse suivante.",
    tags: [],
    highlight: "zoldickentreprisecontact@gmail.com",
  },
];

interface Props {
  active: string;
}

export default function ConditionsContent({ active }: Props) {
  const section = sections.find((s) => s.id === active);

  if (!section) return null;

  return (
    <div className="border-l-2 border-l-[#FFD700] pl-5 transition-all duration-300">
      {/* Titre */}
      <h2 className="text-black dark:text-white font-semibold text-base mb-3">
        {section.title}
      </h2>

      {/* Texte */}
      <p className="text-zinc-500 text-sm leading-relaxed">
        {section.content}
      </p>

      {/* Tags */}
      {section.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {section.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-[#FFD700] bg-white dark:bg-black  px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Highlight */}
      {section.highlight && (
        <div className="mt-3 bg-white dark:bg-black rounded-xl px-4 py-3">
          <p className="text-yellow-600 text-sm">{section.highlight}</p>
        </div>
      )}
    </div>
  );
}