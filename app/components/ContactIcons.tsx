"use client";

import { Dice4 } from "lucide-react";
import { contactInfo } from "../data/contactInfo";
import { socialLinks } from "../data/socialLinks";

export function ContactIcons() {
  const phoneItems = contactInfo.phoneGroup.items;

  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        {/* ================= EMAIL ================= */}
        <div className="flex flex-col items-center text-center gap-2">
          {/* Ícone */}
          <div className="h-12 w-12 rounded-full bg-(--blue-color) flex items-center justify-center text-white shadow-md">
            {(() => {
              const Icon = contactInfo.email.icon;
              return <Icon size={20} strokeWidth={2.3} />;
            })()}
          </div>

          {/* Título */}
          <strong className="text-(--blue-color) text-sm">Email</strong>

          {/* Valor */}
          <a href={contactInfo.email.href} className="text-xs text-gray-600">
            {contactInfo.email.label}
          </a>
        </div>

        {/* ================= TELEFONE + WHATSAPP ================= */}
        <div className="flex flex-col items-center text-center gap-2">
          {/* Ícone do grupo (usa o ícone do primeiro item, o telefone fixo) */}
          <div className="h-12 w-12 rounded-full bg-(--blue-color) flex items-center justify-center text-white shadow-md">
            {(() => {
              const GroupIcon = phoneItems[0].icon;
              return <GroupIcon size={20} strokeWidth={2.3} />;
            })()}
          </div>

          {/* Título */}
          <strong className="text-(--blue-color) text-sm">
            {contactInfo.phoneGroup.title}
          </strong>

          {/* Telefones (fixo + WhatsApp) */}
          {phoneItems.map((item, index) => {
            const Icon = item.icon;
            const isWhats = item.href.startsWith("http");

            return (
              <a
                key={index}
                href={item.href}
                target={isWhats ? "_blank" : undefined}
                className="text-xs text-gray-600 flex items-center gap-1"
              >
                <Icon size={16} />
                {item.label}
              </a>
            );
          })}
        </div>

        {/* ================= REDES SOCIAIS ================= */}
        <div className="flex flex-col items-center text-center gap-2">
          {/* Ícone container */}
          <div className="h-12 w-12 rounded-full bg-(--blue-color) flex items-center justify-center text-white shadow-md">
            <div className="text-xs">
              <Dice4 />
            </div>
          </div>

          {/* Título */}
          <strong className="text-(--blue-color) text-sm">
            Redes - Sociais
          </strong>

          {/* Ícones */}
          <div className="flex items-center gap-3 mt-1">
            {socialLinks
              .filter((s) => s.href.trim() !== "")
              .map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    className="text-(--blue-color) hover:opacity-70"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
