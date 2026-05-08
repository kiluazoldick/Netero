import Link from "next/link";

export default function PrivacyCTA() {
  return (
    <div className="bg-white dark:bg-black rounded-2xl p-8 text-center">
      {/* Titre */}
      <h2 className="text-black dark:text-white font-semibold text-lg mb-3">
        Questions sur notre politique de confidentialité ?
      </h2>

      {/* Texte */}
      <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-md mx-auto">
        Si vous avez des questions concernant cette politique de confidentialité
        ou sur la manière dont nous traitons vos données, n'hésitez pas à nous contacter.
      </p>

      {/* contact */}
      <p
        className="inline-block bg-[#FFD700] text-zinc-900 text-sm font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition duration-200">
          zoldickentreprisecontact@gmail.com
      </p>
    </div>
  );
}