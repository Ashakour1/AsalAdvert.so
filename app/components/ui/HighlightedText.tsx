import React from "react";

const HighlightedText = ({ className = "", text = "" }) => {
  return (
    <div
      className={`flex items-center text-base font-semibold text-foreground border-foreground rounded-md max-w-fit space-x-2 mx-auto border py-1 px-5 ${className}`}
    >
      <div className="bg-foreground w-3 h-3 rounded-lg"></div>
      <h1>{text}</h1>
    </div>
  );
};

export default HighlightedText;
