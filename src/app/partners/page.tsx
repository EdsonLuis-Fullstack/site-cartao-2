import { getMetaData } from "@/utils/seo/get-metadata";
import { NextPage } from "next";
import PartnerClinicSection from "@/components/partner-clinic-section";
import OtherPartnersSection from "@/components/other-partners-section";
import Footer from "@/components/footer";
import CopyrightBar from "@/components/copyright-bar";
import PartnersBannerSection from "@/components/partners-banner-section";
import { NavBar } from "@/components/shared/navbar";
import { api } from "@/instances/api";

export async function generateMetadata() {
  return getMetaData({
    title: "Beneficiar | Partners",
    description: "Learn more about Beneficiar's partners",
    image: "",
    url: "/partners",
  });
}

const Page: NextPage = async () => {
  const citiesData = await api.cities.findAll({});


  const partnersData = await api.partners.findAll({});

  const categoriesData = await api.categories.findAll({});



  return (
    <main className="relative">
      <PartnersBannerSection cities={citiesData} selectedCityName={null} />
      <NavBar />
      <PartnerClinicSection PartnerData={[]} />
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
