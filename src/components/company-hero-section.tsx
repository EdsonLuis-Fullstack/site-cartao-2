"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import fatherWithSon from "../../public/images/pai-carregando-filho.webp";
import { BadgePercent, DollarSign, Heart } from "lucide-react";
import rectangleBottomBar from "../../public/images/Rectangle 18.webp";

export default function CompanyHeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
      setKey((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    setKey((prev) => prev + 1);
  };

  return (
    <section className="py-[134px] px-4 font-(family-name:--font-figtree)">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-[130px] items-center">
          <div className="relative w-[706px] h-[595px] rounded-[20px] overflow-hidden shrink-0">
            <Image
              src={fatherWithSon}
              alt="Pai feliz carregando filho nos ombros"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-[51px] w-[434px] shrink-0">
            <h1 className="font-medium text-[48px] text-black leading-normal w-[380px]">
              Para sua equipe
            </h1>

            <div className="flex flex-col gap-[60px] w-[434px]">
              <div
                className={`flex gap-5 py-7 px-5 h-[111px] rounded-[10px] overflow-hidden relative cursor-pointer ${
                  activeIndex === 0 ? "bg-[#e4e4e4]" : "bg-[#fdfbf8]"
                }`}
                onClick={() => handleCardClick(0)}
              >
                <DollarSign className="w-[50px] h-[50px] p-3 bg-[#434343] text-white rounded-[50px]" />

                <div className="flex flex-col justify-center">
                  <p className="font-medium text-[24px] text-black leading-normal w-[292px] whitespace-nowrap">
                    Consultas a partir
                    <span className="font-semibold text-[#434343] ml-1">
                      de R$ 32
                    </span>
                  </p>
                  <p className="font-normal text-[18px] text-black leading-normal w-[229px] mt-[11.5px]">
                    Evite custos de substituição
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-[434px] h-2">
                  <Image src={rectangleBottomBar} alt="" fill />
                </div>

                {activeIndex === 0 && (
                  <div
                    key={key}
                    className="absolute bottom-[0.5px] left-0 h-2 bg-[#f87315] rounded-r-[50px]"
                    style={{
                      animation: "progress 4s linear",
                      width: "100%",
                    }}
                  />
                )}
              </div>

              <div
                className={`flex gap-5 py-7 px-5 h-[111px] rounded-[10px] overflow-hidden relative cursor-pointer ${
                  activeIndex === 1 ? "bg-[#e4e4e4]" : "bg-[#fdfbf8]"
                }`}
                onClick={() => handleCardClick(1)}
              >
                <BadgePercent className="w-[50px] h-[50px] bg-[#434343] text-white rounded-[50px] p-3" />

                <div className="flex flex-col justify-center">
                  <p className="font-medium text-[24px] text-black leading-normal w-[292px]">
                    Exames até <span className="text-[#f87315]">70% off</span>
                  </p>
                  <p className="font-normal text-[18px] text-black leading-normal w-[261px] mt-[11px]">
                    Laboratoriais e de imagem
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-[434px] h-2">
                  <Image src={rectangleBottomBar} alt="" fill />
                </div>

                {activeIndex === 1 && (
                  <div
                    key={key}
                    className="absolute bottom-[0.5px] left-0 h-2 bg-[#f87315] rounded-r-[50px]"
                    style={{
                      animation: "progress 4s linear",
                      width: "100%",
                    }}
                  />
                )}
              </div>

              <div
                className={`flex gap-5 py-7 px-5 h-[111px] rounded-[10px] overflow-hidden relative cursor-pointer ${
                  activeIndex === 2 ? "bg-[#e4e4e4]" : "bg-[#fdfbf8]"
                }`}
                onClick={() => handleCardClick(2)}
              >
                <Heart className="w-[50px] h-[50px] bg-[#434343] text-white rounded-[50px] p-3" />

                <div className="flex flex-col justify-center">
                  <p className="font-medium text-[24px] text-black leading-normal w-[292px]">
                    <span className="text-[#f87315]">Família toda</span>{" "}
                    incluída
                  </p>
                  <p className="font-normal text-[18px] text-black leading-normal w-[229px] mt-[11px]">
                    Cônjuge e filhos até 21 anos
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-[434px] h-2">
                  <Image src={rectangleBottomBar} alt="" fill />
                </div>

                {activeIndex === 2 && (
                  <div
                    key={key}
                    className="absolute bottom-[0.5px] left-0 h-2 bg-[#f87315] rounded-r-[50px]"
                    style={{
                      animation: "progress 4s linear",
                      width: "100%",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}