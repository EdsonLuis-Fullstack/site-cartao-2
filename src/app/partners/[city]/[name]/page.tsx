import { getMetaData } from "@/utils/seo/get-metadata";
import { NextPage } from "next";
import Footer from "@/components/footer";
import CopyrightBar from "@/components/copyright-bar";
import PartnerMainSection from "@/components/partner-main-section";
import PartnerBannerSection from "@/components/partner-banner-section";
import { NavBar } from "@/components/shared/navbar";
import { api } from "@/instances/api";
import { PartnerDynamicPage } from "../../types";
import { redirect } from "next/navigation"; // ✅ Importação correta

export async function generateMetadata({
  params,
}: {
  params: { name: string; city: string };
}) {
  let { name, city } = await params;

  const parts = city.split("-");
  const lastPart = parts[parts.length - 1];
  if(name.includes("#")){
    name = name.split("#")[0]
  }
  const hasUfSuffix = lastPart.length === 2;
  
  const cityWithoutUf = hasUfSuffix 
    ? parts.slice(0, -1).join("-") 
    : city;
  
  const uf = hasUfSuffix ? lastPart : null;
  const partnerData = await api.partner.findbyNameAndCity({
    name: name.replaceAll("-", " "),
    city: cityWithoutUf.replaceAll("-", " "),
    uf: uf || null,
  });
  const servicesResume = () => {
    const first = (partnerData?.servicos || "").split(".").at(0);
    return first
      ? first
          .replace(/\r?\n+/g, ",")
          .replace(/\s*,\s*/g, ", ")
          .trim()
          .toLowerCase()
      : "";
  };
  if(!partnerData){
    return getMetaData({
      title: `Parceiro não encontrado | Beneficiar`,
      description: `Saiba telefone, WhatsApp e endereço do parceiro do Cartão Beneficiar. Consulte nossos parceiros credenciados nas áreas de saúde, odontologia, exames laboratoriais e de imagem com condições especiais para quem tem o cartão.`,
      url: `/partners/${city}/${name}`,
      image: "",
    });
  }

  return getMetaData({
    title: `${partnerData.nome.split(" ").map((word) =>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")} em ${partnerData.cidade} | Telefone, WhatsApp e endereço`,
    description: `Saiba telefone, WhatsApp e endereço de ${partnerData.nome.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")} em ${partnerData.cidade}. Parceiro do Cartão Beneficiar, que atua nas áreas de ${partnerData.categoria_obj.nome.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")} e oferece ${servicesResume()} com condições especiais para quem tem o cartão.`,
    url: `/partners/${city}/${name}`,
    image: "",
  });
}

const Page: NextPage<PartnerDynamicPage> = async ({
  params,
}: {
  params: Promise<{ name: string, city: string }>;
}) => {
  let { name, city } = await params;

  const parts = city.split("-");
  const lastPart = parts[parts.length - 1];
  if(name.includes("#")){
    name = name.split("#")[0]
  }
  
  const hasUfSuffix = lastPart.length === 2;
  
  const cityWithoutUf = hasUfSuffix 
    ? parts.slice(0, -1).join("-") 
    : city;
  
  const uf = hasUfSuffix ? lastPart : null;
  const partnerData: any | undefined = await api.partner.findbyNameAndCity({
    name: name.replaceAll("-", " "),
    city: cityWithoutUf.replaceAll("-", " "),
    uf: uf || null,
  }) 
  
  // if(!partnerData){
  //   redirect("/404"); // ✅ Uso correto do redirect
  // }
  
  return (
    <main className="relative">
      <PartnerBannerSection />
      <NavBar />
      <PartnerMainSection partner={partnerData} />
      <Footer />
      <CopyrightBar />
    </main>
  );
};

export default Page;