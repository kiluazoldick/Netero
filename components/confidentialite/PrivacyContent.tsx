const sections = [
  {
    id: "collecte",
    title: "Collecte des données",
    content: "Nous collectons uniquement les données nécessaires au bon fonctionnement de Netero : nom, email, et informations de paiement.",
    tags: ["Email", "Nom", "Paiement"],
    highlight: null,
  },
  {
    id: "utilisation",
    title: "Utilisation des données",
    content: "Vos données servent uniquement à gérer votre compte, traiter vos paiements et vous envoyer des mises à jour importantes.",
    tags: [],
    highlight: "Nous ne vendons jamais vos données à des tiers.",
  },
  {
    id: "cookies",
    title: "Cookies",
    content: "Netero utilise des cookies et des technologies similaires pour améliorer votre expérience sur la plateforme. Un cookie est un petit fichier texte qui est stocké sur votre appareil lorsque vous visitez un site Web.Types de cookies que nous utilisons : - Cookies essentiels: Ces cookies sont nécessaires au fonctionnement de la plateforme. Ils vous permettent, par exemple, de vous connecter à votre compte et de naviguer entre les pages. - Cookies analytiques: Ces cookies nous aident à comprendre comment les utilisateurs interagissent avec notre site, ce qui nous permet d'améliorer la plateforme. - Cookies marketing: Nous utilisons ces cookies pour vous montrer des publicités pertinentes sur la plateforme et sur d'autres sites. Gestion des cookies : Vous pouvez configurer votre navigateur pour refuser certains cookies ou tous les cookies. Toutefois, si vous désactivez les cookies, certaines fonctionnalités de Netero peuvent être affectées. Pour en savoir plus sur la gestion des cookies, veuillez consulter les paramètres de votre navigateur.",
    tags: ["Essentiels", "Analytiques"],
    highlight: null,
  },
  {
    id: "partage",
    title: "Partage des données",
    content: "Vos données ne sont jamais vendues. Elles peuvent être partagées uniquement avec nos prestataires de paiement (Stripe) et d'authentification (Supabase).",
    tags: ["Stripe", "Supabase"],
    highlight: null,
  },
  {
    id: "droits",
    title: "Vos droits",
    content: "Vous pouvez à tout moment demander l'accès, la modification ou la suppression de vos données en nous contactant directement.",
    tags: [],
    highlight: "Vous avez le droit de supprimer votre compte et toutes vos données à tout moment.",
  },
  {
    id: "contact",
    title: "Contact",
    content: "Pour toute question concernant vos données personnelles, contactez-nous à l'adresse suivante.",
    tags: [],
    highlight: "zoldickentreprisecontact@gmail.com",
  },
  {
    id: "Sécurité",
    title: "Stockage et Sécurité des Données",
    content: "Nous prenons des mesures techniques et organisationnelles pour protéger vos données contre les accès non autorisés, la perte, la divulgation ou l'altération. Ces mesures incluent l'utilisation de cryptage SSL pour les transferts de données et le stockage sécurisé de vos informations.Vos informations sont stockées sur des serveurs sécurisés situés en France à Paris. Nous conservons vos données aussi longtemps que nécessaire pour vous fournir nos services, respecter nos obligations légales ou résoudre des litiges.",
    tags: [],
    highlight: "zoldickentreprisecontact@gmail.com",
  },
];

interface Props {
  active: string;
}

export default function PrivacyContent({ active }: Props) {
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
              className="text-xs text-[#FFD700] bg-white dark:bg-black px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Highlight */}
      {section.highlight && (
        <div className="mt-3 bg-white dark:bg-black  rounded-xl px-4 py-3">
          <p className="text-yellow-600 text-sm">{section.highlight}</p>
        </div>
      )}
    </div>
  );
}