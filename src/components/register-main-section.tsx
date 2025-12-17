import Image from "next/image";

const imgLine10 =
  "https://www.figma.com/api/mcp/asset/45ea5211-a50d-4c0a-b448-2b921a0b16e6";
const imgLine11 =
  "https://www.figma.com/api/mcp/asset/681bfd54-d302-451d-b8ec-0f5ff07648ed";
const imgArrow =
  "https://www.figma.com/api/mcp/asset/03f25696-e196-498d-b3a9-f8e1311548e4";
const imgLine12 =
  "https://www.figma.com/api/mcp/asset/90e92422-8208-435b-8709-ee5eb72b5426";

export default function RegisterMainSection() {
  return (
    <section className="relative w-full min-h-[846px] py-[40px]">
      <div className="w-full max-w-[613px] mx-auto">
        {/* Progress Indicator */}
        <div className="flex flex-col gap-[75px] items-center">
          {/* Progress Bar */}
          <div className="w-full relative">
            <div className="bg-[#e6e6e6] h-[8px] rounded-[20px] w-full" />

            {/* Step 1 - Active */}
            <div className="absolute left-0 top-[-15px] bg-[#f87315] rounded-[50px] w-[38px] h-[38px] flex items-center justify-center overflow-hidden">
              <span className="font-['Livvic'] font-medium text-[18px] text-white">
                1
              </span>
            </div>

            {/* Step 2 - Inactive */}
            <div className="absolute left-[288px] top-[-15px] bg-white border border-[#f87315] rounded-[50px] w-[38px] h-[38px] flex items-center justify-center">
              <span className="font-['Livvic'] font-medium text-[18px] text-[#f87315]">
                2
              </span>
            </div>

            {/* Step 3 - Inactive */}
            <div className="absolute right-0 top-[-15px] bg-white border border-[#f87315] rounded-[50px] w-[38px] h-[38px] flex items-center justify-center">
              <span className="font-['Livvic'] font-medium text-[18px] text-[#f87315]">
                3
              </span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="flex gap-[100px] items-start justify-center">
            {/* Left Column - Registration Form */}
            <div className="bg-[#fdfbf8] w-[547px] h-[764px] rounded-[20px] overflow-hidden">
              <div className="pt-[33px] px-[25px] pb-[33px] w-[406px] mx-auto">
                <div className="flex flex-col gap-[25px] items-center justify-start">
                  <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                    {/* Title */}
                    <h1 className="font-['Livvic'] font-medium text-[48px] leading-16 text-[#61bb5a] text-center whitespace-pre-wrap">
                      Cadastro
                    </h1>

                    {/* Subtitle */}
                    <p className="font-['Livvic'] font-medium text-[18px] text-black leading-normal text-start whitespace-pre-wrap">
                      Vamos começar seu cadastro, preencha os campos a seguir
                      com seus dados
                    </p>

                    {/* Form Fields */}
                    <div className="w-full space-y-[25px]">
                      {/* Nome Completo */}
                      <div className="relative h-[77px] w-full">
                        <div className="font-['Livvic'] font-medium text-[18px] text-black leading-normal whitespace-nowrap w-[195px]">
                          Nome Completo*
                        </div>
                        <div className="pt-[22px] pl-[11px]">
                          <div className="font-['Livvic'] font-medium text-[18px] text-[#f87315] leading-normal whitespace-nowrap w-[215px]">
                            José da Silva
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[3px]">
                          <Image
                            src={imgLine10}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* E-mail */}
                      <div className="relative h-[77px] w-full">
                        <div className="font-['Livvic'] font-medium text-[18px] text-black leading-normal whitespace-nowrap w-[288px]">
                          E-mail*
                        </div>
                        <div className="pt-[22px] pl-[11px]">
                          <div className="font-['Livvic'] font-medium text-[18px] text-[#d9d9d9] leading-normal whitespace-nowrap w-[215px]">
                            Digite seu email
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-0.5">
                          <Image
                            src={imgLine11}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* WhatsApp */}
                      <div className="relative h-[77px] w-full">
                        <div className="font-['Livvic'] font-medium text-[18px] text-black leading-normal whitespace-nowrap w-[288px]">
                          WhatsApp*
                        </div>
                        <div className="pt-[22px] pl-[11px]">
                          <div className="font-['Livvic'] font-medium text-[18px] text-[#d9d9d9] leading-normal whitespace-nowrap w-[215px]">
                            ex. (11) 99999-9999
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-0.5">
                          <Image
                            src={imgLine11}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* CPF */}
                      <div className="relative h-[77px] w-full">
                        <div className="font-['Livvic'] font-medium text-[18px] text-black leading-normal whitespace-nowrap w-[288px]">
                          CPF*
                        </div>
                        <div className="pt-[22px] pl-[11px]">
                          <div className="font-['Livvic'] font-medium text-[18px] text-[#d9d9d9] leading-normal whitespace-nowrap w-[215px]">
                            ex. 123.123.123
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-0.5">
                          <Image
                            src={imgLine11}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="flex flex-col gap-2.5 w-[396px]">
                      <div className="flex items-center gap-[17px]">
                        <div className="w-5 h-5 border border-[#61bb5a] rounded-[5px] shrink-0" />
                        <p className="font-['Livvic'] font-medium text-[12px] text-black leading-normal w-[353px] whitespace-nowrap">
                          <span>Li e concordo com os </span>
                          <span className="text-[#f87315]">
                            termos e condições
                          </span>
                          , sou maior de 18 anos
                        </p>
                      </div>
                      <div className="flex items-center gap-[17px]">
                        <div className="w-5 h-5 border border-[#61bb5a] rounded-[5px] shrink-0" />
                        <p className="font-['Livvic'] font-medium text-[11px] text-black leading-normal w-[375px] whitespace-nowrap">
                          Autorizo o envio de comunicações do Cartão de TODOS
                          por canais digitais
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Next Button */}
                  <button className="bg-[#f87315] rounded-[100px] px-[18px] py-[5px] h-[45px] flex items-center justify-center gap-[15px] hover:bg-[#e66a0a] transition-colors">
                    <span className="font-['Livvic'] font-medium text-[16px] text-white uppercase leading-normal">
                      Próximo
                    </span>
                    <div className="w-[21px] h-[21px] shrink-0">
                      <Image
                        src={imgArrow}
                        alt="Arrow"
                        width={21}
                        height={21}
                        className="w-full h-full"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Pricing Card */}
            <div className="w-[482px] h-[457px] relative">
              {/* Pricing Card */}
              <div className="border border-[#61bb5a] rounded-[20px] w-[482px] h-[288px] overflow-hidden">
                {/* Header with Price */}
                <div className="bg-[#61bb5a] h-[115px] w-full overflow-hidden rounded-[20px] relative">
                  {/* Left Text */}
                  <p className="absolute left-[24px] top-[34px] font-['Figtree'] font-medium text-[20px] text-white leading-normal w-[211px] whitespace-pre-wrap">
                    Mensalidade que cobre toda a família*
                  </p>
                  
                  {/* Vertical Line */}
                  <div className="absolute left-[281px] top-[16px] w-[calc(83px)] h-[2px] transform rotate-90 origin-left">
                    <Image
                      src={imgLine12}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Price Components */}
                  <p className="absolute left-[310px] top-[37px] font-['Livvic'] font-medium text-[20px] text-white leading-normal w-[28px] whitespace-nowrap">
                    R$
                  </p>
                  <p className="absolute left-[337px] top-[27px] font-['Livvic'] font-medium text-[55px] leading-[64px] text-white w-[85px] whitespace-nowrap">
                    39
                  </p>
                  <p className="absolute left-[404px] top-[58px] font-['Livvic'] font-medium text-[20px] text-white leading-normal w-[32px] whitespace-nowrap">
                    ,90
                  </p>
                </div>

                {/* Pricing Details */}
                <div className="absolute left-[43px] top-[144px] w-[396px] flex flex-col gap-[18px]">
                  <div className="flex items-center justify-between font-['Livvic'] font-normal text-[20px] text-black leading-normal w-full whitespace-nowrap">
                    <p className="w-[185px]">1º Mensalidade</p>
                    <p className="w-[87px] text-right">R$39,90</p>
                  </div>
                  <div className="flex items-center justify-between font-['Livvic'] font-normal text-[20px] text-black leading-normal w-full whitespace-nowrap">
                    <p className="w-[185px]">Taxa de adesão</p>
                    <p className="w-[87px] text-right">R$50,00</p>
                  </div>
                  <div className="flex items-center justify-between font-['Livvic'] font-normal text-[20px] leading-normal w-full whitespace-nowrap">
                    <p className="w-[185px] text-[#61bb5a]">Valor total</p>
                    <p className="w-[87px] text-right text-[#f87315]">R$89,90</p>
                  </div>
                </div>
              </div>

              {/* Terms Text */}
              <div className="absolute left-[34px] top-[310px] w-[413px] font-['Livvic'] font-normal text-[14px] text-black leading-normal">
                <p className="mb-0">*Pagamento mensal de R$ 39,90.</p>
                <p className="mb-0">&nbsp;</p>
                <p className="mb-0">**O pagamento inicial será de R$ 89,90, pois inclui a taxa de adesão no valor de R$ 50,00 mais a primeira mensalidade no valor de R$ 39,90.</p>
                <p className="mb-0">&nbsp;</p>
                <p>***Válido para titular, cônjuge e dependentes legais.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
