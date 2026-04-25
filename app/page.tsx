import { Hero } from '@/components/landing/Hero'
import { TemplateCard } from '@/components/landing/TemplateCard'
import { PricingSection } from '@/components/landing/PricingSection'

const templates = [
  {
    slug: 'saas-starter',
    name: 'SaaS Starter',
    description: 'Template complet pour SaaS avec authentification, paiements et tableau de bord.',
    tags: ['SaaS', 'Auth', 'Paiements'],
    demoUrl: 'https://demo-saas.netero.com',
  },
  {
    slug: 'ecommerce-starter',
    name: 'E-commerce Starter',
    description: 'Boutique en ligne avec panier, checkout et gestion de produits.',
    tags: ['E-commerce', 'Panier', 'Paiement'],
    demoUrl: 'https://demo-ecommerce.netero.com',
  },
  {
    slug: 'blog-starter',
    name: 'Blog Starter',
    description: 'Blog performant avec MDX, SEO et评论区.',
    tags: ['Blog', 'MDX', 'SEO'],
    demoUrl: 'https://demo-blog.netero.com',
  },
  {
    slug: 'admin-dashboard',
    name: 'Admin Dashboard',
    description: 'Dashboard administrateur avec graphiques, tables et gestion d\'utilisateurs.',
    tags: ['Admin', 'Dashboard', 'Analytics'],
    demoUrl: 'https://demo-admin.netero.com',
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      
      <section id="templates" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Templates disponibles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choisissez parmi nos templates professionnels, tous prêts à être personnalisés.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template) => (
              <TemplateCard key={template.slug} {...template} />
            ))}
          </div>
        </div>
      </section>
      
      <PricingSection />
    </>
  )
}