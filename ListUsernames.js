import React from 'react';
import Username from './Username';
import PropTypes from 'prop-types';

// Display all created users in divs
const ListUsernames = ({ isToggleOn, gamesPlayed, usernames }) => {
  return (
    <div>
      <ul className='user'>
        {usernames.map((u, index) => (
          <Username
            key={index}
            username={u}
            isToggleOn={isToggleOn}
            gamesPlayed={gamesPlayed}
          />
        ))}
      </ul>
    </div>
  );
};

ListUsernames.propTypes = {
  usernames: PropTypes.array.isRequired,
};

export default ListUsernames;
