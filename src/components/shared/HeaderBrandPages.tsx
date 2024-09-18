import Image, { StaticImageData } from "next/image";

interface HeaderBrandProps {
    image: StaticImageData;
    altText: string;
}

import styles from '@/css/headerBrandPages.module.css'

export default function HeaderBrandPages({image, altText}: HeaderBrandProps) {
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
