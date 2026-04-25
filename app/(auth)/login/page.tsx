'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      router.push('/dashboard')
      router.refresh()
    }
    setLoading(false)
  }

  const handleOAuth = async (provider: 'google' | 'github') => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    if (error) setError(error.message)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Connexion</CardTitle>
          <CardDescription>
            Connectez-vous pour accéder à vos templates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="vous@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button 
              type="submit" 
              className="w-full bg-[#FFD700] text-black hover:bg-[#FFD700]/90"
              disabled={loading}
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#FFD700]/20"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-black px-2 text-gray-500">Ou continuer avec</span>
            </div>
          </div>

          <div className="space-y-2">
            <Button 
              variant="outline" 
              className="w-full border-[#FFD700]/30 hover:bg-[#FFD700]/10"
              onClick={() => handleOAuth('github')}
            >
              <FaGithub className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-[#FFD700]/30 hover:bg-[#FFD700]/10"
              onClick={() => handleOAuth('google')}
            >
              <FcGoogle className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pas encore de compte ?{' '}
            <Link href="/register" className="text-[#FFD700] hover:underline">
              S'inscrire
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}