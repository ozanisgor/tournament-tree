import { convertMatchesToRounds } from "../utils/convertMatchesToRounds";
import RoundHeader from "./RoundHeader";
import Round from "./Round";
import Connector from "./Connector";
import Champion from "./Champion";
import { Match as MatchType } from "../models/types";

export default function Bracket({ matches }: { matches: MatchType[] }) {
  const rounds = convertMatchesToRounds(matches);

  return (
    <div className="relative">
      <div className="flex flex-col gap-5">
        <div className="flex text-white absolute mx-10 text-center">
          {rounds.map((round) => (
            <RoundHeader
              key={`${round}-header-${round.round}}`}
              round={round.round}
              totalRounds={rounds.length}
            />
          ))}
        </div>
        <div className="flex justify-center px-1 md:px-5 my-20 py-10 border-t border-gray-700">
          {rounds.map((round, index) => {
            const roundNumber = rounds.length - index;

            return [
              index > 0 && (
                <Connector
                  key={`${roundNumber}-c-${index}`}
                  round={roundNumber}
                  totalRounds={rounds.length}
                />
              ),
              <Round
                key={`${roundNumber}-r-${index}`}
                firstRound={index === rounds.length - 1}
                lastRound={index === 0}
                matches={round.matches}
                round={round.round}
                totalRounds={rounds.length}
              />,
            ];
          })}
          <Champion />
        </div>
      </div>
    </div>
  );
}
