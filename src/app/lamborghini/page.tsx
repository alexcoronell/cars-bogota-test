import HeaderBrandPages from "@/components/shared/HeaderBrandPages"
import logoImage from '@/assets/images/cars/logos/lamborghini-logo.webp'

const altText = "Lamborghini";

export default function LamborghiniPage() {
    return (
        <main>
            <HeaderBrandPages image={logoImage} altText={altText} />
        </main>
    )
};
