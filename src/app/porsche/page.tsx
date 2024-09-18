import HeaderBrandPages from "@/components/shared/HeaderBrandPages"
import logoImage from '@/assets/images/cars/logos/porsche-logo.webp'

const altText = "Porsche";

export default function PorschePage() {
    return (
        <main>
            <HeaderBrandPages image={logoImage} altText={altText} />
        </main>
    )
};
