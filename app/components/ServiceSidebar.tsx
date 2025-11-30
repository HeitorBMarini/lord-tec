"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, X } from "lucide-react";
import { SERVICES } from "@/app/data/service";

export default function ServiceRail() {
  const pathname = usePathname() || "";
  const isServicos = pathname.startsWith("/servicos");
  if (!isServicos) return null;

  const segments = pathname.split("/").filter(Boolean);
  const currentSlug = segments[1] ?? "";

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ========================== */}
      {/* DESKTOP RAIL (hover) */}
      {/* ========================== */}
      <div className="hidden md:block fixed top-1/2 right-0 -translate-y-1/2 z-50">
        <div className="relative group">
          {/* SETA FIXA */}
          <div
            className="
              h-16 w-8 rounded-l-md
              bg-(--blue-color) text-white
              flex items-center justify-center
              shadow-lg cursor-pointer
            "
          >
            <ChevronLeft className="h-4 w-4" />
          </div>

          {/* RAIL NO HOVER */}
          <aside
            className="
              absolute top-1/2 right-0 -translate-y-1/2
              w-[260px]
              bg-(--secondary-color) text-white
              rounded-l-2xl shadow-xl
              translate-x-full
              group-hover:translate-x-0
              transition-transform duration-300
            "
          >
            <div className="px-4 py-4 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Serviços
              </h4>

              <ul className="space-y-1 text-sm">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/servicos/${s.slug}`}
                      className={`
                        block rounded-md px-2 py-1.5 transition
                        ${
                          s.slug === currentSlug
                            ? "bg-white text-(--secondary-color) font-semibold"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        }
                      `}
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* ========================== */}
      {/* BOTÃO MOBILE FLUTUANTE */}
      {/* ========================== */}
      <button
        onClick={() => setMobileOpen(true)}
        className="
          md:hidden fixed bottom-24 right-5 z-50
          h-12 w-12 rounded-full shadow-xl
          bg-(--blue-color) text-white
          flex items-center justify-center
          active:scale-95 transition
        "
      >
        <ChevronLeft className="rotate-180 h-6 w-6" />
      </button>

      {/* ========================== */}
      {/* MOBILE OVERLAY */}
      {/* ========================== */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE RAIL (slide) */}
      <aside
        className={`
          md:hidden fixed top-0 right-0 z-[60]
          h-full w-[80vw] max-w-[300px]
          bg-(--secondary-color) text-white shadow-2xl
          transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h4 className="text-sm font-semibold uppercase tracking-widest">
            Serviços
          </h4>

          <button
            onClick={() => setMobileOpen(false)}
            className="text-white hover:text-red-300 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* LISTA MOBILE */}
        <nav className="p-4 space-y-1 text-sm">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/servicos/${s.slug}`}
              className={`
                block rounded-md px-3 py-2
                ${
                  s.slug === currentSlug
                    ? "bg-white text-(--secondary-color) font-semibold"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }
              `}
              onClick={() => setMobileOpen(false)}
            >
              {s.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
