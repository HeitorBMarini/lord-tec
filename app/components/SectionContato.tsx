"use client";

import Image from "next/image";
import { ContactIcons } from "./ContactIcons";

export default function SectionContato() {
  return (
    <section className="relative w-full pt-20 pb-0">

      {/* ======== GELO NA DIREITA ========= */}
      <Image
        src="/imgs/gelo-right.webp"
        alt="Gelo decorativo"
        width={450}
        height={450}
        className="hidden md:block absolute right-0 -top-8 z-30 opacity-80"
      />

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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.800959264479!2d-46.488539689277744!3d-23.467643078776224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce602fdd556a89%3A0xcbcb7cd046e79ecc!2sR.%20Jo%C3%A3o%20Alfredo%2C%20431%20-%20Cidade%20Industrial%20Sat%C3%A9lite%20de%20S%C3%A3o%20Paulo%2C%20Guarulhos%20-%20SP%2C%2007224-120!5e0!3m2!1sen!2sbr!4v1764967589334!5m2!1sen!2sbr"
          loading="lazy"
        />
      </div>
    </section>
  );
}
