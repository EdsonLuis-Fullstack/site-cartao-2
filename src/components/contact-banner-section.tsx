import Image from "next/image";
import Art from "../../public/images/Arte.webp";

export default function ContactBannerSection() {
  return (
    <div
      className="h-[100vh] overflow-hidden relative font-(family-name:--font-livvic) rounded-bl-[80px] rounded-br-[80px] w-full bg-[#61BB5A]"
      data-name="Header"
    >
      {/* Arte lateral */}
      <div
        className="absolute h-full w-[818px] right-90 top-49"
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

      {/* CONTAINER ALINHADO À NAVBAR */}
      <div className="relative h-full w-[1274px] max-w-[calc(100vw-48px)] mx-auto">
        {/* Conteúdo */}
        <div
          className="absolute flex flex-col gap-[5px] items-start top-[120px] md:top-80 px-6 md:px-0 max-w-[calc(100%-2rem)] md:max-w-none"
        >
          <div
            className="font-normal text-white w-full md:w-[589px] whitespace-pre-wrap"
            style={{
              fontSize: "clamp(2.5rem, 6vw + 0.5rem, 4rem)",
              lineHeight: "clamp(3rem, 7vw, 5rem)",
            }}
          >
            <p className="mb-0">
              <span className="font-medium text-white">
                Vamos conversar?
              </span>
            </p>
          </div>

          <p
            className="font-semibold font-(family-name:--font-figtree) text-white w-full whitespace-pre-wrap"
            style={{
              fontSize: "clamp(1.25rem, 2.5vw + 0.5rem, 1.75rem)",
              lineHeight: "clamp(1.75rem, 3.5vw, 2.25rem)",
            }}
          >
            Estamos aqui para tirar suas dúvidas e encontrar
          </p>

          <p
            className="font-semibold text-white w-full whitespace-pre-wrap"
            style={{
              fontSize: "clamp(1.25rem, 2.5vw + 0.5rem, 1.75rem)",
              lineHeight: "clamp(1.75rem, 3.5vw, 2.25rem)",
            }}
          >
            a melhor forma de cuidar de você
          </p>
        </div>
      </div>
    </div>
  );
}
