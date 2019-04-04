import React, { Component } from 'react';
import { connect } from 'react-redux';

import GridBoard from './components/gridBoard/gridBoard';
import NextBlock from './components/nextBlock/nextBlock';
import ScoreBoard from './components/scoreBoard/scoreBoard';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tetris Redux</h1>
        </header>
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  // your dispatches go here.
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
