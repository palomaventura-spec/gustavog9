"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  {
    label: "HOME",
    href: "#inicio",
  },
  {
    label: "PERFIL",
    href: "#perfil",
  },
  {
    label: "JORNADA",
    href: "#trajetoria",
  },
  {
    label: "CLUBES",
    href: "#clubes",
  },
  {
    label: "HIGHLIGHTS",
    href: "#highlights",
  },
  {
    label: "ESTATÍSTICAS",
    href: "#estatisticas",
  },
  {
    label: "CONQUISTAS",
    href: "#conquistas",
  },
  {
    label: "CONTATO",
    href: "#contato",
  },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1280) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050608]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#inicio"
          onClick={closeMenu}
          className="group flex items-center gap-3"
          aria-label="Ir para o início da página"
        >
          <div className="flex h-10 w-10 items-center justify-center border border-[#C8A95A]/40 bg-[#C8A95A]/5 transition-colors duration-300 group-hover:border-[#C8A95A]">
            <span className="text-sm font-black tracking-wider text-[#C8A95A]">
              G9
            </span>
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
              Gustavo Aguiar
            </p>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Futebol &amp; Futsal
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-6 xl:flex"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-3 text-[11px] font-bold tracking-[0.16em] text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              {item.label}

              <span className="absolute bottom-1 left-0 h-px w-0 bg-[#C8A95A] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center border border-white/10 text-white transition-colors duration-300 hover:border-[#C8A95A]/50 hover:text-[#C8A95A] xl:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-20 h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-[#050608] xl:hidden"
        >
          <nav
            className="mx-auto grid max-w-7xl px-5 py-5 sm:px-8"
            aria-label="Navegação mobile"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-white/5 py-4 text-sm font-bold tracking-[0.16em] text-zinc-300 transition-colors duration-300 hover:text-[#C8A95A]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}