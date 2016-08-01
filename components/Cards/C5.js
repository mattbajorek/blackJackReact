import React, { Component } from 'react';
import pos1 from '../Positions/pos1';
import pos4 from '../Positions/pos4';

class C5 extends Component {

	render() {

		let symbol = this.props.symbol;
		let center = [pos1];
		for (let i in pos4) center.push(pos4[i]);

		return (
			<div>
				{center.map(function(x,i) {
					return <div key={i} style={x} className="center-symbol">{symbol}</div>;
				})}
			</div>
		)

	}
	
}

export default C5