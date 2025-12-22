"use client";
import Image from "next/image";
import { Globe, Phone, Building2 } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp.svg";
import { useState, useEffect } from "react";

export default function PartnerClinicSection({PartnerData, bannerPartners}: {PartnerData: any[], bannerPartners: any[]}) {
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  if (!PartnerData || PartnerData.length === 0) {
    return null;
  }

  const isMultipleUnits = PartnerData.length > 1;
  const currentUnit = PartnerData[selectedUnitIndex];
  
  const clinicName = currentUnit.nome.split(' - ')[0];
  const unitName = currentUnit.nome.split(' - ')[1] || currentUnit.bairro;
  
  const photoUrl = currentUnit?.foto 
    ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${currentUnit.foto}`
    : null;
  
  // Seleciona a imagem do banner baseado em mobile ou desktop
  const getBannerUrl = () => {
    if (!bannerPartners || bannerPartners.length === 0) {
      return `https://api.cartaobeneficiar.com.br/uploads/parceiros/clinica_692f4abe2e98d.webp`;
    }
    
    const banner = bannerPartners[0];
    const baseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_BANNER_URL || 'https://api.cartaobeneficiar.com.br/uploads/banners/';
    
    if (isMobile && banner.imagemMobile) {
      return `${baseUrl}${banner.imagemMobile}`;
    }
    
    return `${baseUrl}${banner.image}`;
  };

  const clinicPhotoUrl = getBannerUrl();
  
  const formatPhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('55')) {
      return cleaned;
    }
    return `55${cleaned}`;
  };

  const handleWhatsAppClick = () => {
    if (currentUnit.whatsapp) {
      const formattedNumber = formatPhoneNumber(currentUnit.whatsapp);
      const message = encodeURIComponent("Olá, vim pelo site Beneficiar");
      window.open(`https://wa.me/${formattedNumber}?text=${message}`, '_blank');
    }
  };

  const handlePhoneClick = () => {
    if (currentUnit.telefone) {
      const formattedNumber = formatPhoneNumber(currentUnit.telefone);
      window.open(`tel:+${formattedNumber}`, '_blank');
    }
  };

  const getGoogleMapsEmbedUrl = () => {
    const addressParts = [
      currentUnit.endereco,
      currentUnit.numero,
      currentUnit.bairro,
      currentUnit.cidade,
      currentUnit.estado,
      currentUnit.cep
    ].filter(Boolean);
    
    const address = addressParts.join(', ');
    return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  };

  return (
    <section className="bg-white relative w-full min-h-screen py-28 font-(family-name:--font-figtree)">
      <div className="flex justify-start pl-[313px] pb-[70px]">
        <h1 className="font-normal text-[48px] text-[#f87315] leading-normal">
          Clínica Parceira
        </h1>
      </div>

      <div className="flex gap-[78px] pl-[313px] pr-20">
        <div className="w-[542px] flex flex-col gap-5">
          <div className="flex gap-[46px] items-center w-full">
            <div
              className="w-[120px] h-[120px] rounded-[17px] overflow-hidden shrink-0 bg-[#FFF7ED] flex items-center justify-center"
              style={{ boxShadow: "0 0 11px -3px rgba(0, 0, 0, 0.25)" }}
            >
              {photoUrl ? (
                <Image
                  src={photoUrl}
                  alt={currentUnit.nome}
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Building2 className="w-[60px] h-[60px] text-[#f87315]" />
              )}
            </div>
            <h2 className="flex-1 flex flex-col font-(family-name:--font-figtree) font-medium text-[32px] text-black leading-normal min-w-0">
              {clinicName}
              {isMultipleUnits && (
                <span className="text-[24px] text-gray-600">
                  {unitName}
                </span>
              )}
            </h2>
          </div>
          
          {isMultipleUnits && (
            <div id="tags" className="flex gap-[15px] items-center flex-wrap">
              {PartnerData.map((unit, index) => {
                const unitDisplayName = unit.nome.split(' - ')[1] || unit.bairro;
                return (
                  <button
                    key={unit.cod}
                    onClick={() => setSelectedUnitIndex(index)}
                    className={`flex gap-[15px] items-center px-[18px] py-[5px] h-[29px] rounded-[100px] transition-colors cursor-pointer ${
                      selectedUnitIndex === index
                        ? "bg-[#f87315]"
                        : "bg-[#E6E6E6] hover:bg-[#d9d9d9]"
                    }`}
                  >
                    <p
                      className={`font-(family-name:--font-manrope) font-bold text-[16px] leading-normal ${
                        selectedUnitIndex === index ? "text-white" : "text-[#F87315]"
                      }`}
                    >
                      {unitDisplayName}
                    </p>
                  </button>
                );
              })}
            </div>
          )}
          
          <div className="flex flex-col gap-5 text-black leading-normal w-[542px]">
            <h3 className="font-(family-name:--font-figtree) font-semibold text-[24px] w-full">
              Sobre a clínica
            </h3>
            <p className="font-(family-name:--font-figtree) font-normal text-[18px] w-[531px]">
              {isMultipleUnits ? (
                <>
                A {clinicName} – {unitName} é uma clínica localizada em {currentUnit.cidade}, credenciada ao Cartão Beneficiar, um cartão de benefícios em saúde que oferece descontos em consultas médicas, odontológicas e exames. 
                <br /><br />
                Estamos em {currentUnit.cidade} – {currentUnit.estado}, bem pertinho de você. Aqui, você encontra atendimento em diversas especialidades, além de procedimentos odontológicos, exames laboratoriais e de imagem. Nossa equipe está pronta para te atender e tirar suas dúvidas.
                </>
              ) : (
                <>
                A {clinicName} é uma clínica localizada em {currentUnit.cidade}, no bairro {currentUnit.bairro}, credenciada ao Beneficiar — um cartão de benefícios em saúde que oferece descontos em consultas médicas, odontológicas e exames.
                <br /><br />    
                Estamos em {currentUnit.cidade} - {currentUnit.estado}, bem pertinho de você. Aqui, você encontra atendimento em diversas especialidades, além de procedimentos odontológicos, exames laboratoriais e de imagem. Nossa equipe está pronta para te atender e tirar suas dúvidas.
                </>
              )}  
            </p>
          </div>

          <div className="flex gap-[46px] mt-5 items-start w-[542px] flex-wrap">
            {currentUnit.whatsapp && (
              <button 
                onClick={handleWhatsAppClick}
                className="bg-[#f87315] cursor-pointer rounded-[100px] px-[18px] py-[5px] flex items-center gap-[15px] h-[45px] hover:bg-[#e66a0a] transition-colors"
              >
                <div className="w-[24px] h-[24px]">
                  <Image
                    src={whatsappIcon}
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="w-full h-full"
                  />
                </div>
                <span className="font-(family-name:--font-figtree) font-medium text-[16px] text-white leading-normal">
                  WhatsApp
                </span>
              </button>
            )}

            {currentUnit.telefone && (
              <button 
                onClick={handlePhoneClick}
                className="border border-[#f87315] cursor-pointer rounded-[100px] px-[18px] py-[5px] w-[170px] flex items-center gap-[15px] h-[45px] hover:bg-[#f87315] hover:text-white transition-colors group"
              >
                <Phone className="w-[24px] h-[24px] text-[#f87315] group-hover:text-white" />
                <span className="font-(family-name:--font-figtree) font-medium text-[16px] text-[#f87315] leading-normal group-hover:text-white">
                  Telefone
                </span>
              </button>
            )}

            {currentUnit.link && (
              <button 
                onClick={() => window.open(currentUnit.link, '_blank')}
                className="border border-[#f87315] cursor-pointer rounded-[100px] px-[18px] py-[5px] flex items-center gap-[15px] w-[119px] h-[45px] hover:bg-[#f87315] hover:text-white transition-colors group"
              >
                <Globe className="w-[24px] h-[24px] text-[#f87315] group-hover:text-white" />
                <span className="font-(family-name:--font-figtree) font-medium text-[16px] text-[#f87315] leading-normal group-hover:text-white">
                  Site
                </span>
              </button>
            )}
          </div>
        </div>

        <div className="w-[661px] h-[526px] rounded-xl overflow-hidden bg-[#FFF7ED] flex items-center justify-center">
            <Image
              src={clinicPhotoUrl}
              alt={`Imagem da ${clinicName}`}
              width={661}
              height={526}
              className="w-full h-full object-cover"
            />
        </div>
      </div>
        <div className="flex justify-start pl-[313px] mt-[120px]">
          <iframe
            src={getGoogleMapsEmbedUrl()}
            width="1280"
            height="450"
            loading="lazy"
            className="rounded-xl"
            title={`Localização de ${currentUnit.nome}`}
          ></iframe>
        </div>
    </section>
  );
}