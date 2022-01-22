import React, { useState } from 'react';
import ListUsernames from './components/ListUsernames';
import NewUser from './components/NewUser';
import ToggleGamesPlayed from './components/ToggleGamesPlayed';
import './styles.css';

const MainPage = () => {
  const [usernames, setUsernames] = useState([]),
    [isToggleOn, setIsToggleOn] = useState(true),
    [gamesPlayed] = useState(0);

  const handleAddUser = user => {
    setUsernames([...usernames, user]);
  };

  const toggleDisplay = e => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div className='App'>
      <NewUser onAddUser={handleAddUser} usernames={usernames} />

      <ToggleGamesPlayed
        isToggleOn={isToggleOn}
        toggleDisplay={toggleDisplay}
      />

      <div id='username-list'>
        <ListUsernames
          usernames={usernames}
          isToggleOn={isToggleOn}
          gamesPlayed={gamesPlayed}
        />
      </div>
    </div>
  );
};

export default MainPage;
