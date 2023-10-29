import React from "react";
import Spacer from "./Spacer";
import { motion } from "framer-motion";

const Connector = ({
  round,
  totalRounds,
}: {
  round: number;
  totalRounds: number;
}) => {
  // to start animation from the first round
  const reverseRound = totalRounds - round;

  const rightLines = 2 ** (round - 1);
  const leftLines = 2 ** round;

  const rightElements = [];
  const leftElements = [];

  for (let i = 0; i < rightLines; i += 1) {
    if (i > 0) {
      rightElements.push(<Spacer key={`${round}-${i}-s`} height={2} />);
    }

    rightElements.push(
      <div key={`${round}-${i}-l`} className={`bracket-horizontal-line`} />
    );
  }

  for (let i = 0; i < leftLines; i += 1) {
    if (i % 2) {
      leftElements.push(<Spacer key={`${round}-${i}-s`} line height={2} />);
    } else if (i > 0) {
      leftElements.push(<Spacer key={`${round}-${i}-s`} height={2} />);
    }
    leftElements.push(
      <div key={`${i}-l`} className="bracket-horizontal-line" />
    );
  }

  return (
    <motion.div
      className="bracket-connectors"
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5 * reverseRound },
      }}
    >
      <div data-test="connector-left" className="bracket-connector">
        <Spacer key={`${round}-l-t`} />
        {leftElements}
        <Spacer key={`${round}-l-b`} />
      </div>
      <div data-test="connector-right" className="bracket-connector">
        <Spacer key={`${round}-r-t`} />
        {rightElements}
        <Spacer key={`${round}-r-b`} />
      </div>
    </motion.div>
  );
};

export default Connector;
