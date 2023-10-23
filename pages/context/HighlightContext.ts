import React, { Dispatch, SetStateAction } from "react";

const HighlightContext = React.createContext<{
  highlightedPlayer: number | null;
  setHighlightedPlayer: Dispatch<SetStateAction<number | null>>;
}>({
  highlightedPlayer: null,
  setHighlightedPlayer: () => {},
});

export default HighlightContext;
