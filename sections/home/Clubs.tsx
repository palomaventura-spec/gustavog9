import Image from "next/image";
import {
  ArrowDown,
  Check,
  Shield,
} from "lucide-react";

import Container from "@/components/shared/Container";
import { careerData } from "@/data/career";

export default function Clubs() {
  return (
    <section
      id="clubes"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#050608]"
    >
      <div className="pointer-events-none absolute left-[-12rem] top-20 size-[36rem] rounded-full bg-[#C8A95A]/5 blur-[160px]" />

      <div className="pointer-events-none absolute bottom-[-14rem] right-[-10rem] size-[34rem] rounded-full bg-white/[0.025] blur-[150px]" />

      <Container className="relative z-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.68fr_0.32fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#C8A95A]" />

              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#C8A95A]">
                Histórico de clubes
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
              Trajetória Esportiva
            </h2>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <p className="text-lg leading-8 text-zinc-300">
              Dois capítulos que representam o início e a evolução da
              trajetória esportiva de Gustavo.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {careerData.map((career, careerIndex) => (
            <article
              key={career.id}
              className="relative overflow-hidden border border-white/10 bg-[#080a0d]"
            >
              <div
                className={`grid lg:min-h-[680px] lg:grid-cols-2 ${
                  careerIndex % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[420px] overflow-hidden sm:min-h-[550px] lg:min-h-full">
                  <Image
                    src={career.image}
                    alt={`Gustavo Aguiar durante sua passagem pelo ${career.club}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/5" />

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_35%,rgba(0,0,0,0.65)_100%)]" />

                  <div className="absolute left-6 top-6 flex items-center gap-3 border border-white/15 bg-black/50 px-4 py-3 backdrop-blur-md">
                    <Shield
                      size={18}
                      className="text-[#C8A95A]"
                    />

                    <span className="text-xs font-black uppercase tracking-[0.22em] text-white">
                      {career.club}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                    <p className="text-xs font-black uppercase tracking-[0.27em] text-[#C8A95A]">
                      {career.period}
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <span className="pointer-events-none absolute right-[-2rem] top-[-4rem] text-[13rem] font-black leading-none text-white/[0.018]">
                    {String(careerIndex + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-[#C8A95A]">
                      Capítulo {String(careerIndex + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl">
                      {career.club}
                    </h3>

                    <p className="mt-3 text-lg font-semibold text-[#C8A95A]">
                      {career.chapter}
                    </p>

                    <div className="mt-8 border-l-2 border-[#C8A95A] pl-5">
                      <p className="text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
                        {career.highlight}
                      </p>
                    </div>

                    <p className="mt-8 text-base leading-8 text-zinc-300">
                      {career.description}
                    </p>

                    <div className="mt-9 grid grid-cols-2 border-y border-white/10">
                      {career.stats.map((stat, index) => (
                        <div
                          key={stat.label}
                          className={`px-4 py-6 ${
                            index % 2 !== 0
                              ? "border-l border-white/10"
                              : ""
                          } ${
                            index > 1
                              ? "border-t border-white/10"
                              : ""
                          }`}
                        >
                          <p className="text-3xl font-black tracking-[-0.05em] text-white">
                            {stat.value}
                          </p>

                          <p className="mt-2 text-[9px] font-black uppercase tracking-[0.17em] text-[#C8A95A]">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C8A95A]">
                        Principais marcos
                      </p>

                      <ul className="mt-5 space-y-3">
                        {career.milestones.map((milestone) => (
                          <li
                            key={milestone}
                            className="flex items-start gap-3 text-sm leading-7 text-zinc-400"
                          >
                            <Check
                              size={16}
                              className="mt-1 shrink-0 text-[#C8A95A]"
                            />

                            {milestone}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <a
          href="#estatisticas"
          className="mx-auto mt-12 flex w-fit flex-col items-center gap-2 text-zinc-600 transition hover:text-[#C8A95A]"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">
            Ver estatísticas
          </span>

          <ArrowDown size={19} className="animate-bounce" />
        </a>
      </Container>
    </section>
  );
}