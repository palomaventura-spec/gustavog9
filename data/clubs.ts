import { playerStats } from "./playerStats";

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
      "Artilheiro do Campeonato Carioca da Federação em 2026",
      "28 gols em 12 jogos pela Federação",
    ],

    highlightsEn: [
      "Started futsal in February 2025",
      "Registered player since August 2025",
      "Federation Championship Top Scorer in 2026",
      "28 goals in 12 Federation matches",
    ],

    officialMatches: playerStats.clubs.arouca.total.matches,

    officialGoals: playerStats.clubs.arouca.total.goals,

    modalityStats: [
      {
        modality: "Futsal",
        modalityEn: "Futsal",
        matches: playerStats.clubs.arouca.futsal.matches,
        goals: playerStats.clubs.arouca.futsal.goals,
      },
    ],

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
      "3 gols nos 2 primeiros jogos de futebol de campo",
      "4 gols em 4 jogos oficiais de futsal",
      "Artilheiro da Sinno Cup com 5 gols",
    ],

    highlightsEn: [
      "Joined both football and futsal teams",
      "3 goals in his first 2 football matches",
      "4 goals in 4 official futsal matches",
      "Sinno Cup Top Scorer with 5 goals",
    ],

    officialMatches: playerStats.clubs.botafogo.total.matches,

    officialGoals: playerStats.clubs.botafogo.total.goals,

    modalityStats: [
      {
        modality: "Campo",
        modalityEn: "Football",
        matches: playerStats.clubs.botafogo.football.matches,
        goals: playerStats.clubs.botafogo.football.goals,
      },
      {
        modality: "Futsal",
        modalityEn: "Futsal",
        matches: playerStats.clubs.botafogo.futsal.matches,
        goals: playerStats.clubs.botafogo.futsal.goals,
      },
    ],

    current: true,
  },
] as const;