import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Netero - Boilerplates Next.js prêts à l\'emploi',
  description: 'Téléchargez des templates Next.js professionnels avec un paiement unique.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}