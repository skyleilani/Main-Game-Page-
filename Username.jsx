import React from "react";
import PropTypes from "prop-types";

// provides list content to UserList (Individual Users)
const Username = (props) => {
  return props.isToggleOn ? (
    <li>
      {props.username} has played {props.gamesPlayed} games{" "}
    </li>
  ) : (
    <li>{props.username}</li>
  );
};

Username.propTypes = {
  username: PropTypes.string.isRequired,
  isToggleOn: PropTypes.bool.isRequired
};

export default Username;
