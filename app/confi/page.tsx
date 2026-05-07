"use client";

import { useState } from "react";
import PrivacyHero from "@/components/confidentialite/PrivacyHero";
import PrivacySidebar from "@/components/confidentialite/PrivacySidebar";
import PrivacyContent from "@/components/confidentialite/PrivacyContent";

export default function ConfidentialitePage() {
  const [active, setActive] = useState("collecte");

  return (
    <main className="min-h-screen bg-white dark:bg-black py-20 px-6 max-w-5xl mx-auto">
      <PrivacyHero />
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10">
        <PrivacySidebar active={active} onSelect={setActive} />
        <PrivacyContent active={active} />
      </div>
    </main>
  );
}