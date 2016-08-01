import React, { Component } from 'react';
import center from '../Positions/pos1';

class A extends Component {

	render() {

		let symbol = this.props.symbol;

		return (
			<div style={center} className="center-symbol">{symbol}</div>
		)

	}
	
}

export default A