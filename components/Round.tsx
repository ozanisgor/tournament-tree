import React from "react";
import Match from "./Match";
import Spacer from "./Spacer";
import { Match as MatchType } from "@/models/types";
import { motion } from "framer-motion";

export default function Round({
  lastRound,
  firstRound,
  matches,
  round,
  totalRounds,
}: {
  lastRound: boolean;
  firstRound: boolean;
  matches: MatchType[];
  round: number;
  totalRounds: number;
}) {
  const matchElements: JSX.Element[] = [];
  const consolation: JSX.Element[] = [];

  if (!firstRound && !lastRound) {
    matchElements.push(<Spacer key={`${round}-fs`} />);
  }

  if (firstRound) {
    // Only render the second match in the final round
    const firstMatch = matches[1];
    matchElements.push(
      <Match
        key={firstMatch.id}
        score={firstMatch.score}
        id={firstMatch.id}
        players={firstMatch.players}
        firstRound={firstRound}
      />
    );
    consolation.push(
      <Match
        key={matches[0].id}
        score={matches[0].score}
        id={matches[0].id}
        players={matches[0].players}
      />
    );
  } else {
    // Render all matches for non-final rounds
    matches.forEach((match, index) => {
      if (!firstRound && !lastRound && index > 0) {
        matchElements.push(<Spacer key={`${match.id}-s`} height={2} />);
      }
      matchElements.push(
        <Match
          key={match.id}
          score={match.score}
          id={match.id}
          players={match.players}
        />
      );
    });
  }

  if (!firstRound && !lastRound) {
    matchElements.push(<Spacer key={`${round}-ls`} />);
  }

  return (
    <>
      {!firstRound ? (
        <div className={`bracket-round`}>{matchElements}</div>
      ) : (
        <div className={`bracket-round relative`}>
          {matchElements}
          <div className={`bottom-20 absolute`}>
            <motion.div
              className={`bracket-round-header bracket-last-round text-white text-center`}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.5 * round },
              }}
            >
              Consolation Round
            </motion.div>
            {consolation}
          </div>
        </div>
      )}
    </>
  );
}
