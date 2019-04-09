import React, { Component } from "react";
import { connect } from "react-redux";
import "./controls.scss";

import { moveDown, moveLeft, moveRight, rotate } from "../../redux/actions";

class Controls extends Component {
  constructor(props) {
    super(props);

    // states go here.
  }

  render() {
    const { isRunning } = this.props

    return (
      <div className="controls">
        {/* left */}
        <button className="control-button" onClick={(e) => {
          if (!isRunning) { return }
          this.props.moveLeft()
        }}>Left</button>

        {/* right */}
        <button className="control-button" onClick={(e) => {
          if (!isRunning) { return }
          this.props.moveRight()
        }}>Right</button>

        {/* rotate */}
        <button className="control-button" onClick={(e) => {
          if (!isRunning) { return }
          this.props.rotate()
        }}>Rotate</button>

        {/* down */}
        <button className="control-button" onClick={(e) => {
          if (!isRunning) { return }
          this.props.moveDown()
        }}>Down</button>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  isRunning: state.game.isRunning
});

const mapDispatchToProps = dispatch => ({
  moveRight,
  moveLeft,
  moveDown,
  rotate
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
