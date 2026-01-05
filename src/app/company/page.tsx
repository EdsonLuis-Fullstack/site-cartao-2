import { getMetaData } from "@/utils/seo/get-metadata";
import { NextPage } from "next";
import CompanyHeroSection from "@/components/company-hero-section";
import CompanyFeaturesSection from "@/components/company-features-section";
import HealthcareServicesSection from "@/components/healthcare-services-section";
import WhyChooseBeneficiarSection from "@/components/why-choose-beneficiar-section";
import HowToStartSection from "@/components/how-to-start-section";
import Footer from "@/components/footer";
import GrayCopyrightBar from "@/components/gray-copyright-bar";
import CompanyBannerSection from "@/components/company-banner-section";
import { NavBar } from "@/components/shared/navbar";

export async function generateMetadata() {
  return getMetaData({
    title: "Beneficiar | Company",
    description: "Learn more about Beneficiar",
    image: "",
    url: "/company",
  });
}

const Page: NextPage = () => {
  return (
    <main className="relative">
      <CompanyBannerSection />
      <NavBar />
      <CompanyHeroSection /> 
      <CompanyFeaturesSection /> 
      <HealthcareServicesSection />
      <WhyChooseBeneficiarSection />
      <HowToStartSection />
      <Footer />
      <GrayCopyrightBar />
    </main>
  );
};

export default Page;
