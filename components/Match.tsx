import React, { useEffect, useState, Fragment } from "react";
import Player from "./Player";
import { Player as PlayerType, Match } from "../models/types";
import { useChampion } from "@/store/champion";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";

export default function Match({
  players,
  id,
  score,
  firstRound,
  match,
}: {
  players: PlayerType[];
  id: number;
  score: number[][];
  firstRound?: boolean;
  match?: Match;
}) {
  const { champion, setChampion } = useChampion();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // three match format calculate winner
  let wins = [0, 0];
  for (let i = 0; i < score.length; i++) {
    if (score[i][0] > score[i][1]) {
      wins[0]++;
    } else {
      wins[1]++;
    }
  }
  const winnerIdx = wins[0] > wins[1] ? 0 : 1;

  useEffect(() => {
    if (firstRound && champion !== players[winnerIdx]) {
      setChampion(players[winnerIdx]);
    }
  }, [firstRound, winnerIdx]);

  return (
    <>
      <motion.div
        className={`bracket-match`}
        initial={{ opacity: 0, y: 30, x: -30 }}
        animate={{ opacity: 1, y: 0, x: 0, transition: { delay: 0.1 * id } }}
        onClick={openModal}
      >
        <div className="bracket-match-id text-center text-xs flex flex-col">
          Matchup <span className="text-sm"># {id}</span>
        </div>
        <div className={`bracket-players`}>
          {players.map(({ name, seed, ...player }, index) => (
            <Player
              key={player.id}
              id={player.id}
              name={name}
              seed={seed}
              score={score.map((s) => s[index])}
              winner={index === winnerIdx}
              wins={wins[index]}
            />
          ))}
        </div>
      </motion.div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div className="fixed inset-0 bg-[#0f1519]/90" aria-hidden="true" />

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-black text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl text-center font-medium leading-6 text-white py-5 border-b border-[#0f1519] bg-[#19222d] w-full"
                  >
                    Match Details
                  </Dialog.Title>
                  <div>
                    <div className="mt-2 text-center py-3 text-lg">
                      Round {match?.round} - Match {match?.match}
                    </div>

                    <div className="grid grid-cols-3 text-center pt-5 pb-10 items-center">
                      <div className="text-4xl">{players[0].name}</div>
                      <div className="text-3xl grid grid-cols-3 px-5">
                        <div
                          className={`border rounded-md border-[#0f1519] p-1 ${
                            wins[0] > wins[1]
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {wins[0] > wins[1] ? "W" : "L"}
                        </div>
                        <div>-</div>
                        <div
                          className={`border rounded-md border-[#0f1519] p-1 ${
                            wins[0] > wins[1]
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          {wins[0] < wins[1] ? "W" : "L"}
                        </div>
                      </div>
                      <div className="text-4xl">{players[1].name}</div>
                    </div>
                    <div className="pb-10">
                      <div className="text-center text-xl p-5 border-b border-[#0f1519] bg-[#19222d]">
                        Games
                      </div>
                      <div className=" text-center items-center py-5 pt-10">
                        <ul className="text-center grid grid-rows-3 gap-2">
                          {match?.score.map((s, idx) => (
                            <li
                              key={idx}
                              className="grid grid-cols-3 px-10 items-center"
                            >
                              <div className="col-start-1 text-gray-300">
                                Game {idx + 1}
                              </div>
                              <div className="col-start-2 grid grid-cols-3 px-5 items-center">
                                <div
                                  className={`border rounded-md border-[#0f1519] p-1 ${
                                    s[0] > s[1]
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >
                                  {s[0]}
                                </div>
                                <div>-</div>
                                <div
                                  className={`border rounded-md border-[#0f1519] p-1 ${
                                    s[0] < s[1]
                                      ? "text-green-500"
                                      : "text-red-500"
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
