"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

import porscheImage from "@/assets/images/cars/carrousel/porsche.webp"
import lamborghiniImage from "@/assets/images/cars/carrousel/lamborghini.webp"
import ferraryImage from "@/assets/images/cars/carrousel/ferrary.webp"
import maseratiImage from "@/assets/images/cars/carrousel/maserati.webp"

import image from "@/assets/images/cars/lamborghini/lamborghini-0.webp"


export default function Carousel() {
    const images = [porscheImage, lamborghiniImage, ferraryImage, maseratiImage];  
    const [currentImage, setCurrentImage] = useState(images[0])

    const initAnimation = () => {
        let index = 0
        setInterval(() => {
            if(index === images.length -1) {
                index = 0
            } else {
                index += 1
            }
            setCurrentImage(images[index])
        }, 3000);
    }

    useEffect(() => {
        initAnimation();
    }, [])

    return (
        <section className="Carousel w-screen overflow-hidden relative">
            <Image
                src={currentImage}
                alt="Porsche Image"
                className="h-full"
            />

        </section>
    )
};
