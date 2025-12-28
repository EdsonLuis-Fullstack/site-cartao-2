import { ArrowRight } from "lucide-react";
import Image from "next/image";
import womanCard from "../../public/images/mulher-segurando-cartao.webp";
import aboutEllipse from "../../public/images/about-ellipse.webp";
import Link from "next/link";

export default function AboutBannerSection() {
  return (
    <div
      className="relative h-[780px] w-full overflow-hidden rounded-bl-[80px] rounded-br-[80px] bg-[#61BB5A] font-(family-name:--font-livvic)"
      data-name="Header"
    >
      {/* Container alinhado exatamente como a NavBar */}
      <div className="relative h-full w-[1274px] max-w-[calc(100vw-48px)] mx-auto">
        
        {/* Background Ellipse */}
        <div className="absolute w-[1066px] h-[1000px] right-[-150px] -top-0 pointer-events-none">
          <Image
            alt=""
            src={aboutEllipse}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Background Image */}
        <div className="absolute h-[707px] w-[1000px] right-[-150px] top-30 pointer-events-none">
          <Image
            alt=""
            src={womanCard}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div
          className="
            absolute
            left-0
            top-[120px]
            md:top-60
            flex
            flex-col
            gap-[5px]
            items-start
            px-4
            md:px-0
            max-w-[calc(100%-2rem)]
          "
        >
          <div className="text-white w-full md:w-[589px] whitespace-pre-wrap">
            <p className="text-[32px] md:text-[64px] leading-12 md:leading-16 font-medium">
              Acreditamos que saúde é
              direito,<br />não privilégio.
            </p>
          </div>

          <p className="font-semibold mt-2.5 font-(family-name:--font-figtree) text-[16px] md:text-[20px] text-white leading-[1.9]">
            Por isso, criamos soluções que quebram barreiras
          </p>

          <p className="font-semibold font-(family-name:--font-figtree) text-[16px] md:text-[20px] text-white">
            e abrem caminhos
          </p>

          <Link href="http://checkout.cartaobeneficiar.com.br/">
            <button
              className="
                mt-7
                flex
                h-[45px]
                items-center
                gap-[15px]
                rounded-[100px]
                bg-[#f87315]
                px-[18px]
                py-[5px]
                cursor-pointer
              "
            >
              <span className="text-[20px] font-medium uppercase text-white whitespace-nowrap">
                SOLICITE SEU CARTÃO
              </span>
              <ArrowRight className="size-5 text-white" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
