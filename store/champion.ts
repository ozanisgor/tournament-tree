import { create } from "zustand";
import { Player } from "@/models/types";

interface ChampionStoreState {
  champion: null | Player;
  setChampion: (champion: Player) => void;
}

export const useChampion = create<ChampionStoreState>((set) => ({
  champion: null,
  setChampion: (champion: Player) => set({ champion: champion }),
}));
