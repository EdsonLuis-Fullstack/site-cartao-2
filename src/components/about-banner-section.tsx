import { ArrowRight } from "lucide-react";
import Image from "next/image";
import womanCard from "../../public/images/mulher-segurando-cartao.webp";
import aboutEllipse from "../../public/images/about-ellipse.webp";
import Link from "next/link";

export default function AboutBannerSection() {
  return (
    <div
      className="h-[780px] font-(family-name:--font-livvic) overflow-hidden relative rounded-bl-[80px] rounded-br-[80px] w-full bg-[#61BB5A]"
      data-name="Header"
    >
      {/* Background Ellipse */}
      <div
        className="absolute w-[1066px] h-[1066px] right-20 -top-10"
        data-name="Ellipse"
        data-node-id="123:910"
      >
        <Image
          alt=""
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          src={aboutEllipse}
          fill
          priority
        />
      </div>
      {/* Background Image */}
      <div
        className="absolute h-[707px] w-[1063px] right-20 top-30"
        data-name="Capa Home 4"
        data-node-id="123:910"
      >
        <Image
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={womanCard}
          fill
          priority
        />
      </div>

      {/* Hero Content - Responsivo */}
      <div
        className="absolute flex flex-col gap-[5px] items-start left-4 md:left-[322px] top-[120px] md:top-60 px-4 md:px-0 max-w-[calc(100%-2rem)] md:max-w-none"
        data-node-id="123:915"
      >
        <div
          className="font-normal leading-12 md:leading-16 text-[32px] md:text-[64px] text-white w-full md:w-[589px] whitespace-pre-wrap"
          data-node-id="123:916"
        >
          <p className="mb-0">
            <span className="font-medium text-white">
              Acreditamos que saúde é
            </span>
            <span className="font-normal"> </span>
          </p>
          <p className="font-medium">direito, não privilégio.</p>
        </div>
        <p
          className="font-semibold leading-[1.9] text-[16px] font-(family-name:--font-figtree) md:text-[20px] text-white w-full whitespace-pre-wrap"
          data-node-id="123:917"
        >
          Por isso, criamos soluções que quebram barreiras
        </p>
        <p
          className="font-semibold leading-normal text-[16px] md:text-[20px] font-(family-name:--font-figtree) text-white w-full whitespace-pre-wrap"
          data-node-id="123:917"
        >
          e abrem caminhos
        </p>
        <Link
          href="http://checkout.cartaobeneficiar.com.br/"
          data-node-id="245:675"
                  >
        <button
          className="bg-[#f87315] cursor-pointer mt-7 flex gap-[15px] h-[45px] w-[149px] items-center px-[18px] py-[5px] rounded-[100px] sm:w-auto"
          data-node-id="123:933"
        >
          <p
            className="font-medium leading-normal text-[20px] text-white uppercase"
            data-node-id="123:934"
          >
            saiba mais
          </p>
          <ArrowRight className="text-white size-5" />
        </button>
        </Link>
      </div>
    </div>
  );
}
