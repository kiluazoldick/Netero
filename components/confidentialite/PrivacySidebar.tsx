"use client";

const sections = [
  { id: "collecte", label: "Collecte des données" },
  { id: "utilisation", label: "Utilisation des données" },
  { id: "Sécurité", label: "Stockage et Sécurité des Données" },
   { id: "partage", label: "Partage" },
  { id: "cookies", label: "Cookies" },
  { id: "droits", label: "Vos droits" },
  { id: "contact", label: "Contact" },
];

interface Props {
  active: string;
  onSelect: (id: string) => void;
}

export default function PrivacySidebar({ active, onSelect }: Props) {
  return (
    <div className="flex flex-col gap-1 sticky top-8">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSelect(section.id)}
          className={` text-black text-left text-sm px-3 py-2 rounded-lg border-l-2 transition duration-200
            ${active === section.id
              ? "text-[#FFD700] border-l-[#FFD700] bg-[#FFD700]"
              : "text-zinc-500 border-l-transparent hover:text-zinc-300"
            }`}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
}