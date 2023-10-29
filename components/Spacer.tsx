import React from "react";

const Spacer = ({ line, height }: { line: boolean; height: number }) => {
  const spacers = [];
  for (let i = 0; i < height; i += 1) {
    spacers.push(
      <div
        key={i}
        className={`bracket-spacer ${line ? "border-r border-[#cccccc]" : ""}`}
      >
        &nbsp;
      </div>
    );
  }
  return <>{spacers}</>;
};

Spacer.defaultProps = {
  line: false,
  height: 1,
};

export default Spacer;
