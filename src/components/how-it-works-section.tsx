"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

import energy from "../../public/images/jornal-image.webp";
import creditCard from "../../public/images/credit-card-image.webp";
import pix from "../../public/images/pix-image.webp";
import boleto from "../../public/images/plaqueta-medica-image.webp";
import easyContract from "../../public/images/contrato-facil.webp";
import ticket from "../../public/images/ticket.png";
import enjoy from "../../public/images/joia.webp";
import acceptCard from "../../public/images/cartao-aceito.png";

/* ===================== DATA ===================== */

interface StepData {
  title: string;
  items: {
    id: number;
    title: string;
    subtitle: string;
    image: StaticImageData | string;
    alt: string;
    largeImage?: boolean;
  }[];
}

const stepsData: Record<number, StepData> = {
  1: {
    title: "Contratação Simples",
    items: [
      {
        id: 1,
        title: "Documentação mínima,",
        subtitle: "sem letras miúdas",
        image: easyContract,
        alt: "Formulário de cadastro",
      },
    ],
  },
  2: {
    title: "Você escolhe como pagar",
    items: [
      {
        id: 1,
        title: "Conta de energia",
        subtitle: "(mais prático), consulte disponibilidade",
        image: energy,
        alt: "Conta de energia elétrica",
        largeImage: true,
      },
      {
        id: 2,
        title: "Cartão de crédito",
        subtitle: "(sem comprometer o limite)",
        image: creditCard,
        alt: "Cartão de crédito",
        largeImage: false,
      },
      {
        id: 3,
        title: "Pix recorrente",
        subtitle: "(sem comprometer o limite)",
        image: pix,
        alt: "Pix recorrente",
        largeImage: true,
      },
      {
        id: 4,
        title: "Boleto bancário",
        subtitle: "(sujeito à análise de crédito)",
        image: boleto,
        alt: "Boleto bancário",
        largeImage: true,
      },
    ],
  },
  3: {
    title: "Um pouco mais de R$ 1,00 por dia",
    items: [
      {
        id: 1,
        title: "",
        subtitle: "Mensalidade: R$ 39,90",
        image: ticket,
        alt: "Ticket de benefício",
        largeImage: true,
      },
    ],
  },
  4: {
    title: "Aprovação Imediata",
    items: [
      {
        id: 1,
        title: "",
        subtitle: "Sem burocracia e sem espera",
        image: enjoy,
        alt: "Mãos fazendo joinha",
      },
    ],
  },
  5: {
    title:
      "Retire seu cartão benefícios no escritório no momento da contratação",
    items: [
      {
        id: 1,
        title: "Cartão de crédito",
        subtitle: "(sem comprometer o limite)",
        image: acceptCard,
        alt: "Cartão aceito",
        largeImage: true,
      },
    ],
  },
};

/* ===================== STEP INDICATOR ===================== */

function StepIndicator({
  steps,
  currentStep,
  onStepClick,
}: {
  steps: number[];
  currentStep: number;
  onStepClick: (step: number) => void;
}) {
  return (
    <div className="flex items-center gap-4">
      {steps.map((step) => (
        <button
          key={step}
          onClick={() => onStepClick(step)}
          className={cn(
            "w-9 h-9 rounded-lg flex items-center justify-center text-base font-normal transition-all duration-200 hover:scale-105",
            step === currentStep
              ? "bg-[#f87315] text-white shadow-lg"
              : "border border-[#f87315] text-[#f87315] bg-white hover:bg-[#f87315] hover:text-white"
          )}
        >
          {step}
        </button>
      ))}
    </div>
  );
}

/* ===================== CARD ===================== */

function StepItemCard({
  item,
  currentStep,
}: {
  item: StepData["items"][number];
  currentStep: number;
}) {
  const imageSize = item.largeImage 
    ? { width: "w-[220px]", height: "h-[150px]", sizes: "220px" }
    : { width: "w-[180px]", height: "h-[120px]", sizes: "180px" };

  const isStep4 = currentStep === 4;

  return (
    <div className="border border-[#61bb5a] rounded-2xl w-[260px] h-[240px] bg-white hover:shadow-lg transition-all duration-300 hover:border-[#f87315] cursor-pointer flex flex-col items-center">
      {/* Text */}
      <div className="mt-5 text-center w-[220px]">
        <h3 className="text-[#f87315] text-base font-medium">
          {item.title}
        </h3>
        <p className="text-[#434343] text-base font-normal">
          {item.subtitle}
        </p>
      </div>

      {/* Image */}
      <div className={cn(
        isStep4 ? "flex items-center justify-center flex-1" : "mt-auto mb-4"
      )}>
        <div className={cn("relative", imageSize.width, imageSize.height)}>
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className="object-contain"
            sizes={imageSize.sizes}
          />
        </div>
      </div>
    </div>
  );
}

/* ===================== SECTION ===================== */

export default function HowItWorksSection({ className }: { className?: string }) {
  const [currentStep, setCurrentStep] = useState(1);

  const currentStepData = stepsData[currentStep];
  const isFourItems = currentStepData.items.length === 4;

  return (
    <section
      className={cn(
        "relative w-full bg-white py-20 px-6 font-(family-name:--font-figtree)",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-normal text-black mb-4">
            Como funciona na prática
          </h2>
          <p className="text-xl text-[#434343] mb-10">
            Rápido e transparente
          </p>

          <div className="flex justify-center mb-8">
            <StepIndicator
              steps={[1, 2, 3, 4, 5]}
              currentStep={currentStep}
              onStepClick={setCurrentStep}
            />
          </div>

          <h3 className="text-2xl font-bold text-[#434343] mb-16 transition-all duration-300">
            {currentStepData.title}
          </h3>
        </div>
        <div
          className={cn(
            "flex justify-center gap-8 mx-auto",
            isFourItems ? "flex-nowrap" : "flex-wrap",
            isFourItems ? "max-w-[1120px]" : "max-w-[960px]"
          )}
        >
          {currentStepData.items.map((item) => (
            <StepItemCard
              key={`${currentStep}-${item.id}`}
              item={item}
              currentStep={currentStep}
            />
          ))}
        </div>
      </div>
    </section>
  );
}