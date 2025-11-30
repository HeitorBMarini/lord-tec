// app/servicos/page.tsx

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES } from "../data/service";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import SectionContato from "../components/SectionContato";

export const metadata: Metadata = {
  title: "Serviços | Lord Tec",
};

export default function ServicosPage() {
  return (
    <>
      <Header />
      <PageHeader title="Serviços" />

      <main className="bg-white">
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white/80 border border-slate-100 shadow-sm hover:shadow-md transition"
              >
                <article>
                  {/* Imagem */}
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.label}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-4 flex flex-col gap-3">
                    <h3 className="text-base md:text-lg font-semibold text-(--secondary-color)">
                      {s.label}
                    </h3>

                    <p className="text-xs md:text-sm text-slate-600 line-clamp-3">
                      {s.desc}
                    </p>

                    <span className="mt-2 inline-flex w-max items-center gap-2 rounded-full bg-(--primary-color) px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white group-hover:opacity-90">
                      Saiba mais
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
        <SectionContato />
      </main>
    </>
  );
}
