import { ArrowUp } from "lucide-react";

import Container from "@/components/shared/Container";

const footerNavigation = [
  { label: "Início", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Vídeo", href: "#videos" },
  { label: "Estatísticas", href: "#estatisticas" },
  { label: "Trajetória em vídeo", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050608]">
      <Container>
        <div className="grid gap-10 py-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
          <div>
            <a
              href="#inicio"
              aria-label="Voltar ao início"
              className="inline-flex items-center gap-4"
            >
              <div className="flex size-12 items-center justify-center rounded-full border border-[#C8A95A]/45 bg-[#C8A95A]/10">
                <span className="font-black text-[#C8A95A]">
                  G9
                </span>
              </div>

              <div>
                <p className="text-lg font-black uppercase tracking-[0.08em] text-white">
                  Gustavo Aguiar
                </p>

                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.28em] text-zinc-600">
                  Player Profile 2026
                </p>
              </div>
            </a>

            <blockquote className="mt-8 border-l-2 border-[#C8A95A] pl-5">
              <p className="text-lg font-medium text-zinc-300">
                A história está apenas começando.
              </p>

              <p className="mt-2 text-sm italic text-zinc-600">
                The journey has only just begun.
              </p>
            </blockquote>
          </div>

          <div className="lg:text-right">
            <nav
              aria-label="Navegação do rodapé"
              className="flex flex-wrap gap-x-6 gap-y-4 lg:justify-end"
            >
              {footerNavigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-500 transition hover:text-[#C8A95A]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#inicio"
              className="mt-9 inline-flex size-12 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-[#C8A95A]/50 hover:text-[#C8A95A]"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={19} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Gustavo Aguiar • G9
          </p>

          <p>
            Contatos e oportunidades direcionados aos responsáveis.
          </p>
        </div>
      </Container>
    </footer>
  );
}