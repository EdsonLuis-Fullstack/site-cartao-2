"use client"
import { useEffect, useState } from "react";

export default function CopyrightBar() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="bg-[#61bb5a] w-full py-3 sm:py-4 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32" data-node-id="123:906">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="font-normal leading-relaxed text-sm sm:text-base lg:text-[17px] text-white text-center" data-node-id="123:907">
          © {year ?? ""} Cartão Beneficiar. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}