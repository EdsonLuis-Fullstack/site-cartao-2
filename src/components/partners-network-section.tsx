"use client";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import handWithCard from "../../public/images/mao-cartao.png";
import qualityImage from "../../public/images/plaqueta-medica.webp";
import pharmacyImage from "../../public/images/maos-apertadas.webp";
import leisureImage from "../../public/images/pipoca.webp";
import educationImage from "../../public/images/livro.webp";
import petsImage from "../../public/images/pote-racao.webp";
import moreServicesImage from "../../public/images/simbolo-medico.webp";
import mobileApp from "../../public/images/app-celular.webp";
import { PartnersCarousel } from "./ui/partners-carousel";
import { isMobile } from "react-device-detect";
import ellipseLaranja from "../../public/images/home-ellipse-laranja.webp";
import ellipseVerde from "../../public/images/home-ellipse-verde.webp";
import Link from "next/link";

interface PartnerCard {
  title: string;
  description: string;
  image: StaticImageData;
  variant: "large" | "small";
}

const partnerCards: PartnerCard[] = [
  {
    title: "Atendimento de qualidade",
    description:
      "Clínicas, laboratórios e consultórios escolhidos com cuidado - porque sabemos que agilidade é fundamental quando se trata de saúde.",
    image: qualityImage,
    variant: "large",
  },
  {
    title: "Parceiros de qualidade",
    description:
      "Parceria com diversas farmácias do Brasil - descontos especiais em medicamentos e produtos de saúde.",
    image: pharmacyImage,
    variant: "large",
  },
  {
    title: "Lazer",
    description: "Entretenimento para toda família.",
    image: leisureImage,
    variant: isMobile ? "large" : "small",
  },
  {
    title: "Educação",
    description: "Investimento no futuro dos seus filhos.",
    image: educationImage,
    variant: isMobile ? "large" : "small",
  },
  {
    title: "Pets",
    description: "Cuidado também para seus companheiros de quatro patas.",
    image: petsImage,
    variant: isMobile ? "large" : "small",
  },
  {
    title: "E muito mais...",
    description: "Benefícios que se adaptam à sua região.",
    image: moreServicesImage,
    variant: isMobile ? "large" : "small",
  },
];

interface PartnerCardComponentProps {
  card: PartnerCard;
}

