import { convertMatchesToRounds } from "../utils/convertMatchesToRounds";
import RoundHeader from "./RoundHeader";
import Round from "./Round";
import Connector from "./Connector";
import { matches } from "@/data/matches";
import Image from "next/image";
import cup from "@/public/images/cup.png";
import { useChampion } from "@/store/champion";

export default function Bracket() {
  const rounds = convertMatchesToRounds(matches);
  const { champion } = useChampion();

  return (
    <div className="overflow-auto max-w-7xl relative">
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
          <div className="flex flex-col items-center justify-center ml-10 gap-3">
            <h3 className="text-white">Champion</h3>
            <Image src={cup} alt="cup" width={150} height={150} className="" />
            <p className="text-white">{champion?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
