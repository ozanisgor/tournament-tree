import React from "react";
import { useHighlightStore } from "@/store/highlightStore";

const Player = ({
  id,
  name,
  seed,
  score,
  winner,
}: {
  id: number;
  name: string;
  seed: number;
  score: number[];
  winner: boolean;
}) => {
  const { highlightedPlayer, setHighlightedPlayer } = useHighlightStore();

  return (
    <div
      onMouseEnter={() => setHighlightedPlayer(id)}
      onMouseLeave={() => setHighlightedPlayer(null)}
      title={`${name} ${winner ? "(W)" : "(L)"}`}
      className={`bracket-player
        ${winner ? "bracket-winner" : ""}
        ${highlightedPlayer === id ? "bracket-highlighted" : ""}`}
    >
      <div title="Seed" className="bracket-player-seed">
        {seed}
      </div>
      <div className="bracket-player-name">{name}</div>
      {score.map((s, idx) => (
        <div key={`${s}-${idx}`} title="Score" className="bracket-player-score">
          {s}
        </div>
      ))}
    </div>
  );
};

export default Player;
