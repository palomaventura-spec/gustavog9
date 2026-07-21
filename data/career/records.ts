export type CareerRecord = {
  id: string;
  season: number;
  period?: string;
  club: string;
  competition: string;
  matches: number;
  officialGoals: number;
  penaltyShootoutGoals: number;
  topScorer: boolean;
  goalsOnVideo?: number;
  notes?: string;
};

export const careerRecords: CareerRecord[] = [
  // 2025 — Arouca
  {
    id: "2025-arouca-copa-ibeu",
    season: 2025,
    period: "1º semestre",
    club: "Arouca",
    competition: "Copa IBEU",
    matches: 4,
    officialGoals: 7,
    penaltyShootoutGoals: 0,
    topScorer: true,
  },
  {
    id: "2025-arouca-novos-talentos",
    season: 2025,
    period: "1º semestre",
    club: "Arouca",
    competition: "Novos Talentos",
    matches: 6,
    officialGoals: 23,
    penaltyShootoutGoals: 0,
    topScorer: false,
  },
  {
    id: "2025-arouca-toca-e-sai",
    season: 2025,
    period: "1º semestre",
    club: "Arouca",
    competition: "Toca e Sai",
    matches: 1,
    officialGoals: 2,
    penaltyShootoutGoals: 0,
    topScorer: false,
  },
  {
    id: "2025-arouca-riofutsal-livre",
    season: 2025,
    period: "1º semestre",
    club: "Arouca",
    competition: "RioFutsal Livre",
    matches: 1,
    officialGoals: 2,
    penaltyShootoutGoals: 0,
    topScorer: false,
  },

  // 2025 — Sporting Brazil
  {
    id: "2025-sporting-brazil-abm-futsal",
    season: 2025,
    period: "1º semestre",
    club: "Sporting Brazil",
    competition: "ABM Futsal",
    matches: 4,
    officialGoals: 5,
    penaltyShootoutGoals: 0,
    topScorer: false,
  },
  {
    id: "2025-sporting-brazil-abm-society",
    season: 2025,
    period: "1º semestre",
    club: "Sporting Brazil",
    competition: "ABM Society",
    matches: 4,
    officialGoals: 11,
    penaltyShootoutGoals: 0,
    topScorer: true,
  },
  {
    id: "2025-sporting-brazil-carioquinha",
    season: 2025,
    period: "1º semestre",
    club: "Sporting Brazil",
    competition: "Carioquinha",
    matches: 2,
    officialGoals: 1,
    penaltyShootoutGoals: 0,
    topScorer: false,
  },

  /*
   * O restante de 2025 ainda precisa ser revisado.
   * O total confirmado da temporada é:
   * 27 jogos e 56 gols oficiais.
   *
   * Por isso, usamos um registro de ajuste temporário.
   */
  {
    id: "2025-ajuste-segundo-semestre",
    season: 2025,
    period: "2º semestre",
    club: "Arouca",
    competition: "Competições diversas",
    matches: 5,
    officialGoals: 5,
    penaltyShootoutGoals: 0,
    topScorer: false,
    notes: "Registro temporário até revisão jogo por jogo.",
  },

  // 2026 — Arouca
  {
    id: "2026-arouca-copa-verao-federacao",
    season: 2026,
    club: "Arouca",
    competition: "Copa Verão Federação",
    matches: 6,
    officialGoals: 11,
    penaltyShootoutGoals: 0,
    topScorer: false,
  },
  {
    id: "2026-arouca-federacao-primeiro-semestre",
    season: 2026,
    period: "1º semestre",
    club: "Arouca",
    competition: "Campeonato da Federação",
    matches: 12,
    officialGoals: 28,
    penaltyShootoutGoals: 0,
    topScorer: true,
  },

  /*
   * Outros campeonatos do Arouca em 2026.
   * Total confirmado pelo Arouca na temporada:
   * 32 jogos e 63 gols oficiais.
   *
   * Copa Verão + Federação:
   * 18 jogos e 39 gols.
   *
   * Restante:
   * 14 jogos e 24 gols.
   */
  {
    id: "2026-arouca-outras-competicoes",
    season: 2026,
    club: "Arouca",
    competition:
      "Toca e Sai, RioFutsal, Copa Zico e Copa Dente de Leite",
    matches: 14,
    officialGoals: 24,
    penaltyShootoutGoals: 1,
    topScorer: false,
    notes: "Será detalhado posteriormente por competição e partida.",
  },

  // 2026 — Botafogo, campo
  {
    id: "2026-botafogo-campo",
    season: 2026,
    club: "Botafogo",
    competition: "Futebol de campo",
    matches: 2,
    officialGoals: 3,
    penaltyShootoutGoals: 1,
    topScorer: false,
  },

  // 2026 — Sinno Cup
  {
    id: "2026-botafogo-sinno-cup",
    season: 2026,
    club: "Equipe do Botafogo",
    competition: "Sinno Cup",
    matches: 0,
    officialGoals: 5,
    penaltyShootoutGoals: 1,
    topScorer: true,
    goalsOnVideo: 1,
    notes:
      "Equipe, comissão e treinadores do Botafogo, com uniforme diferente do oficial.",
  },
];