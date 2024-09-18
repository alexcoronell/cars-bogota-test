import BrandPagesHeader from "@/components/shared/BrandPagesHeader"
import BrandPagesContent from "@/components/shared/BrandPagesContent";
import logoImage from '@/assets/images/cars/logos/maserati-logo.webp'

const title = "Maserati";
const content = "Maserati es un renombrado fabricante italiano de automóviles de lujo, fundado en 1914 en Bolonia. La marca es sinónimo de elegancia, rendimiento y exclusividad, ofreciendo una gama de vehículos que incluyen sedanes, deportivos y SUVs. Modelos emblemáticos como el Ghibli, Quattroporte y el innovador MC20 destacan por su diseño distintivo y potentes motores, combinando la herencia de la marca con tecnología avanzada. Maserati se enfoca en proporcionar una experiencia de conducción emocionante y lujosa, reflejando su compromiso con la artesanía y el estilo italiano. Cada vehículo Maserati no solo es un medio de transporte, sino una declaración de sofisticación y pasión automovilística."

export default function MaseratiPage() {
    return (
        <main>
            <BrandPagesHeader image={logoImage} altText={title} />
            <BrandPagesContent title={title} content={content}  />
        </main>
    )
};
