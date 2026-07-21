export const clubs = [
  {
    id: "arouca",

    name: "Arouca",

    period: "2025–2026",

    status: "Clube de Formação",

    statusEn: "Development Club",

    modalities: ["Futsal"],

    description:
      "Foi no Arouca que Gustavo deu os primeiros passos no futsal, iniciou sua formação esportiva, disputou suas primeiras competições e tornou-se atleta federado.",

    descriptionEn:
      "It was at Arouca that Gustavo took his first steps in futsal, began his sporting development, competed in his first official tournaments and became a registered player.",

    highlights: [
      "Início no futsal em fevereiro de 2025",
      "Atleta federado desde agosto de 2025",
      "Artilheiro do Campeonato da Federação em 2026",
      "28 gols em 12 jogos pela Federação",
    ],

    highlightsEn: [
      "Started futsal in February 2025",
      "Registered player since August 2025",
      "Federation Championship Top Scorer (2026)",
      "28 goals in 12 Federation matches",
    ],

    officialMatches: null,

    officialGoals: null,

    current: false,
  },

  {
    id: "botafogo",

    name: "Botafogo",

    period: "2026–Atual",

    status: "Clube Atual",

    statusEn: "Current Club",

    modalities: ["Campo", "Futsal"],

    description:
      "Em 2026, Gustavo iniciou uma nova etapa da sua formação esportiva ao integrar as equipes de futebol de campo e futsal do Botafogo.",

    descriptionEn:
      "In 2026, Gustavo began a new stage of his sporting development after joining Botafogo's football and futsal teams.",

    highlights: [
      "Integração ao futebol de campo e ao futsal",
      "3 gols nos 2 primeiros jogos no campo",
      "5 gols na Sinno Cup",
      "Artilheiro da Sinno Cup",
    ],

    highlightsEn: [
      "Joined both football and futsal",
      "3 goals in his first 2 football matches",
      "5 goals at the Sinno Cup",
      "Sinno Cup Top Scorer",
    ],

    officialMatches: 2,

    officialGoals: 3,

    current: true,
  },
] as const;