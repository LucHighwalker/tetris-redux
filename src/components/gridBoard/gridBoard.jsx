import React, { Component } from "react";
import { connect } from "react-redux";

import GridSquare from "../gridSquare/gridSquare";

import "./gridBoard.scss";

class GridBoard extends Component {
  constructor(props) {
    super(props);

    // states go here.
  }

  makeGrid() {
    const grid = [];
    for (let row = 0; row < 18; row++) {
      grid.push([]);
      for (let col = 0; col < 10; col++) {
        grid[row].push(<GridSquare key={`${col}${row}`} color="1" />);
      }
    }

    return grid;
  }

  // The components generated in makeGrid are rendered in div.grid-board
  render() {
    return <div className="grid-board">{this.makeGrid()}</div>;
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  // action: () => dispatch(action())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridBoard);
