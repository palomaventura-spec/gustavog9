import {
  CalendarDays,
  CircleDot,
  Shield,
  Trophy,
} from "lucide-react";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { timeline } from "@/data/timeline";

const icons = [
  CalendarDays,
  CircleDot,
  Shield,
  Trophy,
  Shield,
  Trophy,
  CircleDot,
];

export default function Timeline() {
  return (
    <section
      id="trajetoria"
      className="relative scroll-mt-20 overflow-hidden bg-[#080a0d] py-20 sm:py-24 lg:py-28"
    >
      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute left-[-10rem] top-1/3 size-[28rem] rounded-full bg-white/[0.02] blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-10rem] right-[-10rem] size-[32rem] rounded-full bg-[#C8A95A]/5 blur-[150px]" />

      <Container className="relative z-10">
        {/* Cabeçalho */}
        <div className="mb-14 max-w-3xl sm:mb-16">
          <SectionTitle
            subtitle="Jornada"
            title="Trajetória esportiva"
            align="left"
          />

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
            Cada etapa representa um novo aprendizado na formação esportiva de
            Gustavo.
          </p>
        </div>

        {/* Linha do tempo */}
        <div className="relative">
          <div className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-white/10 sm:block lg:left-1/2 lg:-translate-x-1/2" />

          <div className="grid gap-5 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
            {timeline.map((item, index) => {
              const Icon = icons[index] ?? CircleDot;

              const isHighlighted =
                "highlight" in item && item.highlight === true;

              const isRightSide = index % 2 !== 0;

              return (
                <article
                  key={`${item.year}-${item.period}-${item.title}`}
                  className={`group relative sm:pl-16 lg:pl-0 ${
                    isRightSide ? "lg:translate-y-16" : ""
                  }`}
                >
                  {/* Marcador da linha */}
                  <div
                    className={`absolute left-0 top-8 z-10 hidden size-12 items-center justify-center border bg-[#080a0d] sm:flex lg:left-auto ${
                      isRightSide
                        ? "lg:-left-8"
                        : "lg:-right-8"
                    } ${
                      isHighlighted
                        ? "border-[#C8A95A] text-[#C8A95A]"
                        : "border-white/15 text-zinc-500"
                    }`}
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <div
                    className={`relative min-h-[280px] overflow-hidden border p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                      isHighlighted
                        ? "border-[#C8A95A]/40 bg-[#C8A95A]/[0.045]"
                        : "border-white/10 bg-[#0a0d12]"
                    }`}
                  >
                    {/* Número decorativo */}
                    <span className="pointer-events-none absolute -right-3 -top-8 select-none text-[8rem] font-black leading-none tracking-[-0.08em] text-white/[0.018]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex size-11 items-center justify-center border sm:hidden ${
                              isHighlighted
                                ? "border-[#C8A95A]/40 bg-[#C8A95A]/10 text-[#C8A95A]"
                                : "border-white/10 text-zinc-500"
                            }`}
                          >
                            <Icon
                              size={19}
                              strokeWidth={1.7}
                              aria-hidden="true"
                            />
                          </div>

                          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#C8A95A]">
                            {item.period}
                          </p>
                        </div>

                        <span className="text-3xl font-black tracking-[-0.05em] text-white">
                          {item.year}
                        </span>
                      </div>

                      {isHighlighted && (
                        <div className="mt-7">
                          <span className="inline-flex border border-[#C8A95A]/30 bg-[#C8A95A]/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.24em] text-[#C8A95A]">
                            Marco importante
                          </span>
                        </div>
                      )}

                      <h3 className="mt-6 max-w-md text-xl font-black uppercase leading-tight tracking-[-0.03em] text-white sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                        {item.description}
                      </p>
                    </div>

                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#C8A95A] transition-all duration-500 group-hover:w-full" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}