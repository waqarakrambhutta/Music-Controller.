import React, { Component } from "react";

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votesToSkip: 2,
      guestCanPause: false,
      isHost: false,
      id : this.props.match.params.room.id,
    };
  }

  render() {
    return (
      <div>
        <h3>{this.id}</h3>
        <p>Votes: {this.state.votesToSkip}</p>
        <p>Guest Can Pause: {this.state.guestCanPause}</p>
        <p>Host: {this.state.isHost}</p>
      </div>
    );
  }
}
