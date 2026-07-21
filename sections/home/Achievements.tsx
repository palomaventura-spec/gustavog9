import Image from "next/image";
import { Crown, Trophy } from "lucide-react";

import Container from "@/components/shared/Container";
import { achievements } from "@/data/achievements";

export default function Conquistas() {
  return (
    <section
      id="conquistas"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#080a0d]"
    >
      <div className="pointer-events-none absolute left-[-12rem] top-20 size-[34rem] rounded-full bg-[#C8A95A]/6 blur-[150px]" />

      <Container className="relative z-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#C8A95A]" />

              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#C8A95A]">
                Conquistas
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
              Conquistas
            </h2>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <p className="text-lg leading-8 text-zinc-300">
              Três artilharias conquistadas desde o início da trajetória
              competitiva.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <article
              key={achievement.id}
              className="group relative overflow-hidden border border-white/10 bg-[#050608] transition duration-500 hover:-translate-y-1 hover:border-[#C8A95A]/45"
            >
              <div className="grid sm:grid-cols-[0.46fr_0.54fr]">
                <div className="relative min-h-[290px] overflow-hidden">
                  <Image
                    src={achievement.image}
                    alt={`${achievement.title} — ${achievement.competition}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

                  <div className="absolute left-5 top-5 flex size-12 items-center justify-center rounded-full border border-[#C8A95A]/45 bg-black/55 text-[#C8A95A] backdrop-blur-md">
                    <Trophy size={22} />
                  </div>
                </div>

                <div className="relative flex flex-col justify-center p-7">
                  <span className="absolute right-5 top-4 text-5xl font-black text-white/[0.04]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex items-center gap-2 text-[#C8A95A]">
                    <Crown size={16} />

                    <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                      Artilheiro
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-black uppercase leading-tight tracking-[-0.04em] text-white">
                    {achievement.competition}
                  </h3>

                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.17em] text-zinc-400">
                    {achievement.club} • {achievement.year}
                  </p>

                  <div className="mt-7 grid grid-cols-2 border-y border-white/10">
                    <div className="py-5">
                      <p className="text-4xl font-black text-white">
                        {achievement.goals}
                      </p>

                      <p className="mt-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#C8A95A]">
                        Gols
                      </p>
                    </div>

                    <div className="border-l border-white/10 py-5 pl-5">
                      <p className="text-4xl font-black text-white">
                        {achievement.matches ?? "—"}
                      </p>

                      <p className="mt-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#C8A95A]">
                        Jogos
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm font-black uppercase text-white">
                    {achievement.title}
                  </p>
                </div>
              </div>

              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#C8A95A] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}