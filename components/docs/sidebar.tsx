"use client";

import { docs } from "@/app/docs/docsdb";

type Props = {
  active: string;
  setActive: (slug: string) => void;
};

export default function Sidebar({ active, setActive }: Props) {
  return (
    <aside className="w-[220px] bg-[#111] border-r border-[#222] flex flex-col py-6">
      
      {/* Logo */}
      

      {/* Sections */}
      <div className="px-4 mt-6 space-y-6 bg-white dark:bg-black">
        <div className="text-3xl px-4 py-5 border-b border-[#222]">
        <p className="text-[#FFD700] text-sm font-medium">Netero Docs</p>
        <p className="text-xs text-gray-500">netero</p>
      </div>
        {docs.map((section) => (
          <div key={section.section}>
            
            <p className="text-[10px] text-gray-500 uppercase mb-2">
              {section.section}
            </p>

            <div className="space-y-1">
              {section.items.map((item) => (
                <p
                  key={item.slug}
                  onClick={() => setActive(item.slug)}
                  className={`px-2 py-1 text-sm cursor-pointer transition
                    ${
                      active === item.slug
                        ? "bg-[#1a1a0a] text-[#FFD700] border-l-2 border-[#FFD700]"
                        : "text-gray-400 hover:bg-[#1a1a1a]"
                    }`}
                >
                  {item.title}
                </p>
              ))}
            </div>

          </div>
        ))}
      </div>
    </aside>
  );
}