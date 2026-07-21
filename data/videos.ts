export interface FeaturedVideo {
  title: string;
  subtitle: string;

  headline: string;
  headlineEn: string;

  description: string;
  descriptionEn: string;

  thumbnail: string;
  youtubeId: string;

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
  youtubeId: string;

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
  youtubeId: "",

  duration: "Melhores momentos",
  season: "2025–2026",
};

export const keyMatches: MatchVideo[] = [
  {
    id: 1,
    title: "Campeonato da Federação",
    subtitle: "6 gols em uma partida",
    thumbnail: "/images/videos/seis-gols-cover.png",
    youtubeId: "UXed2s1pOgk",
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
    youtubeId: "b8PhpMC0ma8",
    club: "Arouca",
    competition: "Campeonato Carioca de Futsal",
    season: "2026",
    category: "Sub-8",
    goals: 5,
    available: true,
  },
  {
    id: 3,
    title: "Estreia pelo Botafogo",
    subtitle: "2 gols na estreia",
    thumbnail: "/images/videos/estreia-botafogo.png",
    youtubeId: "kDZu3B9m6Yo",
    club: "Botafogo",
    competition: "Futebol de Campo",
    season: "2026",
    category: "Sub-8",
    goals: 2,
    available: true,
  },
  {
    id: 4,
    title: "Segundo jogo pelo Botafogo",
    subtitle: "2 gols na partida",
    thumbnail: "/images/videos/botafogo-second-match.png",
    youtubeId: "ULRKMnTMh7U",
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