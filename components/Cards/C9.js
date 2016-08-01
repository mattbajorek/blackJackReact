import React, { Component } from 'react';
import pos1 from '../Positions/pos1';
import pos9 from '../Positions/pos9';

class C9 extends Component {

	render() {

		let symbol = this.props.symbol;
		let center = [pos1];
		for (let i in pos9) center.push(pos9[i]);

		return (
			<div>
				{center.map(function(x,i) {
					return <div key={i} style={x} className="center-symbol">{symbol}</div>;
				})}
			</div>
		)

	}
	
}

export default C9