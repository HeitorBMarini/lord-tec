"use client";

import Image from "next/image";

export default function HeroBanner() {
  return (
    <section
      className="
        hidden md:flex      /* 🔥 só aparece em tablets e desktops */
        relative h-[120vh] w-full
        md:min-h-screen
        items-center justify-center
      "
    >
      {/* ===== IMAGEM DE FUNDO ===== */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/imgs/banner.png"
          alt="Família em ambiente confortável"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ===== RETÂNGULO ===== */}
      <Image
        src="/imgs/retangulo.png"
        alt="Retângulo decorativo"
        width={360}
        height={240}
        className="
          absolute 
          left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2 
          z-10 opacity-90 pointer-events-none
        "
      />

      {/* ===== TEXTO ===== */}
      <div
        className="
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
