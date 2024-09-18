import BrandPagesHeader from "@/components/shared/BrandPagesHeader"
import BrandPagesContent from "@/components/shared/BrandPagesContent";
import BrandPagesGallery from "@/components/shared/BrandPagesGallery";

import logoImage from '@/assets/images/cars/logos/maserati-logo.webp'

import image01 from "@/assets/images/cars/maserati/maserati01.webp";
import image02 from "@/assets/images/cars/maserati/maserati02.webp";
import image03 from "@/assets/images/cars/maserati/maserati03.webp";
import image04 from "@/assets/images/cars/maserati/maserati04.webp";
import image05 from "@/assets/images/cars/maserati/maserati05.webp";
import image06 from "@/assets/images/cars/maserati/maserati06.webp";

const title = "Maserati";
const content = "Maserati es un renombrado fabricante italiano de automóviles de lujo, fundado en 1914 en Bolonia. La marca es sinónimo de elegancia, rendimiento y exclusividad, ofreciendo una gama de vehículos que incluyen sedanes, deportivos y SUVs. Modelos emblemáticos como el Ghibli, Quattroporte y el innovador MC20 destacan por su diseño distintivo y potentes motores, combinando la herencia de la marca con tecnología avanzada. Maserati se enfoca en proporcionar una experiencia de conducción emocionante y lujosa, reflejando su compromiso con la artesanía y el estilo italiano. Cada vehículo Maserati no solo es un medio de transporte, sino una declaración de sofisticación y pasión automovilística."

export default function MaseratiPage() {
    const images = [image01, image02, image03, image04, image05, image06];
    return (
        <>
            <BrandPagesHeader image={logoImage} altText={title} />
            <BrandPagesContent title={title} content={content}  />
            <BrandPagesGallery images={images} title={title} />
        </>
    )
};
