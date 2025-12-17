import Footer from "@/components/footer";
import CopyrightBar from "@/components/copyright-bar";
import { NavBar } from "@/components/shared/navbar";
import FoundPage from "../components/foundpage"

export default function Notfound(){
  return (
        <main>
            <NavBar />
            <FoundPage />
            <Footer />
            <CopyrightBar />
        </main>
    );
}