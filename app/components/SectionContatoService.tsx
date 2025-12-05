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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7309.295879989831!2d-46.70623428694393!3d-23.65277601459352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce504e12b06239%3A0x6a25e7fca6684d35!2sR.%20Jo%C3%A3o%20Alfredo%2C%20387-2147483647%20-%20Santo%20Amaro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004747-001!5e0!3m2!1sen!2sbr!4v1764967763253!5m2!1sen!2sbr"
          loading="lazy"
        />
      </div>
    </section>
  );
}

