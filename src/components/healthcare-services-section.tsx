import Image from "next/image";
import doctorTablet from "../../public/images/doutor-tablet.webp";
import examDoctor from "../../public/images/medica-laboratorio.webp";
import pharmacy from "../../public/images/farmaceutica-remedio.webp";
import xRay from "../../public/images/raio-x.webp";
import dentalDoctor from "../../public/images/dentista-exame.webp";
import remoteDoctor from "../../public/images/doutor-remoto.webp";
import hugDad from "../../public/images/abraço-pai.webp";
import ellipsis13 from "@/assets/Ellipse 13.svg";
import ellipsis14 from "@/assets/Ellipse 14.svg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HealthcareServicesSection() {
  return (
    <section className="bg-white relative py-[78px] font-(family-name:--font-figtree) px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-[200px] -top-[267px] w-[489px] h-[489px] transform rotate-215">
        <Image
          src={ellipsis13}
          alt=""
          width={489}
          height={489}
          className="w-full h-full"
        />
      </div>
      <div className="absolute -left-[84px] -bottom-10 w-[221px] h-[221px] transform rotate-165">
        <Image
          src={ellipsis14}
          alt=""
          width={221}
          height={221}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-[29px]">
          <h2 className=" font-medium text-[48px] text-black leading-normal mb-4 w-[487px] mx-auto">
            Para todo tipo de necessidade de saúde
          </h2>
          <p className="font-['Figtree:Regular',sans-serif] font-normal text-[18px] text-black leading-normal">
            Para sua equipe usar como e quando precisar
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col gap-[49px] items-center max-w-[1125px] mx-auto mb-[50px]">
          <div className="flex flex-col gap-[20px] items-center w-[1120px]">
            {/* First Row */}
            <div className="flex gap-[20px] flex-col items-center md:flex-row md:items-start">
              {/* Consultas Médicas */}
              <div className="bg-[#fdfbf8] border border-[#f7f7f7] rounded-[10px] w-[360px] h-[233px] relative overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={doctorTablet}
                      alt="Consultas médicas"
                      fill
                      className="object-cover"
                      style={{
                        transform: "scale(1.057) translate(-0.2%, -6.3%)",
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-l from-[rgba(0,0,0,0)] from-[29.444%] to-[rgba(0,0,0,0.6)] to-[81.854%]"></div>
                </div>
                <div className="absolute top-[37px] left-[30.5px] w-[169px] flex flex-col gap-[20px] z-10">
                  <div className="bg-[#f87315] rounded-[10px] px-[14px] py-[7px] flex items-center justify-center">
                    <p className="font-extrabold text-[16px] whitespace-nowrap text-white leading-[18px] w-[140px] text-center">
                      Consultas Médicas
                    </p>
                  </div>
                  <p className="font-medium text-[16px] text-white leading-normal">
                    Valores reduzidos para todas especialidades.
                  </p>
                  <p className="font-medium text-[14px] text-white leading-normal">
                    A partir de R$ 32
                  </p>
                </div>
              </div>

              {/* Exames Laboratoriais */}
              <div className="bg-[#fdfbf8] border border-[#f7f7f7] rounded-[10px] w-[364px] h-[233px] relative overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={examDoctor}
                      alt="Exames laboratoriais"
                      fill
                      className="object-cover"
                      style={{
                        transform: "scale(1.347) translate(-1.45%, 0)",
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-l from-[rgba(0,0,0,0)] from-[29.444%] to-[rgba(0,0,0,0.6)] to-[81.854%]"></div>
                </div>
                <div className="absolute top-[37px] left-[34.5px] w-[189px] flex flex-col gap-[20px] z-10">
                  <div className="bg-[#f87315] rounded-[10px] px-[14px] py-[7px] flex items-center justify-center">
                    <p className="font-extrabold text-[16px] whitespace-nowrap text-white leading-[18px] w-[189px] text-center">
                      Exames Laboratoriais
                    </p>
                  </div>
                  <p className="font-medium text-[16px] text-white leading-normal">
                    Análises clínicas essenciais com desconto.
                  </p>
                  <p className="font-medium text-[14px] text-white leading-normal w-[138px]">
                    Até 70% de desconto
                  </p>
                </div>
              </div>

              {/* Farmácia */}
              <div className="bg-[#fdfbf8] border border-[#f7f7f7] rounded-[10px] w-[358px] h-[233px] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="transform rotate-180 scale-y-[-100%] w-[358px] h-[233px]">
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={pharmacy}
                        alt="Farmácia"
                        fill
                        className="object-cover"
                        style={{
                          transform: "scale(1.071) translate(-6.1%, 0.24%)",
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0)] from-[39.385%] to-[rgba(0,0,0,0.6)] to-[84.307%]"></div>
                  </div>
                </div>
                <div className="absolute top-[37px] left-[34.5px] w-[112px] flex flex-col gap-[20px] z-10">
                  <div className="bg-[#f87315] rounded-[10px] px-[14px] py-[7px] flex items-center justify-center">
                    <p className="font-extrabold text-[16px] whitespace-nowrap text-white leading-[18px] w-[101px] text-center">
                      Farmácia
                    </p>
                  </div>
                  <p className="font-medium text-[16px] text-white leading-normal w-[112px]">
                    Descontos em medicamentos.
                  </p>
                  <p className="font-medium text-[14px] text-white leading-normal w-[110px]">
                    Rede nacional credenciada
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex gap-[20px] flex-col items-center md:flex-row md:items-start">
              {/* Exames de imagem */}
              <div className="bg-[#fdfbf8] border border-[#f7f7f7] rounded-[10px] w-[265px] h-[372px] relative overflow-hidden">
                <div className="absolute -left-[12.5px] top-0 w-[290px] h-[372px]">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={xRay}
                      alt="Exames de imagem"
                      fill
                      className="object-cover"
                      style={{
                        transform: "scale(1.095) translate(-8.9%, -4.75%)",
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0)] from-[27.071%] to-[rgba(0,0,0,0.65)] to-[85.383%]"></div>
                </div>
                <div className="absolute top-[32px] left-[32px] w-[188px] flex flex-col gap-[20px] z-10">
                  <div className="bg-[#f87315] rounded-[10px] py-[7px] flex items-center justify-center w-[168px]">
                    <p className="font-extrabold text-[16px] whitespace-nowrap text-white leading-[18px] w-[144px] text-center">
                      Exames de imagem
                    </p>
                  </div>
                  <p className="font-medium text-[16px] text-white leading-normal w-[187px]">
                    Ressonância, tomografia, ultrassom acessíveis.
                  </p>
                </div>
              </div>

              {/* Odontologia */}
              <div className="bg-[#fdfbf8] border border-[#f7f7f7] rounded-[10px] w-[265px] h-[370px] relative overflow-hidden">
                <div className="absolute -left-[12.5px] top-0 w-[291px] h-[370px]">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={dentalDoctor}
                      alt="Odontologia"
                      fill
                      className="object-cover"
                      style={{
                        transform: "scale(1.128) translate(-10.3%, -11.6%)",
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0)] from-[37.87%] to-[rgba(0,0,0,0.6)] to-[89.094%]"></div>
                </div>
                <div className="absolute top-[32px] left-[32px] w-[180px] flex flex-col gap-[20px] z-10">
                  <div className="bg-[#f87315] rounded-[10px] px-[14px] w-[128px] py-[7px] flex items-center justify-center">
                    <p className="font-extrabold text-[16px] text-white leading-[18px] w-[128px] text-center">
                      Odontologia
                    </p>
                  </div>
                  <p className="font-medium text-[16px] text-white leading-normal">
                    Todos os tratamentos dentários. Até 50% off.
                  </p>
                </div>
              </div>

              {/* Teleatendimento 24h */}
              <div className="bg-[#fdfbf8] border border-[#f7f7f7] rounded-[10px] w-[265px] h-[370px] relative overflow-hidden">
                <div className="absolute left-[0.5px] top-0 w-[287px] h-[371px]">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={remoteDoctor}
                      alt="Teleatendimento"
                      fill
                      className="object-cover"
                      style={{
                        transform: "scale(1.281) translate(-14.2%, 0.21%)",
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0)] from-[33.136%] to-[rgba(0,0,0,0.6)] to-[80.102%]"></div>
                </div>
                <div className="absolute top-[32px] left-[32px] w-[191px] flex flex-col gap-[20px] z-10">
                  <div className="bg-[#f87315] rounded-[10px] px-[14px] py-[7px] flex items-center justify-center">
                    <p className="font-extrabold text-[16px] text-white leading-[18px] w-[163px] text-center">
                      Teleatendimento 24h
                    </p>
                  </div>
                  <p className="font-medium text-[16px] text-white leading-normal">
                    Orientação médica por telefone. Adulto e infantil incluso.
                  </p>
                </div>
              </div>

              {/* Assistência 24h */}
              <div className="bg-[#fdfbf8] border border-[#f7f7f7] rounded-[10px] w-[265px] h-[370px] relative overflow-hidden">
                <div className="absolute -left-[6.5px] -top-[1px] w-[278px] h-[371px]">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={hugDad}
                      alt="Assistência 24h background 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0)] from-[33.136%] to-[rgba(0,0,0,0.6)] to-[80.102%]"></div>
                </div>
                <div className="absolute top-[31px] left-[30.5px] w-[180px] flex flex-col gap-[20px] z-10">
                  <div className="bg-[#f87315] rounded-[10px] px-[14px] w-[149px] py-[7px] flex items-center justify-center">
                    <p className="font-extrabold text-[16px] text-white leading-[18px] w-[149px] text-center">
                      Assistência 24h
                    </p>
                  </div>
                  <p className="font-medium text-[16px] text-white leading-normal">
                    Auxílio funeral e seguro nacional. Suporte quando mais
                    precisam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
          href="/partners"
          data-node-id="245:675"
                  >      
          <button className="bg-[#3a3b47] cursor-pointer rounded-full px-[60px] py-[14px] flex items-center gap-[15px] mx-auto hover:bg-[#2a2b37] transition-colors">
            <span className="font-Figtree font-semibold text-[16px] text-white uppercase leading-normal">
              CONHEÇA MAIS
            </span>
            <ArrowRight className="w-5 h-5 text-white -rotate-45" />
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
