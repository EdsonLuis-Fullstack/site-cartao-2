import { getMetaData } from "@/utils/seo/get-metadata";
import { NextPage } from "next";
import UnitsHeroSection from "@/components/units-hero-section";
import Footer from "@/components/footer";
import CopyrightBar from "@/components/copyright-bar";
import { NavBar } from "@/components/shared/navbar";
import UnitsBannerSection from "@/components/units-banner-section";
import { api } from "@/instances/api";
import { PartnerDynamicPage } from "@/app/partners/types";
import { cacheLife } from "next/cache";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  let { city } = await params;
  city = city.replace(/-/g, " ");

  return getMetaData({
    title: `Cartão Beneficiar em ${city} – Endereço, Horários e Contato | Beneficiar`,
    description: `Unidade do Cartão Beneficiar em ${city}. Consultas acessíveis, exames com desconto e rede de parceiros com atendimento humanizado. Veja endereço, horários de atendimento e como falar com a equipe.`,
    image: "",
    url: `/units/${city}`,
  });
}

const Page: NextPage<PartnerDynamicPage> = async ({
  params,
}: {
  params: Promise<{ city: string }>;
}) => {
  "use cache";
  cacheLife("hours");
  let { city } = await params;
  city = city.replace(/-/g, " ");
  
  const [citiesData, partnerData, bannerUnit] = await Promise.all([
    api.cities.findAllPartnersCache({}),
    api.unit.findByCity({ city: city }),
    api.banners.findAllUnit(),
  ]);
  return (
    <main className="relative">
      <UnitsBannerSection cities={citiesData} />
      <NavBar />
      <UnitsHeroSection banner={bannerUnit} unit={partnerData} />
      <Footer />
      <CopyrightBar />
    </main>
  );
};
export default Page;
