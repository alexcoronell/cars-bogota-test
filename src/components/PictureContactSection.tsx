import Image from "next/image";

import image from "@/assets/images/cars/lamborghini/lamborghini-0.webp"

export default function PictureContactSection() {
    const blurData = "data:image/jpeg;base64,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"
    return (
        <section className="PictureContactSection max-xl:hidden w-full overflow-hidden max-h-[550px]">
            <picture>
                <Image
                    src={image}
                    alt="Lamborghini Image"
                    height={650}
                    placeholder="blur"
                    blurDataURL={blurData}
                    className="mx-auto"
                />
            </picture>
        </section>
    )
};
