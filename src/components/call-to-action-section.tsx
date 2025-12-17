import Image from "next/image";
import paciente from "../../public/images/paciente-e-enfermeira.webp";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="bg-[#fdfbf8] py-16 px-4 font-(family-name:--font-figtree)">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Container */}
        <div className="relative w-full max-w-[1154px] mx-auto h-[538px] rounded-[20px] overflow-hidden">
          {/* Top layer - Main healthcare image */}
          <div className="absolute inset-0 -left-[104px] -top-[42px] w-[1532px] h-[854px]">
            <Image
              src={paciente}
              alt="Paciente em casa de repouso"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />{" "}
          {/* Content */}
          <div className="absolute top-[65px] left-[80px] w-[470px] flex flex-col gap-[24px] z-10">
            {/* Title */}
            <h2 className="text-white text-[48px] font-medium leading-[58px]">
              Faça Parte Dessa Mudança
            </h2>

            {/* Description */}
            <p className="text-white text-[18px] font-normal w-[429px] leading-normal">
              Sua família pode ser a próxima a descobrir como cuidar da saúde
              pode ser simples.
            </p>

            {/* CTA Button */}
            <Link
          href="http://checkout.cartaobeneficiar.com.br/"
          data-node-id="245:675"
                  >
            <button className="border border-white cursor-pointer rounded-full px-[29px] py-[14px] flex items-center gap-[15px] w-fit hover:bg-white/10 transition-colors group">
              <span className="text-white text-[16px] font-semibold uppercase text-center w-[223px]">
                Transforme Seu Cuidado
              </span>
              <ArrowRight className="size-6 text-white -rotate-45" />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
