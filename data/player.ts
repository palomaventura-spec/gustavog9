export const playerData = {
  projectTitle: "GUSTAVO AGUIAR • G9",
  subtitle: "Player Profile 2026",

  sloganPT: "Grandes atletas são formados uma temporada de cada vez.",
  sloganEN: "Every great journey begins with a dream.",

  name: "Gustavo Aguiar",
  nickname: "G9",
  birthYear: 2018,

  nationalities: ["Brasileira", "Portuguesa"],

  currentClub: "Botafogo",

  footballPosition: "Atacante",
  futsalPosition: "Pivô",

  height: "1,34 m",
  weight: "28 kg",
  dominantFoot: "Direito",

  matches: 62,
  officialGoals: 128,
  penaltyGoals: 3,
  totalGoals: 130,

  goalsPerMatch: "2,05",
  topScorerAwards: 3,
  goalsOnVideo: 124,

  arouca: {
    period: "Fevereiro de 2025 — Julho de 2026",
    months: 17,
    matches: 59,
    goals: 120,
    goalsPerMatch: "2,03",
    topScorerAwards: 3,
    federationMatches: 12,
    federationGoals: 28,
  },

  botafogo: {
    period: "Julho de 2026 — Atual",
    matches: 3,
    officialGoals: 7,
    penaltyGoals: 2,
    sinnoCupGoals: 5,
    topScorerAwards: 1,
  },
} as const;

export interface FeaturedVideo {
  title: string;
  subtitle: string;

  headline: string;
  headlineEn: string;

  description: string;
  descriptionEn: string;

  thumbnail: string;
  video: string;

  duration: string;
  season: string;

  competition?: string;
  club?: string;
  goals?: number;
}

export interface MatchVideo {
  id: number;

  title: string;
  subtitle: string;

  thumbnail: string;
  video: string;

  club?: string;
  goals?: number;
  competition?: string;
  season?: string;
  category?: string;

  featured?: boolean;
  available?: boolean;
}

export const featuredVideo: FeaturedVideo = {
  title: "Highlights",

  subtitle: "Melhores momentos • 2025–2026",

  headline:
    "A seleção oficial dos melhores momentos de Gustavo Aguiar entre as temporadas de 2025 e 2026.",

  headlineEn:
    "The official selection of Gustavo Aguiar's best moments from the 2025 and 2026 seasons.",

  description:
    "Uma coleção das principais jogadas, gols e movimentações que representam sua evolução técnica, inteligência tática e capacidade ofensiva.",

  descriptionEn:
    "A collection of goals, movements and key plays showcasing his technical growth, tactical intelligence and attacking ability.",

  thumbnail: "/images/videos/highlights-cover.png",

  video: "/videos/highlights.mp4",

  duration: "Melhores momentos",

  season: "2025–2026",
};

export const keyMatches: MatchVideo[] = [
  {
    id: 1,

    title: "Campeonato da Federação",

    subtitle: "6 gols em uma partida",

    thumbnail: "/images/videos/seis-gols-cover.png",

    video: "/videos/seis-gols.mp4",

    club: "Arouca",

    competition: "Campeonato Carioca de Futsal",

    season: "2026",

    category: "Sub-8",

    goals: 6,

    featured: true,

    available: true,
  },

  {
    id: 2,

    title: "Campeonato da Federação",

    subtitle: "5 gols em uma partida",

    thumbnail: "/images/videos/cinco-gols-cover.png",

    video: "/videos/cinco-gols.mp4",

    club: "Arouca",

    competition: "Campeonato Carioca de Futsal",

    season: "2026",

    category: "Sub-8",

    goals: 5,

    available: true,
  },

  {
    id: 3,

    title: "Arouca x Botafogo",

    subtitle: "A partida que mudou tudo",

    thumbnail: "/images/videos/arouca-botafogo.jpg",

    video: "/videos/arouca-botafogo.mp4",

    club: "Arouca",

    competition: "Campeonato Carioca de Futsal",

    season: "2026",

    category: "Sub-8",

    available: false,
  },

  {
    id: 4,

    title: "Estreia pelo Botafogo",

    subtitle: "2 gols na estreia",

    thumbnail: "/images/videos/botafogo-debut.jpg",

    video: "/videos/botafogo-debut.mp4",

    club: "Botafogo",

    competition: "Futebol de Campo",

    season: "2026",

    category: "Sub-8",

    goals: 2,

    available: true,
  },

  {
    id: 5,

    title: "Segundo jogo pelo Botafogo",

    subtitle: "2 gols na partida",

    thumbnail: "/images/videos/botafogo-second-match.jpg",

    video: "/videos/botafogo-second-match.mp4",

    club: "Botafogo",

    competition: "Futebol de Campo",

    season: "2026",

    category: "Sub-8",

    goals: 2,

    available: true,
  },
];

export const availableKeyMatches = keyMatches.filter(
  (match) => match.available
);

export const upcomingKeyMatches = keyMatches.filter(
  (match) => !match.available
);