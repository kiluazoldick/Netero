
import {Database,ShieldCheck,Blend,Gavel,Cookie,Settings} from 'lucide-react'

const sections = [
  {
    icon:<Database />,
    title: "Collecte des données",
    content: "Nous collectons uniquement les informations nécessaires à la fourniture de nos services : nom, email, téléphone, et informations relatives à votre projet. Ces données sont collectées avec votre consentement explicite lors de l'utilisation de nos formulaires de contact ou de demande de devis.",
    tags: ["Email", "Nom", "Paiement"],
    highlight: null,
  },
  {
    icon: <Settings />,
    title: "Utilisation des données",
    content: "Vos données personnelles sont utilisées exclusivement pour vous contacter, traiter vos demandes, vous fournir nos services et améliorer votre expérience utilisateur. Nous ne vendons ni ne louons vos informations à des tiers.",
    tags: [],
    highlight: "Nous ne vendons jamais vos données à des tiers.",
  },
  {
    icon: <ShieldCheck />,
    title: "Protection des données",
    content: "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Nos serveurs sont sécurisés et nos communications sont chiffrées.",
    tags: [],
    highlight: null,
  },
  {
    icon: <Blend />,
    title: "Partage des données",
    content: "Nous ne partageons vos données qu'avec des prestataires de services de confiance qui nous aident à exploiter notre site web et à mener nos activités, à condition que ces parties acceptent de garder ces informations confidentielles.",
    tags: ["Stripe", "Supabase"],
    highlight: null,
  },
  {
    icon:  <Gavel />,
    title: "Vos droits",
    content: "Vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles. Vous pouvez également vous opposer au traitement de vos données ou demander la limitation de ce traitement.",
    tags: [],
    highlight: "Vous avez le droit de supprimer votre compte et toutes vos données à tout moment.",
  },
  {
    icon: <Cookie />,
    title: "Cookies",
    content: "Notre site utilise des cookies pour améliorer votre expérience de navigation. Ces cookies nous aident à comprendre comment vous utilisez notre site et à personnaliser votre expérience. Vous pouvez configurer votre navigateur pour refuser les cookies.",
    tags: ["Essentiels", "Analytiques"],
    highlight: null,
  },
];

export default function PrivacyContent() {
  return (
    <div className="flex flex-col gap-4 mb-12">
      {sections.map((section, index) => (
        <div
          key={index}
          className="bg-white dark:bg-black border  rounded-2xl p-6 hover:border-[#FFD700] "
        >
          <div className="flex items-center gap-3 mb-3">
            {/* Icône */}
            <div className="w-10 h-10 rounded-xl  bg-yellow-100  border text-yellow-800 flex items-center justify-center text-lg shrink-0">
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
            <div className="mt-3 bg-white  dark:bg-black rounded-xl px-4 py-3">
              <p className="text-yellow-600 text-sm">{section.highlight}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}