interface Round {
  round: number;
  matches: Match[];
}

type Match = {
  id: number;
  round: number;
  match: number;
  players: Player[];
  score: number[];
};

export type Player = {
  id: number;
  name: string;
  seed: number;
};

export const convertMatchesToRounds = function (matches: Match[]): Round[] {
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
};
