"use client"
import Image from "next/image";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import grandmother from "../../public/images/vo-e-neta.webp";
import whatsAppIcon from "@/assets/whatsapp.svg";
import Link from "next/link";

interface Schedule {
  cod: number;
  dia_semana: string;
  horario_inicio: string;
  horario_fim: string;
  cod_parceiro_unidade: string;
  parceiro_unidade: null | any;
  status: string;
  data_criacao: DataTimestamp;
  data_atualizacao: DataTimestamp;
  data_deletado: null | DataTimestamp;
  user_criacao: number;
  user_deletado: number | null;
}

interface City {
  idCidade: number;
  cidade: string;
  uf: string;
  codIbge: string;
  area: number;
  idMunicipioSubordinado: number;
  statusCadastro: string;
  valorFrete: string;
  prazoEntrega: null | string;
}

interface DataTimestamp {
  date: string;
  timezone_type: number;
  timezone: string;
}

interface Unit {
  cod: number;
  cod_cidade: number;
  cidade: City;
  nome: string;
  telefone: string | null;
  descricao: string;
  status: string;
  link_face: string | null;
  link_insta: string | null;
  link_whats: string;
  endereco: string;
  data_criacao: DataTimestamp;
  data_atualizacao: DataTimestamp;
  data_deletado: null | DataTimestamp;
  user_criacao: number;
  user_deletado: number | null;
  horarios_atendimentos_unidades: Schedule[];
  bairro: string | null;
  cep: string | null;
}

interface UnitsHeroSectionProps {
  unit: Unit;
}

const weekDaysMap: { [key: string]: string } = {
  "Segunda": "Segunda-feira",
  "Terça": "Terça-feira",
  "Quarta": "Quarta-feira",
  "Quinta": "Quinta-feira",
  "Sexta": "Sexta-feira",
  "Sábado": "Sábado",
  "Domingo": "Domingo",
};

const weekDaysOrder: { [key: string]: number } = {
  "Segunda": 1,
  "Terça": 2,
  "Quarta": 3,
  "Quinta": 4,
  "Sexta": 5,
  "Sábado": 6,
  "Domingo": 7,
};

