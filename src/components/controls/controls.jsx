import React, { Component } from 'react';
import { connect } from "react-redux";
import './controls.scss';

class Controls extends Component {
	constructor(props) {
		super(props);
    
		// states go here.
	}

	render() {
		return (
			<div className="controls">
        {/* left */}
        <button className="control-button" onClick={(e) => {

        }}>Left</button>

        {/* right */}
        <button className="control-button" onClick={(e) => {

        }}>Right</button>

        {/* rotate */}
        <button className="control-button" onClick={(e) => {

        }}>Rotate</button>

        {/* down */}
        <button className="control-button" onClick={(e) => {

        }}>Down</button>

      </div>
		);
	}
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	// action: () => dispatch(action())
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
