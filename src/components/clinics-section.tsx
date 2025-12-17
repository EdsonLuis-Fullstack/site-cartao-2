"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { InfinityCarousel } from "./ui/infinity-carousel";
import clinicSectionImage from "../../public/images/clinica-section-image.webp";
import clinicSectionImage2 from "../../public/images/happy-indian.png";
import clinicSectionImage3 from "../../public/images/Especialidades.png";
import clinicSectionImage4 from "../../public/images/ophthalmolog.png";


interface FeatureItem {
  title: string;
}

const features: FeatureItem[] = [
  { title: "Atendimento rápido" },
  { title: "Consultas que cabem no bolso" },
  { title: "Diversas especialidades médicas" },
  { title: "Clínicas odontológicas integradas" },
];
const featureImages = [
  clinicSectionImage,
  clinicSectionImage2,
  clinicSectionImage3,
  clinicSectionImage4,
];


interface ClinicsPartnersSectionProps {
  className?: string;
}

export default function ClinicsPartnersSection({
  className,
}: ClinicsPartnersSectionProps) {
  // ▶ CONTROLE DO ITEM ATIVO
  const [activeIndex, setActiveIndex] = useState(0);

  // ▶ TIMER DE 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={cn(
        "relative w-full min-h-screen bg-[#f3f2f2] py-20 px-6 font-(family-name:--font-figtree)",
        className
      )}
    >
      {/* Main heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-4xl mx-auto">
          <span className="text-[#61bb5a]">Clínicas parceiras </span>
          <span className="text-black">
            com qualidade, agilidade e cuidado de verdade
          </span>
        </h2>
      </div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          {/* Left content */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[#f87315] text-xl font-semibold">
              Saúde acessível com quem entende de cuidado
            </h3>
            <p className="text-black text-lg leading-relaxed">
              Com o Beneficiar, você conta com uma rede de clínicas parceiras
              que oferecem atendimento humanizado, estrutura completa e
              agilidade em exames e consultas.
            </p>
            <p className="text-[#61bb5a] text-lg font-medium">
              Menos espera, mais saúde no seu tempo.
            </p>
          </div>

          {/* Center image */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-[280px] md:w-[320px] h-[380px] md:h-[420px] rounded-xl overflow-hidden shadow-lg">
              {/* 🔴 IMAGEM PRONTA PARA VOCÊ TROCAR POR FEATURE */}
              <Image
                key={activeIndex} // força transição suave
                src={featureImages[activeIndex]}
                alt="Profissional de saúde usando smartphone"
                fill
                className="object-cover object-center transition-opacity duration-500"
                sizes="(max-width: 768px) 280px, 320px"
                priority
              />
            </div>
          </div>

          {/* Right features */}
          <div className="lg:col-span-4 space-y-6">
            {features.map((feature, index) => {
              const isActive = index === activeIndex;

              return (
                <div key={index} className="space-y-3">
                  <h4
                    className={cn(
                      "text-xl font-semibold transition-colors",
                      isActive ? "text-[#f87315]" : "text-[#c3c3c3]"
                    )}
                  >
                    {feature.title}
                  </h4>

                  {/* 🔴 BORDA EXISTENTE, AGORA ANIMADA */}
                  <div className="relative overflow-hidden">
                    <div className="flex items-center">
                      <div className="flex-1 h-px bg-gray-300" />
                    </div>

                    {isActive && (
                      <div
                        className="absolute left-0 top-0 h-0.5 bg-[#f87315]"
                        style={{
                          animation: "progress 4s linear",
                          width: "100%",
                        }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <InfinityCarousel />
      </div>

      {/* 🔴 ANIMAÇÃO GLOBAL (não mexe em estilos existentes) */}
      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
