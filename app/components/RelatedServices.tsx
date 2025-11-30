"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getRelatedServices } from "../data/service";

export default function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedServices(currentSlug, 3);

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center text-xl md:text-2xl font-semibold text-[#232B37] mb-10">
          Veja Também
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center lg:justify-items-start">
          {related.map((s, index) => {
            const hasImage = s.img && s.img.trim() !== "";
            const showImageCard = hasImage && index % 2 === 1;
            const showTextCard = !showImageCard;

            return (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}`}
                className="group block rounded-3xl border min-h-60 border-slate-200 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full">
                {/* ===================================================== */}
                {/* CARD SEM IMAGEM                                      */}
                {/* ===================================================== */}
                {showTextCard && (
                  <article className="flex h-full flex-col justify-between bg-[#E8E8E8] p-6 group-hover:bg-(--blue-color)/75">
                    <div className="flex-1 space-y-3">
                      <h4 className="text-base md:text-lg font-semibold text-[#232B37]">
                        {s.label}
                      </h4>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-[#232B37]">Saiba mais</span>

                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-(--blue-color) text-white transform transition-transform duration-300 group-hover:-translate-y-1">
                        <ArrowRight className="h-5 w-5 transition-all group-hover:-rotate-45" />
                      </span>
                    </div>
                  </article>
                )}

                {/* ===================================================== */}
                {/* CARD COM IMAGEM                                      */}
                {/* ===================================================== */}
                {showImageCard && (
                  <article className="relative h-full">
                    {/* IMG */}
                    <div className="relative aspect-4/3 w-full">
                      <Image
                        src={s.img}
                        alt={s.label}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-(--blue-color)/75" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                      <h4 className="text-base md:text-lg font-semibold">
                        {s.label}
                      </h4>

                      <div className="flex items-center justify-between pt-3">
                        <span className="text-sm">Saiba mais</span>

                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-(--blue-color) transform transition-transform duration-300 group-hover:-translate-y-1">
                          <ArrowRight className="h-5 w-5 transition-all group-hover:-rotate-45" />
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
