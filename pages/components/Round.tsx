import React from "react";
import Match from "./Match";
import Spacer from "./Spacer";
import { Match as MatchType } from "@/pages/models/types";

const Round = ({
  lastRound,
  firstRound,
  matches,
  round,
}: {
  lastRound: boolean;
  firstRound: boolean;
  matches: MatchType[];
  round: number;
}) => {
  const matchElements: JSX.Element[] = [];
  if (!firstRound && !lastRound) {
    matchElements.push(<Spacer key={`${round}-fs`} />);
  }
  matches.map((match, index) => {
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
    return matchElements;
  });
  if (!firstRound && !lastRound) {
    matchElements.push(<Spacer key={`${round}-ls`} />);
  }
  return <div className="bracket-round">{matchElements}</div>;
};

export default Round;
