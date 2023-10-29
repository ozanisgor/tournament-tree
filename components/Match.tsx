import React, { useEffect } from "react";
import Player from "./Player";
import { Player as PlayerType } from "../models/types";
import { useChampion } from "@/store/champion";
import { motion } from "framer-motion";

export default function Match({
  players,
  id,
  score,
  lastRound,
}: {
  players: PlayerType[];
  id: number;
  score: number[][];
  lastRound: boolean;
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
    if (!lastRound && champion !== players[winnerIdx]) {
      setChampion(players[winnerIdx]);
    }
  }, [lastRound, winnerIdx]);

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
