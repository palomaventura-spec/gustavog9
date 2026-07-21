import {
  ArrowUpRight,
  Camera,
  PlayCircle,
  Trophy,
} from "lucide-react";

import Container from "@/components/shared/Container";
import { socialData } from "@/data/social";

const instagramContent = [
  {
    icon: PlayCircle,
    label: "Jogos e melhores momentos",
    labelEn: "Matches and highlights",
  },
  {
    icon: Trophy,
    label: "Competições e conquistas",
    labelEn: "Competitions and achievements",
  },
  {
    icon: Camera,
    label: "Registros da trajetória",
    labelEn: "Development Journey records",
  },
];

function InstagramLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-6 w-6 text-[#C8A95A]"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Instagram() {
  const instagram = socialData.instagram;

  return (
    <section
      id="instagram"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#050608]"
    >
      <div className="pointer-events-none absolute left-[-12rem] top-10 size-[34rem] rounded-full bg-[#C8A95A]/5 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-12rem] right-[-10rem] size-[32rem] rounded-full bg-white/[0.025] blur-[145px]" />

      <Container className="relative z-10">
        <div className="relative overflow-hidden border border-white/10 bg-[#080a0d]">
          <div className="pointer-events-none absolute right-[-3rem] top-[-5rem] text-[15rem] font-black leading-none text-white/[0.018]">
            G9
          </div>

          <div className="grid lg:grid-cols-[0.58fr_0.42fr]">
            <div className="relative p-7 sm:p-10 lg:p-14">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full border border-[#C8A95A]/40 bg-[#C8A95A]/10">
                  <InstagramLogo />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#C8A95A]">
                    Instagram
                  </p>

                  <p className="mt-1 text-sm font-semibold text-zinc-500">
                    {instagram.username}
                  </p>
                </div>
              </div>

              <h2 className="mt-9 max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                {instagram.title}
              </h2>

              <p className="mt-3 text-sm italic leading-7 text-zinc-600">
                {instagram.titleEn}
              </p>

              <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                {instagram.description}
              </p>

              <p className="mt-4 max-w-3xl text-sm italic leading-7 text-zinc-600">
                {instagram.descriptionEn}
              </p>

              <a
                href={instagram.url}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#C8A95A] px-8 text-sm font-black uppercase tracking-wider text-[#050608] transition duration-300 hover:-translate-y-1 hover:bg-[#dfc979]"
              >
                Ver Instagram
                <ArrowUpRight size={18} />
              </a>
            </div>

            <aside className="border-t border-white/10 bg-[#0a0d12] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#C8A95A]">
                Conteúdo
              </p>

              <div className="mt-7 border-y border-white/10">
                {instagramContent.map(
                  ({ icon: Icon, label, labelEn }, index) => (
                    <article
                      key={label}
                      className={`group flex items-start gap-4 py-6 ${
                        index > 0 ? "border-t border-white/10" : ""
                      }`}
                    >
                      <div className="flex size-11 shrink-0 items-center justify-center border border-[#C8A95A]/25 text-[#C8A95A] transition group-hover:bg-[#C8A95A] group-hover:text-[#050608]">
                        <Icon size={19} strokeWidth={1.7} />
                      </div>

                      <div>
                        <p className="text-sm font-black uppercase tracking-[0.14em] text-white">
                          {label}
                        </p>

                        <p className="mt-2 text-xs italic leading-6 text-zinc-600">
                          {labelEn}
                        </p>
                      </div>
                    </article>
                  )
                )}
              </div>

              <div className="mt-8 border-l-2 border-[#C8A95A] pl-5">
                <p className="text-sm leading-7 text-zinc-500">
                  O Instagram reúne jogos, gols, bastidores, competições,
                  conquistas e a evolução contínua da carreira de Gustavo.
                </p>

                <p className="mt-2 text-sm italic leading-7 text-zinc-600">
                  Follow Gustavo's journey through matches, goals, achievements
                  and career development.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}