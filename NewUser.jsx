import React from "react";
import PropTypes from "prop-types";

class NewUser extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    username: ""
  };

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleFirstnameChange = (event) => {
    this.setState({ firstname: event.target.value });
  };

  handleLastnameChange = (event) => {
    this.setState({ lastname: event.target.value });
  };

  addUser = (event) => {
    event.preventDefault();
    this.props.onAddUser(this.state.username);
  };

  isDuplicateUsername = (event) => {
    console.log(this.props.username);
    event.preventDefault();
    if (this.props.usernames.includes(this.state.username)) {
      alert("duplicate username");
    } else {
      this.addUser(event);
    }
  };

  render() {
    const { username, firstname, lastname } = this.state;
    return (
      <div>
        <form onSubmit={this.isDuplicateUsername}>
          <input
            id="fistname"
            type="text"
            placeholder="First name"
            value={firstname}
            onChange={this.handleFirstnameChange}
          />
          <input
            id="lastname"
            type="text"
            placeholder="Last name"
            value={lastname}
            onChange={this.handleLastnameChange}
          />
          <input
            id="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={this.handleUsernameChange}
          />
          <button
            disabled={username === "" || firstname === "" || lastname === ""}
          >
            Create New User
          </button>
        </form>
      </div>
    );
  }
}

NewUser.propTypes = {
  onAddUser: PropTypes.func.isRequired
};

export default NewUser;
