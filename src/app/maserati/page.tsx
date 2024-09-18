import HeaderBrandPages from "@/components/shared/HeaderBrandPages"
import logoImage from '@/assets/images/cars/logos/maserati-logo.webp'

const altText = "Maserati";

export default function MaseratiPage() {
    return (
        <main>
            <HeaderBrandPages image={logoImage} altText={altText} />
        </main>
    )
};
