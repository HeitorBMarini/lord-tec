"use client";

import { useState, FormEvent } from "react";

export default function NewsletterForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(
    null
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const email = data.email?.trim();

    if (!email) {
      setStatus({ ok: false, msg: "Por favor, digite um e-mail." });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const payload = {
        // valores “fake” só pra satisfazer o /api/contact
        nome: "Cadastro Newsletter",
        email,
        telefone: "Não informado",
        como_conheceu: "newsletter",
        mensagem: "Usuário cadastrou o e-mail na newsletter do site.",
        origem: "newsletter", // extra, se quiser usar no template
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "Erro ao enviar");
      }

      setStatus({ ok: true, msg: "E-mail cadastrado com sucesso! ✅" });
      form.reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Falha ao enviar. ❌";
      setStatus({ ok: false, msg });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3 w-full flex flex-col items-start">
      <h4 className="font-semibold tracking-wide">Newsletter</h4>
      <div className="h-0.5 w-10 bg-white/60" />

      <form
        onSubmit={onSubmit}
        className="flex w-full max-w-xs rounded-full overflow-hidden bg-white/20 backdrop-blur-sm"
      >
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          className="
            flex-1 px-4 py-2 text-xs md:text-sm
            bg-white text-[#333]
            placeholder:text-[#555]
            border-0 outline-none
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="
            px-4 md:px-5 text-xs md:text-sm font-semibold
            bg-[#2791C9] text-white
            hover:bg-white hover:text-black transition-all cursor-pointer
            disabled:opacity-70
          "
        >
          {loading ? "Enviando..." : "ENVIAR"}
        </button>
      </form>

      {status && (
        <p
          className={`mt-1 text-[11px] ${
            status.ok ? "text-green-300" : "text-red-300"
          }`}
        >
          {status.msg}
        </p>
      )}
    </div>
  );
}
