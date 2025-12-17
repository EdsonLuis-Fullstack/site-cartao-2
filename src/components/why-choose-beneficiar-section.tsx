import Image from "next/image";
import cardShape from "@/assets/card-shape.svg";
import doctorShape from "../../public/images/doutora-shape.webp";
import familyShape from "../../public/images/familia-shape.webp";
import unitedShape from "../../public/images/unidos-shape.webp";
import moneyShape from "../../public/images/dinheiro-shape.webp";

export default function WhyChooseBeneficiarSection() {
  return (
    <section className="bg-[#ededed] py-[60px] px-4 font-(family-name:--font-figtree)">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="font-medium text-[48px] text-black text-center leading-normal mb-[88px] w-[487px] mx-auto">
          Por que escolher o Beneficiar?
        </h2>

        {/* Cards Grid */}
        <div className="flex flex-wrap gap-[35px] items-center justify-center">
          {/* Card 1 - Sem Carência */}
          <div className="w-[284px] h-[413px] rounded-[20px] overflow-hidden relative">
            {/* Background shape */}
            <div className="absolute -left-[21px] top-0 w-[325px] h-[413px]">
              <Image src={cardShape} alt="" fill className="object-cover" />
            </div>

            {/* Image section */}
            <div className="absolute left-[4px] top-[25px] w-[275px] h-[225px] rounded-[20px] overflow-hidden">
              <div className="absolute -left-[31px] top-0 w-[345px] h-[230px]">
                <Image
                  src={doctorShape}
                  alt="Casal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="absolute left-[18px] top-[273px] w-[247px] h-[87px] flex flex-col gap-[24px] items-center justify-center text-center text-white">
              <h3 className="font-medium text-[24px] leading-normal w-[249px]">
                Sem Carência
              </h3>
              <p className="font-medium text-[14px] leading-normal w-[210px]">
                Agende consultas e exames no mesmo dia que receber o cartão
              </p>
            </div>
          </div>

          {/* Card 2 - Família Incluída */}
          <div className="w-[284px] h-[413px] rounded-[20px] overflow-hidden relative">
            {/* Background shape */}
            <div className="absolute -left-[21px] top-0 w-[325px] h-[413px]">
              <Image src={cardShape} alt="" fill className="object-cover" />
            </div>

            {/* Image section */}
            <div className="absolute left-[4px] top-[25px] w-[275px] h-[225px] rounded-[20px] overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={familyShape}
                  alt="Família feliz"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="absolute left-[18px] top-[273px] w-[247px] h-[87px] flex flex-col gap-[24px] items-center justify-center text-center text-white">
              <h3 className="font-medium text-[24px] leading-normal w-[249px]">
                Família Incluída
              </h3>
              <p className="font-medium text-[14px] leading-normal w-[247px]">
                Cônjuge e filhos de até 21 anos no mesmo valor, sem custo extra
              </p>
            </div>
          </div>

          {/* Card 3 - Rede Regional */}
          <div className="w-[284px] h-[413px] rounded-[20px] overflow-hidden relative">
            {/* Background shape */}
            <div className="absolute -left-[21px] top-0 w-[325px] h-[413px]">
              <Image src={cardShape} alt="" fill className="object-cover" />
            </div>

            {/* Image section */}
            <div className="absolute left-[4px] top-[25px] w-[275px] h-[225px] rounded-[20px] overflow-hidden">
              <div className="absolute -left-[35px] -top-[1px] w-[338px] h-[226px]">
                <Image
                  src={unitedShape}
                  alt="Mãos unidas em trabalho em equipe"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="absolute left-[18px] top-[273px] w-[247px] h-[87px] flex flex-col gap-[24px] items-center justify-center text-center text-white">
              <h3 className="font-medium text-[24px] leading-normal w-[249px]">
                Rede Regional
              </h3>
              <p className="font-medium text-[14px] leading-normal w-[210px]">
                Centenas de clínicas credenciadas em toda região
              </p>
            </div>
          </div>

          {/* Card 4 - Preços Transparentes */}
          <div className="w-[284px] h-[413px] rounded-[20px] overflow-hidden relative">
            {/* Background shape */}
            <div className="absolute -left-[21px] top-0 w-[325px] h-[413px]">
              <Image src={cardShape} alt="" fill className="object-cover" />
            </div>

            {/* Image section */}
            <div className="absolute left-[4px] top-[25px] w-[275px] h-[225px] rounded-[20px] overflow-hidden">
              <div className="absolute -left-[38px] -top-[1px] w-[340px] h-[226px]">
                <Image
                  src={moneyShape}
                  alt="Dinheiro brasileiro"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="absolute left-[18px] top-[273px] w-[247px] h-[87px] flex flex-col gap-[24px] items-center justify-center text-center text-white">
              <h3 className="font-medium text-[24px] leading-normal w-[249px]">
                Preços Transparentes
              </h3>
              <p className="font-medium text-[14px] leading-normal w-[209px]">
                Valor fixo mensal, sem surpresas no orçamento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
