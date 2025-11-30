// app/components/SectionServicosHome.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SERVICES } from "../data/service";

export default function SectionServicosHome() {
  // Exibe só alguns serviços na home (ajuste o slice se quiser mais/menos)
  const featuredServices = SERVICES.slice(0, 7);

  return (
    <section className="bg-white py-12 px-4" id="servicos">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-2xl md:text-3xl font-semibold text-(--secondary-color)">
          Nossos Serviços
        </h2>

        {/* Mobile: carrossel horizontal | Desktop: grid */}
        <div
          className="
            flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory
            sm:grid sm:overflow-visible 
            sm:grid-cols-2 lg:grid-cols-3
            justify-items-center lg:justify-items-start
          "
        >
          {featuredServices.map((s, index) => {
            const hasImageSource = s.img && s.img.trim() !== "";
            // alterna: índice par = card sem imagem, índice ímpar = card com imagem
            const showImageCard = hasImageSource && index % 2 === 1;
            const showTextCard = !showImageCard;

            return (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}`}
                className="
                  group block rounded-3xl border border-slate-100 shadow-sm overflow-hidden
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                  shrink-0 w-[80%] max-w-xs snap-center     /* mobile: slide */
                  sm:w-full sm:shrink                        /* desktop: normal */
                "
              >
                {/* CARD SEM IMAGEM */}
                {showTextCard && (
                  <article className="flex h-full flex-col min-h-60 justify-between bg-[#E8E8E8] p-6 group-hover:bg-(--blue-color)/75">
                    <div className="flex-1 space-y-3">
                      <h3 className="text-base md:text-lg font-semibold text-(--secondary-color) group-hover:text-white">
                        {s.label}
                      </h3>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs md:text-sm font-medium text-(--secondary-color) group-hover:text-white">
                        Saiba mais
                      </span>

                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-(--blue-color) text-white transform transition-transform duration-300 group-hover:-translate-y-1">
                        <ArrowRight className="h-6 w-6 transition-all group-hover:-rotate-45" />
                      </span>
                    </div>
                  </article>
                )}

                {/* CARD COM IMAGEM */}
                {showImageCard && (
                  <article className="relative h-full">
                    {/* Imagem */}
                    <div className="relative aspect-4/3 w-full">
                      <Image
                        src={s.img}
                        alt={s.label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Overlay normal → azul no hover */}
                    <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-(--blue-color)/75" />

                    {/* Conteúdo */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                      <div className="space-y-3">
                        <h3 className="text-base md:text-lg font-semibold">
                          {s.label}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between pt-3">
                        <span className="text-xs md:text-sm font-medium">
                          Saiba mais
                        </span>

                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E8E8E8] text-(--blue-color) transform transition-transform duration-300 group-hover:-translate-y-1">
                          <ArrowRight className="h-6 w-6 transition-all group-hover:-rotate-45" />
                        </span>
                      </div>
                    </div>
                  </article>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
