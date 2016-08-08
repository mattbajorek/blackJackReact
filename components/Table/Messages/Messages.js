import React, { Component } from 'react';
import './Messages.scss';

class Messages extends Component {

	render() {
		return (
			<div className="message">
				<h1>{this.props.result}</h1>
			</div>
		);
	}
	
}

export default Messages;