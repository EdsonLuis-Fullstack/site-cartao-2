import { getMetaData } from "@/utils/seo/get-metadata";
import { NextPage } from "next";
import UnitsHeroSection from "@/components/units-hero-section";
import Footer from "@/components/footer";
import CopyrightBar from "@/components/copyright-bar";
import { NavBar } from "@/components/shared/navbar";
import UnitsBannerSection from "@/components/units-banner-section";
import { api } from "@/instances/api";

export async function generateMetadata() {
  return getMetaData({
    title: "Beneficiar | Units",
    description: "Get in touch with Beneficiar",
    image: "",
    url: "/units",
  });
}

const Page: NextPage = async () => {
  const citiesData = await api.cities.findAllPartners({});


  return (
    <main className="relative">
      <UnitsBannerSection cities={citiesData} />
      <NavBar />
      {/* <UnitsHeroSection unit={undefined} /> */}
      <Footer />
      <CopyrightBar />
    </main>
  );
};
export default Page;
