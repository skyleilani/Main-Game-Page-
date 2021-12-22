import React from "react";
import Username from "./Username";
import PropTypes from "prop-types";

// Display all created users in boxes

const ListUsernames = (props) => {
  return (
    <div>
      <ul className="user">
        {props.usernames.map((u, index) => (
          <Username
            key={index}
            username={u}
            isToggleOn={props.isToggleOn}
            gamesPlayed={props.gamesPlayed}
          />
        ))}
      </ul>
    </div>
  );
};

ListUsernames.propTypes = {
  usernames: PropTypes.array.isRequired
};

export default ListUsernames;
