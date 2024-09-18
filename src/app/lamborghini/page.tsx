import BrandPagesHeader from "@/components/shared/BrandPagesHeader"
import BrandPagesContent from "@/components/shared/BrandPagesContent";
import logoImage from '@/assets/images/cars/logos/lamborghini-logo.webp'

const title = "Lamborghini";
const content = 'Lamborghini es un prestigioso fabricante italiano de automóviles deportivos de lujo, fundado en 1963 por Ferruccio Lamborghini en Sant\'Agata Bolognese. Reconocido por su enfoque audaz y su diseño innovador, Lamborghini ha creado algunos de los superdeportivos más icónicos del mundo, como el Miura, considerado el primer "superdeportivo" moderno. La marca es famosa por sus potentes motores V10 y V12, así como por modelos emblemáticos como el Countach, Diablo, Murciélago y Huracán. Cada vehículo Lamborghini combina rendimiento excepcional con un diseño atrevido y distintivo, reflejando la pasión por la velocidad y la exclusividad que caracteriza a la marca. Con una herencia rica en automovilismo y un compromiso con la innovación, Lamborghini continúa siendo un símbolo de lujo y prestigio en el mundo automotriz.'

export default function LamborghiniPage() {
    return (
        <main>
            <BrandPagesHeader image={logoImage} altText={title} />
            <BrandPagesContent title={title} content={content}  />
        </main>
    )
};