export default function UnitsHeroSection({ unit }: UnitsHeroSectionProps) {
  if(!unit || unit.length === 0) {
    return window.location.href = '/404'
  }
  const formatSchedules = (schedules: Schedule[]) => {
    const sortedSchedules = [...schedules].sort(
      (a, b) => (weekDaysOrder[a.dia_semana] || 0) - (weekDaysOrder[b.dia_semana] || 0)
    );

    return sortedSchedules.map((schedule) => ({
      day: weekDaysMap[schedule.dia_semana] || schedule.dia_semana,
      hours: `${schedule.horario_inicio.slice(0, 5)} às ${schedule.horario_fim.slice(0, 5)}`,
    }));
  };

  const formattedSchedules = unit.horarios_atendimentos_unidades 
    ? formatSchedules(unit.horarios_atendimentos_unidades)
    : [];

  // Constrói o endereço completo para o Google Maps
  const buildMapAddress = () => {
    const parts = [];
    
    if (unit.endereco) parts.push(unit.endereco);
    if (unit.bairro) parts.push(unit.bairro);
    if (unit.cidade?.cidade) parts.push(unit.cidade.cidade);
    if (unit.cidade?.uf) parts.push(unit.cidade.uf);
    if (unit.cep) parts.push(unit.cep);
    
    return parts.join(', ');
  };

  const fullAddress = buildMapAddress();
  const encodedAddress = encodeURIComponent(fullAddress);
  
  // URL do iframe usando o método de embed do Google Maps (não requer API key)
  const mapsUrl = fullAddress 
    ? `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`
    : "";

  return (
    <section id="city-section" className="bg-[#fdfbf8] relative w-full min-h-screen font-(family-name:--font-figtree)">
      <div className="relative w-full pt-[112px] pb-[200px]">
        <div className="flex flex-col max-w-7xl mx-auto px-6">
          <div>
            <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-[65px]">
              <div className="w-[449px] flex flex-col gap-[46px]">
                <h2 className="font-medium text-[48px] leading-normal text-black w-[426px]">
                  Cartão Beneficiar em {unit.cidade.cidade}
                </h2>

                <p className="font-normal text-[18px] leading-normal text-black w-[449px]">
                No Cartão Beneficiar em {unit.cidade.cidade}, você e sua família podem cuidar da saúde com consultas acessíveis, exames com desconto e uma rede de parceiros selecionados. Nosso foco é oferecer atendimento humanizado, sem burocracia, para quem vive em {unit.cidade.cidade} e região.
                </p>

                <Link href={unit.link_whats} target="_blank">
                  <button className="bg-[#61bb5a] rounded-[100px] cursor-pointer px-[18px] py-[5px] flex items-center gap-[15px] h-[45px] w-fit">
                    <div className="w-[24px] h-[24px]">
                      <Image
                        src={whatsAppIcon}
                        alt="WhatsApp"
                        width={24}
                        height={24}
                        className="w-full h-full"
                      />
                    </div>
                    <span className="font-medium text-[16px] text-white leading-normal">
                      Atendimento via Whatsapp
                    </span>
                  </button>
                </Link>

                <div className="flex flex-col gap-12">
                  <div className="flex items-center gap-[12px]">
                    <div className="bg-[#f87315] rounded-[50px] w-[39px] h-[39px] flex items-center justify-center overflow-hidden">
                      <Clock className="w-[24px] h-[24px] text-white" />
                    </div>
                    <h3 className="font-['Figtree:SemiBold',sans-serif] font-semibold text-[24px] leading-normal text-black w-[281px] whitespace-nowrap">
                      Horários de atendimento
                    </h3>
                  </div>

                  <div className="flex flex-col gap-[12px]">
                    {formattedSchedules.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex gap-[51px] font-normal text-[18px] leading-normal text-black"
                      >
                        <span className="w-[179px]">{schedule.day}</span>
                        <span className="w-[123px]">{schedule.hours}</span>
                      </div>
                    ))}
                    <div className="flex gap-[51px] font-normal text-[18px] leading-normal text-black">
                      <span className="w-[179px]">Domingos e feriados</span>
                      <span className="w-[123px]">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-[46px]">
                <div className="flex items-center gap-[12px] w-full">
                  <div className="bg-[#f87315] rounded-[50px] w-[39px] h-[39px] flex items-center justify-center overflow-hidden">
                    <MapPin className="w-[24px] h-[24px] text-white" />
                  </div>
                  <h3 className="font-semibold text-[24px] leading-normal text-black w-[281px]">
                    Endereço da unidade
                  </h3>
                </div>

                <p className="font-normal text-[18px] leading-normal text-black w-[332px]">
                  {fullAddress || "Endereço não disponível"}
                </p>

                {mapsUrl && (
                  <iframe
                    src={mapsUrl}
                    width="715"
                    height="510"
                    loading="lazy"
                    className="rounded-xl border-0"
                    title={`Mapa de ${unit.cidade.cidade}`}
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
            <div
              className="rounded-2xl relative z-10 mt-42 w-[1269px] h-[316px]"
              style={{
                background:
                  "radial-gradient(127.08% 70.29% at 71.38% 38.57%, rgba(97, 187, 90, 0.80) 0%, #61BB5A 75.02%)",
              }}
            >
              <div className="flex items-center w-full">
                <div className="flex-1 px-16 py-8 max-w-[595px]">
                  <h3 className="text-white text-5xl font-medium leading-tight mb-5">
                    <p className="whitespace-nowrap">Cuide da saúde da sua</p>
                    <p className="whitespace-nowrap">família por pouco mais</p>
                    <p className="whitespace-nowrap">de 1 real por dia</p>
                  </h3>
                  <Link
                    href="http://checkout.cartaobeneficiar.com.br/"
                    data-node-id="245:675:733"
                  >
                    <button className="bg-[#f87315] cursor-pointer text-white px-8 py-4 rounded-full flex items-center gap-4 hover:bg-[#e65a00] transition-colors">
                      <span className="font-semibold text-base uppercase">
                        QUERO PROTEGER QUEM EU AMO
                      </span>
                      <ArrowUpRight className="w-6 h-6" />
                    </button>
                  </Link>
                </div>
                <div className="absolute right-8 -top-[133px] z-50">
                  <Image
                    src={grandmother}
                    width={710}
                    height={449}
                    alt="Vó e neta sorrindo"
                    className="object-contain w-[710px] h-[449px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}