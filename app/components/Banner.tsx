"use client";

import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative h-[120vh] w-full md:block md:min-h-screen flex items-center justify-center">
      
      {/* ===== IMAGEM DE FUNDO ===== */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/imgs/banner.webp"
          alt="Família em ambiente confortável"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ===== OVERLAY ===== */}
      <div className="absolute inset-0 bg-linear-to-r from-[#003b46]/80 via-[#003b46]/30 to-transparent z-0"></div>

      {/* ===== RETÂNGULO (SOME NO MOBILE) ===== */}
      <Image
        src="/imgs/retangulo.png"
        alt="Retângulo decorativo"
        width={360}
        height={240}
        className="
          hidden md:block   /* 🔥 some no mobile */
          absolute 
          left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2 
          z-10
          opacity-90
          pointer-events-none
        "
      />

      {/* ===== TEXTO (SOME NO MOBILE) ===== */}
      <div
        className="
          hidden md:block   /* 🔥 some no mobile */
          absolute 
          left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2
          z-20 text-center px-6 max-w-xl
        "
      >
        <h2 className="font-extrabold text-1xl md:text-4xl text-(--white-color) leading-tight">
          Conforto,
          <span className="text-(--secondary-color)">
            {" "}Eficiência e Ar Puro para o
          </span>{" "}
          Seu Ambiente
        </h2>
      </div>
    </section>
  );
}
