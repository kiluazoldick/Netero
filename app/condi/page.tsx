import ConditionsHero from "@/components/conditions/ConditionsHero";
import ConditionsContent from "@/components/conditions/ConditionsContent";
import ConditionsCTA from "@/components/conditions/ConditionsCTA";

export default function ConditionsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black py-20 px-6 max-w-3xl mx-auto">
      <ConditionsHero />
      <ConditionsContent />
      <ConditionsCTA />
    </main>
  );
}