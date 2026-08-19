export const playerStats = {
  official: {
    matches: 68,
    goals: 133,
    updatedAt: "2026-08-19",
  },

  penalties: {
    shootoutGoals: 2,
  },

  clubs: {
    botafogo: {
      total: {
        matches: 8,
        goals: 8,
      },

      football: {
        matches: 3,
        goals: 3,
      },

      futsal: {
        matches: 5,
        goals: 5,
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