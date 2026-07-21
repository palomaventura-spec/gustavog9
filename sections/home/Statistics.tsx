import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import {
  careerStatistics,
  penaltyStatistics,
} from "@/data/statistics";

export default function Statistics() {
  return (
    <section
      id="estatisticas"
      className="relative overflow-hidden border-t border-white/10 bg-[#050608]"
    >
      <div className="pointer-events-none absolute right-[-10rem] top-20 size-[32rem] rounded-full bg-[#C8A95A]/5 blur-[140px]" />

      <Container className="relative z-10">
        <SectionTitle
          subtitle="Player Statistics"
          title="Estatísticas"
        />

        <div className="grid gap-0 border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {careerStatistics.map((stat, index) => (
            <article
              key={stat.label}
              className={`group relative px-6 py-10 transition hover:bg-white/[0.025] sm:px-8 lg:py-12 ${
                index % 2 !== 0 ? "sm:border-l sm:border-white/10" : ""
              } ${
                index > 1 ? "border-t border-white/10 lg:border-t-0" : ""
              } ${
                index > 0 ? "lg:border-l lg:border-white/10" : ""
              }`}
            >
              <p className="text-5xl font-black tracking-[-0.06em] text-white transition group-hover:text-[#C8A95A] sm:text-6xl">
                {stat.value}
              </p>

              <p className="mt-5 text-xs font-black uppercase tracking-[0.24em] text-zinc-300">
                {stat.label}
              </p>

              <p className="mt-2 text-xs text-zinc-600">
                {stat.labelEn}
              </p>

              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#C8A95A] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="border border-white/10 bg-[#080a0d] p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8A95A]">
              Gols oficiais
            </p>

            <p className="mt-5 text-4xl font-black text-white">
              128
            </p>

            <p className="mt-4 leading-7 text-zinc-400">
              Os gols oficiais contabilizam partidas e competições,
              sem incluir cobranças convertidas em disputas por pênaltis.
            </p>
          </article>

          <article className="border border-[#C8A95A]/25 bg-[#C8A95A]/5 p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8A95A]">
              Total considerando disputas
            </p>

            <div className="mt-5 flex flex-wrap items-end gap-4">
              <p className="text-4xl font-black text-white">
                {penaltyStatistics.totalGoalsIncludingShootouts}
              </p>

              <span className="pb-1 text-sm text-zinc-500">
                gols no total
              </span>
            </div>

            <p className="mt-4 leading-7 text-zinc-400">
              Inclui{" "}
              <strong className="font-semibold text-white">
                {penaltyStatistics.penaltyShootoutGoals} gols
              </strong>{" "}
              adicionais marcados em disputas por pênaltis.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}