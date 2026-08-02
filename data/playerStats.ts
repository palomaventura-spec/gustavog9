export const playerStats = {
  official: {
    matches: 66,
    goals: 132,
    updatedAt: "2026-08-02",
  },

  penalties: {
    shootoutGoals: 2,
  },

  clubs: {
    botafogo: {
      total: {
        matches: 6,
        goals: 7,
      },

      football: {
        matches: 2,
        goals: 3,
      },

      futsal: {
        matches: 4,
        goals: 4,
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