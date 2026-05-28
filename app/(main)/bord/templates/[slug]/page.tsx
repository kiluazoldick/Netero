'use client'

import { useParams } from "next/navigation"
import { templates } from "../data"
import { useState, useEffect } from "react"
import { Check, Copy, ArrowLeft, Download, Lock } from "lucide-react"
import Link from "next/link"

const GITHUB_BASE_URL = "https://github.com/Fred123333/Templates/raw/main/templates"

export default function TemplateDetail() {
  const { slug } = useParams()
  const template = templates.find((t) => t.slug === slug)

  const [copied, setCopied] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [isPaid, setIsPaid] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkPayment = async () => {
      try {
        const response = await fetch('/api/chariow/confirm')
        const data = await response.json()
        setIsPaid(data.paid)
      } catch (error) {
        console.error("Erreur vérification paiement:", error)
        setIsPaid(false)
      } finally {
        setLoading(false)
      }
    }
    checkPayment()
  }, [slug])

  if (!template) return (
    <div className="min-h-screen flex items-center justify-center text-zinc-400">
      Template introuvable
    </div>
  )

  const cliCommand = `npx netero-cli install ${template.slug}`

  const handleCopy = () => {
    navigator.clipboard.writeText(cliCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = async () => {
    if (!isPaid) return
    setDownloading(true)
    try {
      // Téléchargement du vrai ZIP depuis GitHub
      const url = `${GITHUB_BASE_URL}/${template.slug}.zip`

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Template introuvable (${response.status})`)
      }

      const blob = await response.blob()
      const objectUrl = URL.createObjectURL(blob)

      const a = document.createElement("a")
      a.href = objectUrl
      a.download = `${template.slug}.zip`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(objectUrl)

    } catch (error) {
      console.error("Erreur téléchargement :", error)
      alert("Erreur : impossible de télécharger le template. Vérifiez votre connexion.")
    } finally {
      setDownloading(false)
    }
  }

  // ── Chargement ──
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFD700]" />
      </div>
    )
  }

  // ── Non payé ──
  if (!isPaid) {
    return (
      <main className="min-h-screen bg-white dark:bg-black px-6 py-8 max-w-4xl mx-auto">
        <Link
          href="/bord/templates"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#FFD700] mb-6 transition"
        >
          <ArrowLeft size={20} />
          Retour aux templates
        </Link>

        <div className="flex flex-col items-center justify-center gap-6 mt-20">
          <Lock size={64} className="text-zinc-600" />
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Template verrouillé
          </h1>
          <p className="text-zinc-400 text-center max-w-md">
            Pas d'abonnement mensuel. Payez une fois, utilisez à vie.
          </p>
          <Link
            href="/bord/pricing"
            className="bg-[#FFD700] text-black px-8 py-3 rounded-xl font-bold hover:brightness-110 transition"
          >
            Acheter maintenant
          </Link>
        </div>
      </main>
    )
  }

  // ── Payé ──
  return (
    <main className="min-h-screen bg-white dark:bg-black px-6 py-8 max-w-4xl mx-auto">
      <Link
        href="/bord/templates"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#FFD700] mb-6 transition"
      >
        <ArrowLeft size={20} />
        Retour aux templates
      </Link>

      <div className="flex flex-col md:flex-row gap-8">

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={template.image}
            alt={template.name}
            className="w-full rounded-2xl border border-zinc-700 object-cover"
          />
        </div>

        {/* Infos */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            {template.name}
          </h1>
          <p className="text-zinc-400">{template.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {template.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="text-xs bg-zinc-800 text-[#FFD700] px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Documentation rapide */}
          <div className="bg-zinc-900 rounded-xl p-4 mt-2">
            <h3 className="text-white font-semibold mb-2">Documentation rapide</h3>
            <ul className="text-sm text-zinc-400 space-y-1">
              <li>1. Assurez-vous d'avoir Node.js 18+</li>
              <li>2. Exécutez la commande CLI ci-dessous</li>
              <li>3. Téléchargez le ZIP pour un aperçu local</li>
            </ul>
          </div>

          {/* Commande CLI */}
          <div className="bg-zinc-900 rounded-xl p-4 flex items-center justify-between gap-4">
            <code className="text-sm text-[#FFD700] font-mono truncate">
              {cliCommand}
            </code>
            <button
              onClick={handleCopy}
              className="text-zinc-400 hover:text-[#FFD700] transition flex-shrink-0"
              title="Copier la commande"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>

          {/* Bouton Télécharger */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="w-full bg-[#FFD700] text-black py-3 rounded-xl font-bold
              flex items-center justify-center gap-2
              hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download size={20} />
            {downloading ? "Téléchargement..." : "Télécharger le template"}
          </button>
        </div>
      </div>
    </main>
  )
}