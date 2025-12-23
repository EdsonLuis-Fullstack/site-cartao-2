"use client";

import Link from "next/link";
import Image from "next/image";
import emojiTriste from "../../public/images/emoji-triste 1.png";


export default function FoundPage() {
    return (
        <div className="flex flex-col min-h-screen justify-center bg-[#F3F2F2] items-center text-center px-6">

        {/* Ícone triste */}
       <div className="flex justify-center ">
  <div className="w-[120px] h-[120px] rounded-full bg-white flex items-center justify-center">
    <Image
      src={emojiTriste}
      alt="Emoji triste"
      width={90}
      height={90}
      className="object-contain"
      priority
    />
  </div>
</div>


        {/* Título */}
        <h1 className="text-[#f87315] font-Figtree text-[64px] font-bold leading-tight mb-3">
          Aah não...
        </h1>

        <h2 className="text-[#f87315] text-[64px] font-Figtree font-normal leading-tight mb-[30px]">
          Página não encontrada
        </h2>

        {/* Texto */}
        <p className="text-black font-Figtree text-[24px] text-center max-w-[420px] leading-relaxed mb-10">
          A página que você busca não existe, ou ocorreu um erro.
          Volte para a página inicial.
        </p>

        {/* Botão */}
        <Link href="/">
          <button className="bg-[#61BB5A] hover:bg-[#52a84c] transition-colors text-white text-[24px] font-bold font-Figtree px-8 py-3 rounded-[40px]">
            Voltar para a Home
          </button>
        </Link>

      </div>
    )
}