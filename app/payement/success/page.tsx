'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CheckCircle, Loader2 } from 'lucide-react'

export default function PaymentSuccess() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  useEffect(() => {
    async function confirmPayment() {
      const transactionId = searchParams.get('transaction_id')

      if (!transactionId) {
        setStatus('error')
        return
      }

      try {
        const res = await fetch('/api/chariow/confirm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ transaction_id: transactionId }),
        })
        const data = await res.json()
        if (data.success) {
          setStatus('success')
          setTimeout(() => router.push('/bord'), 3000)
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
    }
    confirmPayment()
  }, [searchParams, router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      {status === 'loading' && <Loader2 className="animate-spin text-yellow-500" size={48} />}
      {status === 'success' && (
        <div className="text-center">
          <CheckCircle className="text-green-500 mx-auto" size={64} />
          <h1 className="text-2xl font-bold mt-4">Paiement confirmé !</h1>
          <p className="text-gray-500">Redirection vers votre tableau de bord...</p>
        </div>
      )}
      {status === 'error' && (
        <div className="text-center">
          <h1 className="text-xl font-bold text-red-500">Erreur de confirmation</h1>
          <p className="text-gray-500">Contactez le support.</p>
        </div>
      )}
    </div>
  )
}