'use client'


import Realisation from "@/components/layout/realisation";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { Bell, ChevronDown, Star, Folder, BarChart3, Crown } from "lucide-react";
import Link from "next/link";

export default function DashboardsPage() {
  const username = "User";
  const isPremium = true;

  return (
    <div>
      <AppSidebar />
      <SidebarInset>
        <header className="flex items-center justify-between px-6 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800" >
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">Dashboard</h1>
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
          <div
            className="relative rounded-2xl overflow-hidden px-9 py-8 flex items-center justify-between"
            style={{ background: "linear-gradient(135deg, #e8e4ff 0%, #f0e8ff 40%, #fde8f5 75%, #fef3e8 100%)" }}
          >
            {isPremium && (
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                <Star size={12} fill="currentColor" />
                Premium
              </div>
            )}
            <Star size={16} fill="#a78bfa" className="absolute top-6 left-[46%] text-violet-400" />
            <Star size={10} fill="#f9a8d4" className="absolute bottom-8 left-[43%] text-pink-300" />
            <Star size={8}  fill="#fde68a" className="absolute top-12 left-[51%] text-yellow-200" />
            <div className="flex-1 z-10">
              <h2 className="text-2xl font-extrabold text-[#2d2060] mb-2">
                Bonjour, {username.split(" ")[0]} ! 👋
              </h2>
              <p className="text-sm text-[#6b5fa0] leading-relaxed max-w-sm mb-5">
                Prêt à créer quelque chose d'incroyable aujourd'hui ? Choisissez un template et commencez à personnaliser comme un pro.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="#" className="bg-violet-600 cursor-pointer hover:bg-violet-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition inline-block">
                  + Télécharger un template
                </Link>
                <Link href="#" className="cursor-pointer bg-transparent border-2 border-violet-600 text-violet-600 hover:bg-violet-50 text-sm font-bold px-5 py-2.5 rounded-xl transition inline-block">
                  Explorer les templates
                </Link>
              </div>
            </div>
          </div>

          <div>
            <p className="py-4">Aperçu rapide des templates</p>
            <div>
              <Realisation />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-4 p-4 rounded-xl border bg-white dark:bg-gray-900">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100">
                <Folder className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="text-lg font-semibold">48</p>
                <p className="text-sm text-gray-500">Templates utilisés</p>
                <p className="text-xs text-green-500">+8 ce mois-ci</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl border bg-white dark:bg-gray-900">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100">
                <BarChart3 className="text-green-600" size={18} />
              </div>
              <div>
                <p className="text-lg font-semibold">3,2k</p>
                <p className="text-sm text-gray-500">Vues</p>
                <p className="text-xs text-green-500">+12% ce mois-ci</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl border bg-white dark:bg-gray-900">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-100">
                <Crown className="text-yellow-600" size={18} />
              </div>
              <div>
                <p className="text-lg font-semibold">Premium</p>
                <p className="text-sm text-gray-500">Statut actuel</p>
                <p className="text-xs text-gray-400">Actif jusqu’au 12/12/2024</p>
              </div>
            </div>
           </div>
        </main>

      </SidebarInset>
    </div>
  );
}