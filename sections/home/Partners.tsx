import Image from "next/image";
import { ExternalLink } from "lucide-react";

import Container from "@/components/shared/Container";
import { partners } from "@/data/partners";

export default function Partners() {
  return (
    <section
      id="parcerias"
      className="relative overflow-hidden border-t border-white/10 bg-[#050608]"
    >
      {/* Glow decorativo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A95A]/5 blur-[150px]" />

      <Container className="relative z-10">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#C8A95A]" />

            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#C8A95A]">
              Parcerias
            </p>

            <span className="h-px w-10 bg-[#C8A95A]" />
          </div>

          <h2 className="mt-6 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Parceiros
          </h2>

          <p className="mt-5 text-sm uppercase tracking-[0.2em] text-zinc-600">
            Partners
          </p>
        </div>

        {/* Cards dos parceiros */}
        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-6">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar ${partner.name}`}
              className="group relative flex min-h-[250px] w-full max-w-[360px] flex-col items-center justify-center overflow-hidden border border-white/10 bg-[#080a0d] p-8 text-center transition duration-500 hover:border-[#C8A95A]/40 hover:bg-[#C8A95A]/[0.035]"
            >
              <ExternalLink
                size={16}
                className="absolute right-5 top-5 text-zinc-700 transition duration-300 group-hover:text-[#C8A95A]"
              />

              {/* Logo */}
              <div className="relative h-32 w-full max-w-[280px]">
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  fill
                  sizes="210px"
                  className="object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Descrição */}
              <p className="mt-7 max-w-xs text-sm leading-6 text-zinc-400">
                {partner.description}
              </p>

              {/* Linha animada */}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#C8A95A] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Texto institucional */}
        <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-6 text-zinc-600">
          Tecnologia, desenvolvimento e novas oportunidades para o esporte de
          base.
        </p>
      </Container>
    </section>
  );
}