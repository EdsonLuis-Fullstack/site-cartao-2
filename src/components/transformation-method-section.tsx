import Image from "next/image";
import aboutRetangle from "../../public/images/about-retangulo.webp";
import car from "../../public/images/car.webp";
import family from "../../public/images/family.webp";
import heart from "../../public/images/coracao.webp";
import conection from "../../public/images/conexao.webp";
import clock from "../../public/images/relogio.webp";

export default function TransformationMethodSection() {
  return (
    <section className="bg-white py-24 px-4 font-(family-name:--font-figtree)">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center -mb-8">
          <h2 className="text-center text-black text-[48px] font-medium leading-tight">
            Nossa Forma de
          </h2>
          <span className="text-[#61bb5a] text-[48px] font-medium">
            Transformar
          </span>
        </div>

        <div className="relative z-20">
          <div className="relative">
            <Image
              src={family}
              alt="Família feliz"
              width={290}
              height={400}
              className="absolute w-[290px] h-auto left-30 -top-20 z-10"
            />
          </div>
          <div className="relative">
            <Image
              src={car}
              alt="Carro"
              width={146}
              height={97}
              className="absolute right-66 -top-13 -rotate-24 w-[146px] h-auto hidden lg:block z-10"
            />
          </div>
          <Image
            src={aboutRetangle}
            alt="Retângulo decorativo"
            width={1200}
            height={600}
            className="w-full h-auto mt-16 px-17 z-0"
          />
        </div>

        <div className="flex gap-[60px] -mt-30 z-50 relative justify-center items-start flex-wrap lg:flex-nowrap">
          <div className="bg-[#fdfbf8] rounded-[20px] p-[49px_59px] w-[343px] h-[418px] flex flex-col">
            <div className="flex p-2 justify-center h-[203px] ">
              <Image
                src={clock}
                alt="Ícone de relógio"
                width={192}
                height={103}
                className="mx-auto w-48 mb-6"
              />
            </div>
            <div className="text-center flex-1 flex flex-col gap-5">
              <h3 className="text-[#f87315] text-[22px] font-medium leading-tight">
                Agilizamos
                <br />
                processos
              </h3>
              <p className="text-black text-[14px] font-normal">
                Eliminamos carências que impedem cuidado imediato
              </p>
            </div>
          </div>

          <div className="bg-[#fdfbf8] rounded-[20px] p-[39px_59px] w-[344px] h-[418px] flex flex-col">
            <div className="flex p-2 justify-center h-[203px] ">
              <Image
                src={conection}
                alt="Ícone de conexão"
                width={192}
                height={103}
                className="mx-auto w-48 mb-6"
              />
            </div>
            <div className="text-center flex-1 flex flex-col gap-5">
              <h3 className="text-[#61bb5a] text-[22px] font-medium leading-tight">
                Democratizamos acesso
              </h3>
              <p className="text-black text-[14px] font-normal">
                Levamos saúde de qualidade para famílias paulistas que mais
                precisam
              </p>
            </div>
          </div>

          <div className="bg-[#fdfbf8] rounded-[20px] p-[39px_59px] w-[343px] h-[418px] flex flex-col">
            <div className="flex p-2 justify-center h-[203px] ">
              <Image
                src={heart}
                alt="Ícone de coração"
                width={192}
                height={103}
                className="mx-auto w-48 mb-6"
              />
            </div>

            <div className="text-center flex-1 flex flex-col gap-5">
              <h3 className="text-[#f87315] text-[22px] font-medium leading-tight">
                Humanizamos cuidado
              </h3>
              <p className="text-black text-[14px] font-normal">
                Preços claros, processos simples, atendimento que enxerga
                pessoas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
