import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Play,
} from "lucide-react";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { videoTimeline } from "@/data/gallery";

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#050608]"
    >
      <div className="pointer-events-none absolute left-[-12rem] top-20 size-[34rem] rounded-full bg-[#C8A95A]/5 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-10rem] right-[-10rem] size-[32rem] rounded-full bg-white/[0.025] blur-[140px]" />

      <Container className="relative z-10">
        <SectionTitle
          subtitle="Career Video Journey"
          title="Trajetória em vídeo"
        />

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-base leading-8 text-zinc-400 sm:text-lg">
            Uma seleção cronológica de jogos e momentos que permite acompanhar
            a evolução de Gustavo desde o início pelo Arouca até os primeiros
            jogos no futebol de campo pelo Botafogo.
          </p>

          <p className="mt-3 text-sm italic leading-7 text-zinc-600">
            A chronological selection of matches and moments showing Gustavo’s
            development from his early days with Arouca to his first football
            appearances for Botafogo.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-[#C8A95A]/70 via-[#C8A95A]/25 to-transparent lg:block" />

          <div className="space-y-20">
            {videoTimeline.map((chapter, chapterIndex) => (
              <article
                key={chapter.id}
                className="relative lg:pl-20"
              >
                <div className="absolute left-0 top-1 hidden size-10 items-center justify-center rounded-full border border-[#C8A95A]/45 bg-[#080a0d] text-[#C8A95A] lg:flex">
                  <span className="text-xs font-black">
                    {String(chapterIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="grid gap-8 xl:grid-cols-[0.36fr_0.64fr] xl:items-start">
                  <div className="relative overflow-hidden border border-white/10 bg-[#080a0d]">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={chapter.cover}
                        alt={`${chapter.chapter} — ${chapter.club}`}
                        fill
                        sizes="(max-width: 1280px) 100vw, 35vw"
                        className="object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/5" />

                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <div className="flex items-center gap-2 text-[#C8A95A]">
                          <CalendarDays size={16} />

                          <span className="text-xs font-black uppercase tracking-[0.25em]">
                            {chapter.year}
                          </span>
                        </div>

                        <h3 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] text-white">
                          {chapter.chapter}
                        </h3>

                        <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-zinc-300">
                          {chapter.club}
                        </p>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-base leading-8 text-zinc-400">
                        {chapter.summary}
                      </p>

                      <p className="mt-3 text-sm italic leading-7 text-zinc-600">
                        {chapter.summaryEn}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    {chapter.videos.map((video, videoIndex) => {
                      const hasVideo = Boolean(video.videoUrl);

                      return (
                        <article
                          key={video.id}
                          className={`group relative overflow-hidden border bg-[#080a0d] transition duration-500 hover:-translate-y-1 ${
                            video.featured
                              ? "border-[#C8A95A]/35"
                              : "border-white/10 hover:border-[#C8A95A]/35"
                          }`}
                        >
                          <div className="relative aspect-video overflow-hidden">
                            <Image
                              src={video.thumbnail}
                              alt={`Thumbnail de ${video.title}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/5" />

                            <div className="absolute inset-0 flex items-center justify-center">
                              {hasVideo ? (
                                <a
                                  href={video.videoUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label={`Assistir ${video.title}`}
                                  className="flex size-16 items-center justify-center rounded-full border border-[#C8A95A]/40 bg-black/40 text-[#C8A95A] backdrop-blur-xl transition duration-300 group-hover:scale-110 group-hover:bg-[#C8A95A] group-hover:text-[#050608]"
                                >
                                  <Play
                                    size={26}
                                    fill="currentColor"
                                    className="ml-1"
                                  />
                                </a>
                              ) : (
                                <button
                                  type="button"
                                  aria-label={`${video.title} ainda não disponível`}
                                  className="flex size-16 cursor-default items-center justify-center rounded-full border border-[#C8A95A]/40 bg-black/40 text-[#C8A95A] backdrop-blur-xl"
                                >
                                  <Play
                                    size={26}
                                    fill="currentColor"
                                    className="ml-1"
                                  />
                                </button>
                              )}
                            </div>

                            <span className="absolute right-4 top-4 text-4xl font-black text-white/[0.15]">
                              {String(videoIndex + 1).padStart(2, "0")}
                            </span>

                            {!hasVideo && (
                              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                                <Clock3
                                  size={14}
                                  className="text-[#C8A95A]"
                                />
                                Em breve
                              </div>
                            )}
                          </div>

                          <div className="p-6">
                            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#C8A95A]">
                              {chapter.year} • {chapter.club}
                            </p>

                            <h4 className="mt-3 text-xl font-black uppercase leading-tight tracking-[-0.03em] text-white">
                              {video.title}
                            </h4>

                            <p className="mt-2 text-sm italic text-zinc-600">
                              {video.titleEn}
                            </p>

                            <p className="mt-5 text-sm leading-7 text-zinc-400">
                              {video.description}
                            </p>

                            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                              <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                                {hasVideo ? "Assistir" : "Placeholder"}
                              </span>

                              <ArrowRight
                                size={17}
                                className="text-zinc-600 transition group-hover:translate-x-1 group-hover:text-[#C8A95A]"
                              />
                            </div>
                          </div>

                          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#C8A95A] transition-all duration-500 group-hover:w-full" />
                        </article>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 border-l-2 border-[#C8A95A] pl-5">
          <p className="text-sm leading-7 text-zinc-500">
            A sequência termina com os dois registros em vídeo de Gustavo
            atuando no futebol de campo pelo Botafogo.
          </p>

          <p className="mt-1 text-sm italic leading-7 text-zinc-600">
            The sequence concludes with the two video records of Gustavo
            playing football for Botafogo.
          </p>
        </div>
      </Container>
    </section>
  );
}