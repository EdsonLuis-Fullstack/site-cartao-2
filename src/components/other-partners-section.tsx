"use client";
import { ArrowRight, ChevronDown, MapPin, Phone, Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/instances/api";

interface Partner {
  cod: number;
  nome: string;
  telefone: string;
  endereco: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  foto: string;
  categoria: number;
  subcategoria: number;
  whatsapp: string;
  categoria_obj: {
    cod: number;
    nome: string;
    status: string;
    data: string;
  };
  clinica_parceira: boolean;
}

interface PartnerCardProps {
  partner: Partner;
}

function PartnerCard({ partner }: PartnerCardProps) {
  const router = useRouter();

  const photoUrl = `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}` + partner.foto;

  const fullAddress = `${partner.endereco}, ${partner.numero} - ${partner.bairro}, ${partner.cidade}/${partner.estado}`;

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleSaibaMais = () => {
    const citySlug = generateSlug(partner.cidade);
    const nameSlug = generateSlug(partner.nome);
    if(partner.estado)
    router.push(`/partners/${citySlug}-${partner.estado.toLocaleLowerCase()}/${nameSlug}#sobre`);
  };

  return (
    <div className="bg-white rounded-[10px] px-[27px] py-[20px] w-[382px] flex flex-col gap-[19px] overflow-hidden">
      <div className="flex flex-col gap-[10px] w-full">
        <div className="h-[118px] relative w-full">
          <div className="absolute left-0 top-0 w-[120px] h-[118px] bg-[#434343] rounded-[100px] overflow-hidden">
            <div className="w-[120px] h-[120px] rounded-[2px] relative">
              <Image
                src={photoUrl}
                alt={partner.nome}
                fill
                className="object-cover rounded-[2px]"
              />
            </div>
          </div>

          <div className="absolute right-0 top-0 bg-[#f87315] rounded-[100px] px-[18px] py-[5px] h-[29px] flex items-center gap-[15px] max-w-[140px]">
            <span className="font-bold text-[16px] text-white leading-normal font-(family-name:--font-manrope) truncate">
              {partner.categoria_obj.nome}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] w-full">
          <h3 className="font-medium text-[20px] text-black leading-normal w-full font-(family-name:--font-figtree) truncate">
            {partner.nome}
          </h3>

          <div className="flex flex-col gap-[12px] w-full">
            <div className="flex items-center gap-[12px] w-[251px]">
              <MapPin className="w-[19.9px] h-[20px] shrink-0 text-[#61bb5a]" />
              <span className="font-normal text-[14px] text-black leading-normal w-[215px] font-(family-name:--font-figtree)">
                {fullAddress}
              </span>
            </div>

            <div className="flex items-center gap-[12px] w-full">
              <Phone className="w-[19.9px] h-[20px] shrink-0 text-[#61bb5a]" />
              <span className="font-normal text-[14px] text-black leading-normal w-[275px] font-(family-name:--font-figtree)">
                {partner.whatsapp || partner.telefone}
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
        className="bg-[#61bb5a] cursor-pointer rounded-[100px] px-[18px] py-[5px] w-[160px] flex items-center gap-[15px] h-[45px] hover:bg-[#559954] transition-colors shrink-0"
        onClick={handleSaibaMais}
      >
        <span className="font-medium text-[16px] text-white uppercase leading-normal font-(family-name:--font-manrope)">
          SAIBA MAIS
        </span>
        <div className="w-[21px] h-[21px] shrink-0 flex items-center justify-center">
          <div className="transform rotate-[-45deg]">
            <ArrowRight className="w-[21px] h-[21px] text-white" />
          </div>
        </div>
      </button>
    </div>
  );
}

interface Category {
  id: string;
  name: string;
}

interface OtherPartnersSectionProps {
  partners?: Partner[];
  categories?: Category[];
}

