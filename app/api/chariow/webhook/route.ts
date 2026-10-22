import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  const payload = await req.json()
  const supabase = await createClient()

  // Exemple : Chariow envoie { transaction_id, email, status }
  if (payload.status === 'paid') {
    const { error } = await supabase
      .from('subscriptions')
      .update({ status: 'paid', transaction_id: payload.transaction_id })
      .eq('email', payload.email)
      .eq('status', 'pending')

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}