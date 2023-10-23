import convertMatchesToRounds from "../utils/convertMatchesToRounds";
import RoundHeader from "../components/RoundHeader";
import { matches } from "@/pages/data/matches";
import Round from "./Round";
import Connector from "./Connector";
import { useState } from "react";
import HighlightContext from "../context/HighlightContext";

export default function Bracket() {
  const [highlightedPlayer, setHighlightedPlayer] = useState<number | null>(
    null
  );
  const highlightContextValue = { highlightedPlayer, setHighlightedPlayer };

  const rounds = convertMatchesToRounds(matches);

  return (
    <div className="bracket">
      <div className="bracket-round-headers">
        {rounds.map((round) => (
          <RoundHeader
            key={`${round}-header-${round.round}}`}
            round={round.round}
            totalRounds={rounds.length}
          />
        ))}
      </div>
      <HighlightContext.Provider value={highlightContextValue}>
        <div className="bracket-rounds">
          {rounds.map((round, index) => {
            const roundNumber = rounds.length - index;
            return [
              index > 0 && (
                <Connector
                  key={`${roundNumber}-c-${index}`}
                  round={roundNumber}
                />
              ),
              <Round
                key={`${roundNumber}-r-${index}`}
                firstRound={index === rounds.length - 1}
                lastRound={index === 0}
                matches={round.matches}
                round={round.round}
              />,
            ];
          })}
        </div>
      </HighlightContext.Provider>
    </div>
  );
}
