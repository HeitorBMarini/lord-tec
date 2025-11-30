"use client";

import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "../data/socialLinks";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="text-white md:pt-35 pt-10 pb-0 bg-(--secondary-color) md:bg-[#00537E]">
      {/* ======================= DESKTOP / TABLET ======================= */}
      <div className="max-w-6xl mx-auto px-4 space-y-10 hidden md:block">
        {/* TOPO: 3 COLUNAS */}
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] text-left">
          {/* COLUNA 1 – LOGO + TEXTO */}
          <div className="space-y-4 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <Image
                src="/imgs/logo.png"
                alt="Lord Tec"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            <p className="text-xs md:text-sm text-white/80 leading-relaxed max-w-sm">
              A Lordtec Refrigeração e Climatização foi fundada em 2023 com o
              propósito de transformar ambientes em espaços mais frescos,
              agradáveis e confortáveis. Atuamos com foco na instalação,
              manutenção e higienização de sistemas de ar-condicionado e
              refrigeração, sempre priorizando a qualidade, a segurança e o
              atendimento personalizado.
            </p>
          </div>

          {/* COLUNA 2 – NAVEGAÇÃO */}
          <div className="space-y-4 flex flex-col items-start">
            <h4 className="font-semibold tracking-wide">Navegação</h4>
            <div className="h-0.5 w-10 bg-white/60" />
            <nav className="flex flex-col gap-2 text-sm">
              <Link
                href="/"
                className="hover:text-(--blue-color) transition-all"
              >
                HOME
              </Link>
              <Link
                href="/quem-somos"
                className="hover:text-(--blue-color) transition-all"
              >
                QUEM SOMOS
              </Link>
              <Link
                href="/servicos"
                className="hover:text-(--blue-color) transition-all"
              >
                SERVIÇOS
              </Link>
              <Link
                href="/contato"
                className="hover:text-(--blue-color) transition-all"
              >
                CONTATO
              </Link>
              <Link
                href="/mapa-do-site"
                className="hover:text-(--blue-color) transition-all"
              >
                MAPA DO SITE
              </Link>
            </nav>
          </div>

          {/* COLUNA 3 – ENDEREÇO + NEWSLETTER */}
          <div className="space-y-6 flex flex-col items-start">
            <div className="space-y-3">
              <h4 className="font-semibold tracking-wide">Endereço</h4>
              <div className="h-0.5 w-10 bg-white/60" />

              <div className="flex items-start gap-2 text-sm text-white/85">
                <MapPin size={16} className="mt-0.5" />
                <p>
                  Endereço
                  <br />
                  Rua Exemplo, 123 – Bairro
                  <br />
                  Cidade / UF
                </p>
              </div>
            </div>

            <NewsletterForm />

          </div>
        </div>

        {/* LINHA DIVISÓRIA */}
        <div className="border-t border-white border-2" />

        {/* REDES SOCIAIS + CONTATOS (MESMA LINHA) */}
        <div className="flex flex-row items-center justify-between gap-4 pt1 text-xs text-white/85">
          {/* REDES SOCIAIS */}
          <div className="flex items-center gap-4">
            {socialLinks
              .filter((s) => s.href && s.href.trim() !== "")
              .map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  className="h-9 w-9 rounded-full border border-white/25 flex items-center justify-center text-[#2791C9]/75 hover:text-white hover:border-white transition"
                >
                  <s.icon size={16} />
                </a>
              ))}
          </div>

          {/* CONTATOS */}
          <div className="flex flex-row items-center gap-3">
            <a
              href="mailto:lord.refrig@outlook.com"
              className="flex items-center gap-2 hover:text-white"
            >
              <Mail size={14} />
              <span>lord.refrig@outlook.com</span>
            </a>

            <a
              href="tel:+5511921012861"
              className="flex items-center gap-2 hover:text-white"
            >
              <Phone size={14} />
              <span>(11) 92101-2861</span>
            </a>

            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>Seg a Sex: 8:00 às 18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= MOBILE (LAYOUT IGUAL AO PRINT) ======================= */}
      <div className="md:hidden max-w-md mx-auto px-6 space-y-10 text-center">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/imgs/logo.png"
            alt="Lord Tec"
            width={140}
            height={140}
            className="object-contain"
          />
        </div>

        {/* Navegação */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Navegação</h4>

          <nav className="flex flex-col gap-3 text-base">
            <Link href="/">Home</Link>
            <Link href="/quem-somos">Quem Somos</Link>
            <Link href="/servicos">Serviços</Link>
            <Link href="/contato">Contato</Link>
            <Link href="/mapa-do-site">Mapa do Site</Link>
          </nav>
        </div>

        {/* Contato */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Contato</h4>

          <div className="space-y-4">
            {/* Telefone */}
            <a
              href="tel:+5511987414459"
              className="flex items-center justify-center gap-3"
            >
              <div className="h-12 w-12 rounded-full bg-(--blue-color) flex items-center justify-center text-white shadow-md">
                <Phone size={20} />
              </div>
              <span className="text-base">(11) 98741-4459</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5511958770119"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3"
            >
              <div className="h-12 w-12 rounded-full bg-(--blue-color) flex items-center justify-center text-white shadow-md">
                <FaWhatsapp size={20} />
              </div>
              <span className="text-base">(11) 95877-0119</span>
            </a>

            {/* Email */}
            <a
              href="mailto:email@email.com"
              className="flex items-center justify-center gap-3"
            >
              <div className="h-12 w-12 rounded-full bg-(--blue-color) flex items-center justify-center text-white shadow-md">
                <Mail size={20} />
              </div>
              <span className="text-base">email@email.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* ======================= FAIXA DE COPYRIGHT ======================= */}
      <div className="mt-4 w-full md:bg-(--blue-color)">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] md:text-xs text-white text-center md:text-left">
          <p>Copyright © Lord Tec (Lei 9610 de 19/02/1998)</p>
        </div>
      </div>
    </footer>
  );
}
