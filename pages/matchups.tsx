import LandingLayout from "@/components/LandingLayout";
import { ReactElement } from "react";
import { convertMatchesToRounds } from "@/utils/convertMatchesToRounds";
import { getLocalData } from "@/utils/localdata";
import { Match as MatchType } from "@/models/types";

export default function Matchups({ matches }: { matches: MatchType[] }) {
  const rounds = convertMatchesToRounds(matches);

  const getRoundHeaderText = (round: number, totalRounds: number) => {
    if (round === totalRounds) {
      return "Finals";
    }
    if (round === totalRounds - 1) {
      return "Semi-finals";
    }
    if (round === totalRounds - 2) {
      return "Quarter-finals";
    }
    return `Round ${round}`;
  };

  // three match format calculate winner
  const winnerHandler = (score: number[][]) => {
    let wins = [0, 0];
    for (let i = 0; i < score.length; i++) {
      if (score[i][0] > score[i][1]) {
        wins[0]++;
      } else {
        wins[1]++;
      }
    }
    return wins;
  };

  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 gap-3 py-10 px-1">
      {rounds.map((round) => (
        <div key={round.round} className="grid grid-cols-1 gap-4 py-5">
          <div className="pl-3">
            {getRoundHeaderText(round.round, rounds.length)}
          </div>
          {round.matches.map((match) => (
            <div
              key={`${match.players[0].name}-${match.players[1].name}`}
              className="w-full h-28 rounded-xl px-0 md:px-4 py-5 bg-[#19222d]"
            >
              <div className="grid auto-rows-[70px] grid-cols-[90px,1fr,120px] items-center text-center gap-2 md:gap-3">
                <div className="text-xs md:text-lg ">
                  {round.round === rounds.length
                    ? round.matches[0].match === match.match
                      ? "3rd Place"
                      : "Final"
                    : `Matchup ${match.match}`}
                </div>
                <div className="grid auto-cols-[70px] grid-cols-[1fr,auto,1fr] items-center gap-2 md:gap-3">
                  <div className="text-center sm:text-right text-sm md:text-2xl">
                    {match.players[0].name}
                  </div>
                  <div className="min-w-[90px] grid grid-cols-3 items-center">
                    <div
                      className={`border rounded-md border-[#0f1519] text-xs md:text-base p-0 md:p-1 ${
                        winnerHandler(match.score)[0] >
                        winnerHandler(match.score)[1]
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {winnerHandler(match.score)[0] >
                      winnerHandler(match.score)[1]
                        ? "W"
                        : "L"}
                    </div>
                    <div>-</div>
                    <div
                      className={`border rounded-md border-[#0f1519] text-xs md:text-base p-0 md:p-1 ${
                        winnerHandler(match.score)[0] >
                        winnerHandler(match.score)[1]
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {winnerHandler(match.score)[0] <
                      winnerHandler(match.score)[1]
                        ? "W"
                        : "L"}
                    </div>
                  </div>
                  <div className="text-center sm:text-left text-sm md:text-2xl">
                    {match.players[1].name}
                  </div>
                </div>

                <div className="text-center items-center hidden md:block">
                  <ul className="text-center grid grid-rows-3 gap-1">
                    {match?.score.map((s, idx) => (
                      <li key={idx} className="grid grid-cols-2 items-center">
                        <div className="col-start-1 text-xs">
                          Game {idx + 1}
                        </div>
                        <div className="col-start-2 grid grid-cols-3 items-center">
                          <div
                            className={`border rounded-md border-[#0f1519] px-1 text-xs ${
                              s[0] < s[1] ? "text-red-500" : "text-green-500"
                            }`}
                          >
                            {s[0]}
                          </div>
                          <div className="text-xs">-</div>
                          <div
                            className={`border rounded-md border-[#0f1519] px-1 text-xs ${
                              s[1] < s[0] ? "text-red-500" : "text-green-500"
                            }`}
                          >
                            {s[1]}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const matches = await getLocalData();

  return {
    props: { matches },
  };
}

Matchups.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};
