import React from "react";

const ToggleGamesPlayed = (props) => {
  return (
    <button onClick={props.toggleDisplay}>
      {props.isToggleOn
        ? "Click to hide # of games played"
        : "Click to show # of games played"}
    </button>
  );
};

export default ToggleGamesPlayed;
