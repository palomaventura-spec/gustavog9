import { playerStats, getAverage } from "./playerStats";
export const careerStatistics = [
  { value: playerStats.official.matches, label: "Jogos registrados", labelEn: "Recorded Matches" },
  { value: playerStats.official.goals, label: "Gols em partidas", labelEn: "Match Goals" },
  { value: getAverage(playerStats.official.matches,playerStats.official.goals).toFixed(2).replace(".", ","),
    label: "Média provisória", labelEn: "Provisional Goals per Match" },
];
export const penaltyStatistics = {
  penaltyShootoutGoals: playerStats.penalties.shootoutGoals,
  totalGoalsIncludingShootouts: playerStats.official.goals + playerStats.penalties.shootoutGoals,
};
