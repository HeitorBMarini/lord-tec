"use client";

import Image from "next/image";

export default function SectionMVV() {
  return (
    <section className="relative w-full mt-16">
      <div className="grid gap-10 md:grid-cols-3 text-center">

        {/* =============================== MISSÃO =============================== */}
        <div
           className="
            relative flex flex-col items-center gap-4 px-4
            md:after:content-[''] md:after:absolute
            md:after:top-2.5 md:after:bottom-0
            md:after:right-0 md:after:w-px
            md:after:bg-[#00343D]/30
          "
        >
          <Image
            src="/imgs/mvv/missao.png"
            alt="Ícone Missão"
            width={100}
            height={100}
          />

          <h4 className="font-bold text-(--secondary-color)">
            Missão
          </h4>

          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-xs">
            Oferecer soluções completas em refrigeração e climatização,
            com excelência técnica e atendimento humanizado, proporcionando
            ambientes confortáveis, seguros e energeticamente eficientes.
          </p>
        </div>

        {/* =============================== VISÃO =============================== */}
        <div
          className="
            relative flex flex-col items-center gap-4 px-4
            md:after:content-[''] md:after:absolute
            md:after:top-2.5 md:after:bottom-0
            md:after:right-0 md:after:w-px
            md:after:bg-[#00343D]/30
          "
        >
          <Image
            src="/imgs/mvv/visao.png"
            alt="Ícone Visão"
            width={100}
            height={100}
          />

          <h4 className="font-bold text-(--secondary-color)">
            Visão
          </h4>

          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-xs">
            Ser referência no setor de refrigeração e climatização, reconhecida
            pela qualidade dos serviços, inovação, ética e compromisso absoluto
            com a satisfação dos clientes.
          </p>
        </div>

        {/* =============================== VALORES =============================== */}
        <div className="flex flex-col items-center gap-4 px-4">
          <Image
            src="/imgs/mvv/valores.png"
            alt="Ícone Valores"
            width={100}
            height={100}
          />

          <h4 className="font-bold text-(--secondary-color)">
            Valores
          </h4>

          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-xs">
            Compromisso total com o cliente; Ética em todas as relações;
            Qualidade e segurança nos equipamentos; Respeito a colaboradores,
            parceiros e ao meio ambiente.
          </p>
        </div>

      </div>
    </section>
  );
}
