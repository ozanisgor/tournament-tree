import { create } from "zustand";

interface HighlightStoreState {
  highlightedPlayer: null | any;
  setHighlightedPlayer: (newHighlightedPlayer: any) => void;
}

export const useHighlightStore = create<HighlightStoreState>((set) => ({
  highlightedPlayer: null,
  setHighlightedPlayer: (newHighlightedPlayer: any) =>
    set({ highlightedPlayer: newHighlightedPlayer }),
}));
