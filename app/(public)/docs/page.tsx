"use client";

import { useState } from "react";
import Sidebar from "@/components/docs/sidebar";

export default function Page() {
  const [active, setActive] = useState("intro");

  return (
    <div className="flex">
      <Sidebar active={active} setActive={setActive} />

      <div className="flex-1 p-10 text-white">
        Page active : {active}
      </div>
    </div>
  );
}