import React, { Component } from 'react';
import center from '../Positions/pos2';

class C2 extends Component {

	render() {

		let symbol = this.props.symbol;

		return (
			<div>
				{center.map(function(x,i) {
					return <div key={i} style={x} className="center-symbol">{symbol}</div>;
				})}
			</div>
		)

	}
	
}

export default C2