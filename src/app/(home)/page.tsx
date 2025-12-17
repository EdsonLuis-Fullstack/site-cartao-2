import { getMetaData } from "@/utils/seo/get-metadata";
import { NextPage } from "next";
import HeroSection from "@/components/hero-section";
import ClinicsPartnersSection from "@/components/clinics-section";
import HeroStatsSection from "@/components/hero-stats-section";
import ServicesCarouselSection from "@/components/services-carousel-section";
import PartnersNetworkSection from "@/components/partners-network-section";
import HowItWorksSection from "@/components/how-it-works-section";
import TestimonialsSection from "@/components/testimonials-section";
// import BlogSection from "@/components/blog-section";
import Footer from "@/components/footer";
import CopyrightBar from "@/components/copyright-bar";
import { NavBar } from "@/components/shared/navbar";

export async function generateMetadata() {
  return getMetaData({
    title: "Beneficiar | Home",
    description: "Welcome to Beneficiar",
    image: "",
    url: "/",
  });
}

const Page: NextPage = () => {
  return (
    <main>
      <HeroSection />
      <NavBar />
      <ClinicsPartnersSection />
      <HeroStatsSection />
      <ServicesCarouselSection />
      <PartnersNetworkSection />
      <HowItWorksSection />
      <TestimonialsSection />
      {/* <BlogSection /> */}
      <Footer />
      <CopyrightBar />
    </main>
  );
};

export default Page;
