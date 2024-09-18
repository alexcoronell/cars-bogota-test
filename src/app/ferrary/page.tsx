import BrandPagesHeader from "@/components/shared/BrandPagesHeader"
import BrandPagesContent from "@/components/shared/BrandPagesContent";
import logoImage from '@/assets/images/cars/logos/ferrari-logo.webp'

const title = "Ferrari";
const content = "Ferrari es un icónico fabricante italiano de automóviles deportivos de lujo, fundado en 1939 por Enzo Ferrari en Maranello. Reconocida mundialmente por su excepcional ingeniería y diseño, la marca ha establecido un legado en el automovilismo, siendo la escudería más exitosa en la historia de la Fórmula 1. Ferrari combina rendimiento extremo con elegancia, ofreciendo una gama de modelos que incluyen superdeportivos y gran turismos, como el emblemático Ferrari 488 y el innovador SF90 Stradale, que destaca por su tecnología híbrida. Con un fuerte enfoque en la artesanía y la exclusividad, cada vehículo Ferrari no solo promete una experiencia de conducción inigualable, sino que también representa un símbolo de estatus y pasión automovilística."

export default function FerraryPage() {
    return (
        <main>
            <BrandPagesHeader image={logoImage} altText={title} />
            <BrandPagesContent title={title} content={content}  />
        </main>
    )
};
