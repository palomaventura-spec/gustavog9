import Container from "@/components/shared/Container";

export default function Introduction() {
  return (
    <section
      id="perfil"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#050608] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute left-[-12rem] top-20 size-[34rem] rounded-full bg-[#C8A95A]/5 blur-[150px]" />

      <Container className="relative z-10">
        <div className="mb-14">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#C8A95A]" />

            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#C8A95A]">
              Perfil
            </p>
          </div>

          <h2 className="mt-6 max-w-5xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
            Conheça Gustavo
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="border border-white/10 bg-[#080a0d] p-7 sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C8A95A]">
              Futebol de campo
            </p>

            <h3 className="mt-5 text-2xl font-black uppercase text-white">
              Atacante
            </h3>

            <p className="mt-5 text-base leading-8 text-zinc-300">
              Gustavo atua com presença ofensiva, movimentação sem bola e
              capacidade de finalização. Sua experiência no futsal contribui
              para decisões rápidas e boa adaptação em espaços reduzidos.
            </p>
          </article>

          <article className="border border-white/10 bg-[#080a0d] p-7 sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C8A95A]">
              Futsal
            </p>

            <h3 className="mt-5 text-2xl font-black uppercase text-white">
              Pivô
            </h3>

            <p className="mt-5 text-base leading-8 text-zinc-300">
              No futsal, destaca-se pela presença de área, proteção da bola,
              movimentação ofensiva e facilidade para concluir jogadas, sempre
              em constante desenvolvimento técnico e tático.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
