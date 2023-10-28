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
    className={`bracket-round-header
    ${round === totalRounds ? "bracket-last-round" : ""}`}
    initial={{ opacity: 0, y: 50 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 * round },
    }}
  >
    {getRoundHeaderText(round, totalRounds)}
  </motion.div>
);

export default RoundHeader;
