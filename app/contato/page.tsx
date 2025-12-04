// app/contato/page.tsx
"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

import { MapPin } from "lucide-react";

import Header from "@/app/components/Header";
import PageHeader from "@/app/components/PageHeader";
import { contactInfo } from "../data/contactInfo";
import { socialLinks } from "../data/socialLinks";
import FooterDefault from "../components/FooterDefault";

export default function ContatoPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(
    null
  );
  const PhoneIcon = contactInfo.phoneGroup.items[0].icon;
  const EmailIcon = contactInfo.email.icon;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<
      string,
      string
    >;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "Erro ao enviar");
      }

      setStatus({ ok: true, msg: "Mensagem enviada com sucesso! ✅" });
      form.reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Falha ao enviar. ❌";
      setStatus({ ok: false, msg });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <PageHeader
        title="Contato"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contato" }]}
      />

      <main className="bg-white">
        <section className="w-full py-10 md:py-16">
          <Image
            src="/imgs/gelo-right.webp"
            alt="Gelo decorativo"
            width={450}
            height={450}
            className="hidden md:block absolute right-0 top-110 z-30 opacity-80"
          />

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="hidden md:block text-center mb-10 md:mb-14 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-(--secondary-color)">
                Solicite seu <br />
                <span className="block md:inline text-(--blue-color)">
                  Orçamento Gratuito
                </span>
              </h2>
              <p className="mt-3 text-xs md:text-sm leading-relaxed text-[#1a2f37]/80">
                Preencha o formulário abaixo e nossa equipe entrará em contato para avaliar sua necessidade de instalação ou manutenção. É rápido, sem compromisso e você recebe tudo de forma clara e personalizada!

              </p>
            </div>

            {/* GRID FORM + CARD DE CONTATO */}
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
              {/* ================= FORMULÁRIO ================= */}
              <div className="space-y-6">
                <form onSubmit={onSubmit} className="space-y-5">
                  {/* Linha 1 */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs md:text-sm font-medium text-[#1a2f37]">
                        Nome*
                      </label>
                      <input
                        required
                        name="nome"
                        placeholder="Seu nome"
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm outline-none focus:border-(--blue-color)"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs md:text-sm font-medium text-[#1a2f37]">
                        E-mail*
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="exemplo@exemplo.com.br"
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm outline-none focus:border-(--blue-color)"
                      />
                    </div>
                  </div>

                  {/* Linha 2 */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs md:text-sm font-medium text-[#1a2f37]">
                        Telefone*
                      </label>
                      <input
                        required
                        name="telefone"
                        placeholder="(11) 99999-9999"
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm outline-none focus:border-(--blue-color)"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs md:text-sm font-medium text-[#1a2f37]">
                        Como nos conheceu*
                      </label>
                      <select
                        required
                        name="como_conheceu"
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm outline-none focus:border-(--blue-color)"
                      >
                        <option value="">Selecione</option>
                        <option value="indicacao">Indicação</option>
                        <option value="google">Google</option>
                        <option value="instagram">Instagram</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="mb-1 block text-xs md:text-sm font-medium text-[#1a2f37]">
                      Mensagem
                    </label>
                    <textarea
                      name="mensagem"
                      placeholder="Escreva aqui..."
                      rows={5}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm outline-none focus:border-(--blue-color)"
                    />
                  </div>

                  {/* Observação */}
                  <p className="text-[10px] md:text-xs text-right text-[#1a2f37]/60">
                    Os campos com * são obrigatórios
                  </p>

                  {/* Botão */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      mt-1 inline-flex w-full items-center justify-center gap-2
                      rounded-full bg-[#232B37]
                      px-6 py-3 text-sm font-semibold text-white
                      transition hover:opacity-90 disabled:opacity-70
                    "
                  >
                    {loading ? "Enviando..." : "ENVIAR MENSAGEM"}
                  </button>

                  {status && (
                    <p
                      className={`text-sm mt-2 ${
                        status.ok ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {status.msg}
                    </p>
                  )}
                </form>
              </div>

              {/* CARD DE INFORMAÇÕES */}
              {/* CARD DE INFORMAÇÕES - DESKTOP */}
              <div className="relative hidden md:block">
                <div className="rounded-lg bg-[#101123] text-white px-6 py-8 md:px-8 md:py-10 shadow-xl">
                  <h3 className="text-base md:text-lg font-semibold mb-6">
                    Informações de Contato
                  </h3>

                  <div className="space-y-5 text-sm">
                    {/* TELEFONE + WHATSAPP JUNTOS (cada um com seu ícone) */}
                    <div className="flex items-start gap-4">
                      {/* Ícone principal do grupo */}
                      <div className="flex h-13 w-13 items-center justify-center rounded-lg bg-(--blue-color)">
                        <PhoneIcon size={30} />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-white/70">
                          {contactInfo.phoneGroup.title}
                        </p>

                        {contactInfo.phoneGroup.items.map((item, index) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={index}
                              href={item.href}
                              className="flex items-center gap-2 text-sm font-medium hover:text-(--blue-color) transition-al mt-1"
                            >
                              <Icon size={16} className="opacity-80" />
                              {item.label}
                            </a>
                          );
                        })}
                      </div>
                    </div>

                    {/* EMAIL */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-13 w-13 items-center justify-center rounded-lg bg-(--blue-color)">
                        <EmailIcon size={30} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-white/70">
                          Email
                        </p>
                        <a
                          href={contactInfo.email.href}
                          className="text-sm font-medium hover:text-(--blue-color) transition-al break-all"
                        >
                          {contactInfo.email.label}
                        </a>
                      </div>
                    </div>

                    {/* LOCALIZAÇÃO */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-13 w-13 items-center justify-center rounded-lg bg-(--blue-color)">
                        <MapPin size={30} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-white/70">
                          {contactInfo.location.title}
                        </p>
                        <p className="text-sm font-medium whitespace-pre-line">
                          {contactInfo.location.text}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* REDES SOCIAIS */}
                  <div className="flex items-center gap-4 mt-8">
                    {socialLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          className="flex h-10 w-10 items-center justify-center border border-white rounded-full hover:bg-(--blue-color) transition"
                        >
                          <Icon size={20} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* BLOCO MOBILE - FALE CONOSCO AGORA MESMO */}
              <div className="md:hidden mt-10 max-w-sm mx-auto text-center  py-10">
                <h2 className="text-xl font-semibold text-[#101123]">
                  Fale Conosco Agora Mesmo!
                </h2>

                <p className="mt-3 text-xs leading-relaxed text-[#1a2f37]/80">
                  Solicite seu orçamento sem compromisso ou tire suas dúvidas.
                  Nossa equipe está pronta para atendê-lo!
                </p>

                {/* TELEFONE */}
                <div className="mt-10 flex flex-col items-center gap-2">
                  <div className="h-14 w-14 rounded-full bg-(--secondary-color) flex items-center justify-center text-white shadow-md">
                    <PhoneIcon size={26} />
                  </div>
                  <span className="text-xs text-gray-700 mt-2">Telefone</span>
                  {contactInfo.phoneGroup.items.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center gap-2 text-sm font-medium hover:text-(--blue-color) transition-al mt-1"
                      >
                        <Icon size={16} className="opacity-80" />
                        {item.label}
                      </a>
                    );
                  })}
                </div>

                {/* EMAIL */}
                <div className="mt-8 flex flex-col items-center gap-2">
                  <div className="h-14 w-14 rounded-full bg-(--secondary-color) flex items-center justify-center text-white shadow-md">
                    <EmailIcon size={26} />
                  </div>
                  <span className="text-xs text-gray-700 mt-2">Email</span>
                  <a
                    href={contactInfo.email.href}
                    className="text-sm text-gray-900 break-all"
                  >
                    {contactInfo.email.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* IFRAME ABAIXO */}
          <div className="md:mt-40 md:block hidden mt-10 overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m30..."
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-lg border-0"
            ></iframe>
          </div>
        </section>
      </main>
      <FooterDefault/>
    </>
  );
}
