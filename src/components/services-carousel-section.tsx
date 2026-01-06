"use client";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { isMobile } from "react-device-detect";
import { useCallback, useState } from "react";
import medical from "../../public/images/consultas-medicas.webp";
import dental from "../../public/images/consultas-odontologicas.webp";
import exams from "../../public/images/exames-laboratoriais.webp";
import atendimento from "../../public/images/atendimento.png";
import vacinas from "../../public/images/vacinasfamilia.jpg";
import Link from "next/link";
import { ReactNode } from "react";

interface ServiceCard {
  id: string;
  title: string;
  description: ReactNode;
  image: any;
  bgColor: "green" | "orange";
}


const services: ServiceCard[] = [
  {
    id: "1",
    title: "Consultas com especialistas",
    description: (
      <>
        Clínico geral gratuito e especialistas
        <br />
        a partir de R$ 25,00.
      </>
    ),
    image: medical,
    bgColor: "green",
  },
  {
    id: "2",
    title: "Consultas Odontológicas",
    description: "Descontos de até 50% em procedimentos odontológicos.",
    image: dental,
    bgColor: "orange",
  },
  {
    id: "3",
    title: "Exames Laboratoriais e de Imagem",
    description: "Até 70% de desconto em exames laboratoriais e de imagem.",
    image: exams,
    bgColor: "green",
  },
  {
    id: "4",
    title: "Assistência Funerária Familiar",
    description:
      "Cobertura nacional e sem burocracia, com apoio e tranquilidade nos momentos mais difíceis.",
    image: atendimento,
    bgColor: "orange",
  },
  {
    id: "5",
    title: "Vacinas para toda a família",
    description:
      "Descontos exclusivos em vacinas, com mais acesso e cuidado para todos.",
    image: vacinas,
    bgColor: "green",
  },
];


interface ServiceCardComponentProps {
  service: ServiceCard;
}

function ServiceCardComponent({ service }: ServiceCardComponentProps) {
  const bgColorClass =
    service.bgColor === "green" ? "bg-[#61bb5a]" : "bg-[#f87315]";
  const buttonColorClass =
    service.bgColor === "green" ? "bg-[#f87315]" : "bg-[#61bb5a]";

  return (
    <div
      className={cn(
        "w-[283px] h-[499px] rounded-2xl overflow-hidden relative shrink-0",
        bgColorClass
      )}
    >
      {/* Image */}
      <div className="absolute top-7 left-7 w-[225px] h-[203px] rounded-2xl overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="225px"
        />
      </div>

      {/* Content */}
      <div className="absolute top-[252px] left-7 w-[215px] text-white">
        <h3 className="text-[22px] font-medium mb-2 leading-tight">
          {service.title}
        </h3>
        <p className="text-base font-normal leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Button */}
      <Link
          href="http://checkout.cartaobeneficiar.com.br/"
          className="font-semibold leading-normal text-[14px] text-white"
          data-node-id="I295:2280;295:2269"
        >
      <button
        className={cn(
          "absolute bottom-[26px] left-7 flex items-center gap-4 px-[18px] py-[5px] h-[45px] rounded-full cursor-pointer",
          buttonColorClass
        )}
      >
        <span className="text-white text-base font-medium uppercase">
          SAIBA MAIS
        </span>
        <ArrowUpRight className="w-5 h-5 text-white" />
      </button>
      </Link>
    </div>
  );
}

interface ServicesCarouselSectionProps {
  className?: string;
}

export default function ServicesCarouselSection({
  className,
}: ServicesCarouselSectionProps) {
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  return (
    <section
      className={cn(
        "relative w-full flex flex-col font-(family-name:--font-figtree) items-center bg-white pb-20  px-6",
        className
      )}
    >
      {/* Main heading */}
      <div className="text-center mb-16 pb-10 font-['Manrope']">
        <h2 className="text-4xl md:text-5xl font-medium leading-tight max-w-xl mx-auto">
          <span className="text-black">O que sua família </span>
          <span className="text-[#61bb5a]">acessa com o Beneficiar</span>
        </h2>
      </div>

      {isMobile && (
        <div className="w-full flex items-center justify-center gap-16 mb-10">
          <button
            onClick={scrollPrev}
            className="w-[58px] h-[58px] cursor-pointer border border-[#f87315] rounded-full bg-transparent flex items-center justify-center"
          >
            <ArrowLeft className="size-5 text-[#f87315]" />
          </button>
          <button
            onClick={scrollNext}
            className="w-[58px] h-[58px] cursor-pointer border border-[#f87315] rounded-full bg-transparent flex items-center justify-center"
          >
            <ArrowRight className="size-5 text-[#f87315]" />
          </button>
        </div>
      )}

      {/* Carousel container */}
      <div className="max-w-2xl md:max-w-7xl mx-auto">
        <Carousel
          setApi={isMobile ? setApi : undefined}
          opts={{
            align: isMobile ? "start" : "center",
            loop: true,
            slidesToScroll: 1,
          }}
          className="w-full max-w-xl lg:max-w-7xl mx-auto"
        >
          <CarouselContent className="flex max-w-[420px] md:max-w-6xl md:gap-[35px]">
            {services.map((service) => (
              <CarouselItem
                key={service.id}
                className="pl-[35px] basis-full md:basis-[325px] shrink-0"
              >
                <ServiceCardComponent service={service} />
              </CarouselItem>
            ))}
            {!isMobile && (
              <CarouselItem className="pl-[35px] basis-[35px] shrink-0">
                <div className="w-[3px]" />
              </CarouselItem>
            )}
          </CarouselContent>

          {!isMobile && (
            <>
              <CarouselPrevious className="w-[58px] h-[58px] rounded-full bg-white border border-[#F87315] -left-4 md:-left-[84px]" />
              <CarouselNext className="w-[58px] h-[58px] rounded-full bg-white border border-[#F87315] -right-4 md:-right-[84px]" />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
}
