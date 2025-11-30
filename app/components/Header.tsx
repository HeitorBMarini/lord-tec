"use client";

import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { SERVICES } from "@/app/data/service";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false); // menu mobile
  const [dropdownOpen, setDropdownOpen] = useState(false); // dropdown desktop
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // submenu serviços no mobile

  return (
    <>
      {/* HEADER — MOBILE + DESKTOP */}
      <header
        className="
          w-full md:px-4 px-0 md:py-4 py-0
          md:absolute md:top-6 md:left-1/2 md:-translate-x-1/2 
          z-30
        "
      >
        <div
          className="
            mx-auto max-w-6xl 
            md:rounded-3xl rounded-none

            bg-[#2791c9] md:bg-white/10
            md:backdrop-blur-md    
            md:border md:border-white/20

            px-6 py-4
            flex items-center justify-between
          "
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/imgs/logo.png"
              alt="Logo Lord Tec"
              width={75}
              height={75}
              className="object-contain"
            />
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-white tracking-wide">
            <Link
              href="/"
              className="transition-all hover:bg-(--primary-color) md:p-2 hover:rounded-2xl"
            >
              HOME
            </Link>

            <Link
              href="/quem-somos"
              className="transition-all hover:bg-(--primary-color) md:p-2 hover:rounded-2xl"
            >
              QUEM SOMOS
            </Link>

            {/* ============ DROPDOWN DE SERVIÇOS (DESKTOP) ============ */}
            <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <DropdownMenuTrigger
                  asChild
                >
                  <Link
                    href="/servicos"
                    className="
                      cursor-pointer
                      transition-all
                      hover:bg-(--primary-color)
                      md:p-2 hover:rounded-2xl
                      outline-none
                    "
                  >
                    SERVIÇOS
                  </Link>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="start"
                  sideOffset={6}
                  className="
                    w-64 bg-white rounded-xl border border-slate-200 shadow-xl p-1 z-999
                  "
                >
                  {SERVICES.map((s) => (
                    <DropdownMenuItem key={s.slug} asChild>
                      <Link
                        href={`/servicos/${s.slug}`}
                        className="
                          block px-3 py-2 text-sm
                          text-slate-700 
                          hover:bg-(--primary-color)
                          hover:text-white
                          rounded-md
                          transition
                        "
                      >
                        {s.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </div>
            </DropdownMenu>
            {/* ============ FIM DROPDOWN DESKTOP ============ */}

            <Link
              href="/contato"
              className="transition-all hover:bg-(--primary-color) md:p-2 hover:rounded-2xl"
            >
              CONTATO
            </Link>
          </nav>

          {/* BOTÃO DESKTOP */}
          <Link
            href="/contato"
            className="
              hidden md:inline-flex 
              px-6 py-2 rounded-full 
              font-semibold text-white text-sm
              bg-(--primary-color)
              hover:opacity-90 transition
            "
          >
            FALE CONOSCO
          </Link>

          {/* BOTÃO MOBILE */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* MENU MOBILE FULLSCREEN */}
      <div
        className={`
          fixed inset-x-0 top-0 z-40 
          bg-[#003b46] text-[#fafafa]
          px-6 pt-6 pb-12
          rounded-b-3xl shadow-lg
          transform transition-transform duration-300
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="flex items-center justify-between mb-10">
          <Image
            src="/imgs/logo.png"
            alt="Logo Lord Tec"
            width={64}
            height={64}
            className="object-contain"
          />

          <button
            className="
              w-10 h-10 rounded-full border border-[#fafafa]
              flex items-center justify-center text-2xl
            "
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col items-center gap-6 text-lg w-full">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/quem-somos" onClick={() => setOpen(false)}>
            Quem Somos
          </Link>

          {/* ====== SERVIÇOS NO MOBILE ====== */}
          <div className="w-full max-w-xs flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-2 w-full">
              <Link
                href="/servicos"
                onClick={() => {
                  setOpen(false);
                  setMobileServicesOpen(false);
                }}
                className="text-lg"
              >
                Serviços
              </Link>

              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="text-sm"
              >
                <span
                  className={`
                    inline-block transition-transform
                    ${mobileServicesOpen ? "rotate-180" : ""}
                  `}
                >
                  ▾
                </span>
              </button>
            </div>

            {mobileServicesOpen && (
              <ul className="mt-1 w-full space-y-1 text-sm">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/servicos/${s.slug}`}
                      onClick={() => {
                        setOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="
                        block text-center py-1.5 text-sm
                        text-[#fafafa]/90
                        hover:text-white hover:bg-white/10
                        rounded-full transition
                      "
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* ====== FIM SERVIÇOS MOBILE ====== */}

          <Link href="/contato" onClick={() => setOpen(false)}>
            Contato
          </Link>
        </nav>
      </div>
    </>
  );
}
