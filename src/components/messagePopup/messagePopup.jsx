import React, { Component } from "react";
import { connect } from "react-redux";
import "./messagePopup.scss";

class MessagePopup extends Component {
  constructor(props) {
    super(props);

    // states go here.
  }

  render() {
    const { gameOver, isRunning } = this.props
    let message = ''
    let isHidden = 'hidden'

    // If the game is over, show the popup saying "Game Over"
    if (gameOver) {
      message = 'Game Over'
      isHidden = ''
    // If the game isn't running, it must be paused, so show the popup saying "Paused"
    } else if (!isRunning) {
      message = 'Paused'
      isHidden = ''
    // Default message, will still be hidden
    } else {
      message = '???'
    }

    return (
      <div className={`message-popup ${isHidden}`}>
        <h1>{message}</h1>
        <p></p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  gameOver: state.game.gameOver,
  isRunning: state.game.isRunning
});

const mapDispatchToProps = dispatch => ({
  // action: () => dispatch(action())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagePopup);