export default function OtherPartnersSection({
  partners = [],
  categories = [],
}: OtherPartnersSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    id: "",
    name: "",
  });

  const [selectedSubcategory, setSelectedSubcategory] = useState<Category>({
    id: "",
    name: "",
  });

  const subCategoriesResponse = useQuery({
    queryKey: ["subcategories", selectedCategory],
    queryFn: async () => {
      if (!selectedCategory.id) return [];

      try {
        const response = await api.subcategories.findAll({
          codCategoria: Number(selectedCategory.id),
        });

        return response || [];
      } catch (error) {
        console.error("Subcategories API not available:", error);
        return [];
      }
    },
    enabled: !!selectedCategory.id,
    retry: false,
  });

  
  const handleCategoryChange = (categoryId: string) => {
    const category = categories.find(
      (c) => Number(c.id) === Number(categoryId)
    );

    if (category) {
      setSelectedCategory(category);
      setSelectedSubcategory({ id: "", name: "" });
    }
  };

  const handleSubcategoryChange = (subcategoryId: string) => {
    const subcategory = subCategoriesResponse.data?.find(
      (s: any) => Number(s.id) === Number(subcategoryId)
    );
    if (subcategory) {
      setSelectedSubcategory({ id: subcategory.id, name: subcategory.name });
    }
  };

  return (
    <section className="bg-[#f3f2f2] w-full py-[72px] font-(family-name:--font-figtree)">
      <div className="container mx-auto px-4 max-w-[1920px]">
        <div className="flex flex-col items-center">
          <h1 className="font-normal text-[48px] text-[#f87315] leading-normal mb-[124px] self-start ml-[313px]">
            Outros Parceiros
          </h1>
          <div className="flex items-start gap-[35px] mb-[112px] self-start ml-[314px]">
            <div className="relative w-[299px]">
              <select
                className="bg-white rounded-[100px] px-[18px] py-[14px] w-full font-medium text-[16px] text-black/50 leading-normal appearance-none cursor-pointer border-none outline-none pr-[50px]"
                value={selectedCategory.id}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <option value="">Escolha categoria</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-[18px] top-1/2 transform -translate-y-1/2 w-[24px] h-[24px] text-[#61bb5a] pointer-events-none" />
            </div>

            <div className="relative w-[299px]">
              <select
                className="bg-white rounded-[100px] px-[18px] py-[14px] w-full font-medium text-[16px] text-black/50 leading-normal appearance-none cursor-pointer border-none outline-none pr-[50px]"
                value={selectedSubcategory.id}
                onChange={(e) => handleSubcategoryChange(e.target.value)}
                disabled={
                  !selectedCategory.id ||
                  subCategoriesResponse.isLoading ||
                  subCategoriesResponse.isError
                }
              >
                <option value="">
                  {subCategoriesResponse.isLoading
                    ? "Carregando..."
                    : subCategoriesResponse.isError
                    ? "Indisponível"
                    : "Subcategoria"}
                </option>
                {subCategoriesResponse.data?.map((subcategory: any) => (
                  <option key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-[18px] top-1/2 transform -translate-y-1/2 w-[24px] h-[24px] text-[#61bb5a] pointer-events-none" />
            </div>

            <button
              className="bg-[#f87315] cursor-pointer flex gap-[15px] items-center w-[172px] pl-[23px] pr-[51px] py-[14px] rounded-[100px] hover:bg-[#e66a0a] transition-colors"
              style={{ boxShadow: "0px 1px 4.3px 0px rgba(0,0,0,0.25)" }}
            >
              <Search className="w-[21px] h-[21px] text-white shrink-0" />
              <span className="font-(family-name:--font-figtree) font-medium text-[16px] text-white uppercase leading-normal shrink-0">
                PESQUISAR
              </span>
            </button>
          </div>
          <div className="w-[1281px] self-start ml-[314px]">
            <div className="flex flex-col gap-[32px]">
              {partners.length > 0 ? (
                Array.from(
                  { length: Math.ceil(partners.length / 3) },
                  (_, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="flex items-center justify-between px-[9px] w-[1281px]"
                    >
                      {partners
                        .slice(rowIndex * 3, (rowIndex + 1) * 3)
                        .map((partner) => (
                          <PartnerCard key={partner.cod} partner={partner} />
                        ))}
                    </div>
                  )
                )
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">
                    Nenhum parceiro encontrado
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}