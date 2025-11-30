"use client";

import Image from "next/image";
import SectionMVV from "./Mvv";

export default function QuemSomosIn() {
  return (
    <section className="relative w-full  py-16 md:py-24 overflow-hidden">
      {/* Gelo de fundo à esquerda (desktop only) */}
      <div className="hidden md:block absolute left-0 z-2 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image
          src="/imgs/gelo.webp"
          alt="Gelo decorativo"
          width={260}
          height={260}
          className="opacity-80"
        />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Topo: imagem + texto */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
          {/* Imagem principal */}
          <div className="relative">
            <div className="rounded-3xl z-1 overflow-hidden shadow-lg bg-white/50">
              <Image
                src="/imgs/quem.webp"
                alt="Técnico de climatização"
                width={520}
                height={620}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Texto */}
          <div>
            <h2 className="text-(--blue-color) uppercase text-2xl font-semibold tracking-[0.3em] mb-2">
              Sobre nós 
            </h2>
            <h3 className="text-[#706f6f] text-xl md:text-sm font-bold mb-4">
              REFRIGERAÇÃO E CLIMATIZAÇÃO
            </h3>

            <p className="text-sm md:text-base text-[#1a2f37]/80 leading-relaxed mb-4">
              A Lordtec Refrigeração e Climatização foi fundada em 2023 com o
              propósito de transformar ambientes em espaços mais frescos,
              agradáveis e confortáveis. Atuamos com foco na instalação,
              manutenção e higienização de sistemas de ar-condicionado e
              refrigeração, sempre priorizando a qualidade, a segurança e o
              atendimento personalizado.
            </p>

            <p className="text-sm md:text-base text-[#1a2f37]/80 leading-relaxed mb-8">
              Nosso compromisso é garantir soluções eficientes, duráveis e
              realizadas com excelência, proporcionando bem-estar aos nossos
              clientes em residências, empresas e indústrias. Acreditamos que um
              ambiente climatizado com qualidade melhora a produtividade, a
              saúde e o conforto no dia a dia.
            </p>

            {/* Lista de valores com ícones */}
            <div className="grid gap-y-6 gap-x-10 md:grid-cols-2 text-sm">
              {/* Qualidade */}
              <div className="flex items-start gap-3">
                <Image
                  src="/imgs/icons/qualidade.png"
                  alt="Ícone qualidade"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <h4 className="font-semibold text-(--blue-color)/80 mb-1">
                    Qualidade
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    Executar serviços com alto padrão técnico e
                    profissionalismo.
                  </p>
                </div>
              </div>

              {/* Confiabilidade */}
              <div className="flex items-start gap-3">
                <Image
                  src="/imgs/icons/confiabilidade.png"
                  alt="Ícone confiabilidade"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <h4 className="font-semibold text-(--blue-color)/80 mb-1">
                    Confiabilidade
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    Criar relações de confiança com nossos clientes e parceiros.
                  </p>
                </div>
              </div>

              {/* Compromisso */}
              <div className="flex items-start gap-3">
                <Image
                  src="/imgs/icons/compromisso.png"
                  alt="Ícone compromisso"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <h4 className="font-semibold text-(--blue-color)/80 mb-1">
                    Compromisso
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    Cumprir prazos e atender com transparência e
                    responsabilidade.
                  </p>
                </div>
              </div>

              {/* Atendimento Humanizado */}
              <div className="flex items-start gap-3">
                <Image
                  src="/imgs/icons/atendimento.png"
                  alt="Ícone atendimento"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <h4 className="font-semibold text-(--blue-color)/80 mb-1">
                    Atendimento Humanizado
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    Tratar cada cliente com respeito, atenção e dedicação.
                  </p>
                </div>
              </div>

              {/* Inovação */}
              <div className="flex items-start gap-3">
                <Image
                  src="/imgs/icons/inovacao.png"
                  alt="Ícone inovação"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <h4 className="font-semibold text-(--blue-color)/80 mb-1">
                    Inovação
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    Buscar constantemente novas tecnologias e melhorias nos
                    processos.
                  </p>
                </div>
              </div>

              {/* Segurança */}
              <div className="flex items-start gap-3">
                <Image
                  src="/imgs/icons/seguranca.png"
                  alt="Ícone segurança"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <h4 className="font-semibold text-(--blue-color)/80 mb-1">
                    Segurança
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    Garantir a integridade de pessoas, equipamentos e ambientes
                    em todas as etapas do serviço.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SectionMVV />
      </div>
    </section>
  );
}
