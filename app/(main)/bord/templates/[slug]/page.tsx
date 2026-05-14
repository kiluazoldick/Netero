'use client'

import { useParams } from "next/navigation"
import { templates } from "../data"
import { useState, useEffect } from "react"
import { Check, Copy, ArrowLeft, Download, Lock } from "lucide-react"
import Link from "next/link"
import JSZip from "jszip"

export default function TemplateDetail() {
  const { slug } = useParams()
  const template = templates.find((t) => t.slug === slug)

  const [copied, setCopied] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [isPaid, setIsPaid] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Vérifier si l'utilisateur a payé
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

  if (!template) return <div className="min-h-screen flex items-center justify-center">Template introuvable</div>

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
      const zip = new JSZip()
      const folder = zip.folder(template.slug)

      if (!folder) {
        throw new Error("Impossible de créer le dossier dans le ZIP")
      }

      folder.file("README.md", `# ${template.name}

${template.description}

Installation :
\`\`\`bash
${cliCommand}
\`\`\`
`)
      folder.file("package.json", JSON.stringify({
        name: template.slug,
        version: "1.0.0",
        description: template.description,
        scripts: { dev: "echo 'Utilisez la CLI'" }
      }, null, 2))

      const blob = await zip.generateAsync({ type: "blob" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${template.slug}.zip`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Erreur :", error)
    } finally {
      setDownloading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFD700]"></div>
      </div>
    )
  }

  if (!isPaid) {
    return (
      <main className="min-h-screen bg-white dark:bg-black px-6 py-8 max-w-4xl mx-auto">
        <Link href="/bord/templates" className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#FFD700] mb-6">
          <ArrowLeft size={20} />
          Retour aux templates
        </Link>

        <div className="flex flex-col items-center justify-center gap-6 mt-20">
          <Lock size={64} className="text-zinc-600" />
          <h1 className="text-3xl font-bold text-black dark:text-white">Template verrouillé</h1>
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

  return (
    <main className="min-h-screen bg-white dark:bg-black px-6 py-8 max-w-4xl mx-auto">
      <Link href="/bord/templates" className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#FFD700] mb-6">
        <ArrowLeft size={20} />
        Retour aux templates
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img src={template.image} alt={template.name} className="w-full rounded-2xl border border-zinc-700" />
        </div>

        {/* Infos */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-black dark:text-white">{template.name}</h1>
          <p className="text-zinc-400">{template.description}</p>

          <div className="flex flex-wrap gap-2">
            {template.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-zinc-800 text-[#FFD700] px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>

          {/* Documentation courte */}
          <div className="bg-zinc-900 rounded-xl p-4 mt-2">
            <h3 className="text-white font-semibold mb-2">Documentation rapide</h3>
            <ul className="text-sm text-zinc-400 space-y-1">
              <li>1. Assurez-vous d'avoir Node.js 18+</li>
              <li>2. Exécutez la commande CLI ci-dessous</li>
              <li>3. Téléchargez le ZIP pour un aperçu local</li>
            </ul>
          </div>

          {/* Commande CLI */}
          <div className="bg-zinc-900 rounded-xl p-4 flex items-center justify-between">
            <code className="text-sm text-[#FFD700] font-mono">{cliCommand}</code>
            <button onClick={handleCopy} className="text-zinc-400 hover:text-[#FFD700] transition">
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>

          {/* Bouton Télécharger */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="w-full bg-[#FFD700] text-black py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 transition disabled:opacity-50"
          >
            <Download size={20} />
            {downloading ? "Téléchargement..." : "Télécharger le template"}
          </button>
        </div>
      </div>
    </main>
  )
}