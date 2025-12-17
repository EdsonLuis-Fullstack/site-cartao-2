import { getMetaData } from "@/utils/seo/get-metadata";
import { NextPage } from "next";
import ContactFormSection from "@/components/contact-form-section";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";
import CopyrightBar from "@/components/copyright-bar";
import ContactBannerSection from "@/components/contact-banner-section";
import { NavBar } from "@/components/shared/navbar";

export async function generateMetadata() {
  return getMetaData({
    title: "Beneficiar | Contact",
    description: "Get in touch with Beneficiar",
    image: "",
    url: "/contact",
  });
}

const Page: NextPage = () => {
  return (
    <main className="relative">
      <ContactBannerSection />
      <NavBar />
      <ContactFormSection />
      <FaqSection />
      <Footer />
      <CopyrightBar />
    </main>
  );
};
export default Page;
