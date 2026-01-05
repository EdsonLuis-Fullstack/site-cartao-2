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
import { cacheLife } from "next/cache";

export async function generateMetadata() {
  return getMetaData({
    title: "Beneficiar | Partners",
    description: "Learn more about Beneficiar's partners",
    image: "",
    url: "/partners",
  });
}

const Page: NextPage = async () => {
  "use cache"
  cacheLife("hours")

  try {
    var [citiesData, partnersData, categoriesData] = await Promise.all([
      api.cities.findAllCache({}),
      api.partners.findAll({}),
      api.categories.findAll({}),
    ]);
  
  } catch (error) {
    console.log("error", error);
    if (!citiesData) {
      redirect("/404");
    }
  }

  return (
    <main className="relative">
      <PartnersBannerSection cities={citiesData} selectedCityName={null} />
      <NavBar />
      <PartnerClinicSection PartnerData={[]} bannerPartners={[]} />
      <OtherPartnersSection
        categories={categoriesData}
        initialData={{
          data: partnersData.data,
          recordsFiltered: partnersData.recordsFiltered,
          recordsTotal: partnersData.recordsTotal,
          draw: 1,
        }}
      />

      <Footer />
      <CopyrightBar />
    </main>
  );
};
export default Page;
