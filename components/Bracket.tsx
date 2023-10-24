import { convertMatchesToRounds } from "../utils/convertMatchesToRounds";
import RoundHeader from "./RoundHeader";
import Round from "./Round";
import Connector from "./Connector";
import { matches } from "@/data/matches";

export default function Bracket() {
  const rounds = convertMatchesToRounds(matches);

  return (
    <div className="overflow-auto max-w-6xl relative">
      <div className="flex flex-col gap-5">
        <div className="flex text-white absolute">
          {rounds.map((round) => (
            <RoundHeader
              key={`${round}-header-${round.round}}`}
              round={round.round}
              totalRounds={rounds.length}
            />
          ))}
        </div>
        <div className="flex mt-10">
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
          <div className="flex items-center ml-5">
            <h3 className="text-white">Champion</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
