"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "O que é o Cartão Beneficiar?",
    answer:
      "O Cartão Beneficiar é um programa de descontos em saúde que oferece benefícios exclusivos para você e sua família.",
  },
  {
    id: "2",
    question: "Quem pode ter o Cartão Beneficiar?",
    answer:
      "Qualquer pessoa pode ter acesso ao Cartão Beneficiar, não há restrições de idade ou condição de saúde.",
  },
  {
    id: "3",
    question: "O cartão é aceito em todo o Brasil?",
    answer:
      "Sim, o Cartão Beneficiar é aceito em uma ampla rede de parceiros espalhados por todo o território nacional.",
  },
  {
    id: "4",
    question: "Tenho que pagar algo para usar o cartão?",
    answer:
      "Não há taxas de adesão ou anuidades. Você paga apenas pelos serviços utilizados com desconto.",
  },
  {
    id: "5",
    question: "Preciso passar por análise de crédito?",
    answer:
      "Não, não é necessário análise de crédito para adquirir o Cartão Beneficiar.",
  },
  {
    id: "6",
    question: "Quais tipos de descontos o cartão oferece?",
    answer:
      "O cartão oferece descontos em consultas médicas, exames, procedimentos odontológicos e muito mais.",
  },
];

export default function FaqSection() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section id="faqs" className="bg-[#fdfbf8] w-full font-(family-name:--font-figtree) py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-medium text-[48px] leading-[58px] text-black mb-4">
            Perguntas Frequentes
          </h2>
          <p className="font-semibold text-[20px] leading-[30px] text-black">
            Estamos aqui para esclarecer suas dúvidas sobre o Beneficiar
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqData.map((item) => {
            const isOpen = expandedItem === item.id;

            return (
              <div
                key={item.id}
                onClick={() => toggleExpand(item.id)}
                className="bg-white rounded-[20px] p-7 cursor-pointer h-min transition-all duration-300 hover:shadow-lg"
              >
                {/* Question row */}
                <div className="flex items-center gap-6">
                  <h3 className="font-semibold text-[22px] leading-[32px] text-[#f87315] flex-1">
                    {item.question}
                  </h3>

                  <div className="border border-[#f87315] rounded-full p-2">
                    <ChevronDown
                      className={`w-6 h-6 text-[#61bb5a] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Answer (expande o próprio card) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#434343] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
