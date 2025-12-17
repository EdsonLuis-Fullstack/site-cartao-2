import { ArrowRight } from "lucide-react";
import Image from "next/image";
import bannerCompany from "../../public/images/banner-company.webp";

export default function CompanyBannerSection() {
  return (
    <div
      className="h-[780px] overflow-hidden relative font-(family-name:--font-livvic) rounded-bl-[80px] rounded-br-[80px] w-full"
      data-name="Header"
    >
      <div
        className="absolute h-[837px] w-full"
        data-name="Capa Home 4"
        data-node-id="123:910"
      >
        <Image
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={bannerCompany}
          width={1954}
          height={837}
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(59.42% 59.44% at 67.97% 51.73%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 77.4%)",
          }}
        />
      </div>

      <div
        className="absolute flex flex-col gap-[5px] items-start left-4 md:left-[322px] top-[120px] md:top-60 px-4 md:px-0 max-w-[calc(100%-2rem)] md:max-w-none"
        data-node-id="123:915"
      >
        <div
          className="font-normal leading-12 md:leading-16 text-[32px] md:text-[48px] text-white w-full md:w-[589px] whitespace-pre-wrap"
          data-node-id="123:916"
        >
          <p className="mb-0">
            <span className="font-medium text-white">
              Saúde acessível para sua equipe. Valor real para sua empresa.
            </span>
            <span className="font-normal"> </span>
          </p>
        </div>
        <p
          className="font-semibold leading-[1.9] text-[16px] font-(family-name:--font-figtree) md:text-[20px] text-white w-full whitespace-pre-wrap"
          data-node-id="123:917"
        >
          Sem carência. Família incluída. Preços que cabem no bolso.
        </p>
      </div>
    </div>
  );
}
