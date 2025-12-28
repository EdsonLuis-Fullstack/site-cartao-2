import Image from "next/image";
import happyWoman from "../../public/images/mulher-sorrindo.webp";
import happyGrandparents from "../../public/images/avos-sorrindo.webp";
import happyMan from "../../public/images/homem-sorrindo.webp";
import happyOlderWoman from "../../public/images/velha-sorrindo.webp";
import glassesChild from "../../public/images/crianca-oculos.webp";
import dentist from "../../public/images/dentista.webp";

export default function AboutHeroSection() {
  return (
    <div
      className="bg-[#fdfbf8] min-h-[669px] font-(family-name:--font-figtree) w-full py-[81px] "
      data-node-id="170:370"
    >
      <div
        className="flex items-start gap-0 max-w-[1274px] mx-auto "
        data-node-id="199:327"
      >
        {/* Images Section - Left Side */}
        <div
          className="relative h-[420px] w-[810px] shrink-0"
          data-node-id="199:328"
        >
          <div
            className="absolute left-24 rounded-[107px] size-[131px] top-[75px]"
            data-node-id="195:334"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[107px]">
              <Image
                alt=""
                className="absolute h-[162.27%] left-[-119.15%] max-w-none top-[-1.24%] w-[243.28%]"
                src={happyGrandparents}
                width={318}
                height={213}
              />
            </div>
          </div>
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.01990636996924877)+(var(--transform-inner-height)*0.9998018741607666)))] items-center justify-center left-[512px] top-[86px] w-[calc(1px*((var(--transform-inner-height)*0.01990636996924877)+(var(--transform-inner-width)*0.9998018741607666)))]">
            <div className="flex-none rotate-[358.859deg]">
              <div
                className="h-[117.467px] relative rounded-[116px] w-[116.8px]"
                data-node-id="388:499"
              >
                <div className="absolute inset-0 overflow-hidden rounded-[116px]">
                  <Image
                    alt=""
                    className="absolute h-[162.19%] left-[-40.64%] max-w-none top-[-6.02%] w-[244.64%]"
                    src={dentist}
                    width={286}
                    height={190}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute left-24 rounded-[110.5px] size-[115px] top-[230px]"
            data-node-id="195:337"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[110.5px]">
              <Image
                alt=""
                className="absolute h-[132.62%] left-[-24.99%] max-w-none top-0 w-[198.9%]"
                src={happyOlderWoman}
                width={229}
                height={153}
              />
            </div>
          </div>
          <div
            className="absolute left-[602px] rounded-[88px] size-[125px] top-[220px]"
            data-node-id="195:335"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[88px]">
              <Image
                alt=""
                className="absolute h-[113.23%] left-[-30.66%] max-w-none top-[-2.44%] w-[169.76%]"
                src={glassesChild}
                width={212}
                height={142}
              />
            </div>
          </div>
          <div
            className="absolute h-[154px] left-[283px] rounded-[88px] top-1 w-[155px]"
            data-node-id="195:356"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[88px]">
              <Image
                alt=""
                className="absolute h-full left-[-44.02%] max-w-none top-0 w-[188.05%]"
                src={happyWoman}
                width={291}
                height={154}
              />
            </div>
          </div>
          <div
            className="absolute left-[379px] rounded-[118px] size-[151px] top-[269px]"
            data-node-id="195:357"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[118px]">
              <Image
                alt=""
                className="absolute h-[155.71%] left-[-53.94%] max-w-none top-[-1.38%] w-[233.63%]"
                src={happyMan}
                width={353}
                height={235}
              />
            </div>
          </div>
        </div>

        {/* Content Section - Right Side */}
        <div
          className="flex flex-col gap-[29px] items-start text-black mt-[45px] w-[486px]"
          data-node-id="170:381"
        >
          <p
            className="font-medium leading-normal relative shrink-0 text-[48px] w-full whitespace-pre-wrap"
            data-node-id="170:382"
          >
            Nossa Missão
          </p>
          <div
            className="font-normal leading-normal relative shrink-0 text-[18px] w-full whitespace-pre-wrap"
            data-node-id="170:383"
          >
            <p className="mb-0">
              Cuidar da saúde não deveria ser difícil. Nem caro. Nem distante.
            </p>
            <p className="mb-0">
              <br aria-hidden="true" />
              Deveria ser simples, acessível e fazer parte do nosso dia a dia —
              como um gesto natural de quem se importa.
            </p>
            <p className="mb-0">
              Nascemos para democratizar o acesso à saúde de qualidade.
            </p>
            <p>
              <br aria-hidden="true" />
              Não somos apenas uma empresa de benefícios – somos agentes de
              mudança que tornam real, a cada dia, um mundo onde cuidar de quem
              amamos é simples e acessível.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
