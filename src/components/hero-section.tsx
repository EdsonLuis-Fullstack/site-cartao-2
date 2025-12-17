import Image from "next/image";
import bannerHome from "../../public/images/banner-beneficiar.webp";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-[#f3f2f2] w-full">
      <div
        className="h-[780px] overflow-hidden relative rounded-bl-[80px] rounded-br-[80px] w-full"
        data-name="Header"
      >
        {/* Background Image */}
        <div
          className="absolute h-[837px] w-full"
          data-name="Capa Home 4"
          data-node-id="123:910"
        >
          <Image
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src={bannerHome}
            width={1954}
            height={837}
            priority
          />
        </div>

        {/* Hero Content - Responsivo */}
        <div
          className="absolute flex flex-col gap-[5px] items-start left-4 md:left-[322px] top-[120px] md:top-[189px] px-4 md:px-0 max-w-[calc(100%-2rem)] md:max-w-none"
          data-node-id="123:915"
        >
          <div
            className="font-normal font-(family-name:--font-livvic) leading-12 md:leading-16 text-[32px] md:text-[48px] text-white w-full md:w-[589px] whitespace-pre-wrap"
            data-node-id="123:916"
          >
            <p className="mb-0">
              <span className="text-white">O Melhor Cartão de Benefícios</span>
              <span className="font-normal"> </span>
              <span>{`em Saúde `}</span>
            </p>
            <p>para Toda Família</p>
          </div>
          <p
            className="font-semibold font-(family-name:--font-figtree) leading-[1.9] text-[16px] md:text-[20px] text-white w-full whitespace-pre-wrap"
            data-node-id="123:917"
          >
            Cuidar de si é cuidar de todos
          </p>

          {/* Stats Cards */}
          <div
            className="flex flex-col sm:flex-row gap-[15px] sm:gap-[23px] items-start sm:items-center w-full"
            data-node-id="123:918"
          >
            <div
              className="backdrop-blur-[6px] font-(family-name:--font-figtree) bg-[#F8731538] flex h-32 items-start px-3 py-[9px] rounded-[10px] w-[140px]"
              data-name="Section"
              data-node-id="123:919"
            >
              <div
                className="flex flex-1 flex-col items-start text-white"
                data-node-id="123:920"
              >
                <p
                  className="font-semibold leading-normal text-[36px] uppercase whitespace-pre-wrap"
                  data-node-id="123:921"
                >
                  +1M
                </p>
                <div
                  className="font-normal leading-tight -mt-2 font-(family-name:--font-figtree) text-[20px] w-[172px] whitespace-pre-wrap"
                  data-node-id="123:922"
                >
                  <p className="mb-0">Famílias</p>
                  <p className="mb-0">Atendidas</p>
                </div>
              </div>
            </div>
            <div
              className="backdrop-blur-[6px] font-(family-name:--font-figtree) bg-[#F8731538] flex h-32 items-start px-3 py-[9px] rounded-[10px] w-[140px]"
              data-name="Section"
              data-node-id="123:923"
            >
              <div
                className="flex flex-1 flex-col items-start leading-normal text-white whitespace-pre-wrap"
                data-node-id="123:924"
              >
                <p
                  className="font-semibold text-[36px] uppercase"
                  data-node-id="123:925"
                >
                  +15
                </p>
                <div
                  className="font-normal leading-tight -mt-2 font-(family-name:--font-figtree) text-[20px] w-[172px] whitespace-pre-wrap"
                  data-node-id="123:926"
                >
                  <p className="mb-0">Anos de</p>
                  <p className="mb-0">Experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons - Responsivo */}
        <div
          className="absolute font-(family-name:--font-figtree) flex flex-col sm:flex-row gap-[15px] sm:gap-[19px] items-start sm:items-center left-4 md:left-[323px] top-[480px] md:top-[595px] w-[calc(100%-2rem)] sm:w-auto max-w-[499.4px]"
          data-name="Button"
          data-node-id="123:927"
        >
          <Link href="http://checkout.cartaobeneficiar.com.br/">
          <button
            className="bg-[#f87315] cursor-pointer flex gap-[15px] h-[45px] items-center justify-center p-2.5 rounded-[100px] w-full sm:w-[220px]"
            data-node-id="123:928"
          >
            <p
              className="font-medium leading-normal text-[16px] text-white uppercase"
              data-node-id="123:929"
            >
              adquirir cartão
            </p>
            <div className="flex h-[21.172px] items-center justify-center w-[21.172px]">
              <ArrowRight className="w-[21.172px] h-[21.172px] text-white" />
            </div>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
