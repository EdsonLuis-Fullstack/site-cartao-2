import Image from "next/image";
import bannerHome from "../../public/images/banner-beneficiar.webp";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-[#f3f2f2] w-full">
      <div className="h-[780px] overflow-hidden relative rounded-bl-[80px] rounded-br-[80px] w-full">
        {/* Background Image */}
        <div className="absolute h-[837px] w-full">
          <Image
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src={bannerHome}
            width={1954}
            height={837}
            priority
          />
        </div>

        {/* CONTAINER ALINHADO COM A NAVBAR */}
        <div className="relative mx-auto w-[1274px] max-w-[calc(100vw-48px)] h-full">
          
          {/* Hero Content */}
          <div className="absolute flex flex-col gap-[5px] items-start top-[120px] md:top-[189px]">
            <div className="font-normal font-(family-name:--font-livvic) leading-12 md:leading-16 text-[32px] md:text-[48px] text-white w-full md:w-[589px] whitespace-pre-wrap">
              <p className="mb-0">
                <span>O Melhor Cartão de Benefícios</span>{" "}
                <span>{`em Saúde `}</span>
              </p>
              <p>para Toda Família</p>
            </div>

            <p className="font-semibold font-(family-name:--font-figtree) leading-[1.9] text-[16px] md:text-[20px] text-white">
              Cuidar de si é cuidar de todos
            </p>

            {/* Stats Cards */}
            <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-[23px] items-start sm:items-center">
              <div className="backdrop-blur-[6px] bg-[#F8731538] flex h-32 items-start px-3 py-[9px] rounded-[10px] w-[140px]">
                <div className="flex flex-col text-white">
                  <p className="font-semibold text-[36px] uppercase">+1M</p>
                  <div className="font-normal leading-tight -mt-2 text-[20px]">
                    <p className="mb-0">Famílias</p>
                    <p className="mb-0">Atendidas</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-[6px] bg-[#F8731538] flex h-32 items-start px-3 py-[9px] rounded-[10px] w-[140px]">
                <div className="flex flex-col text-white">
                  <p className="font-semibold text-[36px] uppercase">+15</p>
                  <div className="font-normal leading-tight -mt-2 text-[20px]">
                    <p className="mb-0">Anos de</p>
                    <p className="mb-0">Experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="absolute top-[480px] md:top-[595px]">
            <Link href="http://checkout.cartaobeneficiar.com.br/">
              <button className="bg-[#f87315] cursor-pointer flex gap-[15px] h-[45px] items-center justify-center p-2.5 rounded-[100px] w-[220px]">
                <p className="font-medium text-[16px] text-white uppercase">
                  adquirir cartão
                </p>
                <div className="w-[21px] h-[21px] flex items-center justify-center">
                  <ArrowRight className="w-[21px] h-[21px] text-white" />
                </div>
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
