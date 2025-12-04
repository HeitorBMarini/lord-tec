"use client";

import Link from "next/link";
import Image from "next/image";
import { Home as HomeIcon, ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Crumb = { label: string; href?: string };

interface PageHeaderProps {
  title: string;
  breadcrumbs?: Crumb[];
  subtitle?: string;
}

export default function PageHeader({
  title,
  breadcrumbs,
  subtitle,
}: PageHeaderProps) {
  const crumbs: Crumb[] =
    breadcrumbs && breadcrumbs.length
      ? breadcrumbs
      : [{ label: "Home", href: "/" }, { label: title }];

  return (
    <section className="relative w-full pt-8 pb-10 md:pt-62 md:pb-16 overflow-hidden">

      {/* ===================== BG DESKTOP ===================== */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src="/imgs/bread.webp"
          alt="Fundo da página interna"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ===================== BG MOBILE (branco) ===================== */}
      <div className="absolute inset-0 -z-10 bg-white md:hidden" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">

        {/* ===================== TÍTULO ===================== */}
        <h1 className="
          text-2xl md:text-3xl font-bold
          text-(--secondary-color) md:text-(--white-color)
          text-center md:text-left
        ">
          {title}
        </h1>

        {/* ===================== BREAD ===================== */}
        <div className="mt-3 flex justify-center md:block">
          <Breadcrumb>
            <BreadcrumbList
              className="
                flex items-center gap-2 
                text-xs md:text-sm 
                text-[#222] md:text-(--white-color)/90 justify-center md:justify-start
              "
            >
              {crumbs.map((c, i) => {
                const isFirst = i === 0;
                const isLast = i === crumbs.length - 1;

                return (
                  <div className="flex items-center gap-2" key={c.label + i}>
                    <BreadcrumbItem>
                      {isLast || !c.href ? (
                        <BreadcrumbPage
                          className="
                            font-semibold
                            text-[#333] md:text-white hover:text(var(--primary-color))
                          "
                        >
                          {c.label}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link
                            href={c.href}
                            className="
                              flex items-center gap-2 
                              hover:text-(--primary-color) 
                              transition-colors
                            "
                          >
                            {/* Ícone só no primeiro item */}
                            {isFirst && (
                              <span className="
                                flex h-7 w-7 items-center justify-center
                                rounded-full 
                                bg-black text-white
                                md:bg-(--blue-color)
                              ">
                                <HomeIcon size={16} />
                              </span>
                            )}

                            <span className="">
                              {isFirst ? "Home" : c.label}
                            </span>
                          </Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>

                    {!isLast && (
                      <BreadcrumbSeparator>
                        <ChevronRight
                          size={14}
                          className="text-[#444] md:text-(--white-color) hover:text(var(--primary-color))"
                        />
                      </BreadcrumbSeparator>
                    )}
                  </div>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {subtitle && (
          <p className="
            mt-4 text-sm md:text-base
            text-[#444] md:text-(--white-color)/85
            text-center md:text-left
            max-w-2xl mx-auto md:mx-0
          ">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
