import { playerStats, getAverage } from "./playerStats";

export const careerStatistics = [
  {
    value: playerStats.official.matches,
    label: "Jogos oficiais",
    labelEn: "Official Matches",
  },
  {
    value: playerStats.official.goals,
    label: "Gols oficiais",
    labelEn: "Official Goals",
  },
  {
    value: getAverage(
      playerStats.official.matches,
      playerStats.official.goals
    )
      .toFixed(2)
      .replace(".", ","),

    label: "Média de gols",
    labelEn: "Goals per Match",
  },
  {
    value: 3,
    label: "Artilharias",
    labelEn: "Top Scorer Awards",
  },
] as const;

export const penaltyStatistics = {
  penaltyShootoutGoals: 2,
  totalGoalsIncludingShootouts:
    playerStats.official.goals + 2,
};