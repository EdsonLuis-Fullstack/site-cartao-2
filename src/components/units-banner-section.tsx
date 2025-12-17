"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import unitsBanner from "../../public/images/units-banner.webp";

interface City {
  id: number;
  name: string;
}

interface UnitsBannerSectionProps {
  cities: City[];
}

const removeAccents = (str: string): string =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const encodeCityName = (cityName: string): string =>
  removeAccents(cityName).toLowerCase().trim().replace(/\s+/g, "-");

export default function UnitsBannerSection({ cities }: UnitsBannerSectionProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  // Redireciona se não houver cidades
  useEffect(() => {
    if (cities.length === 0) {
      router.push("/404");
    }
  }, [cities, router]);

  // Detecta cidade pela URL
  useEffect(() => {
    if (!pathname) return;

    const match = pathname.match(/\/units\/([^/?]+)/);
    if (!match) return;

    const slug = match[1];
    const found = cities.find(
      (city) => encodeCityName(city.name) === slug
    );

    if (found) setSelectedCity(found);
  }, [pathname, cities]);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Confirma seleção
  const handleConfirm = () => {
    if (!selectedCity) return;
    const encoded = encodeCityName(selectedCity.name);
    router.push(`/units/${encoded}#city-section`);
  };

  return (
    <div className="h-[780px] overflow-hidden relative rounded-bl-[80px] rounded-br-[80px] w-full font-(family-name:--font-livvic)">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={unitsBanner}
          alt=""
          fill
          priority
          className="object-cover pointer-events-none"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(59.42% 59.44% at 67.97% 51.73%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.30) 77.4%)",
          }}
        />
      </div>

      {/* Conteúdo */}
      <div className="absolute flex flex-col gap-[16px] items-start left-4 md:left-[322px] top-[120px] md:top-60 px-4 md:px-0 max-w-[calc(100%-2rem)] md:max-w-none text-white">
        <h1 className="text-[32px] md:text-[48px] font-medium leading-tight max-w-[436px]">
          Encontre a Unidade Mais Próxima
        </h1>

        {/* Select + Botão */}
        <div ref={ref} className="flex items-center gap-4 mt-6 w-full max-w-[640px]">
          {/* Select custom */}
          <div className="relative w-full max-w-[480px]">
            <button
              onClick={() => setOpen((v) => !v)}
              className="w-full h-[55px] bg-white rounded-[100px] px-[18px] pr-12 text-left font-medium text-[16px] text-black flex items-center justify-between"
            >
              {selectedCity ? selectedCity.name : "Escolher cidade"}
              <ChevronDown
                className={`w-6 h-6 text-[#61BB5A] transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div className="absolute top-[60px] left-0 w-full bg-white rounded-[24px] shadow-lg overflow-hidden z-20">
                <ul className="max-h-[200px] overflow-auto">
                  {cities
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((city) => (
                      <li
                        key={city.id}
                        onClick={() => {
                          setSelectedCity(city);
                          setOpen(false);
                        }}
                        className="px-6 py-3 cursor-pointer hover:bg-[#f2f2f2] text-black text-[16px]"
                      >
                        {city.name}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>

          {/* Botão Confirmar (EDITÁVEL) */}
          <button
            onClick={handleConfirm}
            className="h-[55px] px-8 rounded-full bg-[#61BB5A] text-white font-semibold text-[16px] whitespace-nowrap hover:opacity-90 transition"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
