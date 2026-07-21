import {
  CalendarDays,
  Flag,
  Footprints,
  Ruler,
  Shield,
  UserRound,
  Weight,
} from "lucide-react";

import Container from "@/components/shared/Container";
import { playerData } from "@/data/player";

const playerDetails = [
  {
    label: "Nome",
    labelEn: "Name",
    value: playerData.name,
    icon: UserRound,
  },
  {
    label: "Apelido",
    labelEn: "Nickname",
    value: playerData.nickname,
    icon: Shield,
  },
  {
    label: "Ano de nascimento",
    labelEn: "Birth year",
    value: String(playerData.birthYear),
    icon: CalendarDays,
  },
  {
    label: "Clube atual",
    labelEn: "Current club",
    value: playerData.currentClub,
    icon: Shield,
  },
  {
    label: "Posição no campo",
    labelEn: "Football position",
    value: playerData.footballPosition,
    icon: Footprints,
  },
  {
    label: "Posição no futsal",
    labelEn: "Futsal position",
    value: playerData.futsalPosition,
    icon: Footprints,
  },
  {
    label: "Pé dominante",
    labelEn: "Preferred foot",
    value: playerData.dominantFoot,
    icon: Footprints,
  },
  {
    label: "Altura",
    labelEn: "Height",
    value: playerData.height,
    icon: Ruler,
  },
  {
    label: "Peso",
    labelEn: "Weight",
    value: playerData.weight,
    icon: Weight,
  },
  {
    label: "Nacionalidades",
    labelEn: "Nationalities",
    value: "Brasil • Portugal",
    icon: Flag,
  },
];

const profileStats = [
  {
    value: playerData.matches,
    label: "Jogos oficiais",
    labelEn: "Official matches",
  },
  {
    value: playerData.officialGoals,
    label: "Gols oficiais",
    labelEn: "Official goals",
  },
  {
    value: "2,05",
    label: "Gols por jogo",
    labelEn: "Goals per match",
  },
  {
    value: playerData.topScorerAwards,
    label: "Artilharias",
    labelEn: "Top scorer awards",
  },
];

export default function PlayerInformation() {
  return (
    <section
      id="dados-atleta"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#080a0d]"
    >
      <div className="pointer-events-none absolute left-[-12rem] top-20 size-[34rem] rounded-full bg-[#C8A95A]/5 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-12rem] right-[-10rem] size-[32rem] rounded-full bg-white/[0.025] blur-[140px]" />

      <Container className="relative z-10">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#C8A95A]" />

              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#C8A95A]">
                Dados do Atleta
              </p>
            </div>

            <h2 className="mt-6 max-w-4xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
              Perfil do atleta
            </h2>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <p className="text-lg font-medium leading-8 text-zinc-300">
              Informações essenciais para uma avaliação rápida e objetiva.
            </p>
          </div>
        </div>

        <div className="overflow-hidden border border-white/10 bg-[#050608]">
          <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
            <aside className="relative overflow-hidden border-b border-white/10 bg-[#0a0d12] p-7 sm:p-10 lg:border-b-0 lg:border-r">
              <div className="pointer-events-none absolute right-[-3rem] top-[-4rem] text-[13rem] font-black leading-none text-white/[0.018]">
                G9
              </div>

              <div className="relative z-10">
                <div className="flex size-14 items-center justify-center rounded-full border border-[#C8A95A]/45 bg-[#C8A95A]/10">
                  <span className="text-lg font-black text-[#C8A95A]">
                    G9
                  </span>
                </div>

                <p className="mt-10 text-xs font-black uppercase tracking-[0.3em] text-[#C8A95A]">
                  Identidade do atleta
                </p>

                <h3 className="mt-4 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl">
                  Gustavo
                  <span className="mt-2 block text-[#C8A95A]">
                    Aguiar
                  </span>
                </h3>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="border border-white/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-300">
                    Atacante
                  </span>

                  <span className="border border-white/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-300">
                    Pivô
                  </span>

                  <span className="border border-[#C8A95A]/30 bg-[#C8A95A]/5 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#C8A95A]">
                    Botafogo
                  </span>
                </div>

                <div className="mt-9 border-t border-white/10 pt-7">
                  <p className="text-sm leading-7 text-zinc-300">
                    Jovem atleta luso-brasileiro,
                    reconhecido pelo poder de finalização, movimentação ofensiva
                    e regularidade em competições oficiais de futsal e futebol de
                    campo.
                  </p>

                  <p className="mt-3 text-sm italic leading-7 text-zinc-600">
                    
                  </p>
                </div>
              </div>
            </aside>

            <div>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3">
                {playerDetails.map(
                  ({ label, value, icon: Icon }, index) => (
                    <article
                      key={label}
                      className={`group relative min-h-[145px] p-6 transition duration-300 hover:bg-white/[0.025] sm:p-7 ${
                        index > 0 ? "border-t border-white/10 sm:border-t-0" : ""
                      } ${
                        index % 2 !== 0
                          ? "sm:border-l sm:border-white/10"
                          : ""
                      } ${
                        index >= 2
                          ? "sm:border-t sm:border-white/10"
                          : ""
                      } ${
                        index % 3 !== 0
                          ? "xl:border-l xl:border-white/10"
                          : "xl:border-l-0"
                      } ${
                        index >= 3
                          ? "xl:border-t xl:border-white/10"
                          : "xl:border-t-0"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <Icon
                          size={19}
                          strokeWidth={1.7}
                          className="text-[#C8A95A]"
                        />

                        <span className="text-[10px] font-black text-zinc-700">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p className="mt-6 text-[10px] font-black uppercase tracking-[0.23em] text-zinc-500">
                        {label}
                      </p>

                      <p className="mt-3 text-lg font-black leading-snug text-white">
                        {value}
                      </p>

                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#C8A95A] transition-all duration-500 group-hover:w-full" />
                    </article>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-white/10 lg:grid-cols-4">
            {profileStats.map((stat, index) => (
              <article
                key={stat.label}
                className={`group relative px-5 py-7 transition hover:bg-white/[0.025] sm:px-7 ${
                  index % 2 !== 0 ? "border-l border-white/10" : ""
                } ${
                  index > 1
                    ? "border-t border-white/10 lg:border-t-0"
                    : ""
                } ${
                  index > 0 ? "lg:border-l lg:border-white/10" : ""
                }`}
              >
                <p className="text-4xl font-black tracking-[-0.05em] text-white transition group-hover:text-[#C8A95A] sm:text-5xl">
                  {stat.value}
                </p>

                <p className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#C8A95A]">
                  {stat.label}
                </p>

                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#C8A95A] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2 border-l-2 border-[#C8A95A] pl-5 text-sm text-zinc-500 sm:flex-row sm:items-center sm:gap-4">
          <span>Dados físicos atualizados em julho de 2026.</span>

          <span className="hidden text-zinc-700 sm:inline">•</span>
        </div>
      </Container>
    </section>
  );
}