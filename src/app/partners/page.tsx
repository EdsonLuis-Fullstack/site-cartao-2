import { getMetaData } from "@/utils/seo/get-metadata";
import { NextPage } from "next";
import PartnerClinicSection from "@/components/partner-clinic-section";
import OtherPartnersSection from "@/components/other-partners-section";
import Footer from "@/components/footer";
import CopyrightBar from "@/components/copyright-bar";
import PartnersBannerSection from "@/components/partners-banner-section";
import { NavBar } from "@/components/shared/navbar";
import { api } from "@/instances/api";
import { redirect } from "next/navigation";

export async function generateMetadata() {
  return getMetaData({
    title: "Beneficiar | Partners",
    description: "Learn more about Beneficiar's partners",
    image: "",
    url: "/partners",
  });
}

const Page: NextPage = async () => {
  try {
    
    var citiesData = await api.cities.findAll({});
    var partnersData = await api.partners.findAll({});
    var categoriesData = await api.categories.findAll({});
    
  } catch (error) {
    console.log("error", error);
    if(!citiesData){
      redirect('/404');
    }
  }


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
