import { getMetaData } from "@/utils/seo/get-metadata";
import { NextPage } from "next";
import RegisterMainSection from "@/components/register-main-section";
import RegisterNavbar from "@/components/register-navbar";
import RegisterFooter from "@/components/register-footer";
import CopyrightBar from "@/components/copyright-bar";

export async function generateMetadata() {
  return getMetaData({
    title: "Beneficiar | Register",
    description: "Register with Beneficiar",
    image: "",
    url: "/register",
  });
}

const Page: NextPage = () => {
  return (
    <main className="relative">
      <RegisterNavbar />
      <RegisterMainSection />
      <RegisterFooter />
      <CopyrightBar />
    </main>
  );
};
export default Page;
