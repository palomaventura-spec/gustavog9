import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { seasons } from "@/data/seasons";

const totalMatches = seasons.reduce(
  (total, season) => total + season.matches,
  0
);

const totalGoals = seasons.reduce(
  (total, season) => total + season.goals,
  0
);

export default function Seasons() {
  return (
    <section className="relative overflow-hidden bg-[#080a0d]">
      <Container className="relative z-10">
        <SectionTitle
          subtitle="Season Breakdown"
          title="Temporadas"
        />

        <div className="overflow-x-auto border-y border-white/10">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-5 text-xs font-black uppercase tracking-[0.22em] text-[#C8A95A]">
                  Temporada
                </th>

                <th className="px-6 py-5 text-xs font-black uppercase tracking-[0.22em] text-[#C8A95A]">
                  Clubes
                </th>

                <th className="px-6 py-5 text-xs font-black uppercase tracking-[0.22em] text-[#C8A95A]">
                  Jogos
                </th>

                <th className="px-6 py-5 text-xs font-black uppercase tracking-[0.22em] text-[#C8A95A]">
                  Gols
                </th>
              </tr>
            </thead>

            <tbody>
              {seasons.map((season) => (
                <tr
                  key={season.season}
                  className="border-b border-white/10 transition hover:bg-white/[0.025]"
                >
                  <td className="px-6 py-6 text-2xl font-black text-white">
                    {season.season}
                  </td>

                  <td className="px-6 py-6 text-zinc-300">
                    {season.clubs}
                  </td>

                  <td className="px-6 py-6 text-xl font-bold text-white">
                    {season.matches}
                  </td>

                  <td className="px-6 py-6 text-xl font-bold text-[#C8A95A]">
                    {season.goals}
                  </td>
                </tr>
              ))}

              <tr className="bg-white/[0.025]">
                <td className="px-6 py-6 text-2xl font-black uppercase text-white">
                  Total
                </td>

                <td className="px-6 py-6 text-zinc-500">
                  —
                </td>

                <td className="px-6 py-6 text-xl font-black text-white">
                  {totalMatches}
                </td>

                <td className="px-6 py-6 text-xl font-black text-[#C8A95A]">
                  {totalGoals}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 border-l-2 border-[#C8A95A] pl-5">
          <p className="text-sm leading-7 text-zinc-500">
            Os 128 gols oficiais não incluem os 2 gols marcados em
            disputas por pênaltis.
          </p>

          <p className="mt-1 text-sm italic leading-7 text-zinc-600">
            The 128 official goals do not include the two goals scored
            in penalty shootouts.
          </p>
        </div>
      </Container>
    </section>
  );
}