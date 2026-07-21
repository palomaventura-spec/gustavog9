import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Timeline from "@/sections/home/Timeline";

export default function Journey() {
  return (
    <section
      id="trajetoria"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#050608]"
    >
      <div className="pointer-events-none absolute left-[-10rem] top-10 size-[30rem] rounded-full bg-[#C8A95A]/5 blur-[140px]" />

      <Container className="relative z-10">
        <SectionTitle
          subtitle="Development Journey"
          title="Trajetória"
        />

        <div className="mx-auto mb-16 grid max-w-6xl gap-8 border-y border-white/10 py-9 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#C8A95A]">
              Português
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-300 sm:text-lg">
              Gustavo iniciou sua trajetória no futsal pelo Arouca, em
              fevereiro de 2025. Tornou-se atleta federado em agosto do mesmo
              ano e, durante a temporada de 2026, destacou-se como artilheiro
              do Campeonato da Federação.
            </p>

            <p className="mt-4 text-base leading-8 text-zinc-400 sm:text-lg">
              Em 2026, passou a integrar o Botafogo no futebol de campo e no
              futsal, iniciando uma nova etapa da sua formação esportiva.
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#C8A95A]">
              English
            </p>

            <p className="mt-5 text-base italic leading-8 text-zinc-500 sm:text-lg">
              Gustavo began his futsal journey with Arouca in February 2025.
              He became a registered player in August of the same year and
              finished as the Federation Championship top scorer during the
              2026 season.
            </p>

            <p className="mt-4 text-base italic leading-8 text-zinc-600 sm:text-lg">
              In 2026, he joined Botafogo in both football and futsal,
              beginning a new stage in his sporting development.
            </p>
          </div>
        </div>
      </Container>

      <Timeline />
    </section>
  );
}