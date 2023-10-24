import React from "react";

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
  <div
    className={`bracket-round-header
    ${round === totalRounds ? "bracket-last-round" : ""}`}
  >
    {getRoundHeaderText(round, totalRounds)}
  </div>
);

export default RoundHeader;
