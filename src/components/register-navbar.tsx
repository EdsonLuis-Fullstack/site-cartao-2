import Image from "next/image";

const imgLogo = "https://www.figma.com/api/mcp/asset/794f21a7-12e4-46f4-bfe0-194147fc9cf0";

export default function RegisterNavbar() {
  return (
    <div className="bg-[#fdfbf8] w-full h-[82px] flex items-center">
      <div className="w-[170px] h-[44px] ml-[80px]">
        <Image
          src={imgLogo}
          alt="Beneficiar Logo"
          width={170}
          height={44}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}