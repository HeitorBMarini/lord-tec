// app/servicos/[slug]/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import PageHeader from "@/app/components/PageHeader";

import { getServiceBySlug, SERVICES } from "@/app/data/service";
import Cta from "@/app/components/Cta";
import RelatedServices from "@/app/components/RelatedServices";
import Header from "@/app/components/Header";
import ServiceSidebar from "@/app/components/ServiceSidebar";

type RouteParams = { slug: string };

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const paragraphs = service.desc.split(/\n{2,}/);

  return (
    <>
      {/* HEADER DA PÁGINA */}
      <Header />
      <PageHeader
        title={service.label}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: service.label },
        ]}
      />

      <main className="bg-white">
        {/* CONTEÚDO PRINCIPAL + SIDEBAR */}
        {/* CONTEÚDO PRINCIPAL + SIDEBAR */}
        <section
          className="mx-auto max-w-6xl px-4 py-12 grid gap-10 
    "
        >
          {/* COLUNA PRINCIPAL */}
          <div className="space-y-8">
            {/* GRID IMG + TEXTO */}
            <div className="grid gap-8 md:grid-cols-2 items-start">
              {/* IMG */}
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={service.img}
                  alt={service.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 100vw, (max-width: 1024px) 70vw, 70vw"
                  priority
                />
              </div>

              {/* TEXTO */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-(--secondary-color)">
                  Saiba mais sobre {service.label}
                </h2>

                <div className="space-y-3 text-sm md:text-[15px] leading-relaxed text-[#1a2f37]/90">
                  {paragraphs.map((p, i) => (
                    <p key={i}>{p.trim()}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <ServiceSidebar />
        </section>

        <Cta />

        {/* SERVIÇOS RELACIONADOS — COMPONENTE NOVO */}
        <RelatedServices currentSlug={slug} />
      </main>
    </>
  );
}

/* --------------------------
   STATIC PARAMS (SSG)
--------------------------- */
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

/* --------------------------
   METADATA DINÂMICA
--------------------------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Serviços | Lord Tec",
    };
  }

  return {
    title: `${service.label} | Lord Tec`,
    description: service.desc.slice(0, 150),
  };
}
