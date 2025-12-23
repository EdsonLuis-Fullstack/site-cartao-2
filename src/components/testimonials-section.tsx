"use client";

import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { Play, ArrowUpRight, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { useCallback, useState } from "react";
import { isMobile } from "react-device-detect";
import testimonial1 from "../../public/images/thumb-home-1.png";
import testimonial2 from "../../public/images/thumb-home-2.png";
import testimonial3 from "../../public/images/thumb-home-3.png";
import testimonial4 from "../../public/images/thumb-sobre.png";
import Link from "next/link";

interface Testimonial {
  id: string;
  name: string;
  occupation: string;
  location: string;
  quote: string;
  image: StaticImageData | string;
  videoUrl: string; 
  variant: "white" | "orange";
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "João Vitti, 56 anos",
    occupation: "Porteiro",
    location: "Ribeirão Preto",
    quote: "No mesmo dia em que fiz o cartão, já saí com a consulta do meu filho marcada. Hoje, minha família tem acesso à saúde de qualidade.",
    image: testimonial1,
    videoUrl: "https://www.youtube.com/watch?v=VFNmxpihQ3s",
    variant: "white",
  },
  {
    id: "2",
    name: "Lúcia Souza, 43 anos",
    occupation: "Auxiliar de almoxarifado",
    location: "Suzano",
    quote: "É um alívio poder contar com o Beneficiar. Desde o início, encontramos o cuidado e acompanhamento que meu filho precisa.",
    image: testimonial2,
    videoUrl: "https://www.youtube.com/watch?v=drN55qYIdXU",
    variant: "orange",
  },
  {
    id: "3",
    name: "Celeste, 60 anos",
    occupation: "Aposentada",
    location: "Piracicaba",
    quote: "Uma amiga do trabalho me indicou e não me arrependo. Consultas com médicos atenciosos, tudo por um preço pequenininho.",
    image: testimonial3,
    videoUrl: "https://www.youtube.com/watch?v=4_-oEeNuKHw",
    variant: "white",
  },
];


interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const isOrange = testimonial.variant === "orange";
  const [isPlaying, setIsPlaying] = useState(false);


  return (
    <div
      className={cn(
        "w-[325px] h-[480px] rounded-2xl px-[17px] py-5 flex flex-col gap-3 relative",
        isOrange ? "bg-[#f87315]" : "bg-white"
      )}
    >
      {/* Video thumbnail */}
      <div className="relative w-full h-[187px] rounded-lg overflow-hidden">
        {isPlaying ? (
  <iframe
    className="w-full h-full"
    src={`https://www.youtube.com/embed/${
      testimonial.videoUrl.split("v=")[1]
    }?autoplay=1`}
    allow="autoplay; encrypted-media"
    allowFullScreen
  />
) : (
  <>
    <Image
      src={testimonial.image}
      alt={`Depoimento de ${testimonial.name}`}
      fill
      className="object-cover"
      sizes="291px"
    />

    <div className="absolute inset-0 flex items-center justify-center">
      <button
        onClick={() => setIsPlaying(true)}
        className={cn(
          "w-[58px] h-[58px] rounded-full flex items-center justify-center transition-transform hover:scale-110",
          isOrange ? "bg-white bg-opacity-90" : "bg-black bg-opacity-50"
        )}
      >
        <Play
          className={cn(
            "w-6 h-6 ml-1",
            isOrange ? "text-[#f87315]" : "text-white"
          )}
          fill="currentColor"
        />
      </button>
    </div>
  </>
)}

      </div>

      {/* Quote section */}
      <div className="flex flex-col gap-6 flex-1 px-9">
        {/* Quote icon */}
        <div className="w-11 h-[27px]">
          <div
            className={cn(
              "text-4xl font-bold leading-none",
              isOrange ? "text-white" : "text-[#f87315]"
            )}
          >
            <Quote fill={isOrange ? "white" : "#f87315"} />
          </div>
        </div>

        {/* Quote text */}
        <p
          className={cn(
            "text-sm font-['Figtree'] font-medium leading-normal w-[249px]",
            isOrange ? "text-white" : "text-[#838383]"
          )}
        >
          {testimonial.quote}
        </p>
      </div>

      {/* Divider line */}
      <div
        className={cn("w-full h-px", isOrange ? "bg-white" : "bg-[#f87315]")}
      />

      {/* Author info */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="overflow-hidden">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={53}
            height={53}
            className="object-cover rounded-full w-[53px] h-[53px]"
          />
        </div>

        {/* Author details */}
        <div className="flex flex-col gap-1 flex-1">
          <p
            className={cn(
              "text-base font-bold font-['Figtree'] leading-normal",
              isOrange ? "text-white" : "text-[#151313]"
            )}
          >
            {testimonial.name}
          </p>
          <p
            className={cn(
              "text-base font-normal font-['Figtree'] leading-normal",
              isOrange ? "text-white" : "text-[#838383]"
            )}
          >
            {testimonial.occupation}, <br></br> {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}

interface TestimonialsSectionProps {
  className?: string;
}

export default function TestimonialsSection({
  className,
}: TestimonialsSectionProps) {
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  return (
    <section
      className={cn("relative w-full bg-[#61bb5a] py-20 px-6 font-(family-name:--font-figtree)", className)}
    >
      <div className="max-w-7xl w-full mx-auto">
        {/* Header with Navigation */}
        <div className="flex flex-col text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-medium font-['Figtree'] leading-tight text-white mb-8">
            Como o Beneficiar <br />
            transforma o dia a dia
          </h2>

          {/* Custom Navigation Buttons */}
          <div className="w-full flex items-center justify-center gap-16 hidden">
            <button
              onClick={scrollPrev}
              className="w-[58px] h-[58px] cursor-pointer border border-white rounded-full bg-transparent flex items-center justify-center"
            >
              <ArrowLeft className="size-5 text-white" />
            </button>
            <button
              onClick={scrollNext}
              className="w-[58px] h-[58px] cursor-pointer border border-white rounded-full bg-transparent flex items-center justify-center"
            >
              <ArrowRight className="size-5 text-white" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-2xl md:max-w-7xl mb-16 mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full max-w-xl lg:max-w-7xl mx-auto"
          >
            <CarouselContent className="flex max-w-[420px] md:max-w-7xl md:justify-center md:gap-[35px]">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-[35px] basis-full md:basis-[325px] shrink-0"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}

              {!isMobile && (
                <CarouselItem className="pl-[35px] basis-[35px] shrink-0">
                  <div className="w-[35px]" />
                </CarouselItem>
              )}
            </CarouselContent>
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
          href="http://checkout.cartaobeneficiar.com.br/"
          className="font-semibold leading-normal text-[14px] text-white"
          data-node-id="I295:2280;295:2269"
        >
          <button className="bg-white cursor-pointer text-[#f87315] px-20 py-4 rounded-full flex items-center gap-4 hover:shadow-lg transition-shadow">
            <span className="font-semibold text-lg uppercase">
             Quero contratar
            </span>
            <ArrowUpRight className="w-6 h-6" />
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
