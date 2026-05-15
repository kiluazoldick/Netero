import Link from 'next/link'
import { Eye, Code2 } from 'lucide-react'

interface TemplateCardProps {
  name: string
  description: string
  tags: string[]
  demoUrl: string
  slug: string
}

export function TemplateCard({ name, description, tags, demoUrl, slug }: TemplateCardProps) {
  return (
    <div className="border rounded-lg p-6 transition-all hover:border-[#FFD700] hover:shadow-lg hover:shadow-[#FFD700]/10 bg-white dark:bg-black" style={{ borderColor: '#FFD700/30' }}>
      <div className="mb-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#FFD700/10' }}>
          <Code2 size={24} style={{ color: '#FFD700' }} />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-xs rounded" style={{ backgroundColor: '#FFD700/10', color: '#FFD700' }}>
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        <Link href={demoUrl} target="_blank" className="flex-1">
          <button className="w-full px-3 py-2 rounded-lg border text-sm flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-900" style={{ borderColor: '#FFD700/30' }}>
            <Eye size={16} />
            Live demo
          </button>
        </Link>
        <Link href="auth/login" className="flex-1">
          <button className="w-full px-3 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-90" style={{ backgroundColor: '#FFD700', color: '#000000' }}>
            Obtenir le code
          </button>
        </Link>
      </div>
    </div>
  )
}