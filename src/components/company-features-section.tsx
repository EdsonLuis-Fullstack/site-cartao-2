"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import dressmaker from "../../public/images/costureira.webp";
import rectangleBottomBar from "../../public/images/Rectangle 18.webp";
import { CrossIcon, DollarSign, PiggyBank } from "lucide-react";

export default function CompanyFeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // ▶ troca automática a cada 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#ededed] py-[132px] px-4 font-(family-name:--font-figtree)">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-[130px] items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col gap-[51px] w-[434px] shrink-0">
            <h2 className="font-medium text-[48px] text-black leading-normal w-[500px]">
              Para sua empresa
            </h2>

            <div className="flex flex-col gap-[60px] w-[434px]">
              {/* CARD 1 */}
              <div
                className={`flex gap-5 py-7 px-5 h-[111px] rounded-[10px] overflow-hidden relative ${
                  activeIndex === 0 ? "bg-[#e4e4e4]" : "bg-[#fdfbf8]"
                }`}
              >
                <DollarSign className="w-[50px] h-[50px] p-3 bg-[#434343] text-white rounded-[50px]" />

                <div className="flex flex-col justify-center">
                  <p className="font-medium text-[24px] text-black leading-normal w-[292px]">
                    Funcionários{" "}
                    <span className="text-[#f87315]">que ficam</span>
                  </p>
                  <p className="font-normal text-[18px] text-black leading-normal w-[229px] mt-[11px]">
                    Evite custos de substituição
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-[434px] h-2">
                  <Image src={rectangleBottomBar} alt="" fill />
                </div>

                {activeIndex === 0 && (
                  <div
                    className="absolute bottom-[0.5px] left-0 h-2 bg-[#f87315] rounded-r-[50px]"
                    style={{
                      animation: "progress 4s linear",
                      width: "100%",
                    }}
                  />
                )}
              </div>

              {/* CARD 2 */}
              <div
                className={`flex w-full gap-5 py-7 px-5 h-[111px] rounded-[10px] overflow-hidden relative ${
                  activeIndex === 1 ? "bg-[#e4e4e4]" : "bg-[#fdfbf8]"
                }`}
              >
                <CrossIcon className="w-[50px] h-[50px] p-3 bg-[#434343] text-white rounded-[50px]" />

                <div className="flex flex-col justify-center">
                  <p className="font-medium text-[24px] text-black leading-normal w-[292px]">
                    <span className="text-[#f87315]">Menos faltas</span> por
                    saúde
                  </p>
                  <p className="font-normal text-[18px] text-black leading-normal w-[261px] mt-[11px]">
                    Mais produtividade no dia a dia
                  </p>
                </div>

                <div className="absolute bottom-0 left-[8px] w-[426px] h-[8px]">
                  <Image src={rectangleBottomBar} alt="" fill />
                </div>

                {activeIndex === 1 && (
                  <div
                    className="absolute bottom-[0.5px] left-0 h-[8px] bg-[#f87315] rounded-r-[50px]"
                    style={{
                      animation: "progress 4s linear",
                      width: "100%",
                    }}
                  />
                )}
              </div>

              {/* CARD 3 */}
              <div
                className={`flex gap-5 py-7 px-5 h-[111px] rounded-[10px] overflow-hidden relative ${
                  activeIndex === 2 ? "bg-[#e4e4e4]" : "bg-[#fdfbf8]"
                }`}
              >
                <PiggyBank className="w-[50px] h-[50px] p-3 bg-[#434343] text-white rounded-[50px]" />

                <div className="flex flex-col justify-center">
                  <p className="font-medium text-[24px] text-black leading-normal w-[292px]">
                    <span className="text-[#f87315]">Orçamento</span>{" "}
                    controlado
                  </p>
                  <p className="font-normal text-[18px] text-black leading-normal w-[229px] mt-[11px]">
                    Valor fixo mensal previsível
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-[434px] h-[8px]">
                  <Image src={rectangleBottomBar} alt="" fill />
                </div>

                {activeIndex === 2 && (
                  <div
                    className="absolute bottom-[0.5px] left-0 h-[8px] bg-[#f87315] rounded-r-[50px]"
                    style={{
                      animation: "progress 4s linear",
                      width: "100%",
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-[706px] h-[595px] rounded-[20px] overflow-hidden shrink-0">
            <Image
              src={dressmaker}
              alt="Oficina de costura sustentável"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 🔴 animação da borda */}
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
