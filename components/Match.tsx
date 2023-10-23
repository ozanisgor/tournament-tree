import React from "react";
import Player from "./Player";

type PlayerType = {
  id: number;
  name: string;
  seed: number;
};

export default function Match({
  players,
  id,
  score,
}: {
  players: PlayerType[];
  id: number;
  score: number[];
}) {
  const winnerIdx = score[0] > score[1] ? 0 : 1;
  return (
    <div className="bracket-match">
      <div className="bracket-match-id">{id}</div>
      <div className="bracket-players">
        {players.map(({ name, seed, ...player }, index) => (
          <Player
            key={player.id}
            id={player.id}
            name={name}
            seed={seed}
            score={score[index]}
            winner={index === winnerIdx}
          />
        ))}
      </div>
    </div>
  );
}
