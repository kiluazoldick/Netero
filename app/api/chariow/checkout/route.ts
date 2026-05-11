// api/chariow/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const supabase = await createClient();
    
    // Utiliser getUser() au lieu de getSession()
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json(
        { error: "Non autorisé. Veuillez vous connecter." },
        { status: 401 }
      );
    }

    // Stocker les infos AVANT la redirection
    const { error: dbError } = await supabase.from("subscriptions").insert({
      user_id: user.id,
      email: body.email,
      first_name: body.first_name,
      last_name: body.last_name,
      phone: body.phone,
      status: "pending",
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Erreur lors de l'enregistrement." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      checkout_url: `https://unvcmrvp.mychariow.shop/prd_eq2yq9`
    });

  } catch (error: any) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}