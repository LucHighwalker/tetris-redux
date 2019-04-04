import React, { Component } from 'react';
import { connect } from "react-redux";
import './scoreBoard.scss';

class ScoreBoard extends Component {
	constructor(props) {
		super(props);
    
		// states go here.
	}

	render() {
    return (
      <div className="score-board">
        <div>Score:{ this.props.score }</div>
        <div>Level: 1</div>

        <button className="score-board-button" onClick={(e) => {

        }}>Play</button>

        <button className="score-board-button" onClick={(e) => {

        }}>Restart</button>

      </div>
    )
  }
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	// action: () => dispatch(action())
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
