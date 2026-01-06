"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import greenEllipse from "@/assets/ellipse-verde.svg";
import orangeEllipse from "@/assets/ellipse-laranja.svg";
import { ArrowRight, Check, ChevronDown, Loader2, AlertCircle } from "lucide-react";
import line11 from "@/assets/line-11.svg";
import line12 from "@/assets/line-12.svg";
import line13 from "@/assets/line-13.svg";
import { api } from "@/instances/api";

// Zod Schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  lastName: z.string().min(2, "Sobrenome deve ter pelo menos 2 caracteres"),
  phone: z.string()
    .min(1, "Telefone é obrigatório")
    .refine((val) => {
      const numbers = val.replace(/\D/g, "");
      return numbers.length >= 10 && numbers.length <= 11;
    }, "Telefone deve ter 10 ou 11 dígitos"),
  email: z.string().email("Email inválido"),
  city: z.string().min(1, "Selecione uma cidade"),
  helpType: z.string().min(1, "Selecione uma opção de ajuda"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface City {
  id: number;
  name: string;
  uf: string;
}

export default function ContactFormSection({cities}: {cities?: City[]}) {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const cityDropdownRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [textareaHeight, setTextareaHeight] = useState(24);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
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

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(e.target as Node)) {
        setCityDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Auto-resize textarea
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    const scrollHeight = textarea.scrollHeight;
    const maxHeight = 120;
    const newHeight = Math.min(scrollHeight, maxHeight);
    textarea.style.height = `${newHeight}px`;
    setTextareaHeight(newHeight);
  };

  // Resetar altura do textarea quando o formulário é resetado
  const messageValue = watch("message");
  useEffect(() => {
    if (!messageValue && textareaRef.current) {
      textareaRef.current.style.height = "24px";
      setTextareaHeight(24);
    }
  }, [messageValue]);

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setIsSuccess(false);
    setErrorMessage(null);

    try {
      const response = await api.contact.sendContact({
        name: data.firstName,
        surname: data.lastName,
        email: data.email,
        phone: data.phone.replace(/\D/g, ""),
        city: data.city,
        howHelp: data.helpType,
        message: data.message,
      });

      if (response === true || response === "true") {
        setTimeout(() => {
          setIsLoading(false);
          setIsSuccess(true);

          setTimeout(() => {
            setIsSuccess(false);
            setSelectedCity(null);
            reset();
          }, 3000);
        }, 500);
      } else {
        throw new Error("Resposta inesperada do servidor");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Erro ao enviar formulário:", error);
      setErrorMessage("Erro ao enviar formulário. Tente novamente.");
      
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleCitySelect = (city: City) => {
    setSelectedCity(city);
    setValue("city", city.name, { shouldValidate: true });
    setCityDropdownOpen(false);
  };

  const handleHelpTypeChange = (value: string) => {
    setValue("helpType", value, { shouldValidate: true });
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, (_, ddd, first, second) => {
        if (second) return `(${ddd}) ${first}-${second}`;
        if (first) return `(${ddd}) ${first}`;
        if (ddd) return `(${ddd}`;
        return "";
      });
    }

    return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, (_, ddd, first, second) => {
      if (second) return `(${ddd}) ${first}-${second}`;
      if (first) return `(${ddd}) ${first}`;
      return `(${ddd}`;
    });
  };

  return (
    <section className="bg-[#FFFFFF] relative w-full min-h-screen overflow-hidden flex items-center justify-center py-10">
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes checkPop {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }

        .spinner {
          animation: spin 1s linear infinite !important;
        }

        .check-icon {
          animation: checkPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .success-bg {
          background-color: #61bb5a !important;
          transition: background-color 0.5s ease-in-out;
        }
      `}</style>

      <div className="w-[1053px] bg-[#FFFBF5] rounded-[20px] px-24 py-[38px] relative z-10">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex flex-wrap gap-[25px] mb-[30px]">
            <div className="w-[401px] h-[77px] relative">
              <label className="absolute left-0 top-0 font-medium text-[16px] text-black leading-normal">
                Nome
              </label>
              <input
                type="text"
                {...register("firstName")}
                onFocus={() => setFocusedField("firstName")}
                onBlur={() => setFocusedField(null)}
                disabled={isLoading || isSuccess}
                className="absolute left-[11px] top-[45px] font-medium text-[16px] text-black bg-transparent border-none outline-none leading-normal placeholder:text-[#d9d9d9] disabled:opacity-50"
                placeholder="Digite seu nome"
              />
              <div className="absolute left-0 bottom-0 w-[406px] h-0.5">
                <Image src={line11} alt="" fill className="object-cover" />
              </div>
              {focusedField === "firstName" && !errors.firstName && (
                <div className="absolute left-0 bottom-0 w-[406px] h-0.5 bg-[#f87315]" />
              )}
              {errors.firstName && (
                <>
                  <div className="absolute left-0 bottom-0 w-[406px] h-0.5 bg-red-500" />
                  <p className="absolute left-0 -bottom-6 text-red-500 text-sm">{errors.firstName.message}</p>
                </>
              )}
            </div>

            <div className="w-[401px] h-[77px] relative">
              <label className="absolute left-0 top-0 font-medium text-[16px] text-black leading-normal">
                Sobrenome
              </label>
              <input
                type="text"
                {...register("lastName")}
                onFocus={() => setFocusedField("lastName")}
                onBlur={() => setFocusedField(null)}
                disabled={isLoading || isSuccess}
                className="absolute left-[11px] top-[45px] font-medium text-[16px] text-black bg-transparent border-none outline-none leading-normal placeholder:text-[#d9d9d9] disabled:opacity-50"
                placeholder="Digite seu sobrenome"
              />
              <div className="absolute left-0 bottom-0 w-[406px] h-0.5">
                <Image src={line11} alt="" fill className="object-cover" />
              </div>
              {focusedField === "lastName" && !errors.lastName && (
                <div className="absolute left-0 bottom-0 w-[406px] h-0.5 bg-[#f87315]" />
              )}
              {errors.lastName && (
                <>
                  <div className="absolute left-0 bottom-0 w-[406px] h-0.5 bg-red-500" />
                  <p className="absolute left-0 -bottom-6 text-red-500 text-sm">{errors.lastName.message}</p>
                </>
              )}
            </div>

            <div className="w-[406px] h-[77px] relative">
              <label className="absolute left-0 top-0 font-medium text-[16px] text-black leading-normal">
                Telefone
              </label>
              <input
                type="text"
                inputMode="numeric"
                maxLength={15}
                {...register("phone", {
                  onChange: (e) => {
                    e.target.value = formatPhone(e.target.value);
                  }
                })}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                disabled={isLoading || isSuccess}
                className="absolute left-[11px] top-[45px] font-medium text-[16px] text-black bg-transparent border-none outline-none leading-normal placeholder:text-[#d9d9d9] disabled:opacity-50"
                placeholder="(00) 0000-0000"
              />
              <div className="absolute left-0 bottom-0 w-[406px] h-0.5">
                <Image src={line11} alt="" fill className="object-cover" />
              </div>
              {focusedField === "phone" && !errors.phone && (
                <div className="absolute left-0 bottom-0 w-[406px] h-0.5 bg-[#f87315]" />
              )}
              {errors.phone && (
                <>
                  <div className="absolute left-0 bottom-0 w-[406px] h-0.5 bg-red-500" />
                  <p className="absolute left-0 -bottom-6 text-red-500 text-sm">{errors.phone.message}</p>
                </>
              )}
            </div>

            <div className="w-[401px] h-[77px] relative">
              <label className="absolute left-0 top-0 font-medium text-[16px] text-black leading-normal">
                E-mail
              </label>
              <input
                type="email"
                {...register("email")}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                disabled={isLoading || isSuccess}
                className="absolute left-[11px] top-[45px] font-medium text-[16px] text-black bg-transparent border-none outline-none leading-normal placeholder:text-[#d9d9d9] disabled:opacity-50"
                placeholder="Digite seu melhor e-mail"
              />
              <div className="absolute left-0 bottom-0 w-[406px] h-0.5">
                <Image src={line11} alt="" fill className="object-cover" />
              </div>
              {focusedField === "email" && !errors.email && (
                <div className="absolute left-0 bottom-0 w-[406px] h-0.5 bg-[#f87315]" />
              )}
              {errors.email && (
                <>
                  <div className="absolute left-0 bottom-0 w-[406px] h-0.5 bg-red-500" />
                  <p className="absolute left-0 -bottom-6 text-red-500 text-sm">{errors.email.message}</p>
                </>
              )}
            </div>

            {/* SELECT CUSTOMIZADO DE CIDADE */}
            <div className="w-[832px] h-[77px] relative" ref={cityDropdownRef}>
              <label className="absolute left-0 top-0 font-medium text-[16px] text-black leading-normal">
                Cidade
              </label>
              
              <input type="hidden" {...register("city")} />
              
              <button
                type="button"
                onClick={() => !isLoading && !isSuccess && setCityDropdownOpen(!cityDropdownOpen)}
                disabled={isLoading || isSuccess}
                className="absolute left-[11px] top-[45px] font-medium text-[16px] text-black bg-transparent border-none outline-none leading-normal text-left w-full disabled:opacity-50"
              >
                {selectedCity ? `${selectedCity.name} - ${selectedCity.uf}` : "Selecionar cidade"}
              </button>

              <div className="absolute left-0 bottom-0 w-[832px] h-0.5">
                <Image src={line12} alt="" fill className="object-cover" />
              </div>
              
              {focusedField === "city" && !errors.city && (
                <div className="absolute left-0 bottom-0 w-[832px] h-0.5 bg-[#f87315]" />
              )}

              <ChevronDown 
                className={`absolute right-3 top-2/3 transform -translate-y-1/2 w-[24px] h-[24px] text-[#61bb5a] pointer-events-none transition-transform ${
                  cityDropdownOpen ? "rotate-180" : ""
                }`}
              />

              {cityDropdownOpen && (
                <div className="absolute top-[85px] left-0 w-full bg-white rounded-[24px] shadow-lg overflow-hidden z-20">
                  <ul className="max-h-[180px] overflow-auto">
                    {cities && cities.length > 0 ? (
                      [...cities].sort((a, b) => a.name.localeCompare(b.name)).map((city) => (
                        <li
                          key={city.id}
                          onClick={() => handleCitySelect(city)}
                          className="px-6 py-3 cursor-pointer hover:bg-[#f2f2f2] text-black text-[14px]"
                        >
                          {city.name} - {city.uf}
                        </li>
                      ))
                    ) : (
                      <li className="px-6 py-3 text-gray-400 text-[14px]">
                        Nenhuma cidade disponível
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {errors.city && (
                <>
                  <div className="absolute left-0 bottom-0 w-[832px] h-0.5 bg-red-500" />
                  <p className="absolute left-0 -bottom-6 text-red-500 text-sm">{errors.city.message}</p>
                </>
              )}
            </div>

            {/* CHECKBOXES HARMONIZADOS - GRID 2 COLUNAS COM TAMANHOS IGUAIS */}
            <div className="w-full flex flex-col gap-[24px]">
              <h3 className="font-medium text-[19px] text-[#61bb5a] leading-normal pb-1">
                Como podemos te ajudar?
              </h3>
              <input type="hidden" {...register("helpType")} />
              <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px]  pl-6 pb-3">
                {helpOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`flex items-center gap-[14px] ${
                      isLoading || isSuccess ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                    }`}
                    onClick={() => !isLoading && !isSuccess && handleHelpTypeChange(option.id)}
                  >
                    <div
                      className={`min-w-[24px] w-[22px] h-[22px] rounded-[4px] border border-[#61bb5a] flex items-center justify-center transition-colors ${
                        watchedHelpType === option.id
                          ? "bg-[#61bb5a]"
                          : "bg-white"
                      }`}
                    >
                      {watchedHelpType === option.id && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <p className="font-medium text-[17px] text-black leading-normal flex-1">
                      {option.label}
                    </p>
                  </div>
                ))}
              </div>
              {errors.helpType && (
                <p className="text-red-500 text-sm -mt-4">{errors.helpType.message}</p>
              )}
            </div>

            <div className="w-[860px] relative" style={{ height: `${textareaHeight + 53}px` }}>
              <label className="absolute left-0 top-0 font-medium text-[16px] text-black leading-normal">
                Digite a sua dúvida
              </label>
              <textarea
                ref={textareaRef}
                {...register("message", {
                  onChange: handleTextareaChange
                })}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                disabled={isLoading || isSuccess}
                className="absolute left-[11px] text-black top-[45px] w-[calc(100%-22px)] font-medium text-[16px] bg-transparent border-none outline-none leading-normal placeholder:text-[#d9d9d9] resize-none disabled:opacity-50 overflow-y-auto transition-all duration-150"
                placeholder="Minha dúvida é em relação..."
                rows={1}
                style={{ height: `${textareaHeight}px` }}
              />
              <div className="absolute left-0 bottom-0 w-[860px] h-0.5">
                <Image src={line13} alt="" fill className="object-cover" />
              </div>
              {focusedField === "message" && !errors.message && (
                <div className="absolute left-0 bottom-0 w-[860px] h-0.5 bg-[#f87315]" />
              )}
              {errors.message && (
                <>
                  <div className="absolute left-0 bottom-0 w-[860px] h-0.5 bg-red-500" />
                  <p className="absolute left-0 -bottom-6 text-red-500 text-sm">{errors.message.message}</p>
                </>
              )}
            </div>
          </div>

          {errorMessage && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <p className="text-red-700">{errorMessage}</p>
            </div>
          )}

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

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading || isSuccess}
              className={`px-[18px] py-[5px] rounded-[100px] flex items-center justify-center gap-[15px] h-[45px] transition-all duration-500 ease-in-out ${
                isSuccess
                  ? "success-bg"
                  : "bg-[#f87315] hover:bg-[#e66a0a]"
              } ${
                isLoading || isSuccess ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {isLoading && (
                <>
                  <Loader2 className="w-[21px] h-[21px] text-white animate-spin" />
                  <span className="font-medium text-[16px] text-white uppercase leading-normal">
                    Enviando...
                  </span>
                </>
              )}

              {isSuccess && (
                <div className="fade-in flex items-center gap-[15px]">
                  <Check className="w-[21px] h-[21px] text-white check-icon" />
                  <span className="font-medium text-[16px] text-white uppercase leading-normal">
                    Enviado com sucesso
                  </span>
                </div>
              )}

              {!isLoading && !isSuccess && (
                <>
                  <span className="font-medium text-[16px] text-white uppercase leading-normal">
                    Enviar
                  </span>
                  <ArrowRight className="w-[21px] h-[21px] text-white -rotate-45" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}