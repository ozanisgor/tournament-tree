export type Match = {
  id: number;
  round: number;
  match: number;
  players: Player[];
  score: number[][];
};

export type Player = {
  id: number;
  name: string;
  seed: number;
};

export interface Round {
  round: number;
  matches: Match[];
}
