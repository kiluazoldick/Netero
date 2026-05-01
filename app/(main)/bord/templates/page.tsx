'use client'


import Realisation from "@/components/layout/realisation";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { Bell, ChevronDown, Star, Folder, BarChart3, Crown } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const username = "User";
  const isPremium = true;

  return (
    <div>
      <AppSidebar />
      <SidebarInset>
        <header className="flex items-center justify-between pb-4 px-6 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800" >
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">Templates</h1>
          <div className="flex items-center gap-3">
            <button className="relative w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <Bell size={16} className="text-gray-500" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-violet-500 border-2 border-white dark:border-gray-900" />
            </button>
            <button className="flex items-center gap-2 px-3 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{username}</span>
              <ChevronDown size={12} className="text-gray-400" />
            </button>
          </div>
        </header>

        <main className="p-6 flex-1">
 

        </main>

      </SidebarInset>
    </div>
  );
}