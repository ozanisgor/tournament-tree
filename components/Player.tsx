import React from "react";
import { useHighlightStore } from "@/store/highlightStore";
import { useChampion } from "@/store/champion";
import { Trophy } from "lucide-react";

const Player = ({
  id,
  name,
  seed,
  score,
  winner,
  wins,
}: {
  id: number;
  name: string;
  seed: number;
  score: number[];
  winner: boolean;
  wins: number;
}) => {
  const { highlightedPlayer, setHighlightedPlayer } = useHighlightStore();
  const { champion } = useChampion();

  return (
    <div
      onMouseEnter={() => {
        setHighlightedPlayer(id);
      }}
      onMouseLeave={() => setHighlightedPlayer(null)}
      title={`${name} ${winner ? "(W)" : "(L)"}`}
      className={`bracket-player
        ${winner ? "bracket-winner" : ""}
        ${highlightedPlayer === id ? "bracket-highlighted" : ""}`}
    >
      {/* <div title="Seed" className="bracket-player-seed">
        {seed}
      </div> */}
      <div className="bracket-player-name px-3">{name}</div>
      {champion && champion.id === id && (
        <Trophy color="#c9a01d" width={17} height={17} />
      )}

      {/* Scores of 3 matches */}
      {/* {score.map((s, idx) => (
        <div key={`${s}-${idx}`} title="Score" className="bracket-player-score">
          {s}
        </div>
      ))} */}

      <div className="bracket-player-score">{wins}</div>
    </div>
  );
};

export default Player;
