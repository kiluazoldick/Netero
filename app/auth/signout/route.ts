import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST() {
  const supabase = await createClient(); //  un seul await propre
  
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    console.error("Erreur signOut:", error.message);
  }

  const response = NextResponse.redirect(
    new URL("/", process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000")
  );

  // Force la suppression des cookies Supabase dans la réponse HTTP
  response.cookies.delete('sb-access-token');
  response.cookies.delete('sb-refresh-token');

  return response;
}