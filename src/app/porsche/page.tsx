import BrandPagesHeader from "@/components/shared/BrandPagesHeader"
import BrandPagesContent from "@/components/shared/BrandPagesContent";
import logoImage from '@/assets/images/cars/logos/porsche-logo.webp'

const title = "Porsche";
const content = "Porsche es un destacado fabricante alemán de automóviles de lujo, fundado en 1931 en Stuttgart, conocido por sus deportivos de altas prestaciones. Su modelo más emblemático, el Porsche 911, se presentó en 1964 y ha evolucionado a lo largo de las décadas, manteniendo su esencia. La marca también ha diversificado su gama para incluir SUVs como el Cayenne y el Macan, así como sedanes como el Panamera. Con un fuerte enfoque en la innovación y el rendimiento, Porsche combina diseño vanguardista con tecnología avanzada, ofreciendo una experiencia de conducción inigualable que atrae a entusiastas de todo el mundo."

export default function PorschePage() {
    return (
        <div>
            <BrandPagesHeader image={logoImage} altText={title} />
            <BrandPagesContent title={title} content={content}  />
        </div>
    )
};
