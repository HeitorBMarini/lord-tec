"use client";

import Image from "next/image";
import Link from "next/link";
import { getRelatedServices } from "../data/service";

export default function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedServices(currentSlug, 3);

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center text-xl md:text-2xl font-semibold text-[#232B37] mb-10">
          Veja Também
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <Link
              key={s.slug}
              href={`/servicos/${s.slug}`}
              className="
                group block
                rounded-2xl
                overflow-hidden
                bg-white/70
                backdrop-blur-sm
                border border-slate-200
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              <article>
                {/* IMG */}
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={s.img}
                    alt={s.label}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* TEXTO */}
                <div className="p-5">
                  <h4 className="text-base font-semibold text-[#232B37] mb-2">
                    {s.label}
                  </h4>

                  {/* FOOTER DO CARD */}
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-[#232B37]">Saiba mais</span>

                    <span
                      className="
                        h-8 w-8 rounded-full
                        bg-(--blue-color)
                        flex items-center justify-center
                        text-white
                        group-hover:scale-110
                        transition
                      "
                    >
                      →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
