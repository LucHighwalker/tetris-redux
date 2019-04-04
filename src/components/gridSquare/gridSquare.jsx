import React, { Component } from 'react';
import { connect } from "react-redux";
import './gridSquare.scss';

class GridSquare extends Component {
	constructor(props) {
		super(props);
    
		// states go here.
	}

	render() {
		const classes = `grid-square color-${this.props.color}`;
		return (
			<div className={classes} />
		);
	}
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	// action: () => dispatch(action())
});

export default connect(mapStateToProps, mapDispatchToProps)(GridSquare);
