import PrivacyHero from "@/components/confidentialite/PrivacyHero";
import PrivacyContent from "@/components/confidentialite/PrivacyContent";
import PrivacyCTA from "@/components/confidentialite/PrivacyCTA";

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black py-20 px-6 max-w-3xl mx-auto">
      <PrivacyHero />
      <PrivacyContent />
      <PrivacyCTA />
    </main>
  );
}