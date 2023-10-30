import React from "react";
import { motion } from "framer-motion";

const getRoundHeaderText = (round: number, totalRounds: number) => {
  if (round === totalRounds) {
    return "Final";
  }
  if (round === totalRounds - 1) {
    return "Semi-finals";
  }
  if (round === totalRounds - 2) {
    return "Quarter-finals";
  }
  return `Round ${round}`;
};
const RoundHeader = ({
  round,
  totalRounds,
}: {
  round: number;
  totalRounds: number;
}) => (
  <motion.div
    className={`bracket-round-header flex flex-col
    ${round === totalRounds ? "bracket-last-round" : ""}`}
    initial={{ opacity: 0, y: 50 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 * round },
    }}
  >
    {getRoundHeaderText(round, totalRounds)}
    <span className="text-xs font-normal">(Best of 3)</span>
  </motion.div>
);

export default RoundHeader;
