import React, { Component } from 'react';
import { connect } from "react-redux";
import './messagePopup.scss';

class MessagePopup extends Component {
	constructor(props) {
		super(props);
    
		// states go here.
	}

	render() {
    return (
      <div className='message-popup'>
        <h1>Message Title</h1>
        <p>Message info...</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(MessagePopup);
