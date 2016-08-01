import React, { Component } from 'react';
import pos1 from '../Positions/pos1';
import pos2 from '../Positions/pos2';

class C3 extends Component {

	render() {

		let symbol = this.props.symbol;
		let center = [pos1];
		for (let i in pos2) center.push(pos2[i]);

		return (
			<div>
				{center.map(function(x,i) {
					return <div key={i} style={x} className="center-symbol">{symbol}</div>;
				})}
			</div>
		)

	}
	
}

export default C3