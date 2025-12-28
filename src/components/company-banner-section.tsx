import { ArrowRight } from "lucide-react";
import Image from "next/image";
import bannerCompany from "../../public/images/banner-company.webp";

export default function CompanyBannerSection() {
  return (
    <div
      className="relative h-[780px] overflow-hidden font-(family-name:--font-livvic) rounded-bl-[80px] rounded-br-[80px] w-full"
      data-name="Header"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={bannerCompany}
          width={1954}
          height={837}
          priority
        />

        {/* Overlay leve ~10% */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Gradiente radial (mantido exatamente igual) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(59.42% 59.44% at 67.97% 51.73%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.45) 77.4%)",
          }}
        />
      </div>

      {/* CONTAINER IGUAL AO DA NAVBAR */}
      <div className="relative h-full w-[1274px] max-w-[calc(100vw-48px)] mx-auto">
        {/* Conteúdo */}
        <div
          className="absolute flex flex-col gap-[5px] items-start top-[120px] md:top-60"
          data-node-id="123:915"
        >
          <div
            className="font-normal leading-8 md:leading-16 text-[32px] md:text-[48px] text-white w-full md:w-[589px] whitespace-pre-wrap"
            data-node-id="123:916"
          >
            <p className="mb-0">
              <span className="tracking-tight font-medium text-white">
                Saúde acessível para sua equipe. Valor real para<br />
                sua empresa.
              </span>
            </p>
          </div>

          <p
            className="font-bold leading-[1.9] text-[16px] md:text-[20px] font-(family-name:--font-figtree) text-white whitespace-pre-wrap drop-shadow-sm"
            data-node-id="123:917"
          >
            Sem carência. Família incluída. Preços que cabem no bolso.
          </p>
        </div>
      </div>
    </div>
  );
}
