import {IdCard,BadgeCheck,Scale,Ban,TriangleAlert} from 'lucide-react'

const sections = [
  {
    icon: <BadgeCheck />,
    title: "Acceptation des conditions",
    content: "En utilisant Netero, vous acceptez pleinement ces conditions d'utilisation. Si vous n'êtes pas d'accord avec l'une de ces conditions, veuillez ne pas utiliser nos services.",
    tags: [],
    highlight: null,
  },
  {
    icon:  <Scale />,
    title: "Licence d'utilisation",
    content: "Après achat, vous obtenez une licence personnelle et non-exclusive pour utiliser les templates dans vos projets personnels ou commerciaux.",
    tags: ["Personnelle", "Non-exclusive"],
    highlight: "La revente ou redistribution des templates est strictement interdite.",
  },
  {
    icon: <IdCard />,
    title: "Paiement unique",
    content: "Le paiement est effectué une seule fois et vous donne accès à vie à tous les templates disponibles ainsi qu'aux futures mises à jour.",
    tags: ["Accès à vie", "Pas d'abonnement", "Mises à jour incluses"],
    highlight: null,
  },
  {
    icon:  <Ban />,
    title: "Restrictions",
    content: "Il vous est interdit de revendre, redistribuer, ou partager les templates Netero avec des tiers, que ce soit gratuitement ou contre rémunération.",
    tags: [],
    highlight: "Toute violation entraînera la résiliation immédiate de votre accès sans remboursement.",
  },
  {
    icon: <TriangleAlert />,
    title: "Résiliation",
    content: "Netero se réserve le droit de résilier votre accès en cas de violation des présentes conditions. Vous pouvez également supprimer votre compte à tout moment.",
    tags: [],
    highlight: null,
  },
  
];

export default function ConditionsContent() {
  return (
    <div className="flex flex-col gap-4 mb-12">
      {sections.map((section, index) => (
        <div
          key={index}
          className="bg-white dark:bg-black border  rounded-2xl p-6 hover:border-[#FFD700]"
        >
          <div className="flex items-center gap-3 mb-3">
            {/* Icône */}
            <div className="w-10 h-10 rounded-xl text-yellow-800 bg-yellow-100 border flex items-center justify-center text-lg shrink-0">
              {section.icon}
            </div>

            {/* Titre */}
            <h2 className="text-black dark:text-white font-semibold text-base">
              {section.title}
            </h2>
          </div>

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
                  className="text-xs text-[#FFD700] bg-white  dark:bg-black px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Highlight */}
          {section.highlight && (
            <div className="mt-3 bg-white  dark:bg-black  rounded-xl px-4 py-3">
              <p className="text-yellow-600 text-sm">{section.highlight}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}