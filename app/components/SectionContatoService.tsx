"use client";

import Image from "next/image";
import { ContactIcons } from "./ContactIcons";

export default function SectionContatoService() {
  return (
    <section className="relative w-full pt-20 pb-0">

     

      {/* ======== TÍTULO ========= */}
      <h2 className="text-center text-(--secondary-color) text-2xl font-semibold mb-14">
        Entre em contato
      </h2>

      {/* ======== ÍCONES ========= */}
      <ContactIcons />

      {/* ======== MAPA COM BG AZUL ======== */}
      <div className="relative mt-14 w-full flex justify-center">

        {/* Fundo azul atrás */}
        <div className="absolute md:top-1/4 left-0 w-full md:h-[380px] md:bg-(--blue-color) bg-hidden z-0" />

        {/* Iframe por cima */}
        <iframe
          className="
            relative z-20 
            w-full md:w-[850px] 
            h-[360px] md:h-[400px] 
            rounded-xl border shadow-xl
            bg-white
          "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4636326977613!2d-46.656572!3d-23.588068"
          loading="lazy"
        />
      </div>
    </section>
  );
}
