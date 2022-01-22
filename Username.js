import PropTypes from "prop-types";

// provides list content to UserList (Individual Users)
const Username = ({ isToggleOn, username, gamesPlayed }) => {
  return isToggleOn ? (
    <li>
      {username} has played {gamesPlayed} games
    </li>
  ) : (
    <li>{username}</li>
  );
};

Username.propTypes = {
  username: PropTypes.string.isRequired,
  isToggleOn: PropTypes.bool.isRequired
};

export default Username;
