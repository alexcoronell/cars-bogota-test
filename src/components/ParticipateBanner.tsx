"use client";
import Link from "next/link";
import { useState } from "react";

import { MdiCloseThick } from "./icons/MdiCloseThick";

import styles from "@/css/participateBanner.module.css";

export default function ParticipateBanner() {
  const [showBanner, setShowBanner] = useState(true);

  if (showBanner) {
    return (
      <div className={styles.ParticipateBanner}>
        <div className={styles.ParticipateBanner__box}>
          <h3>Participa</h3>
          <h4>¡Gana increíbles premios!</h4>
          <ul>
            <li>Experiencias de conducción</li>
            <li>Accesorios exclusivos</li>
            <li>Descuentos</li>
            <li>Eventos VIP</li>
          </ul>
          <h5>¡Completa el formulario y únete a la experiencia High Range!</h5>
          <Link href="/participa" className="btn btn-primary">Ve directo al formulario</Link>
            <button onClick={() => setShowBanner(false)}><MdiCloseThick className="absolute right-2 top-2 text-2xl" /></button>
        </div>
      </div>
    );
  }
}
