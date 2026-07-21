import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import Container from "@/components/shared/Container";
import { contactData } from "@/data/contact";

function InstagramLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="size-5"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function Contato() {
  const email = contactData.email ?? "";
  const phone = contactData.phone ?? "";
  const hasEmail = Boolean(email);
  const hasPhone = Boolean(phone);

  const normalizedPhone = phone.replace(/\D/g, "");

  return (
    <section
      id="contato"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#080a0d]"
    >
      <div className="pointer-events-none absolute left-[-12rem] top-10 size-[34rem] rounded-full bg-[#C8A95A]/6 blur-[155px]" />

      <div className="pointer-events-none absolute bottom-[-12rem] right-[-10rem] size-[34rem] rounded-full bg-white/[0.025] blur-[145px]" />

      <Container className="relative z-10">
        <div className="relative overflow-hidden border border-white/10 bg-[#050608]">
          <div className="pointer-events-none absolute right-[-3rem] top-[-5rem] text-[15rem] font-black leading-none text-white/[0.018]">
            G9
          </div>

          <div className="grid lg:grid-cols-[0.57fr_0.43fr]">
            <div className="relative p-7 sm:p-10 lg:p-14">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#C8A95A]" />

                <p className="text-xs font-black uppercase tracking-[0.34em] text-[#C8A95A]">
                  Contato
                </p>
              </div>

              <h2 className="mt-7 max-w-3xl text-4xl font-black uppercase leading-[0.94] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                {contactData.title}
              </h2>

              <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                {contactData.description}
              </p>

              <div className="mt-9 flex items-start gap-4 border-l-2 border-[#C8A95A] pl-5">
                <ShieldCheck
                  size={21}
                  strokeWidth={1.7}
                  className="mt-1 shrink-0 text-[#C8A95A]"
                />

                <div>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-white">
                    Proteção e privacidade
                  </p>

                  <p className="mt-2 text-sm leading-7 text-zinc-500">
                    Nenhum dado de contato pessoal da criança é publicado no
                    site.
                  </p>
                </div>
              </div>
            </div>

            <aside className="border-t border-white/10 bg-[#0a0d12] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center border border-[#C8A95A]/30 bg-[#C8A95A]/5 text-[#C8A95A]">
                  <UserRound size={22} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">
                    Responsáveis
                  </p>

                  <p className="mt-2 text-lg font-black text-white">
                    {contactData.guardianName}
                  </p>
                </div>
              </div>

              <div className="mt-8 border-y border-white/10">
                {hasEmail && (
                  <a
                    href={`mailto:${email}`}
                    className="group flex items-center justify-between gap-5 py-6 transition hover:text-[#C8A95A]"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <Mail
                        size={19}
                        className="shrink-0 text-[#C8A95A]"
                      />

                      <div className="min-w-0">
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-zinc-600">
                          E-mail
                        </p>

                        <p className="mt-2 truncate text-sm font-semibold text-white group-hover:text-[#C8A95A]">
                          {email}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight size={17} className="shrink-0" />
                  </a>
                )}

                {hasPhone && (
                  <a
                    href={`https://wa.me/${normalizedPhone}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex items-center justify-between gap-5 py-6 transition hover:text-[#C8A95A] ${
                      hasEmail ? "border-t border-white/10" : ""
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <MessageCircle
                        size={19}
                        className="shrink-0 text-[#C8A95A]"
                      />

                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-zinc-600">
                          WhatsApp
                        </p>

                        <p className="mt-2 text-sm font-semibold text-white group-hover:text-[#C8A95A]">
                          {phone}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight size={17} className="shrink-0" />
                  </a>
                )}

                <a
                  href={contactData.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex items-center justify-between gap-5 py-6 transition hover:text-[#C8A95A] ${
                    hasEmail || hasPhone
                      ? "border-t border-white/10"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[#C8A95A]">
                      <InstagramLogo />
                    </span>

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-zinc-600">
                        Instagram
                      </p>

                      <p className="mt-2 text-sm font-semibold text-white group-hover:text-[#C8A95A]">
                        {contactData.instagram.username}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight size={17} />
                </a>
              </div>

              {!hasEmail && !hasPhone && (
                <div className="mt-7 border border-[#C8A95A]/20 bg-[#C8A95A]/5 p-5">
                  <p className="text-sm leading-7 text-zinc-400">
                    E-mail e WhatsApp serão adicionados após a definição dos
                    contatos públicos dos responsáveis.
                  </p>
                </div>
              )}
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}