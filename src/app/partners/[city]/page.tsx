export const dynamic = 'force-dynamic'
import { getMetaData } from "@/utils/seo/get-metadata";
import { NextPage } from "next";
import PartnerClinicSection from "@/components/partner-clinic-section";
import OtherPartnersSection from "@/components/other-partners-section";
import Footer from "@/components/footer";
import CopyrightBar from "@/components/copyright-bar";
import PartnersBannerSection from "@/components/partners-banner-section";
import { NavBar } from "@/components/shared/navbar";
import { api } from "@/instances/api";
import { Metadata } from "next";
import { PartnerDynamicPage } from "../types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  
  try {
  const parts = city.split("-");
  const lastPart = parts[parts.length - 1];
  
  const hasUfSuffix = lastPart.length === 2;
  
  const cityWithoutUf = hasUfSuffix 
    ? parts.slice(0, -1).join("-") 
    : city;
  
  const uf = hasUfSuffix ? lastPart : null;
  console.log({ cityWithoutUf, uf });

  const partnersUnit = await api.partners.findByCityPartner({ city: cityWithoutUf, uf: uf });
    if (partnersUnit.length === 1) {
      const partner = partnersUnit[0];
      const clinicName = partner.nome.split(' - ')[0];
      
      return getMetaData({
        title: `${clinicName}`,
        description: `Clínica em ${partner.cidade} parceira do Cartão Beneficiar. Consultas médicas, odontológicas, exames laboratoriais e de imagem com condições acessíveis. Veja endereço, horários e formas de contato.`,
        image: "",
        url: `/partners/${city}`,
      });
    } else if (partnersUnit.length > 1) {
      const firstPartner = partnersUnit[0];
      const clinicName = firstPartner.nome.split(' - ')[0];
      const unitName = firstPartner.nome.split(' - ')[1] || firstPartner.bairro;
      
      return getMetaData({
        title: `${clinicName} – ${unitName}`,
        description: `Clínica em ${firstPartner.cidade} - ${unitName} parceira do Cartão Beneficiar. Consultas médicas, odontológicas, exames laboratoriais e de imagem com condições acessíveis. Veja endereço, horários e formas de contato.`,
        image: "",
        url: `/partners/${city}`,
      });
    }

    return getMetaData({
      title: `Parceiros em ${cityWithoutUf} | Beneficiar`,
      description: "Conheça nossos parceiros credenciados ao Cartão Beneficiar",
      image: "",
      url: `/partners/${city}`,
    });
  } catch (error) {
    console.error("Erro ao gerar metadata:", error);
    
    return getMetaData({
      title: `Parceiros em ${city} | Beneficiar`,
      description: "Conheça nossos parceiros credenciados ao Cartão Beneficiar",
      image: "",
      url: `/partners/${city}`,
    });
  }
}

const Page: NextPage<PartnerDynamicPage> = async ({
  params,
}: {
  params: Promise<{ city: string }>;
}) => {
  const { city } = await params;
  
  const parts = city.split("-");
  const lastPart = parts[parts.length - 1];
  
  const hasUfSuffix = lastPart.length === 2;
  
  const cityWithoutUf = hasUfSuffix 
    ? parts.slice(0, -1).join("-") 
    : city;
  
  const uf = hasUfSuffix ? lastPart : null;
  console.log({ cityWithoutUf, uf });
  

  const [citiesData, partnersData, categoriesData, unitPartners] = await Promise.all([
    api.cities.findAll({}),
    api.partners.findByCity({ city: cityWithoutUf, uf: uf }),
    api.categories.findAll({}),
    api.partners.findByCityPartner({ city: cityWithoutUf, uf: uf }),
  ]);

  console.log({ unitPartners });


  return (
    <main className="relative">
      <PartnersBannerSection cities={citiesData} selectedCityName={city} />
      <NavBar />
      <PartnerClinicSection PartnerData={unitPartners} />
      <OtherPartnersSection
        partners={partnersData.data}
        categories={categoriesData}
      />
      <Footer />
      <CopyrightBar />
    </main>
  );
};

export default Page;