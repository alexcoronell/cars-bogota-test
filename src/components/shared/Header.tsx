"use client"
/* Components */
import Link from "next/link"
import Image from "next/image";
import { useState } from "react";
import { MdiMenuOpen } from "@/components/icons/MdiMenuOpen"
import { MdiMenuClose } from "@/components/icons/MdiMenuClose"

import styles from "@/css/header.module.css";

import logo from '@/assets/images/logo/high-range-logo-orange-white.webp'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (active: boolean) => setIsOpen(active);

    const menu = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "Porsche",
            url: "/porsche"
        },
        {
            title: "Ferrary",
            url: "/ferrary"
        },
        {
            title: "Lamborghini",
            url: "/lamborghini"
        },
        {
            title: "Maserati",
            url: "/maserati"
        },
        {
            title: "Contacto",
            url: "/contacto"
        },
    ]
    return (
        <header className={styles.Header}>
            <Image src={logo} alt="Hight Race Logo" className="w-[150px] lg:w-[300px] lg:grow-0"  />
            <MdiMenuOpen className="text-5xl text-orange-500 lg:hidden" onClick={() => handleClick(true)} />

            <nav className={isOpen ? "max-lg:right-0 max-lg:opacity-100" : "max-lg:right-[-100%] max-lg:opacity-0"}>
                <ul>
                <Image src={logo} alt="Hight Race Logo" className="w-[300px] mb-6 lg:hidden"  />
                    {
                        menu.map((item, index) => (
                            <li key={index}>
                                <Link className="transition-all duration-300 hover:text-orange-500" href={item.url} onClick={() => handleClick(false)}>{item.title}</Link>
                            </li>
                        ))
                    }
                    
                    <MdiMenuClose className="absolute right-3 top-3 text-5xl text-orange-500 lg:hidden" onClick={() => handleClick(false)}  />
                </ul>
            </nav>
            <div className="w-[300px] max-xl:hidden"></div>
        </header>
    )
}