import { getAverage, playerStats } from "./playerStats";

const formatAverage = (matches: number, goals: number): string =>
  getAverage(matches, goals).toFixed(2).replace(".", ",");

export const careerData = [
  {
    id: "arouca",

    club: "Arouca",

    period: "Fevereiro de 2025 — Julho de 2026",
    periodEn: "February 2025 — July 2026",

    chapter: "O início da trajetória",
    chapterEn: "Where the journey began",

    image: "/images/career/arouca-career.png",

    description:
      "O Arouca foi o clube onde Gustavo iniciou sua formação competitiva no futsal. Em apenas 17 meses, consolidou-se como finalizador, atleta federado e presença constante nas competições.",

    descriptionEn:
      "Arouca was the club where Gustavo began his competitive futsal development. In only 17 months, he established himself as a consistent goalscorer and registered player.",

    highlight: `${playerStats.clubs.arouca.total.goals} gols oficiais em 17 meses`,

    highlightEn: `${playerStats.clubs.arouca.total.goals} official goals in 17 months`,

    stats: [
      {
        value: String(playerStats.clubs.arouca.total.goals),
        label: "Gols oficiais",
        labelEn: "Official goals",
      },
      {
        value: String(playerStats.clubs.arouca.total.matches),
        label: "Jogos oficiais",
        labelEn: "Official matches",
      },
      {
        value: formatAverage(
          playerStats.clubs.arouca.total.matches,
          playerStats.clubs.arouca.total.goals
        ),
        label: "Gols por jogo",
        labelEn: "Goals per match",
      },
      {
        value: "3",
        label: "Artilharias",
        labelEn: "Top scorer awards",
      },
      {
        value: "28",
        label: "Gols na Federação",
        labelEn: "Federation goals",
      },
    ],

    milestones: [
      "Início no futsal em fevereiro de 2025",
      "Primeiros campeonatos em março de 2025",
      "Atleta federado a partir de agosto de 2025",
      "28 gols em 12 jogos no Campeonato Carioca da Federação",
      `${playerStats.clubs.arouca.total.goals} gols oficiais durante a passagem pelo clube`,
    ],

    milestonesEn: [
      "Started futsal in February 2025",
      "First tournaments in March 2025",
      "Registered player from August 2025",
      "28 goals in 12 Federation Championship matches",
      `${playerStats.clubs.arouca.total.goals} official goals during his time with the club`,
    ],
  },

  {
    id: "botafogo",

    club: "Botafogo",

    period: "Julho de 2026 — Atual",
    periodEn: "July 2026 — Present",

    chapter: "Um novo capítulo",
    chapterEn: "A new chapter",

    image: "/images/career/botafogo-career.png",

    description:
      "Após o destaque pelo Arouca, Gustavo iniciou uma nova etapa no Botafogo, passando a desenvolver-se também no futebol de campo e mantendo sua atuação no futsal.",

    descriptionEn:
      "Following his development with Arouca, Gustavo began a new chapter with Botafogo, expanding his experience into football while continuing his futsal development.",

    highlight: `${playerStats.clubs.botafogo.total.goals} gols em ${playerStats.clubs.botafogo.total.matches} jogos pelo Botafogo`,

    highlightEn: `${playerStats.clubs.botafogo.total.goals} goals in ${playerStats.clubs.botafogo.total.matches} matches for Botafogo`,

    stats: [
      {
        value: String(playerStats.clubs.botafogo.total.matches),
        label: "Jogos oficiais",
        labelEn: "Official matches",
      },
      {
        value: String(playerStats.clubs.botafogo.total.goals),
        label: "Gols oficiais",
        labelEn: "Official goals",
      },
      {
        value: `${playerStats.clubs.botafogo.football.matches}J • ${playerStats.clubs.botafogo.football.goals}G`,
        label: "Futebol de campo",
        labelEn: "Football",
      },
      {
        value: `${playerStats.clubs.botafogo.futsal.matches}J • ${playerStats.clubs.botafogo.futsal.goals}G`,
        label: "Futsal",
        labelEn: "Futsal",
      },
      {
        value: "5",
        label: "Gols na Sinno Cup",
        labelEn: "Sinno Cup goals",
      },
      {
        value: "1",
        label: "Artilharia",
        labelEn: "Top scorer award",
      },
    ],

    milestones: [
      "Início da trajetória no futebol de campo",
      "3 gols nos 2 primeiros jogos de futebol de campo",
      "4 gols em 4 jogos oficiais de futsal",
      "Participação na Supercopa das Américas pelo Botafogo Futsal",
      "Artilheiro da Sinno Cup com 5 gols",
      "Continuidade da formação esportiva no campo e no futsal",
    ],

    milestonesEn: [
      "Started his football journey",
      "3 goals in his first 2 football matches",
      "4 goals in 4 official futsal matches",
      "Represented Botafogo Futsal at the Supercopa das Américas",
      "Sinno Cup Top Scorer with 5 goals",
      "Continued development in both football and futsal",
    ],
  },
] as const;