"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import greenEllipse from "@/assets/ellipse-verde.svg";
import orangeEllipse from "@/assets/ellipse-laranja.svg";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import line11 from "@/assets/line-11.svg";
import line12 from "@/assets/line-12.svg";
import line13 from "@/assets/line-13.svg";

// Zod Schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  lastName: z.string().min(2, "Sobrenome deve ter pelo menos 2 caracteres"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  email: z.string().email("Email inválido"),
  city: z.string().min(1, "Selecione uma cidade"),
  helpType: z.string().min(1, "Selecione uma opção de ajuda"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactFormSection() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      city: "",
      helpType: "ouvidoria",
      message: "",
    },
  });

  const watchedHelpType = watch("helpType");

  const helpOptions = [
    { id: "conhecer", label: "Quero conhecer melhor o Beneficiar" },
    { id: "empresa", label: "Quero o Beneficiar para minha empresa" },
    { id: "cliente", label: "Já sou cliente e preciso de ajuda" },
    { id: "boletos", label: "Solicitar novos boletos" },
    { id: "trabalhe", label: "Trabalhe conosco" },
    { id: "ouvidoria", label: "Ouvidoria" },
  ];

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
  };

  const handleHelpTypeChange = (value: string) => {
    setValue("helpType", value);
  };
  const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "");

  if (numbers.length <= 10) {
    return numbers.replace(
      /(\d{2})(\d{4})(\d{0,4})/,
      "($1) $2-$3"
    );
  }

  return numbers.replace(
    /(\d{2})(\d{5})(\d{0,4})/,
    "($1) $2-$3"
  );
};

  return (
    <section className="bg-white relative w-full min-h-screen overflow-hidden flex items-center justify-center py-10">
      <div className="w-[1053px] bg-[#fdfbf8] rounded-[20px] px-24 py-[38px] relative z-10">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex flex-wrap gap-[25px] mb-[30px]">
            <div className="w-[401px] h-[77px] relative">
              <label className="absolute left-0 top-0 font-medium text-[18px] text-black leading-normal">
                Nome
              </label>
              <input
                type="text"
                {...register("firstName")}
                onFocus={() => setFocusedField("firstName")}
                onBlur={() => setFocusedField(null)}
                className="absolute left-[11px] top-[45px] font-medium text-[18px] text-black bg-transparent border-none outline-none leading-normal placeholder:text-[#d9d9d9]"
                placeholder="Digite seu nome"
              />
              <div className="absolute left-0 bottom-0 w-[406px] h-0.5">
                <Image src={line11} alt="" fill className="object-cover" />
              </div>
              {focusedField === "firstName" && (
                <div className="absolute left-0 bottom-0 w-[406px] h-0.5 bg-[#f87315]" />
              )}
              {errors.firstName && (
                <span className="absolute left-0 -bottom-5 text-red-500 text-sm">
                  {errors.firstName.message}
                </span>
              )}
            </div>

            <div className="w-[401px] h-[77px] relative">
              <label className="absolute left-0 top-0 font-medium text-[18px] text-black leading-normal">
                Sobrenome
              </label>
              <input
                type="text"
                {...register("lastName")}
                onFocus={() => setFocusedField("lastName")}
                onBlur={() => setFocusedField(null)}
                className="absolute left-[11px] top-[45px] font-medium text-[18px] text-black bg-transparent border-none outline-none leading-normal placeholder:text-[#d9d9d9]"
                placeholder="Digite seu sobrenome"
              />
              <div className="absolute left-0 bottom-0 w-[406px] h-0.5">
                <Image src={line11} alt="" fill className="object-cover" />
              </div>
              {focusedField === "lastName" && (
                <div className="absolute left-0 bottom-0 w-[406px] h-0.5 bg-[#f87315]" />
              )}
              {errors.lastName && (
                <span className="absolute left-0 -bottom-5 text-red-500 text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="w-[406px] h-[77px] relative">
              <label className="absolute left-0 top-0 font-medium text-[18px] text-black leading-normal">
                Telefone
              </label>
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                {...register("phone")}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => {
                e.target.value = formatPhone(e.target.value);
              }}

                className="absolute left-[11px] top-[45px] font-medium text-[18px] text-black bg-transparent border-none outline-none leading-normal placeholder:text-[#d9d9d9]"
                placeholder="(00) 0000-0000"
              />

              <div className="absolute left-0 bottom-0 w-[406px] h-0.5">
                <Image src={line11} alt="" fill className="object-cover" />
              </div>
              {focusedField === "phone" && (
                <div className="absolute left-0 bottom-0 w-[406px] h-0.5 bg-[#f87315]" />
              )}
              {errors.phone && (
                <span className="absolute left-0 -bottom-5 text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="w-[401px] h-[77px] relative">
              <label className="absolute left-0 top-0 font-medium text-[18px] text-black leading-normal">
                E-mail
              </label>
              <input
                type="email"
                {...register("email")}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className="absolute left-[11px] top-[45px] font-medium text-[18px] text-black bg-transparent border-none outline-none leading-normal placeholder:text-[#d9d9d9]"
                placeholder="Digite seu melhor e-mail"
              />
              <div className="absolute left-0 bottom-0 w-[406px] h-0.5">
                <Image src={line11} alt="" fill className="object-cover" />
              </div>
              {focusedField === "email" && (
                <div className="absolute left-0 bottom-0 w-[406px] h-0.5 bg-[#f87315]" />
              )}
              {errors.email && (
                <span className="absolute left-0 -bottom-5 text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* City */}
            <div className="w-[832px] h-[77px] relative">
              <label className="absolute left-0 top-0 font-medium text-[18px] text-black leading-normal">
                Cidade
              </label>
              <select
                {...register("city")}
                onFocus={() => setFocusedField("city")}
                onBlur={() => setFocusedField(null)}
                className="absolute left-[11px] top-[45px] font-medium text-[18px] text-black bg-transparent border-none outline-none leading-normal appearance-none w-full"
              >
                <option value="">Selecionar cidade</option>
                <option value="sao-paulo">São Paulo</option>
                <option value="rio-janeiro">Rio de Janeiro</option>
                <option value="belo-horizonte">Belo Horizonte</option>
                <option value="brasilia">Brasília</option>
              </select>
              <div className="absolute left-0 bottom-0 w-[832px] h-0.5">
                <Image src={line12} alt="" fill className="object-cover" />
              </div>
              {focusedField === "city" && (
                <div className="absolute left-0 bottom-0 w-[832px] h-0.5 bg-[#f87315]" />
              )}
              <ChevronDown className="absolute right-3 top-2/3 transform -translate-y-1/2 w-[24px] h-[24px] text-[#61bb5a] pointer-events-none" />
              {errors.city && (
                <span className="absolute left-0 -bottom-5 text-red-500 text-sm">
                  {errors.city.message}
                </span>
              )}
            </div>

            {/* Help Type Selection */}
            <div className="w-[860px] flex flex-col gap-[43px]">
              <h3 className="font-medium text-[24px] text-[#61bb5a] leading-normal">
                Como podemos te ajudar?
              </h3>
              <div className="flex flex-wrap gap-[17px]">
                {helpOptions.map((option, index) => {
                  // Define widths based on Figma design
                  const getWidth = (index: number) => {
                    switch (index) {
                      case 0:
                        return "396px"; // "Quero conhecer melhor o Beneficiar"
                      case 1:
                        return "295px"; // "Quero o Beneficiar para minha empresa"
                      case 2:
                        return "396px"; // "Já sou cliente e preciso de ajuda"
                      case 3:
                        return "286px"; // "Solicitar novos boletos"
                      case 4:
                        return "396px"; // "Trabalhe conosco"
                      case 5:
                        return "295px"; // "Ouvidoria" - full width on its row
                      default:
                        return "auto";
                    }
                  };

                  return (
                    <div
                      key={option.id}
                      className="flex items-center gap-[17px] cursor-pointer"
                      style={{ width: getWidth(index) }}
                      onClick={() => handleHelpTypeChange(option.id)}
                    >
                      <div
                        className={`w-[26px] h-[26px] rounded-[5px] border border-[#61bb5a] flex items-center justify-center ${
                          watchedHelpType === option.id
                            ? "bg-[#61bb5a]"
                            : "bg-white"
                        }`}
                      >
                        {watchedHelpType === option.id && (
                          <Check className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <p className="font-medium text-[18px] text-black leading-normal flex-1">
                        {option.label}
                      </p>
                    </div>
                  );
                })}
              </div>
              {errors.helpType && (
                <span className="text-red-500 text-sm mt-2">
                  {errors.helpType.message}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="w-[860px] h-[77px] relative">
              <label className="absolute left-0 top-0 font-medium text-[18px] text-black leading-normal">
                Digite a sua dúvida
              </label>
              <textarea
                {...register("message")}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className="absolute left-[11px] text-black top-[45px] w-full font-medium text-[18px] bg-transparent border-none outline-none leading-normal placeholder:text-[#d9d9d9] resize-none"
                placeholder="Minha dúvida é em relação..."
                rows={1}
              />
              <div className="absolute left-0 bottom-0 w-[860px] h-0.5">
                <Image src={line13} alt="" fill className="object-cover" />
              </div>
              {focusedField === "message" && (
                <div className="absolute left-0 bottom-0 w-[860px] h-0.5 bg-[#f87315]" />
              )}
              {errors.message && (
                <span className="absolute left-0 -bottom-5 text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>
          </div>

          {/* Privacy Policy Text */}
          <p className="font-normal text-[18px] text-black text-center leading-normal mb-[30px] w-[458px] mx-auto">
            O Beneficiar garante a privacidade e segurança dos seus dados{" "}
            <a
              href="https://materiais.cartaobeneficiar.com.br/politica-de-privacidade"
              className="font-semibold underline decoration-solid cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de Privacidade.
            </a>{" "}
            Ao enviar você aceita nossa política de privacidade e comunicação.
          </p>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#f87315] cursor-pointer px-[18px] py-[5px] rounded-[100px] flex items-center gap-[15px] h-[45px] hover:bg-[#e66a0a] transition-colors"
            >
              <span className="font-medium text-[16px] text-white uppercase leading-normal">
                Enviar
              </span>
              <ArrowRight className="w-[21px] h-[21px] text-white -rotate-45" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
