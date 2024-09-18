import Image, { StaticImageData } from "next/image";

interface BrandPagesHeaderProps {
    image: StaticImageData;
    altText: string;
}

import styles from '@/css/brandPagesHeader.module.css'

export default function BrandPagesHeader({image, altText}: BrandPagesHeaderProps) {
    return (
        <section className={styles.HeaderBrandPages}>
                <Image
                    src={image}
                    alt={`${altText} logo`}
                    height={200}
                    className="drop-shadow-lg"
                />
        </section>
    )
};
