import { careerRecords } from "./career/records";
export const seasons = [2025, 2026].map((season) => {
  const records = careerRecords.filter(r => r.season === season);
  return {
    season: String(season),
    clubs: season === 2025 ? "Arouca e Sporting Brasil (escolinha)" : "Arouca e Botafogo",
    matches: records.reduce((sum,r) => sum + r.matches, 0),
    goals: records.reduce((sum,r) => sum + r.officialGoals, 0),
  };
});
