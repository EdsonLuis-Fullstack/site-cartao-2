"use client";
import { ArrowRight, ChevronDown, MapPin, Phone, Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/instances/api";
import { Pagination } from 'antd';
import { testando } from "@/services/testando";
import { handlePagination, handleSubcategoryes, handlePartnersCategory } from "@/utils/handleRequest";

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
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleSaibaMais = () => {
    const citySlug = generateSlug(partner.cidade);
    const nameSlug = generateSlug(partner.nome);
    if (partner.estado)
      router.push(
        `/partners/${citySlug}-${partner.estado.toLowerCase()}/${nameSlug}#sobre`
      );
  };

  return (
    <div className="bg-white rounded-[8px] px-[22px] py-[16px] w-full max-w-[330px] flex flex-col gap-[16px] overflow-hidden">
      <div className="flex flex-col gap-[8px] w-full">
        <div className="h-[100px] relative w-full">
          <div className="absolute left-0 top-0 w-[100px] h-[100px] bg-[#434343] rounded-[100px] overflow-hidden">
            <div className="w-[100px] h-[100px] relative">
              <Image
                src={photoUrl}
                alt={partner.nome}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute right-0 top-0 bg-[#f87315] rounded-[100px] px-[14px] py-[4px] h-[24px] flex items-center max-w-[120px]">
            <span className="font-bold text-[14px] text-white truncate">
              {partner.categoria_obj.nome}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-[16px] w-full">
          <h3 className="font-medium text-[17px] text-black leading-normal truncate">
            {partner.nome}
          </h3>

          <div className="flex flex-col gap-[10px] w-full">
            <div className="flex items-start gap-[10px]">
              <MapPin className="w-[16px] h-[16px] shrink-0 text-[#61bb5a]" />
              <span className="font-normal text-[13px] text-black leading-snug">
                {fullAddress}
              </span>
            </div>

            <div className="flex items-center gap-[10px]">
              <Phone className="w-[16px] h-[16px] shrink-0 text-[#61bb5a]" />
              <span className="font-normal text-[13px] text-black">
                {partner.whatsapp || partner.telefone}
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        className="bg-[#61bb5a] cursor-pointer rounded-[100px] px-[14px] py-[4px] w-[140px] flex items-center gap-[10px] h-[38px] hover:bg-[#559954] transition-colors"
        onClick={handleSaibaMais}
      >
        <span className="font-medium text-[14px] text-white uppercase">
          Saiba mais
        </span>
        <div className="w-[18px] h-[18px] flex items-center justify-center">
          <div className="transform rotate-[-45deg]">
            <ArrowRight className="w-[18px] h-[18px] text-white" />
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

interface Subcategory {
  cod: number;
  cod_categoria: number;
  nome: string;
  status: string;
  data: string;
  cod_usuario: number;
  categoria_nome: string;
}

interface OtherPartnersSectionProps {
  categories?: Category[];
  initialData?: {
    data: Partner[];
    recordsFiltered: number;
    recordsTotal: number;
    draw: number;
  };
  city?: string | null;
  uf?: string | null;
}

export default function OtherPartnersSection({
  categories = [],
  initialData,
  city = null,
  uf = null,
}: OtherPartnersSectionProps) {
  const [tempCategory, setTempCategory] = useState<Category>({
    id: "",
    name: "",
  });

  const [tempSubcategory, setTempSubcategory] = useState<{
    cod: number | string;
    nome: string;
  }>({
    cod: "",
    nome: "",
  });

  const [appliedCategory, setAppliedCategory] = useState<Category>({
    id: "",
    name: "",
  });

  const [appliedSubcategory, setAppliedSubcategory] = useState<{
    cod: number | string;
    nome: string;
  }>({
    cod: "",
    nome: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const [isAnimating, setIsAnimating] = useState(false);

  const subCategoriesResponse = useQuery({
    queryKey: ["subcategories", tempCategory.id, city, uf],
    queryFn: async () => {
      if (!tempCategory.id) return [];

      try {
        const response = await handleSubcategoryes(
          Number(tempCategory.id),
          city,
          uf
        );
        return response || [];
      } catch (error) {
        console.error("Subcategories API not available:", error);
        return [];
      }
    },
    enabled: !!tempCategory.id,
    retry: false,
  });

  const partnersResponse = useQuery({
    queryKey: ["partners", currentPage, appliedCategory.id, appliedSubcategory.cod, city, uf],
    queryFn: async () => {
      const start = (currentPage - 1) * itemsPerPage;

      console.log('Buscando parceiros com:', {
        categoryId: appliedCategory.id,
        subcategoryId: appliedSubcategory.cod,
        city,
        uf,
        start
      });

      if (currentPage === 1 && !appliedCategory.id && !appliedSubcategory.cod && initialData) {
        return initialData;
      }

      if (appliedCategory.id) {
        try {
          const response = await handlePartnersCategory(
            Number(appliedCategory.id),
            appliedSubcategory.cod ? Number(appliedSubcategory.cod) : null,
            start,
            city || null,
            uf || null
          );
          return response || { data: [], recordsFiltered: 0, recordsTotal: 0, draw: 1 };
        } catch (error) {
          console.error("Error fetching partners by category:", error);
          return { data: [], recordsFiltered: 0, recordsTotal: 0, draw: 1 };
        }
      }

      try {
        let response;
        if (city) {
          response = await handlePagination(
            start,
            city,
            uf,
            "cities",
          );
        } else {
          response = await handlePagination(
            start,
            null,
            null,
            "partners",
          );
        }
        return response || { data: [], recordsFiltered: 0, recordsTotal: 0, draw: 1 };
      } catch (error) {
        console.error("Error fetching partners:", error);
        return { data: [], recordsFiltered: 0, recordsTotal: 0, draw: 1 };
      }
    },
    retry: false,
  });

  useEffect(() => {
    if (!partnersResponse.isLoading) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 50);
      return () => clearTimeout(timer);
    }
  }, [partnersResponse.data, partnersResponse.isLoading]);

  useEffect(() => {
    console.log('City e UF recebidos:', { city, uf });
  }, [city, uf]);

  const handleCategoryChange = (categoryId: string) => {
    const category = categories.find(
      (c) => Number(c.id) === Number(categoryId)
    );

    if (category) {
      setTempCategory(category);
      setTempSubcategory({ cod: "", nome: "" });
    } else {
      setTempCategory({ id: "", name: "" });
      setTempSubcategory({ cod: "", nome: "" });
    }
  };

  const handleSubcategoryChange = (subcategoryId: string) => {
    if (!subcategoryId) {
      setTempSubcategory({ cod: "", nome: "" });
      return;
    }

    const subcategory = subCategoriesResponse.data?.find(
      (s: Subcategory) => Number(s.cod) === Number(subcategoryId)
    );
    
    if (subcategory) {
      setTempSubcategory({ cod: subcategory.cod, nome: subcategory.nome });
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const partnersSection = document.getElementById('partners-grid');
    if (partnersSection) {
      partnersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSearch = () => {
    console.log('Aplicando filtros:', {
      category: tempCategory,
      subcategory: tempSubcategory,
      city,
      uf
    });
    setAppliedCategory(tempCategory);
    setAppliedSubcategory(tempSubcategory);
    setCurrentPage(1);
  };

  const partners = partnersResponse.data?.data || [];
  const totalRecords = partnersResponse.data?.recordsFiltered || 0;
  const isLoading = partnersResponse.isLoading;

  return (
    <section className="bg-[#f3f2f2] w-full py-[72px] ">
      <div className=" flex justify-center ml-[314px]">
        <div className="flex flex-col items-center w-full  max-w-[1292px]">
          <div className="w-full">
            <h1 className="font-normal text-[48px] text-[#f87315] leading-normal mb-[80px] self-start ">
              Outros Parceiros
            </h1>
            <div className="flex items-start gap-[35px] mb-[80px] self-start ">
              <div className="relative w-[299px]">
                <select
                  className="bg-white rounded-[100px] px-[18px] py-[14px] w-full font-medium text-[16px] text-black/50 leading-normal appearance-none cursor-pointer border-none outline-none pr-[50px]"
                  value={tempCategory.id}
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
                  value={tempSubcategory.cod}
                  onChange={(e) => handleSubcategoryChange(e.target.value)}
                  disabled={
                    !tempCategory.id ||
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
                  {subCategoriesResponse.data?.map((subcategory: Subcategory) => (
                    <option key={subcategory.cod} value={subcategory.cod}>
                      {subcategory.nome}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-[18px] top-1/2 transform -translate-y-1/2 w-[24px] h-[24px] text-[#61bb5a] pointer-events-none" />
              </div>
  
              <button
                className="bg-[#f87315] cursor-pointer flex gap-[15px] items-center w-[172px] pl-[23px] pr-[51px] py-[14px] rounded-[100px] hover:bg-[#e66a0a] transition-colors"
                style={{ boxShadow: "0px 1px 4.3px 0px rgba(0,0,0,0.25)" }}
                onClick={handleSearch}
              >
                <Search className="w-[21px] h-[21px] text-white shrink-0" />
                <span className="font-medium text-[16px] text-white uppercase leading-normal shrink-0">
                  PESQUISAR
                </span>
              </button>
            </div>
          </div>

          <div 
            id="partners-grid"
            className={`w-full mx-auto mb-[60px] transition-opacity duration-500 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {isLoading ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">Carregando parceiros...</p>
              </div>
            ) : partners.length > 0 ? (
              <div className="grid grid-cols-3 gap-y-[32px]">
                {partners.map((partner: Partner) => (
                  <PartnerCard key={partner.cod} partner={partner} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">
                  Nenhum parceiro encontrado
                </p>
              </div>
            )}
          </div>

          {totalRecords > itemsPerPage && (
            <div className="flex justify-center w-full">
              <Pagination
                current={currentPage}
                total={totalRecords}
                pageSize={itemsPerPage}
                onChange={handlePageChange}
                showSizeChanger={false}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}