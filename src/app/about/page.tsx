import { getMetaData } from "@/utils/seo/get-metadata";
import { NextPage } from "next";
import AboutHeroSection from "@/components/about-hero-section";
import TransformedLivesSection from "@/components/transformed-lives-section";
import TransformationMethodSection from "@/components/transformation-method-section";
import CallToActionSection from "@/components/call-to-action-section";
import Footer from "@/components/footer";
import CopyrightBar from "@/components/copyright-bar";
import AboutBannerSection from "@/components/about-banner-section";
import { NavBar } from "@/components/shared/navbar";

export async function generateMetadata() {
  return getMetaData({
    title: "Beneficiar | About us",
    description: "Learn more about Beneficiar",
    image: "",
    url: "/about",
  });
}

const Page: NextPage = () => {
  return (
    <main className="relative">
      <AboutBannerSection />
      <NavBar />
      <AboutHeroSection />
      <TransformedLivesSection />
      <TransformationMethodSection />
      <CallToActionSection />
      <Footer />
      <CopyrightBar />
    </main>
  );
};

export default Page;
