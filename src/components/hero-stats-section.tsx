"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import beneficiarCard from "../../public/images/cartoes-beneficiar.webp";
import { isMobile } from "react-device-detect";

interface StatCardProps {
  value: string;
  description: string;
  variant?: "default" | "highlight";
}

function StatCard({ value, description, variant = "default" }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-5 flex flex-col w-full gap-1 items-start justify-center min-w-[156px] h-28",
        variant === "highlight"
          ? "bg-[#f87315] text-white"
          : "bg-white text-black"
      )}
    >
      {variant === "highlight" ? (
        <>
          <div className="flex flex-col gap-0.5">
            <p className="leading-normal">
            <span className="text-[28px] font-semibold">R$1,00</span>
            <span className="text-sm">/dia</span>
          </p>
          </div>
          <p className="text-xs font-bold leading-normal text-start whitespace-nowrap">
              Qualidade de vida por<br />
              um pouco mais de
            </p>
        </>
      ) : (
        <>
          <p className="text-[32px] font-semibold text-[#f87315] leading-normal">
            {value}
          </p>
          <p className="text-xs font-semibold text-black leading-normal max-w-[162px]">
            {description}
          </p>
        </>
      )}
    </div>
  );
}

interface HeroStatsSectionProps {
  className?: string;
}

export default function HeroStatsSection({ className }: HeroStatsSectionProps) {
  return (
    <section
      className={cn(
        "relative w-full min-h-screen font-(family-name:--font-figtree) flex items-center justify-center py-20 px-6",
        className
      )}
    >
      {/* Main content container */}
      <div className="relative w-[987px] mx-auto">
        {/* Green background card */}
        <div 
          className="relative flex-1 rounded-[20px] py-8 px-[58px] z-20"
          style={{
            background: 'radial-gradient(127.08% 70.29% at 71.38% 38.57%, rgba(97, 187, 90, 0.80) 0%, #61BB5A 75.02%)'
          }}
        >
          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="flex flex-col gap-8 text-white max-w-[555px]">
              <h1 className="font-['Figtree'] font-medium text-[48px] leading-[1.11] text-white">
                <p className="mb-0 whitespace-nowrap">Por que milhares de</p>
                <p> famílias escolhem </p>
                <p>nosso cuidado?</p>
              </h1>

              <p className="text-lg font-normal font-['Figtree']  max-w-[429px]">
                Acreditamos que saúde é direito, não privilégio. Há 15 anos, o
                Beneficiar existe para transformar realidades e criar caminhos
                mais justos.
              </p>

              {/* Statistics cards */}
              <div className="flex flex-col items-start mt-2 mb-4 md:flex-row md:flex-nowrap gap-4">
                <StatCard
                  value="2.5M+"
                  description="Pessoas impactadas diretamente"
                />
                <StatCard
                  value="300+"
                  description="Estabelecimentos parceiros"
                />
                <StatCard variant="highlight" value="" description="" />
              </div>
            </div>

            {/* Right side - Card image */}
            {!isMobile && (
              <div className="relative flex justify-center lg:justify-end">
                <div className="absolute w-[750px] h-[750px] -top-[490px] lg:-right-54 z-30">
                  <Image
                    src={beneficiarCard}
                    alt="Cartão Beneficiar"
                    fill
                    sizes="(max-width: 750px) 100vw, 750px"
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute -bottom-10  left-1/2 -translate-x-1/2 z-50 ">
          <div className="w-[72px] h-[72px] bg-[#61BB5A]  rounded-full flex items-end justify-center shadow-lg z-50">
            <ArrowDown className="size-10 text-white mb-3 z-50  animate-[arrowPulse_4s_ease-in-out_infinite]" />
          </div>
        </div>
            <style jsx>{`
  @keyframes arrowPulse {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(8px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .animate-arrow-pulse {
    animation: arrowPulse 4s ease-in-out infinite;
  }
`}</style>

      </div>
    </section>
  );
}
