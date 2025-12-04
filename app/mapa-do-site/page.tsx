// app/mapa-do-site/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import PageHeader from "@/app/components/PageHeader";
import { SERVICES } from "@/app/data/service";
import FooterDefault from "../components/FooterDefault";

export const metadata: Metadata = {
  title: "Mapa do Site | Lord Tec",
};

export default function MapaDoSitePage() {
  return (
    <>
      <Header />

      <PageHeader
        title="Mapa do Site"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Mapa do Site" },
        ]}
      />

      <main className="bg-white">
        <section className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-lg md:text-xl font-semibold text-(--secondary-color) mb-4">
            Acesse aqui todas as nossas páginas
          </h2>

          <ul className="space-y-1 text-sm md:text-[15px] text-[#1a2f37]/90">
            {/* Home */}
            <li className="pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['▸'] before:text-(--primary-color)">
              <Link href="/" className="hover:text-(--primary-color) transition">
                Home
              </Link>
            </li>

            {/* Quem Somos */}
            <li className="pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['▸'] before:text-(--primary-color)">
              <Link
                href="/quem-somos"
                className="hover:text-(--primary-color) transition"
              >
                Quem Somos
              </Link>
            </li>

            {/* Serviços (pai) */}
            <li className="pl-4 relative">
              <span >
                <Link
                  href="/servicos"
                  className="hover:text-(--primary-color) transition"
                >
                  Serviços
                </Link>
              </span>

              {/* Serviços internos */}
              <ul className="mt-1 ml-5 border-l border-slate-200 pl-3 space-y-1 text-[13px] md:text-sm">
                {SERVICES.map((s) => (
                  <li
                    key={s.slug}
                    className="pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['▸'] before:text-(--primary-color)"
                  >
                    <Link
                      href={`/servicos/${s.slug}`}
                      className="hover:text-(--primary-color) transition"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Contato */}
            <li className="pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['▸'] before:text-(--primary-color)">
              <Link
                href="/contato"
                className="hover:text-(--primary-color) transition"
              >
                Contato
              </Link>
            </li>

            
          </ul>
        </section>
      </main>
      <FooterDefault/>
    </>
  );
}
