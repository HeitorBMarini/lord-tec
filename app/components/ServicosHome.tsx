// app/components/SectionServicosHome.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SERVICES } from "../data/service";

export default function SectionServicosHome() {
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
            sm:gap-4                      /* cards mais próximos no desktop */
            justify-items-center lg:justify-items-start
          "
        >
          {featuredServices.map((s, index) => {
            const isLast = index === featuredServices.length - 1;

            return (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}`}
                className={`
                  group block rounded-3xl border border-slate-100 shadow-sm overflow-hidden
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                  shrink-0 w-[80%]  snap-center
                  sm:w-full sm:shrink
                  ${
                    isLast
                      ? "sm:col-span-2 sm:max-w-md sm:mx-auto lg:col-span-1 lg:col-start-2"
                      : ""
                  }
                `}
              >
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
