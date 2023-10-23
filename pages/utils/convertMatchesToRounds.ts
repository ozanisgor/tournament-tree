interface Round {
  round: number;
  matches: Match[];
}

import { Match } from "../models/types";

export default function convertMatchesToRounds(matches: Match[]): Round[] {
  const roundsObject: Record<number, Round> = {};
  matches.forEach((match) => {
    const { round } = match;
    if (!roundsObject[round]) {
      roundsObject[round] = { round, matches: [] };
    }
    roundsObject[round].matches.push(match);
  });
  const rounds = Object.values(roundsObject).sort((a, b) => a.round - b.round);
  return rounds;
}
