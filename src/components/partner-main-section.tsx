"use client";
import { ArrowRight, Globe, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import whatsappIcon from "@/assets/whatsapp.svg";
import creditCardWoman from "../../public/images/credit-card-woman.webp";
import {useEffect} from "react";
import Link from "next/link";
interface Partner {
  cod: number;
  nome: string;
  telefone: string;
  ibge: string | null;
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  foto: string;
  data: string;
  status: string;
  categoria: number;
  subcategoria: number;
  servicos: string;
  whatsapp: string;
  link: string;
  categoria_obj: {
    cod: number;
    nome: string;
  };
  subcategoria_obj?: {
    cod: number;
    nome: string;
  };
  acessos_whatsapp: number;
  acessos_telefone: number;
  cod_usuario: number;
  clinica_parceira: boolean;
  foto_clinica: string | null;
}

interface PartnerMainSectionProps {
  partner?: Partner;
}

export default function PartnerMainSection({
  partner,
}: PartnerMainSectionProps) {
  useEffect(() => {
    if (!partner) {
      window.location.href = '/404';
    }
  }, [partner]);
  const formatWhatsappNumber = (number: string) => {
    const numberWithCountryCode = number.startsWith("+")
      ? number
      : "+55" + number;

    const digits = numberWithCountryCode.replace(/\D/g, "");
    return digits;
  };

  const servicesResume = () => {
    return partner.servicos
      .split(".")
      .at(0)
      ?.trim()
      .toLowerCase() || "";
  };

  const getFullAddress = () => {
    const parts = [
      partner.endereco,
      partner.numero,
      partner.complemento,
      partner.bairro,
      `${partner.cidade}/${partner.estado}`,
      partner.cep,
    ].filter(Boolean);

    return parts.join(", ");
  };

  // Normalize category name to prevent hydration mismatch
  const getCategoryName = () => {
    return partner.categoria_obj?.nome?.replace(/\s*\/\s*$/, "").trim() || "";
  };

  const photoUrl = partner.foto
    ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL + partner.foto
    : "";

  return (
    <section id="sobre" className="relative w-full min-h-[1468px] py-[81px] px-[319px] font-(family-name:--font-figtree)">
      <div className="w-full max-w-[1282px] mx-auto">
        <div className="grid grid-cols-[628px_1fr] gap-[74px] items-start">
          <div className="flex flex-col gap-[30px]">
            <div className="flex items-center gap-[46px] w-full">
              <div
                className="w-[120px] h-[120px] rounded-[17px] overflow-hidden shrink-0"
                style={{ boxShadow: "0 0 11px -3px rgba(0, 0, 0, 0.25)" }}
              >
                <Image
                  src={photoUrl}
                  alt={partner.nome}
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="flex-1 font-medium text-[32px] text-black leading-normal min-h-px min-w-px whitespace-normal">
                {partner.nome}
              </h1>
            </div>

            <div>
              <span className="text-[#F87315] font-figtree text-[18px] font-normal leading-normal">
                {getCategoryName()}
              </span>
            </div>

            <div className="flex flex-col gap-[46px] text-black w-full leading-normal whitespace-pre-wrap">
              <h2 className="font-semibold text-[24px] w-full">
                  Sobre o parceiro
              </h2>
                <p className="font-normal text-[18px] w-full leading-relaxed">
                {partner.nome} atua em {partner.cidade} – SP, nas áreas de {getCategoryName()}, e faz parte da rede de parceiros do Cartão Beneficiar, que não é convênio médico ou plano de saúde, mas sim um cartão de benefícios em consultas médicas e odontológicas, com descontos em exames na cidade de {partner.cidade}.
                <br />
                <br />
                Em {partner.nome}, os beneficiários do Cartão Beneficiar encontram{" "}{servicesResume()}, entre outros serviços, com condições diferenciadas. A equipe está preparada para atender com cuidado e esclarecer todas as dúvidas.
                <br />
                <br />
                </p>
            </div>

            {/* Contact Buttons */}
            
            <div className="flex justify-between gap-10 w-[415px]">
              {partner.whatsapp && (
                <button
                  className="bg-[#f87315] cursor-pointer rounded-[100px] px-[18px] py-[5px] h-[45px] flex items-center gap-[15px] shrink-0 hover:bg-[#e66a0a] transition-colors"
                  onClick={() =>
                    window.open(
                      `https://api.whatsapp.com/send?phone=${formatWhatsappNumber(
                        partner.whatsapp
                      )}&text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20beneficiar`,
                      "_blank"
                    )
                  }
                >
                  <div className="w-[24px] h-[24px] shrink-0">
                    <Image
                      src={whatsappIcon}
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="w-full h-full"
                    />
                  </div>
                  <span className="font-medium text-[16px] text-white leading-normal">
                    WhatsApp
                  </span>
                </button>
              )}

              {partner.telefone && (
                <button
                  className="border cursor-pointer border-[#f87315] border-solid rounded-[100px] px-[18px] py-[5px] h-[45px] flex items-center gap-[15px] shrink-0 hover:bg-[#f87315]/10 transition-colors"
                  onClick={() =>
                    window.open(
                      `tel:${formatWhatsappNumber(partner.telefone)}`,
                      "_self"
                    )
                  }
                >
                  <Phone className="w-[24px] h-[24px] shrink-0 text-[#f87315]" />
                  <span className="font-medium text-[16px] text-[#f87315] leading-normal">
                    Telefone
                  </span>
                </button>
              )}

              {partner.link && (
                <button
                  className="border border-[#f87315] cursor-pointer rounded-[100px] px-[18px] py-[5px] flex items-center gap-[15px] w-[119px] h-[45px] hover:bg-[#f87315] hover:text-white transition-colors group"
                  onClick={() => window.open(`${partner.link}`, "_blank")}
                >
                  <Globe className="w-[24px] h-[24px] text-[#f87315] group-hover:text-white" />
                  <span className="font-(family-name:--font-figtree) font-medium text-[16px] text-[#f87315] leading-normal group-hover:text-white">
                    Site
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Call to Action Card */}
          <div className="w-[550px] h-[791px] rounded-[20px] overflow-hidden relative ml-auto">
            {/* Background Image with Gradient */}
            <div className="absolute inset-0">
              <div className="relative w-full h-full">
                <div className="absolute left-[-189px] top-0 w-[927px] h-[940px]">
                  <Image
                    src={creditCardWoman}
                    alt="Woman with credit card"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] to-[41.346%]" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 pt-[63px] pl-[56px] w-[470px] flex flex-col gap-[24px]">
              <h2 className="font-medium text-[48px] leading-[58px] text-white min-w-full w-min whitespace-pre-wrap">
                Cuidando de quem cuida do Brasil
              </h2>
              <p className="font-normal text-[18px] text-white w-[429px] leading-normal whitespace-pre-wrap">
                Soluções inteligentes em saúde, pensadas para empresas que
                valorizam pessoas e constroem o futuro com responsabilidade.
              </p>
              <Link href="https://checkout.cartaobeneficiar.com.br/" >
              <button className="bg-[#61bb5a] cursor-pointer rounded-[100px] w-[308px] px-[29px] py-[14px] flex items-center gap-[15px] shrink-0 hover:bg-[#559954] transition-colors">
                <span className="font-semibold text-[16px] text-center text-white uppercase leading-normal">
                  Solicitar cartão agora
                </span>
                <ArrowRight className="w-[21px] h-[21px] text-white -rotate-45" />
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Address and Map Section */}
        <div className="mt-10">
          {/* Address Section */}
          <div className="flex flex-col gap-5 w-[332px]">
            <div className="flex items-center gap-[12px] w-full">
              <div className="bg-[#f87315] rounded-[50px] w-[39px] h-[39px] overflow-hidden shrink-0 relative">
                <div className="absolute left-[8px] top-[8px] w-[24px] h-[24px]">
                  <MapPin className="w-full h-full text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-[24px] mt-3 text-black leading-normal w-[281px] whitespace-pre-wrap shrink-0">
                {partner.clinica_parceira
                  ? "Endereço da clínica"
                  : "Endereço do parceiro"}
              </h3>
            </div>
            <p className="font-normal text-[18px] text-black leading-normal w-full whitespace-pre-wrap shrink-0">
              {getFullAddress()}
            </p>
          </div>

          {/* Map Section */}
          <div className="flex justify-start mt-[40px]">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                getFullAddress()
              )}&output=embed`}
              width="1280"
              height="450"
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}