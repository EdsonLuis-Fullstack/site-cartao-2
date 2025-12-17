"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import logo from "../../../../public/images/logo.webp";
import { ChevronDown } from "lucide-react";

export const NavBar = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const isDropdownActive = () => {
    return pathname.startsWith("/about") || pathname.startsWith("/units");
  };

  const getLinkClass = (href: string) => {
    const baseClass = "font-normal leading-normal text-[14px]";
    return isActive(href)
      ? `${baseClass} text-[#f87315]`
      : `${baseClass} text-black`;
  };

  return (
    <div
      className="absolute h-[105px] left-1/2 transform font-(family-name:--font-poppins) z-20 font-medium -translate-x-1/2 rounded-[66px] top-[47px] w-[1274px] max-w-[calc(100vw-48px)]"
      data-name="Menu"
      data-node-id="295:2280"
    >
      <div
        className="absolute backdrop-blur-[5px] bg-[rgba(255,255,255,0.7)] h-[105px] left-0 top-0 w-full rounded-[66px]"
        data-node-id="I295:2280;295:2255"
      />

      {/* Center Navigation Links */}
      <div
        className="absolute flex gap-[57px] h-[52px] items-center justify-center left-1/2 transform -translate-x-1/2 rounded-[25px] top-[27px] w-[658px]"
        data-name="Menu"
        data-node-id="I295:2280;295:2256"
      >
        <Link
          href="/"
          className={getLinkClass("/")}
          data-node-id="I295:2280;295:2257"
        >
          Home
        </Link>
        <div
          className="relative flex gap-[3px] items-center w-[108px]"
          data-node-id="I295:2280;415:942"
          ref={dropdownRef}
        >
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-1 font-normal leading-normal cursor-pointer text-[14px] ${
              isDropdownActive() ? "text-[#f87315]" : "text-black"
            }`}
            data-node-id="I295:2280;295:2258"
          >
            O Beneficiar
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className="absolute top-full -left-4 mt-2 w-48 backdrop-blur-[5px] bg-[rgba(255,255,255,0.7)] rounded-lg shadow-lg border border-gray-200/30 py-2"
              style={{ zIndex: 9999 }}
            >
              <Link
                href="/about"
                className="block px-4 py-2 text-sm text-black hover:bg-[rgba(248,115,21,0.1)] hover:text-[#f87315] transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                href="/units"
                className="block px-4 py-2 text-sm text-black hover:bg-[rgba(248,115,21,0.1)] hover:text-[#f87315] transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                Unidades
              </Link>
            </div>
          )}
        </div>
        <Link
          href="/company"
          className={`font-normal leading-normal text-[14px] ${
            isActive("/company") ? "text-[#f87315]" : "text-black"
          }`}
          data-node-id="I295:2280;295:2259"
        >
          Empresarial
        </Link>
        <Link
          href="/partners"
          className={`font-normal leading-normal text-[14px] ${
            isActive("/partners") ? "text-[#f87315]" : "text-black"
          }`}
          data-node-id="I295:2280;295:2261"
        >
          Parceiros
        </Link>
        <Link
          href="/contact"
          className={`font-normal leading-normal text-[14px] ${
            isActive("/contact") ? "text-[#f87315]" : "text-black"
          }`}
          data-node-id="I295:2280;295:2262"
        >
          Contato
        </Link>
      </div>

      <div
        className="absolute bg-[#f87315] flex gap-2.5 h-[42px] items-center justify-center right-[47px] px-0 py-4 rounded-[43px] top-[33px] w-[193px]"
        data-name="Button"
        data-node-id="I295:2280;295:2263"
      >
        <Link
          href="http://checkout.cartaobeneficiar.com.br/"
          className="font-semibold leading-normal text-[14px] text-white"
          data-node-id="I295:2280;295:2264"
        >
          Solicite seu cartão
        </Link>
      </div>

      <Link
        href="/"
        className="absolute h-11 cursor-pointer left-[76px] top-[31px] w-[170px]"
        data-name="Modo_de_isolamento"
        data-node-id="I295:2280;295:2265"
      >
        <Image
          alt="Beneficiar Logo"
          className="block w-full h-full object-contain"
          src={logo}
          width={170}
          height={44}
        />
      </Link>
    </div>
  );
};
