const ToggleGamesPlayed = ({isToggleOn, toggleDisplay}) => {
  return (
    <button onClick={toggleDisplay}>
      {isToggleOn
        ? "Click to hide # of games played"
        : "Click to show # of games played"}
    </button>
  );
};

export default ToggleGamesPlayed;
