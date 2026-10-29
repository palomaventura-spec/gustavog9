import { careerRecords } from "./career/records";
const aggregate = (records: typeof careerRecords) => ({
  matches: records.reduce((a, r) => a + r.matches, 0),
  goals: records.reduce((a, r) => a + r.officialGoals, 0),
});
const forClub = (club: string) => careerRecords.filter(r => r.club === club);
const botafogo = forClub("Botafogo");
const arouca = forClub("Arouca");
const sporting = forClub("Sporting Brazil");
export const playerStats = {
  official: { ...aggregate(careerRecords), updatedAt: "2026-10-29" },
  penalties: { shootoutGoals: careerRecords.reduce((a,r) => a + r.penaltyShootoutGoals, 0) },
  clubs: {
    arouca: { total: aggregate(arouca), futsal: aggregate(arouca) },
    botafogo: {
      total: aggregate(botafogo),
      // Somente competições com modalidade explicitamente identificada.
      football: aggregate(botafogo.filter(r => r.competition === "Edilson Silva (campo)")),
      futsal: aggregate(botafogo.filter(r => r.competition.includes("Futsal"))),
    },
    sportingBrazil: { total: aggregate(sporting), classification: "Escolinha / futebol de formação" },
  },
};
export const getAverage = (matches: number, goals: number): number =>
  matches === 0 ? 0 : Number((goals / matches).toFixed(2));
