
import Link from "next/link"
import {Mail,MessageCircle} from 'lucide-react'

export default function SupportContact() {
  return (
    <div>
      {/* Titre section */}
      <h2 className="text-black dark:text-white font-semibold text-lg mb-6">
        Nous contacter
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Email */}
        <div className="flex gap-4 bg-white dark:bg-black border rounded-2xl p-6 hover:border-[#FFD700] ">
          <div className="w-10 h-10 shrink-0    flex items-center justify-center text-base">
          <Mail className="text-[#FFD700] "/>
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-black dark:text-white font-semibold text-sm mb-1">Email</h3>
            <p className="text-zinc-500 text-xs leading-relaxed mb-4">
              Réponse sous 24h par notre équipe.
            </p>
            
              
                <Link href="mailto:support@netero.dev"
              className="inline-block w-fit bg-[#FFD700] text-yellow-900 text-xs font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200">
                Envoyer un email
                </Link>
              
            
          </div>
        </div>

        {/* Discord */}
        <div className="flex gap-4  bg-white dark:bg-black border  rounded-2xl p-6 hover:border-[#FFD700] ">
          <div className="w-10 h-10 shrink-0 flex items-center justify-center text-base">
            <MessageCircle className="text-[#FFD700]"/>
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-black dark:text-white font-semibold text-sm mb-1">Discord</h3>
            <p className="text-zinc-500 text-xs leading-relaxed mb-4">
              Rejoins la communauté Netero.
            </p>
            
             <Link  href="https://discord.gg/netero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit bg-[#FFD700] text-yellow-900 text-xs font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200">
               Rejoindre le Discord
                </Link>
          </div>
        </div>

      </div>
    </div>
  );
}