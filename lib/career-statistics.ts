import {
  careerRecords,
  type CareerRecord,
} from "@/data/career/records";

function sumBy(
  records: CareerRecord[],
  field: "matches" | "officialGoals" | "penaltyShootoutGoals"
) {
  return records.reduce((total, record) => total + record[field], 0);
}

export const careerStatistics = {
  officialMatches: sumBy(careerRecords, "matches"),

  officialGoals: sumBy(careerRecords, "officialGoals"),

  penaltyShootoutGoals: sumBy(
    careerRecords,
    "penaltyShootoutGoals"
  ),

  get totalGoalsIncludingShootouts() {
    return this.officialGoals + this.penaltyShootoutGoals;
  },

  topScorerAwards: careerRecords.filter(
    (record) => record.topScorer
  ).length,
};

export function getSeasonStatistics(season: number) {
  const records = careerRecords.filter(
    (record) => record.season === season
  );

  return {
    season,
    matches: sumBy(records, "matches"),
    officialGoals: sumBy(records, "officialGoals"),
    penaltyShootoutGoals: sumBy(
      records,
      "penaltyShootoutGoals"
    ),
  };
}

export function getClubStatistics(club: string) {
  const records = careerRecords.filter(
    (record) => record.club === club
  );

  return {
    club,
    matches: sumBy(records, "matches"),
    officialGoals: sumBy(records, "officialGoals"),
    penaltyShootoutGoals: sumBy(
      records,
      "penaltyShootoutGoals"
    ),
  };
}

export function getCompetitionStatistics(
  competition: string
) {
  const records = careerRecords.filter(
    (record) => record.competition === competition
  );

  return {
    competition,
    matches: sumBy(records, "matches"),
    officialGoals: sumBy(records, "officialGoals"),
    penaltyShootoutGoals: sumBy(
      records,
      "penaltyShootoutGoals"
    ),
  };
}