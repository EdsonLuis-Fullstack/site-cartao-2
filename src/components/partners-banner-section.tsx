"use client";

import { ChevronDown } from "lucide-react";
import whiteEllipsisAbove from "@/assets/ellipse-branco-cima.svg";
import whiteEllipsisBelow from "@/assets/ellipse-branco-baixo.svg";
import Image from "next/image";
import { useMemo, useState, useRef, useEffect } from "react";

interface City {
  id: number;
  name: string;
  uf: string;
}

const removeAccents = (str: string): string =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const normalizeForComparison = (str: string): string =>
  removeAccents(str.toLowerCase().trim());

const encodeCityName = (cityName: string, uf?: string): string => {
  const encodedCity = removeAccents(cityName)
    .toLowerCase()
    .replace(/\s+/g, "-");
  return uf ? `${encodedCity}-${uf.toLowerCase()}` : encodedCity;
};

export default function PartnersBannerSection({
  cities,
}: {
  cities: City[];
}) {
  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const normalizedCities = useMemo(() => {
    const map = new Map<string, number>();
    cities.forEach((c) => {
      const key = normalizeForComparison(c.name);
      map.set(key, (map.get(key) || 0) + 1);
    });
    return map;
  }, [cities]);

  const displayCityName = selectedCity
    ? normalizedCities.get(normalizeForComparison(selectedCity.name))! > 1
      ? `${selectedCity.name} - ${selectedCity.uf}`
      : selectedCity.name
    : "Escolher cidade";

  const handleConfirm = () => {
    if (!selectedCity) return;

    const isDuplicate =
      normalizedCities.get(normalizeForComparison(selectedCity.name))! > 1;

    const encoded = encodeCityName(
      selectedCity.name,
      isDuplicate ? selectedCity.uf : undefined
    );

    window.location.href = `/partners/${encoded}`;
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="h-[780px] relative overflow-hidden rounded-bl-[80px] rounded-br-[80px] w-full bg-[#61BB5A] font-(family-name:--font-livvic)">
      {/* Elementos decorativos */}
      <Image
        src={whiteEllipsisBelow}
        alt=""
        className="absolute left-0 -bottom-24 w-[400px]"
      />
      <Image
        src={whiteEllipsisAbove}
        alt=""
        className="absolute right-0 -top-10 w-[400px]"
      />

      {/* CONTAINER ALINHADO AO MENU */}
      <div className="relative h-full max-w-[1274px] mx-auto px-6 md:px-0">
        {/* Conteúdo */}
        <div className="absolute top-[120px] md:top-60 max-w-[589px] text-white">
          <h1 className="text-[32px] md:text-[48px] font-medium leading-tight">
            Mais do que parceiros,
            <br />
            verdadeiros amigos do Beneficiar.
          </h1>

          <p className="mt-4 font-semibold text-[16px] md:text-[20px]">
            Encontre os parceiros mais próximos de você, organizados por categoria.
          </p>

          <div
            ref={ref}
            className="flex items-center gap-4 mt-6 max-w-[520px]"
          >
            <div className="relative w-full max-w-[409px]">
              <button
                onClick={() => setOpen((v) => !v)}
                className="w-full h-[55px] bg-white rounded-[100px] px-[18px] pr-12 text-left font-medium text-[16px] text-black flex items-center justify-between"
              >
                {displayCityName}
                <ChevronDown
                  className={`w-6 h-6 text-[#61BB5A] transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open && (
                <div className="absolute top-[60px] left-0 w-full bg-white rounded-[24px] shadow-lg overflow-hidden z-20">
                  <ul className="max-h-[180px] overflow-auto">
                    {cities
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((city) => {
                        const isDuplicate =
                          normalizedCities.get(
                            normalizeForComparison(city.name)
                          )! > 1;

                        return (
                          <li
                            key={city.id}
                            onClick={() => {
                              setSelectedCity(city);
                              setOpen(false);
                            }}
                            className="px-6 py-3 cursor-pointer hover:bg-[#f2f2f2] text-black text-[16px]"
                          >
                            {isDuplicate
                              ? `${city.name} - ${city.uf}`
                              : city.name}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}
            </div>

            <button
              onClick={handleConfirm}
              disabled={!selectedCity}
              className="h-[55px] px-8 rounded-full bg-[#f87315] text-white font-semibold text-[14px] uppercase disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:bg-[#e5670f]"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
