import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// Vérification du paiement via l'API Chariow
async function verifyChariowPayment(transactionId: string): Promise<boolean> {
  try {
    const response = await fetch(`https://api.chariow.com/transactions/${transactionId}`, {
      headers: {
        'Authorization': `Bearer ${process.env.CHARIOW_API_KEY}`,
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) return false
    const data = await response.json()
    // Adapte le champ selon la réponse réelle de Chariow
    return data.status === 'paid' || data.status === 'success'
  } catch (error) {
    console.error('Erreur API Chariow:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
  }

  const { transaction_id } = await request.json()
  if (!transaction_id) {
    return NextResponse.json({ error: 'transaction_id requis' }, { status: 400 })
  }

  // Vérifier le paiement auprès de Chariow
  const isPaid = await verifyChariowPayment(transaction_id)
  if (!isPaid) {
    return NextResponse.json({ error: 'Paiement non validé par Chariow' }, { status: 402 })
  }

  // Marquer l'abonnement en attente comme payé
  const { error } = await supabase
    .from('subscriptions')
    .update({ status: 'paid', updated_at: new Date().toISOString() })
    .eq('user_id', user.id)
    .eq('status', 'pending')
    .order('created_at', { ascending: false })
    .limit(1)

  if (error) {
    console.error('Erreur update:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ paid: false }, { status: 401 })
  }

  const { data } = await supabase
    .from('subscriptions')
    .select('id')
    .eq('user_id', user.id)
    .eq('status', 'paid')
    .maybeSingle()

  return NextResponse.json({ paid: !!data })
}