"use client";

import Link from "next/link";

export default function Cta() {
  return (
    <section className="w-full py-10 px-4">
      <div
        className="
          max-w-6xl mx-auto
          bg-[#232B37]
          rounded-2xl
          text-white
          px-6 md:px-12
          py-16
          flex flex-col md:flex-row
          items-center md:items-center
          justify-between
          gap-8
          text-center md:text-left
        "
      >
        {/* TEXTO */}
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-white/70">
            Entre em contato
          </p>

          <h2 className="text-2xl md:text-4xl font-extrabold mt-1">
            AGORA MESMO!
          </h2>

          <p className="mt-2 text-sm text-white/60 max-w-lg mx-auto md:mx-0">
            Estamos à disposição para oferecer o melhor atendimento
          </p>
        </div>

        {/* BOTÃO */}
        <Link
          href="/contato"
          className="
            self-center md:self-auto
            bg-(--blue-color)
            hover:opacity-90
            transition
            px-6 py-3
            rounded-md
            text-sm font-semibold
            text-white
          "
        >
          ENTRE EM CONTATO
        </Link>
      </div>
    </section>
  );
}
