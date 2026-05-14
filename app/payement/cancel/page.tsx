'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { XCircle } from 'lucide-react'

export default function PaymentCancel() {
  const router = useRouter()

  useEffect(() => {
    async function cancelPayment() {
      await fetch('/api/chariow/cancel', { method: 'POST' })
      setTimeout(() => router.push('/pricing'), 3000)
    }
    cancelPayment()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <XCircle className="text-red-500 mx-auto" size={64} />
        <h1 className="text-2xl font-bold mt-4">Paiement annulé</h1>
        <p className="text-gray-500">Vous pouvez réessayer quand vous voulez.</p>
      </div>
    </div>
  )
}