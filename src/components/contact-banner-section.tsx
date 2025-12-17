import Image from "next/image";
import Art from "../../public/images/Arte.webp";

export default function ContactBannerSection() {
  return (
    <div
      className="h-[100vh] overflow-hidden relative font-(family-name:--font-livvic) rounded-bl-[80px] rounded-br-[80px] w-full bg-[#61BB5A]"
      data-name="Header"
    >
      <div
        className="absolute h-full w-[818px] right-90 top-40"
        data-name="Capa Home 4"
      >
        <Image
          alt=""
          className="w-full h-full object-contain pointer-events-none"
          src={Art}
          width={818}
          height={707}
          priority
        />
      </div>

      {/* Hero Content - Responsivo */}
      <div
        className="absolute flex flex-col gap-[5px] items-start left-4 md:left-[322px] top-[120px] md:top-80 px-4 md:px-0 max-w-[calc(100%-2rem)] md:max-w-none"
      >
        <div
          className="font-normal leading-12 md:leading-16 text-[32px] md:text-[48px] text-white w-full md:w-[589px] whitespace-pre-wrap"
        >
          <p className="mb-0">
            <span className="font-medium text-white">Vamos conversar?</span>
          </p>
        </div>
        <p
          className="font-semibold font-(family-name:--font-figtree) leading-[1.9] text-[16px] md:text-[20px] text-white w-full whitespace-pre-wrap"
        >
          Estamos aqui para tirar suas dúvidas e encontrar
        </p>
        <p
          className="font-semibold leading-1.5 text-[16px] md:text-[20px] text-white w-full whitespace-pre-wrap"
          data-node-id="123:917"
        >
          a melhor forma de cuidar de você
        </p>
      </div>
    </div>
  );
}
