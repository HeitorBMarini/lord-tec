// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      nome = "",
      email = "",
      telefone = "",
      como_conheceu = "",
      mensagem = "",
    } = body;

    if (!nome || !email) {
      return NextResponse.json(
        { ok: false, error: "Nome e e-mail são obrigatórios." },
        { status: 400 }
      );
    }

    const html = `
      <h2>Novo contato do site</h2>
      <p><b>Nome:</b> ${nome}</p>
      <p><b>E-mail:</b> ${email}</p>
      <p><b>Telefone:</b> ${telefone || "-"}</p>
      <p><b>Como nos conheceu:</b> ${como_conheceu || "-"}</p>
      <p><b>Mensagem:</b></p>
      <p>${mensagem.replace(/\n/g, "<br/>")}</p>
    `;

    const data = await resend.emails.send({
      from: process.env.MAIL_FROM!,
      to: process.env.MAIL_TO!,
      subject: `Contato do site - ${nome}`,
      replyTo: email,
      html,
    });

    if (data.error) throw new Error(data.error.message);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("RESEND ERROR:", err);
    return NextResponse.json(
      { ok: false, error: err.message || "Erro ao enviar" },
      { status: 500 }
    );
  }
}
