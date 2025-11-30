"use client";

import { Dice4 } from "lucide-react";
import { contactInfo } from "../data/contactInfo";
import { socialLinks } from "../data/socialLinks";

export function ContactIcons() {
  return (
    <div className="w-full flex flex-col items-center gap-10">

      <div className="flex flex-col md:flex-row items-center justify-center gap-16">

        {/* ================= EMAIL ================= */}
        <div className="flex flex-col items-center text-center gap-2">
          {/* Ícone */}
          <div className="h-12 w-12 rounded-full bg-(--blue-color) flex items-center justify-center text-white shadow-md">
            <contactInfo.email.icon size={20} strokeWidth={2.3} />
          </div>

          {/* Título */}
          <strong className="text-(--blue-color) text-sm">Email</strong>

          {/* Valor */}
          <a
            href={contactInfo.email.href}
            className="text-xs text-gray-600"
          >
            {contactInfo.email.label}
          </a>
        </div>

        {/* ================= TELEFONE + WHATSAPP ================= */}
        <div className="flex flex-col items-center text-center gap-2">
          {/* Ícone */}
          <div className="h-12 w-12 rounded-full bg-(--blue-color) flex items-center justify-center text-white shadow-md">
            <contactInfo.phone.icon size={20} strokeWidth={2.3} />
          </div>

          {/* Título */}
          <strong className="text-(--blue-color) text-sm">Telefone</strong>

          {/* Telefone */}
          <a
            href={contactInfo.phone.href}
            className="text-xs text-gray-600"
          >
            {contactInfo.phone.label}
          </a>

          {/* WhatsApp */}
          <a
            href={contactInfo.whatsapp.href}
            target="_blank"
            className="text-xs text-gray-600 flex items-center gap-1"
          >
            <contactInfo.whatsapp.icon size={16} />
            {contactInfo.whatsapp.label}
          </a>
        </div>

        {/* ================= REDES SOCIAIS ================= */}
        <div className="flex flex-col items-center text-center gap-2">
          {/* Ícone container */}
          <div className="h-12 w-12 rounded-full bg-(--blue-color) flex items-center justify-center text-white shadow-md">
            <div className="text-xs"><Dice4 /></div>
          </div>

          {/* Título */}
          <strong className="text-(--blue-color) text-sm">
            Redes - Sociais
          </strong>

          {/* Ícones */}
          <div className="flex items-center gap-3 mt-1">
            {socialLinks
              .filter((s) => s.href.trim() !== "")
              .map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  className="text-(--blue-color) hover:opacity-70"
                >
                  <s.icon size={15} />
                </a>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
}
