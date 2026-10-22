import SupportHero from "@/components/support/SupportHero";
import SupportCards from "@/components/support/SupportCards";
import SupportFAQ from "@/components/support/SupportFAQ";
import SupportContact from "@/components/support/SupportContact";

export default function SupportPage() {
  return (
    <main className="min-h-screen  bg-white dark:bg-black py-20 px-6 max-w-5xl mx-auto">
      <SupportHero />
      <SupportCards />
      <SupportFAQ />
      <SupportContact />
    </main>
  );
}