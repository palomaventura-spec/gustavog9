export const playerStats = {
  official: {
    matches: 69,
    goals: 135,
    updatedAt: "2026-08-23",
  },

  penalties: {
    shootoutGoals: 2,
  },

  clubs: {
    botafogo: {
      total: {
        matches: 9,
        goals: 10,
      },

      football: {
        matches: 3,
        goals: 3,
      },

      futsal: {
        matches: 6,
        goals: 7,
      },
    },

    arouca: {
      total: {
        matches: 60,
        goals: 125,
      },

      futsal: {
        matches: 60,
        goals: 125,
      },
    },
  },
};

export const getAverage = (
  matches: number,
  goals: number
): number => {
  if (matches === 0) return 0;

  return Number((goals / matches).toFixed(2));
};