'use client'

import Link from "next/link"
import { templates } from "./data"
import { useState, useEffect } from "react"
import { Funnel } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

const categories = [
  "Tous",
  "E-commerce",
  "Marketing Digital",
  "Automatisation",
  "Développement",
  "Web Design",
  "IA",
]

export default function TemplateCard() {
  const [activeFilter, setActiveFilter] = useState("Tous")

  const [user, setUser] = useState<any>(null)
  const [isPremium, setIsPremium] = useState(false)
  const [loading, setLoading] = useState(true)

  const supabase = createClient()

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        setUser(null)
        return
      }

      setUser(user)

      const { data: sub } = await supabase
        .from("subscriptions")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle()

      setLoading(false) 

      setIsPremium(!!sub)
    }

    load()
  }, [])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>
  }

  const filtered =
    activeFilter === "Tous"
      ? templates
      : templates.filter((t) => t.category === activeFilter)

  return (
    <main>
      <header className="flex items-center justify-between px-6 py-2 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">
          Templates
        </h1>
      </header>

      <section className="pb-20 bg-white dark:bg-black overflow-x-hidden px-10">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-black dark:text-white py-5">
            Templates disponibles
          </h2>

          <p className="text-zinc-400 text-xl">
            Démarrez votre prochain projet en quelques secondes.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          <Funnel className="dark:text-white" />

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${
                  activeFilter === cat
                    ? "bg-[#FFD700] text-zinc-900 border border-[#FFD700]"
                    : "bg-transparent text-black dark:text-white border border-zinc-600 hover:border-[#FFD700] hover:text-[#FFD700]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((template) => (
            <div
              key={template.slug}
              className="group flex flex-col rounded-2xl border-2 border-[#FFD700] hover:shadow-[0_0_24px_rgba(255,215,0,0.15)] transition-all"
            >

              {/* IMAGE */}
              <div className="px-3 pt-3">
                <div className="relative w-full h-48 overflow-hidden bg-zinc-800 rounded-2xl">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />

                  {template.popular && (
                    <span className="absolute top-3 right-3 bg-[#FFD700] text-yellow-900 text-xs font-semibold px-3 py-1 rounded-lg">
                      Populaire
                    </span>
                  )}
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-1 px-5 py-4 gap-3">

                <h3 className="font-bold text-lg dark:text-white">
                  {template.name}
                </h3>

                <p className="text-sm text-zinc-400 flex-1">
                  {template.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-3">
                  {template.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-[#FFD700]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-auto">

                  <Link
                    href={template.demoUrl}
                    target="_blank"
                    className="flex-1 border border-[#FFD700] text-[#FFD700] py-2.5 text-center rounded-xl text-sm"
                  >
                    👁 Preview
                  </Link>

                  <Link
                    href={
                      !user
                        ? "/login"
                        : !isPremium
                        ? "bord/pricing"
                        : "/bord"
                    }
                    className="flex-1 bg-[#FFD700] text-black py-2.5 text-center rounded-xl text-sm font-bold"
                  >
                    Obtenir le code
                  </Link>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* EMPTY STATE */}
        {filtered.length === 0 && (
          <p className="text-center text-zinc-500 mt-20">
            Aucun template dans cette catégorie.
          </p>
        )}

      </section>
    </main>
  )
}