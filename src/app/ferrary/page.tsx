import BrandPagesHeader from "@/components/shared/BrandPagesHeader";
import BrandPagesContent from "@/components/shared/BrandPagesContent";
import BrandPagesGallery from "@/components/shared/BrandPagesGallery";

import logoImage from "@/assets/images/cars/logos/ferrari-logo.webp";

import image01 from "@/assets/images/cars/ferrari/ferrari01.webp";
import image02 from "@/assets/images/cars/ferrari/ferrari02.webp";
import image03 from "@/assets/images/cars/ferrari/ferrari03.webp";
import image04 from "@/assets/images/cars/ferrari/ferrari04.webp";
import image05 from "@/assets/images/cars/ferrari/ferrari05.webp";
import image06 from "@/assets/images/cars/ferrari/ferrari06.webp";

const title = "Ferrari";
const content =
  "Ferrari es un icónico fabricante italiano de automóviles deportivos de lujo, fundado en 1939 por Enzo Ferrari en Maranello. Reconocida mundialmente por su excepcional ingeniería y diseño, la marca ha establecido un legado en el automovilismo, siendo la escudería más exitosa en la historia de la Fórmula 1. Ferrari combina rendimiento extremo con elegancia, ofreciendo una gama de modelos que incluyen superdeportivos y gran turismos, como el emblemático Ferrari 488 y el innovador SF90 Stradale, que destaca por su tecnología híbrida. Con un fuerte enfoque en la artesanía y la exclusividad, cada vehículo Ferrari no solo promete una experiencia de conducción inigualable, sino que también representa un símbolo de estatus y pasión automovilística.";

export default function FerraryPage() {
  const images = [image01, image02, image03, image04, image05, image06];
  return (
    <>
      <BrandPagesHeader image={logoImage} altText={title} />
      <BrandPagesContent title={title} content={content} />
      <BrandPagesGallery images={images} title={title} />
    </>
  );
}
