"use client";
import Image from "next/image";
import videoThumbnail from "../../public/images/thumb-sobre.png";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TransformedLivesSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-[#FF7A00] py-16 px-4 font-(family-name:--font-figtree)">
      <div className="max-w-6xl mx-auto text-center">
        {/* Video Container */}
        <div className="relative mb-8">
          <div className="relative w-full max-w-[640px] mx-auto rounded-2xl overflow-hidden aspect-video">
            {/* Thumbnail OR Video */}
            {!isPlaying ? (
              <>
                <Image
                  src={videoThumbnail}
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                />

                {/* Play Button Overlay (SÓ QUANDO PAUSADO) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button onClick={() => setIsPlaying(true)}>
                    <Play className="text-[#FF7A00] size-16 fill-[#FF7A00]" />
                  </button>
                </div>
              </>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/JBUig9bgAeQ?autoplay=1"
                title="Vídeo Beneficiar"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-white text-[52px] font-medium mb-6 leading-tight">
          Vidas Transformadas
        </h2>

        {/* Description */}
        <div className="text-white text-[21px] leading-relaxed mb-8 max-w-[500px] mx-auto">
          <p className="mb-4">
            Com o Beneficiar, milhares de pessoas têm acesso à saúde, alimentação e dignidade todos os dias
          </p>
          <p>
            Por trás de cada uso do nosso cartão, existe uma história de superação, de cuidado e de esperança renovada.<br/> São famílias inteiras sendo transformadas
          </p>
        </div>

        {/* CTA Button */}
        <Link href="http://checkout.cartaobeneficiar.com.br/">
          <button className="bg-white text-[#FF7A00] cursor-pointer w-[394px] font-semibold py-3 px-8 rounded-full hover:bg-gray-50 transition-colors inline-flex justify-center items-center gap-2 uppercase">
            Quero conhercer mais
            <ArrowRight className="size-6 -rotate-45" />
          </button>
        </Link>
      </div>
    </section>
  );
}
