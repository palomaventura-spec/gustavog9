import Image from "next/image";
import { ArrowDown, Play } from "lucide-react";

import Container from "@/components/shared/Container";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen scroll-mt-20 overflow-hidden bg-[#050608] pt-20"
    >
      {/* Fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:96px_96px]" />

        <div className="absolute right-[-12rem] top-[-8rem] size-[46rem] rounded-full bg-[#C8A95A]/10 blur-[180px]" />

        <div className="absolute bottom-[-12rem] left-[-10rem] size-[35rem] rounded-full bg-white/[0.02] blur-[150px]" />

        <span className="absolute right-[-4rem] top-[11%] select-none text-[22rem] font-black leading-none tracking-[-0.14em] text-white/[0.018] sm:text-[30rem] xl:text-[42rem]">
          G9
        </span>
      </div>

      <Container className="relative z-10">
        <div className="relative flex min-h-[calc(100vh-5rem)] flex-col py-8 sm:py-10 lg:block lg:py-16">

          {/* Imagem */}
          <div className="relative order-1 h-[420px] overflow-hidden rounded-b-[2rem] sm:h-[520px] lg:absolute lg:inset-y-0 lg:right-[-8%] lg:h-auto lg:w-[70%] lg:rounded-none xl:right-[-10%]">
            <Image
              src="/images/hero/gustavo-hero.png"
              alt="Gustavo Aguiar"
              fill
              priority
              className="object-cover object-center lg:object-[55%_center]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/25 to-transparent" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,transparent_0%,transparent_38%,rgba(5,6,8,.18)_70%,rgba(5,6,8,.72)_100%)]" />
          </div>

          {/* Conteúdo */}
          <div className="relative z-20 order-2 -mt-20 flex flex-1 flex-col justify-end pb-10 lg:mt-0 lg:min-h-[calc(100vh-10rem)] lg:w-[52%] lg:justify-center">

            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C8A95A]" />

              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#C8A95A]">
                PERFIL DO ATLETA • 2026
              </p>
            </div>

            <h1 className="text-[3.8rem] font-black uppercase leading-[0.82] tracking-[-0.075em] text-white sm:text-[5.6rem] lg:text-[6.2rem] xl:text-[7rem]">
              Gustavo

              <span className="mt-3 block text-[#C8A95A]">
                Aguiar
              </span>
            </h1>

            <div className="mt-8 flex flex-col gap-3 text-base text-zinc-300">

              <div className="flex flex-wrap items-center gap-3">
                <span>Nascido em 2018</span>

                <span className="size-1 rounded-full bg-[#C8A95A]" />

                <span>Atacante • Pivô</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">

                <span className="font-black uppercase tracking-[0.12em] text-white">
                  Botafogo
                </span>

                <span className="size-1 rounded-full bg-[#C8A95A]" />

                <span>🇵🇹🇧🇷 Luso-brasileiro</span>

              </div>

            </div>

            <blockquote className="mt-8 max-w-lg border-l-2 border-[#C8A95A] pl-5">

              <p className="text-xl leading-8 text-white">
                Grandes atletas são formados uma temporada de cada vez.
              </p>

            </blockquote>

            <div className="mt-10">

              <a
                href="#highlights"
                className="inline-flex items-center gap-3 rounded-full bg-[#C8A95A] px-9 py-4 text-sm font-black uppercase tracking-wider text-[#050608] transition hover:-translate-y-1 hover:bg-[#dfc979]"
              >

                <Play
                  size={18}
                  fill="currentColor"
                />

                Ver Highlights

              </a>

            </div>

          </div>

          {/* Scroll */}
          <a
            href="#highlights"
            className="relative z-20 order-3 mx-auto mt-auto flex w-fit flex-col items-center gap-2 pb-2 text-zinc-600 transition hover:text-[#C8A95A] lg:absolute lg:bottom-5 lg:left-1/2 lg:-translate-x-1/2"
          >

            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
              Highlights
            </span>

            <ArrowDown
              size={20}
              className="animate-bounce"
            />

          </a>

        </div>
      </Container>
    </section>
  );
}