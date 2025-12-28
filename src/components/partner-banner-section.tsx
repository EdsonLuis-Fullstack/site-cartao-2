"use client";
import { ArrowLeft } from "lucide-react";
import whiteEllipsisAbove from "@/assets/ellipse-branco-cima.svg";
import whiteEllipsisBelow from "@/assets/ellipse-branco-baixo.svg";
import Image from "next/image";

export default function PartnerBannerSection() {
  const redirect = () => {
    window.history.back();
  };

  return (
    <div
      className="relative h-[780px] overflow-hidden rounded-bl-[80px] rounded-br-[80px] w-full bg-[#61BB5A] font-(family-name:--font-livvic)"
      data-name="Header"
    >
      {/* Background Ellipses */}
      <div className="absolute h-[400px] w-[400px] left-0 -bottom-25 rotate-15">
        <Image
          alt=""
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          src={whiteEllipsisBelow}
          fill
          priority
        />
      </div>

      <div className="absolute h-[400px] w-[400px] right-0 -top-10">
        <Image
          alt=""
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          src={whiteEllipsisAbove}
          fill
          priority
        />
      </div>

      {/* 🔑 CONTAINER IGUAL AO DA NAVBAR */}
      <div className="relative h-full w-[1274px] max-w-[calc(100vw-48px)] mx-auto">
        {/* Conteúdo */}
        <div
          className="absolute flex flex-col gap-[5px] items-start top-[120px] md:top-60"
          data-node-id="123:915"
        >
          <button
            className="border border-white rounded-[100px] cursor-pointer px-[18px] py-[5px] flex items-center gap-[15px] mb-[70px] hover:bg-white/10 transition-colors"
            onClick={redirect}
          >
            <div className="w-[21.172px] h-[21.172px] flex items-center justify-center">
              <ArrowLeft className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium text-[16px] text-white leading-normal">
              Voltar para lista
            </span>
          </button>

          <div className="font-normal leading-12 md:leading-16 text-[32px] md:text-[48px] text-white w-full md:w-[589px] whitespace-pre-wrap">
            <p className="mb-0">
              <span className="font-medium text-white">
                Conheça mais sobre
              </span>
            </p>
            <p className="font-medium whitespace-nowrap">Nosso parceiro</p>
          </div>

          <p className="font-semibold font-(family-name:--font-figtree) leading-[1.9] text-[16px] md:text-[20px] text-white whitespace-pre-wrap">
            Juntos, unimos forças para oferecer ainda mais qualidade, inovação
          </p>

          <p className="font-semibold leading-[1.2] font-(family-name:--font-figtree) text-[16px] md:text-[20px] text-white whitespace-pre-wrap">
            e confiança a você.
          </p>
        </div>
      </div>
    </div>
  );
}