function PartnerCardComponent({ card }: PartnerCardComponentProps) {
  if (card.variant === "large") {
    return (
      <div className="bg-white border border-gray-100 rounded-lg h-[233px] w-[420px] md:h-[233px] md:w-[479px] overflow-hidden relative">
        <div className="absolute left-8 top-8 w-[155px]">
          <h3 className="text-[#f87315] text-lg font-extrabold leading-[18px] mb-5">
            {card.title}
          </h3>
          <p className="text-gray-600 text-sm font-medium leading-normal">
            {card.description}
          </p>
        </div>
        <div className="absolute right-8 top-12 w-[137px] h-[137px]">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
            sizes="137px"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-lg h-[338px] w-[230px] overflow-hidden relative">
      <div className="absolute left-8 top-8 w-[174px]">
        <h3 className="text-[#f87315] text-xl font-extrabold mb-5 leading-tight">
          {card.title}
        </h3>
        <p className="text-gray-600 text-base font-medium leading-normal">
          {card.description}
        </p>
      </div>
      <div className="absolute bottom-8 left-8 right-8 h-[140px]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-contain"
          sizes="174px"
        />
      </div>
    </div>
  );
}

interface PartnersNetworkSectionProps {
  className?: string;
}

export default function PartnersNetworkSection({
  className,
}: PartnersNetworkSectionProps) {
  return (
    <section
      className={cn(
        "relative w-full bg-[#f3f2f2] font-(family-name:--font-figtree) py-20 px-6 overflow-hidden",
        className
      )}
    >
      {/* Background decorative elements */}
      <div className="absolute -left-[170px] top-1/2 w-[608px] h-[608px]">
        <Image
          src={ellipseLaranja}
          alt="Elemento decorativo laranja"
          fill
          className="object-contain"
          sizes="608px"
        />
      </div>
      <div className="absolute -right-[150px] -top-[95px] w-[488px] h-[488px]">
        <Image
          src={ellipseVerde}
          alt="Elemento decorativo verde"
          fill
          className="object-contain"
          sizes="488px"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium flex flex-col items-center leading-tight max-w-4xl mx-auto">
            <span className="text-black">Nossa rede de parceiros </span>
            <span className="text-[#61bb5a]">fortalece seu cuidado</span>
          </h2>
        </div>

        {/* Hero section with hand holding card */}
        <div className="relative flex flex-col">
          <div className="flex justify-center relative">
            <Image
              src={handWithCard}
              alt="Mão segurando cartão Beneficiar"
              width={657}
              height={496}
              className="object-contain"
            />
          </div>

          {/* Central message banner */}
          <div className=" bg-[#f87315] rounded-lg px-[87px] py-4 max-w-[685px] min-h-[100px] w-full mx-auto">
            <p className="text-white text-lg font-['Figtree'] font-medium text-center leading-snug shrink-0">
              Mais que saúde: bem-estar completo para sua família. Parceiros em
              medicamentos, assistência, empresas e benefícios que vão além do
              consultório.
            </p>
          </div>
        </div>

        {/* Partner benefits grid */}
        <div className="mb-16 pt-16">
          <div className="flex flex-col gap-5 items-center">
            {/* Top row - large cards */}
            <div className="flex flex-col items-center md:flex-row gap-5">
              <PartnerCardComponent card={partnerCards[0]} />
              <PartnerCardComponent card={partnerCards[1]} />
            </div>

            {/* Bottom row - small cards */}
            <div className="flex flex-col items-center md:flex-row gap-5">
              {partnerCards.slice(2).map((card, index) => (
                <PartnerCardComponent key={index + 2} card={card} />
              ))}
            </div>
          </div>

          {/* View all partners button */}
          <div className="flex justify-center mt-12">
            <Link
          href="/partners"
          className="font-semibold leading-normal text-[14px] text-white"
          data-node-id="I295:2280;295:2269"
        >
            <button className="bg-[#f87315] cursor-pointer text-white px-[60px] py-3.5 rounded-full flex items-center gap-4 hover:bg-[#e65a00] transition-colors">
              <span className="font-semibold text-base uppercase">
                VER TODOS OS PARCEIROS
              </span>
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </Link>
          </div>
        </div>

        {/* Partner logos carousel */}
        <div className="mb-44">
          <PartnersCarousel />
        </div>

        {/* Bottom CTA section */}
        <div
          className="rounded-2xl relative z-10 w-[969px] h-[257px] mx-auto flex items-center"
          style={{
            background:
              "radial-gradient(127.08% 70.29% at 71.38% 38.57%, rgba(97, 187, 90, 0.80) 0%, #61BB5A 75.02%)",
          }}
        >
          <div className="flex items-center w-full">
            <div className="flex-1 p-16 max-w-[515px]">
              <h3 className="text-white text-5xl font-medium font-['Figtree'] leading-tight mb-6">
                <p className="whitespace-nowrap">Descubra mais sobre </p>
                <p className="whitespace-nowrap">nossa rede de cuidado</p>
              </h3>
              <Link
          href="http://checkout.cartaobeneficiar.com.br/"
          className="font-semibold leading-normal text-[14px] text-white"
          data-node-id="I295:2280;295:2269"
        >
              <button className="bg-[#f87315] cursor-pointer text-white px-8 py-4 rounded-full flex items-center gap-4 hover:bg-[#e65a00] transition-colors">
                <span className="font-semibold text-base uppercase">
                  QUERO PROTEGER QUEM EU AMO
                </span>
                <ArrowUpRight className="w-6 h-6" />
              </button>
              </Link>
            </div>
            {!isMobile && (
              <div className="absolute right-28 -top-[74px] z-50">
                <Image
                  src={mobileApp}
                  width={225}
                  height={332}
                  alt="App Beneficiar no celular"
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}