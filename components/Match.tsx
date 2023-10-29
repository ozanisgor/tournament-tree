import React, { useEffect } from "react";
import Player from "./Player";
import { Player as PlayerType } from "../models/types";
import { useChampion } from "@/store/champion";
import { motion } from "framer-motion";

export default function Match({
  players,
  id,
  score,
  firstRound,
}: {
  players: PlayerType[];
  id: number;
  score: number[][];
  firstRound?: boolean;
}) {
  const { champion, setChampion } = useChampion();

  let wins = [0, 0];

  for (let i = 0; i < score.length; i++) {
    if (score[i][0] > score[i][1]) {
      wins[0]++;
    } else {
      wins[1]++;
    }
  }

  const winnerIdx = wins[0] > wins[1] ? 0 : 1;

  useEffect(() => {
    if (firstRound && champion !== players[winnerIdx]) {
      setChampion(players[winnerIdx]);
    }
  }, [firstRound, winnerIdx]);

  return (
    <motion.div
      className={`bracket-match`}
      initial={{ opacity: 0, y: 30, x: -30 }}
      animate={{ opacity: 1, y: 0, x: 0, transition: { delay: 0.1 * id } }}
    >
      <div className="bracket-match-id">{id}</div>
      <div className={`bracket-players`}>
        {players.map(({ name, seed, ...player }, index) => (
          <Player
            key={player.id}
            id={player.id}
            name={name}
            seed={seed}
            score={score.map((s) => s[index])}
            winner={index === winnerIdx}
            wins={wins[index]}
          />
        ))}
      </div>
    </motion.div>
  );
}
