import { useState } from 'react';
import PropTypes from 'prop-types';

const NewUser = ({ onAddUser, usernames, propUsername }) => {
  const [firstname, setFirstname] = useState(''),
    [lastname, setLastname] = useState(''),
    [username, setUsername] = useState('');

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  const handleFirstnameChange = e => {
    setFirstname(e.target.value);
  };

  const handleLastnameChange = e => {
    setLastname(e.target.value);
  };

  const addUser = e => {
    e.preventDefault();
    onAddUser(username);
  };

  const isDuplicateUsername = e => {
    console.log(propUsername);
    e.preventDefault();
    if (usernames.includes(username)) {
      alert('Username not available, please try a new one');
    } else {
      addUser(e);
    }
  };

  return (
    <div>
      <form onSubmit={isDuplicateUsername}>
        <input
          id='fistname'
          type='text'
          placeholder='First name'
          value={firstname}
          onChange={handleFirstnameChange}
        />
        <input
          id='lastname'
          type='text'
          placeholder='Last name'
          value={lastname}
          onChange={handleLastnameChange}
        />
        <input
          id='username'
          type='text'
          placeholder='username'
          value={username}
          onChange={handleUsernameChange}
        />
        <button
          id='button'
          disabled={username === '' || firstname === '' || lastname === ''}
        >
          Create New User
        </button>
      </form>
    </div>
  );
};

NewUser.propTypes = {
  onAddUser: PropTypes.func.isRequired,
};

export default NewUser;
