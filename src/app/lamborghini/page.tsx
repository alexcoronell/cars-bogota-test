import BrandPagesHeader from "@/components/shared/BrandPagesHeader"
import BrandPagesContent from "@/components/shared/BrandPagesContent";
import BrandPagesGallery from "@/components/shared/BrandPagesGallery";

import logoImage from '@/assets/images/cars/logos/lamborghini-logo.webp'

import image01 from "@/assets/images/cars/lamborghini/lamborghini01.webp";
import image02 from "@/assets/images/cars/lamborghini/lamborghini02.webp";
import image03 from "@/assets/images/cars/lamborghini/lamborghini03.webp";
import image04 from "@/assets/images/cars/lamborghini/lamborghini04.webp";
import image05 from "@/assets/images/cars/lamborghini/lamborghini05.webp";
import image06 from "@/assets/images/cars/lamborghini/lamborghini06.webp";

const title = "Lamborghini";
const content = 'Lamborghini es un prestigioso fabricante italiano de automóviles deportivos de lujo, fundado en 1963 por Ferruccio Lamborghini en Sant\'Agata Bolognese. Reconocido por su enfoque audaz y su diseño innovador, Lamborghini ha creado algunos de los superdeportivos más icónicos del mundo, como el Miura, considerado el primer "superdeportivo" moderno. La marca es famosa por sus potentes motores V10 y V12, así como por modelos emblemáticos como el Countach, Diablo, Murciélago y Huracán. Cada vehículo Lamborghini combina rendimiento excepcional con un diseño atrevido y distintivo, reflejando la pasión por la velocidad y la exclusividad que caracteriza a la marca. Con una herencia rica en automovilismo y un compromiso con la innovación, Lamborghini continúa siendo un símbolo de lujo y prestigio en el mundo automotriz.'

export default function LamborghiniPage() {
    const images = [image01, image02, image03, image04, image05, image06];
    return (
        <>
            <BrandPagesHeader image={logoImage} altText={title} />
            <BrandPagesContent title={title} content={content}  />
            <BrandPagesGallery images={images} title={title} />
        </>
    )
};
