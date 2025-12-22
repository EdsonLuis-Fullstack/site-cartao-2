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
  const [activeIndex, setActiveIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
      setKey((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleFeatureClick = (index: number) => {
    setActiveIndex(index);
    setKey((prev) => prev + 1);
  };

  return (
    <section
      className={cn(
        "relative w-full min-h-screen bg-[#f3f2f2] py-20 px-6 font-(family-name:--font-figtree)",
        className
      )}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-4xl mx-auto">
          <span className="text-[#61bb5a]">Clínicas parceiras </span>
          <span className="text-black">
            com qualidade, agilidade e cuidado de verdade
          </span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[#f87315] text-xl font-semibold">
              Saúde acessível com quem entende de cuidado
            </h3>
            <p className="text-black text-lg leading-relaxed">
              Com o Beneficiar, você conta com uma rede de clínicas parceiras
              que oferecem atendimento humanizado, estrutura completa e
              agilidade em exames e consultas.
            </p>
            <p onClick={() => window.location.href = "https://checkout.cartaobeneficiar.com.br/"} className="text-[#61bb5a] text-lg font-medium cursor-pointer">
              Menos espera, mais saúde no seu tempo.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-[280px] md:w-[320px] h-[380px] md:h-[420px] rounded-xl overflow-hidden shadow-lg">
              <Image
                key={activeIndex}
                src={featureImages[activeIndex]}
                alt="Profissional de saúde usando smartphone"
                fill
                className="object-cover object-center transition-opacity duration-500"
                sizes="(max-width: 768px) 280px, 320px"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            {features.map((feature, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  className="space-y-3 cursor-pointer"
                  onClick={() => handleFeatureClick(index)}
                >
                  <h4
                    className={cn(
                      "text-xl font-semibold transition-colors",
                      isActive ? "text-[#f87315]" : "text-[#c3c3c3]"
                    )}
                  >
                    {feature.title}
                  </h4>

                  <div className="relative overflow-hidden">
                    <div className="flex items-center">
                      <div className="flex-1 h-px bg-gray-300" />
                    </div>

                    {isActive && (
                      <div
                        key={key}
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