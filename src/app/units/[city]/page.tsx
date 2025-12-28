import { getMetaData } from "@/utils/seo/get-metadata";
import { NextPage } from "next";
import UnitsHeroSection from "@/components/units-hero-section";
import Footer from "@/components/footer";
import CopyrightBar from "@/components/copyright-bar";
import { NavBar } from "@/components/shared/navbar";
import UnitsBannerSection from "@/components/units-banner-section";
import { api } from "@/instances/api";
import { PartnerDynamicPage } from "@/app/partners/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  let { city } = await params;
  city = city.replace("-", " ");

  return getMetaData({
    title: `Cartão Beneficiar em ${city} – Endereço, Horários e Contato | Beneficiar`,
    description: `Unidade do Cartão Beneficiar em ${city}. Consultas acessíveis, exames com desconto e rede de parceiros com atendimento humanizado. Veja endereço, horários de atendimento e como falar com a equipe.`,
    url: `/units/${city.replace(" ", "-")}`,
  });
}

const Page: NextPage<PartnerDynamicPage> = async ({
  params,
}: {
  params: Promise<{ city: string }>;
}) => {
  let { city } = await params;
  city = city.replace("-", " ");
  const [citiesData, partnerData] = await Promise.all([
    api.cities.findAllPartnersCache({}),
    api.unit.findByCity({ city: city }),
  ]);
  return (
    <main className="relative">
      <UnitsBannerSection cities={citiesData} />
      <NavBar />
      <UnitsHeroSection unit={partnerData} />
      <Footer />
      <CopyrightBar />
    </main>
  );
};
export default Page;
