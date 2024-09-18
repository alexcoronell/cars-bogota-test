import BrandPagesHeader from "@/components/shared/BrandPagesHeader";
import PagesContent from "@/components/shared/PagesContent";
import BrandPagesGallery from "@/components/shared/BrandPagesGallery";

import logoImage from "@/assets/images/cars/logos/porsche-logo.webp";

import image01 from "@/assets/images/cars/porsche/porsche01.webp";
import image02 from "@/assets/images/cars/porsche/porsche02.webp";
import image03 from "@/assets/images/cars/porsche/porsche03.webp";
import image04 from "@/assets/images/cars/porsche/porsche04.webp";
import image05 from "@/assets/images/cars/porsche/porsche05.webp";
import image06 from "@/assets/images/cars/porsche/porsche06.webp";

const title = "Porsche";
const content =
  "Porsche es un destacado fabricante alemán de automóviles de lujo, fundado en 1931 en Stuttgart, conocido por sus deportivos de altas prestaciones. Su modelo más emblemático, el Porsche 911, se presentó en 1964 y ha evolucionado a lo largo de las décadas, manteniendo su esencia. La marca también ha diversificado su gama para incluir SUVs como el Cayenne y el Macan, así como sedanes como el Panamera. Con un fuerte enfoque en la innovación y el rendimiento, Porsche combina diseño vanguardista con tecnología avanzada, ofreciendo una experiencia de conducción inigualable que atrae a entusiastas de todo el mundo.";

export default function PorschePage() {
  const images = [image01, image02, image03, image04, image05, image06];
  return (
    <>
      <BrandPagesHeader image={logoImage} altText={title} />
      <PagesContent title={title} content={content} />
      <BrandPagesGallery images={images} title={title} />
    </>
  );
}
