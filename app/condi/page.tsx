"use client";

import { useState } from "react";
import ConditionsHero from "@/components/conditions/ConditionsHero";
import ConditionsSidebar from "@/components/conditions/ConditionsSidebar";
import ConditionsContent from "@/components/conditions/ConditionsContent";

export default function ConditionsPage() {
  const [active, setActive] = useState("acceptation");

  return (
    <main className="min-h-screen bg-white dark:bg-black py-20 px-6 max-w-5xl mx-auto">
      <ConditionsHero />
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10">
        <ConditionsSidebar active={active} onSelect={setActive} />
        <ConditionsContent active={active} />
      </div>
    </main>
  );
}