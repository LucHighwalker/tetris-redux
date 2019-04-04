import React, { Component } from 'react';
import { connect } from "react-redux";

import GridSquare from '../gridSquare/gridSquare'

import './nextBlock.scss';

class NextBlock extends Component {
	constructor(props) {
		super(props);
    
		// states go here.
	}

	makeGrid() {
    const box = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
    // Map the block to the grid
    return box.map((rowArray, row) => {
      return rowArray.map((square, col) => {
        return <GridSquare key={`${row}${col}`} color={0} />
      })})
    }

  render () {
    return (
      <div className="next-block">
        {this.makeGrid()}
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

export default connect(mapStateToProps, mapDispatchToProps)(NextBlock);
