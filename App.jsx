import React, { Component } from "react";
import ListUsernames from "./ListUsernames";
import NewUser from "./NewUser";
import "./styles.css";
import ToggleGamesPlayed from "./ToggleGamesPlayed";

class App extends Component {
  state = {
    usernames: [],
    isToggleOn: true,
    gamesPlayed: 0
  };

  handleAddUser = (user) => {
    this.setState({ usernames: [...this.state.usernames, user] });
  };

  toggleDisplay = (event) => {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  };

  render() {
    const { usernames, isToggleOn, gamesPlayed } = this.state;
    return (
      <div className="App">
        <NewUser onAddUser={this.handleAddUser} usernames={usernames} />

        <ToggleGamesPlayed
          isToggleOn={isToggleOn}
          toggleDisplay={this.toggleDisplay}
        />

        <div id="username-list">
          <ListUsernames
            usernames={usernames}
            isToggleOn={isToggleOn}
            gamesPlayed={gamesPlayed}
          />
        </div>
      </div>
    );
  }
}

export default App;
