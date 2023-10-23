import React, { useContext } from "react";
import HighlightContext from "../context/HighlightContext";

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
  score: number;
  winner: boolean;
}) => {
  const { highlightedPlayer, setHighlightedPlayer } =
    useContext(HighlightContext);
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
      <div title="Score" className="bracket-player-score">
        {score}
      </div>
    </div>
  );
};

export default Player;
