import HeaderBrandPages from "@/components/shared/HeaderBrandPages"
import logoImage from '@/assets/images/cars/logos/ferrari-logo.webp'

const altText = "Ferrari";

export default function FerraryPage() {
    return (
        <main>
            <HeaderBrandPages image={logoImage} altText={altText} />
        </main>
    )
};
