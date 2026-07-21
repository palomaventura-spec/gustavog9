import { ArrowDown, Film, Maximize2 } from "lucide-react";

import Container from "@/components/shared/Container";
import VideoCard from "@/components/ui/VideoCard";
import { featuredVideo } from "@/data/videos";

export default function FeaturedVideo() {
  return (
    <section
      id="highlights"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#050608]"
    >
      <div className="pointer-events-none absolute left-[-12rem] top-10 size-[36rem] rounded-full bg-[#C8A95A]/6 blur-[160px]" />

      <div className="pointer-events-none absolute bottom-[-14rem] right-[-12rem] size-[36rem] rounded-full bg-white/[0.025] blur-[150px]" />

      <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
        <div className="mb-12">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#C8A95A]" />

            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#C8A95A]">
              Highlights
            </p>
          </div>

          <h2 className="mt-6 max-w-6xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
            Melhores
            <span className="ml-3 text-[#C8A95A]">
              Momentos
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
            Uma seleção das principais jogadas, gols e movimentações de
            Gustavo Aguiar nas temporadas de 2025 e 2026.
          </p>
        </div>

        <div className="border border-white/10 bg-[#080a0d] p-2 sm:p-3">
          <VideoCard
            featured
            title={featuredVideo.title}
            subtitle={featuredVideo.subtitle}
            thumbnail={featuredVideo.thumbnail}
            video={featuredVideo.video}
          />

          <div className="grid gap-5 border-t border-white/10 px-4 py-5 sm:grid-cols-3 sm:items-center sm:px-6">
            <div className="flex items-center gap-3">
              <Film
                size={18}
                className="shrink-0 text-[#C8A95A]"
              />

              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white">
                  Highlights oficiais
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  Seleção de jogadas e gols
                </p>
              </div>
            </div>

            <div className="sm:text-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white">
                2025–2026
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                Duas temporadas de evolução
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 sm:justify-end">
              <Maximize2 size={15} />
              Formato 16:9
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-8 text-zinc-400">
          {featuredVideo.description}
        </p>

        <a
          href="#key-matches"
          className="mx-auto mt-12 flex w-fit flex-col items-center gap-2 text-zinc-600 transition hover:text-[#C8A95A]"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">
            Ver jogos em destaque
          </span>

          <ArrowDown
            size={19}
            className="animate-bounce"
          />
        </a>
      </Container>
    </section>
  );
}