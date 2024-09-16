"use client"
/* Components */
import Link from "next/link"
import Image from "next/image";
import { useState } from "react";
import { MdiMenuOpen } from "@/app/components/icons/MdiMenuOpen"
import { MdiMenuClose } from "@/app/components/icons/MdiMenuClose"

import styles from "@/css/header.module.css";

import logo from '@/assets/images/logo/high-range-logo-orange-white.webp'

export default function Header() {
    const [isOpen, setIsOpen] = useState(true);

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
            <Image src={logo} alt="Hight Race Logo" className="w-[150px]"  />
            <MdiMenuOpen className="text-5xl text-orange-500" onClick={() => handleClick(true)} />

            <nav className={isOpen ? "right-0 opacity-100" : "right-[-100%] opacity-0"}>
                <ul>
                <Image src={logo} alt="Hight Race Logo" className="w-[300px] mb-6"  />
                    {
                        menu.map((item, index) => (
                            <li key={index}>
                                <Link className="transition-all duration-300 hover:text-orange-500" href={item.url}>{item.title}</Link>
                            </li>
                        ))
                    }
                    
                    <MdiMenuClose className="absolute right-3 top-3 text-5xl text-orange-500" onClick={() => handleClick(false)}  />
                </ul>
            </nav>
        </header>
    )
}