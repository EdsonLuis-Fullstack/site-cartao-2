import { ArrowRight } from "lucide-react";
import Image from "next/image";
import cardOnHand from "../../public/images/cartao-na-mao.webp";
import approvedContract from "../../public/images/contrato-certo.webp";
import agreement from "../../public/images/acordo.webp";
import bagDiscount from "../../public/images/sacola-desconto.webp";
import Link from 'next/link';

export default function HowToStartSection() {
  return (
    <section className="bg-[#ededed] relative w-full min-h-[785px] px-4 py-20 font-(family-name:--font-figtree)">
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[78px] w-[458px] text-center">
        <h2 className="font-medium text-[48px] text-black mb-[29px] leading-normal tracking-tight">
          Como começar?
        </h2>
        <p className="font-normal text-[18px] text-black leading-normal tracking-tight">
          O passo a passo para ter o Beneficiar na sua empresa.
        </p>
      </div>

      <div className="flex justify-center mt-[180px]">
        <div className="flex gap-5 flex-col items-center justify-center md:flex-row">
          <div className="bg-white border border-[#f7f7f7] rounded-[10px] w-[230px] h-[338px] relative overflow-hidden">
            <div className="absolute left-[68.5px] top-[24px] w-[94px] h-[141px]">
              <Image
                src={approvedContract}
                alt="A empresa contrata o pacote"
                fill
                className="object-cover"
                sizes="94px"
              />
            </div>
            <div className="absolute left-[25.5px] top-[169px] w-[180px] text-center">
              <h3 className="font-extrabold text-[20px] text-[#f87315] mb-[20px] h-[48px] leading-normal tracking-tight">
                A empresa contrata o pacote
              </h3>
              <p className="font-medium text-[14px] text-[dimgrey] leading-normal tracking-tight">
                Contrata o pacote ideal para sua equipe.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-[#f7f7f7] rounded-[10px] w-[230px] h-[338px] relative overflow-hidden">
            <div className="absolute left-[56.5px] top-[33px] w-[106px] h-[102px]">
              <Image
                src={cardOnHand}
                alt="Colaboradores recebem cartões"
                fill
                className="object-cover"
                sizes="106px"
              />
            </div>
            <div className="absolute left-[25.5px] top-[169px] w-[180px] text-center">
              <h3 className="font-extrabold text-[20px] text-[#f87315] mb-[20px] h-[48px] leading-normal tracking-tight">
                Colaboradores recebem cartões
              </h3>
              <p className="font-medium text-[14px] text-[dimgrey] leading-normal tracking-tight">
                Entregue na empresa ou retiram no escritório mais próximo.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-[#f7f7f7] rounded-[10px] w-[230px] h-[338px] relative overflow-hidden">
            <div className="absolute left-[70.5px] top-[53px] w-[89px] h-[86px]">
              <Image
                src={agreement}
                alt="Agendam direto com os parceiros"
                fill
                className="object-cover"
                sizes="89px"
              />
            </div>
            <div className="absolute left-[25.5px] top-[169px] w-[180px] text-center">
              <h3 className="font-extrabold text-[20px] text-[#f87315] mb-[20px] h-[48px] leading-normal tracking-tight">
                Agendam direto com os parceiros.
              </h3>
              <p className="font-medium text-[14px] text-[dimgrey] leading-normal tracking-tight">
                Orientação médica por telefone. Adulto e infantil incluso.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white border border-[#f7f7f7] rounded-[10px] w-[230px] h-[338px] relative overflow-hidden">
            <div className="absolute left-[70.5px] top-[50px] w-[90px] h-[97px]">
              <Image
                src={bagDiscount}
                alt="Desconto aplicado no uso"
                fill
                className="object-cover"
                sizes="90px"
              />
            </div>
            <div className="absolute left-[25.5px] top-[169px] w-[180px] text-center">
              <h3 className="font-extrabold text-[20px] text-[#f87315] mb-[20px] h-[48px] leading-normal tracking-tight">
                Desconto aplicado no uso
              </h3>
              <p className="font-medium text-[14px] text-[dimgrey] leading-normal tracking-tight">
                Economia imediata, sem processos burocráticos
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}