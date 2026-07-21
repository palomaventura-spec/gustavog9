"use client";

import { availableKeyMatches } from "@/data/videos";
import VideoCard from "@/components/ui/VideoCard";

export default function KeyMatches() {
  return (
    <section
      id="key-matches"
      className="py-24 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-sm mb-4">
            Key Matches
          </p>

          <h2 className="text-5xl font-black uppercase">
            Jogos em Destaque
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-zinc-400 leading-8">
            Partidas que demonstram a evolução técnica e competitiva
            de Gustavo Aguiar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {availableKeyMatches.map((match) => (
            <VideoCard
              key={match.id}
              title={match.title}
              subtitle={match.subtitle}
              thumbnail={match.thumbnail}
              youtubeId={match.youtubeId}
            />
          ))}

        </div>

      </div>
    </section>
  );
}