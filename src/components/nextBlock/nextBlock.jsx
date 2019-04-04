import React, { Component } from "react";
import { connect } from "react-redux";

import GridSquare from "../gridSquare/gridSquare";

import { shapes } from '../../utils'

import "./nextBlock.scss";

class NextBlock extends Component {
  constructor(props) {
    super(props);

    // states go here.
  }

  makeGrid() {
    // deconstruct shape
    const { shape } = this.props;
    // get the array for this shape first rotation
    const block = shapes[shape][0]
    // get the empty shape
    const box = shapes[0][0]        
  
    // Map the block to the grid
    return box.map((rowArray, row) => {
      return rowArray.map((square, col) => {
        // If there is a 1 use the shape index
        const color = block[row][col] === 0 ? 0 : shape
        return <GridSquare key={`${row}${col}`} color={color} />
      })
    })
  }

  render() {
    return <div className="next-block">{this.makeGrid()}</div>;
  }
}

const mapStateToProps = state => {
  // Return nextShape as shape
  return {
    shape: state.gameReducer.nextShape
  }
};

const mapDispatchToProps = dispatch => ({
  // action: () => dispatch(action())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextBlock);
