'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'

export function Header() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#FFD700]/20 bg-white/80 dark:bg-black/80 backdrop-blur-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: '#FFD700' }} />
            <span className="text-xl font-bold" style={{ color: '#FFD700' }}>
              Netero
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#templates" className="text-gray-600 dark:text-gray-300 hover:text-[#FFD700] transition-colors">
              Templates
            </Link>
            <Link href="/#pricing" className="text-gray-600 dark:text-gray-300 hover:text-[#FFD700] transition-colors">
              Pricing
            </Link>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="text-[#FFD700]" size={18} /> : <Moon className="text-gray-600" size={18} />}
            </button>
            <Link href="/login">
              <button className="px-4 py-2 rounded-lg font-medium transition-all hover:opacity-90" style={{ backgroundColor: '#FFD700', color: '#000000' }}>
                Se connecter
              </button>
            </Link>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? <Sun className="text-[#FFD700]" size={18} /> : <Moon className="text-gray-600" size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="text-gray-900 dark:text-white" size={20} /> : <Menu className="text-gray-900 dark:text-white" size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#FFD700]/20">
            <div className="flex flex-col space-y-4">
              <Link href="/#templates" className="text-gray-600 dark:text-gray-300 hover:text-[#FFD700] px-4 py-2">
                Templates
              </Link>
              <Link href="/#pricing" className="text-gray-600 dark:text-gray-300 hover:text-[#FFD700] px-4 py-2">
                Pricing
              </Link>
              <Link href="/login" className="px-4">
                <button className="w-full px-4 py-2 rounded-lg font-medium hover:opacity-90" style={{ backgroundColor: '#FFD700', color: '#000000' }}>
                  Se connecter
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}