import Image from "next/image";
import Link from "next/link";
import instagramLogo from "../assets/instagram-logo.svg";
import facebookLogo from "../assets/facebook-logo.svg";
import tiktokLogo from "../assets/tiktok-logo.svg";
import visaLogo from "../assets/visa-logo.svg";
import eloLogo from "../assets/elo-logo.svg";
import mastercardLogo from "../assets/mastercard-logo.svg";
import logo from "../../public/images/logo.webp";


const imgGroup = instagramLogo;
const imgFrame54 = facebookLogo;
const imgAntDesignTikTokOutlined = tiktokLogo;
const imgLogosMastercard = mastercardLogo;
const imgLogosElo = eloLogo;
const imgLogosVisa = visaLogo;

export default function Footer() {
  return (
    <div
      className="bg-white w-full font-(family-name:--font-figtree) px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-16 md:py-24 lg:py-[118px] relative"
      data-node-id="245:639"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="flex items-start flex-col gap-8 lg:flex-row lg:gap-12 xl:gap-16 lg:justify-between w-full"
          data-name="Footer"
          data-node-id="245:640"
        >
          {/* Left Column - Logo and Tagline */}
          <div
            className="flex flex-col gap-6 items-start w-full lg:w-auto lg:min-w-[280px] lg:max-w-[320px]"
            data-node-id="245:641"
          >
            <div
              className="flex flex-col gap-4 items-start w-full max-w-[219px]"
              data-name="Logo"
              data-node-id="245:642"
            >
              <Link
          href="/"
          className="font-semibold leading-normal text-[14px] text-white"
          data-node-id="I295:2280;295:2269"
        >
              <Image
                alt="Beneficiar Logo"
                className="block w-full h-full object-contain"
                src={logo}
                width={219}
                height={60}
              />
              </Link>
            </div>

            {/* Tagline */}
            <div
              className="font-normal leading-normal text-[16px] sm:text-xl lg:text-[20px] text-black"
              data-node-id="245:656"
            >
              <p className="mb-0">Cuidar de si é cuidar de todos</p>

            </div>

            {/* Social Media Icons */}
            <div
              className="flex gap-4 sm:gap-6 lg:gap-[27px] items-center justify-start"
              data-node-id="245:657"
            >
              <Link
                href="https://www.instagram.com/cartaobeneficiar"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#f87315] border-solid rounded-[50px] hover:bg-[#f87315] hover:scale-105 transition-all duration-300 group"
                data-node-id="245:658"
              >
                <div className="flex gap-2.5 items-center overflow-hidden p-[13px] rounded-[inherit]">
                  <div
                    className="overflow-hidden relative w-6 h-6"
                    data-name="hugeicons:instagram"
                    data-node-id="245:659"
                  >
                    <div
                      className="absolute inset-[10.417%]"
                      data-name="Group"
                      data-node-id="245:660"
                    >
                      <div className="absolute inset-[-3.95%]">
                        <Image
                          alt="Instagram"
                          className="block w-full h-full object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                          src={imgGroup}
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href="https://www.facebook.com/cartaobeneficiar"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[50px] h-[50px] hover:scale-105 transition-transform duration-300"
                data-node-id="245:663"
              >
                <Image
                  alt="Facebook"
                  className="block w-full h-full object-contain"
                  src={imgFrame54}
                  width={50}
                  height={50}
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@cartaobeneficiar_"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#f87315] border-solid rounded-[50px] w-[50px] h-[50px] hover:bg-[#f87315] hover:scale-105 transition-all duration-300 group"
                data-node-id="245:665"
              >
                <div className="flex gap-2.5 items-center overflow-hidden p-[13px] rounded-[inherit] w-[50px] h-[50px]">
                  <div
                    className="relative w-[22px] h-[22px]"
                    data-name="ant-design:tik-tok-outlined"
                    data-node-id="245:666"
                  >
                    <Image
                      alt="TikTok"
                      className="block w-full h-full object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                      src={imgAntDesignTikTokOutlined}
                      width={22}
                      height={22}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Section - Navigation and Payment Methods */}
          <div
            className="flex flex-col gap-8 sm:gap-10 md:flex-row md:gap-8 lg:gap-12 xl:gap-16 items-start justify-center w-full lg:w-auto"
            data-node-id="245:668"
          >
            {/* Explore Column */}
            <div
              className="inline-grid grid-cols-[max-content] grid-rows-[max-content] justify-items-start leading-0"
              data-node-id="245:669"
            >
              <div
                className="col-1 row-1 flex flex-col gap-[38px] items-start"
                data-name="Explore"
                data-node-id="245:670"
              >
                <p
                  className="font-medium leading-relaxed text-lg sm:text-xl lg:text-[21px] text-black"
                  data-node-id="245:671"
                >
                  Explore
                </p>
                <div
                  className="flex flex-col font-normal gap-[15.165px] items-start leading-normal text-[18px] text-[rgba(0,0,0,0.8)]"
                  data-node-id="245:672"
                >
                  <Link
                    href="/contact#faqs"
                    className="hover:text-[#f87315] transition-colors"
                    data-node-id="245:673"
                  >
                    Perguntas Frequentes
                  </Link>
                  {/* <Link
                    href="/blog"
                    className="hover:text-[#f87315] transition-colors"
                    data-node-id="245:674"
                  >
                    Blog
                  </Link> */}
                  <Link
                    href="/contact"
                    className="hover:text-[#f87315] transition-colors"
                    data-node-id="245:675"
                  >
                    Contato
                  </Link>
                </div>
              </div>
            </div>

            {/* Menu Column */}
            <div
              className="inline-grid grid-cols-[max-content] grid-rows-[max-content] justify-items-start leading-0"
              data-node-id="245:676"
            >
              <div
                className="col-1 row-1 flex flex-col gap-[38px] items-start"
                data-name="Menu"
                data-node-id="245:677"
              >
                <p
                  className="font-medium leading-relaxed text-lg sm:text-xl lg:text-[21px] text-black"
                  data-node-id="245:678"
                >
                  Menu
                </p>
                <div
                  className="flex flex-col font-normal gap-[15.165px] items-start leading-normal text-[18px] text-[rgba(0,0,0,0.8)]"
                  data-node-id="245:679"
                >
                  <Link
                    href="/"
                    className="hover:text-[#f87315] transition-colors"
                    data-node-id="245:680"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#f87315] transition-colors"
                    data-node-id="245:681"
                  >
                    Sobre Nós
                  </Link>
                  <Link
                    href="/company"
                    className="hover:text-[#f87315] transition-colors"
                    data-node-id="245:682"
                  >
                    Beneficiar Empresarial
                  </Link>
                </div>
              </div>
            </div>

            {/* Legal Information Column */}
            <div
              className="inline-grid grid-cols-[max-content] grid-rows-[max-content] justify-items-start leading-0"
              data-node-id="245:676"
            >
              <div
                className="col-1 row-1 flex flex-col gap-[38px] items-start"
                data-name="Menu"
                data-node-id="245:677"
              >
                <p
                  className="font-medium leading-relaxed text-lg sm:text-xl lg:text-[21px] text-black"
                  data-node-id="245:678"
                >
                  Informações Legais
                </p>
                <div
                  className="flex flex-col font-normal gap-[15.165px] items-start leading-normal text-[18px] text-[rgba(0,0,0,0.8)]"
                  data-node-id="245:679"
                >
                  <Link
                    href="https://materiais.cartaobeneficiar.com.br/politica-de-privacidade"
                    className="hover:text-[#f87315] transition-colors"
                    data-node-id="245:680"
                  >
                    Política de privacidade
                  </Link>
                </div>
              </div>
            </div>

            {/* Payment Methods Column */}
            <div
              className="flex flex-col gap-4 items-start w-full sm:w-auto sm:min-w-[150px] lg:min-w-[186px]"
              data-node-id="245:687"
            >
              <div
                className="inline-grid grid-cols-[max-content] grid-rows-[max-content] justify-items-start leading-0"
                data-name="Head office"
                data-node-id="245:688"
              >
                <p
                  className="col-1 row-1 font-medium leading-relaxed text-lg sm:text-xl lg:text-[21px] text-black"
                  data-node-id="245:689"
                >
                  Pagamentos
                </p>
              </div>
              <div
                className="h-[37.093px] w-[47.718px] relative"
                data-name="logos:mastercard"
                data-node-id="245:690"
              >
                <Image
                  alt="Mastercard"
                  className="block w-full h-full object-contain"
                  src={imgLogosMastercard}
                  width={48}
                  height={37}
                />
              </div>
              <div
                className="h-[33px] w-[85px] relative"
                data-name="logos:elo"
                data-node-id="245:695"
              >
                <Image
                  alt="Elo"
                  className="block w-full h-full object-contain"
                  src={imgLogosElo}
                  width={85}
                  height={33}
                />
              </div>
              <div
                className="h-[23px] w-[71px] relative"
                data-name="logos:visa"
                data-node-id="245:700"
              >
                <Image
                  alt="Visa"
                  className="block w-full h-full object-contain"
                  src={imgLogosVisa}
                  width={71}
                  height={23}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
