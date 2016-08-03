import React, { Component } from 'react';
import center from './Positions/posFace';
import selector from './Positions/symbol';

class Face extends Component {

	render() {

		let symbol = this.props.symbol;
		let number = this.props.number;
		// Fixes club positioning issue
		if (symbol === '\u2663') center[2]['top'] = '68.5714285714%';

		return (
			<div>
				{center.map((x,i) => {
					var insert;
					if (i === 0) insert = <img src={require('../../../../../images/'+ selector(symbol) + number + '.png')} />
					else insert = symbol
					return <div key={i} style={x} className="center-symbol">{insert}</div>;
				})}
			</div>
		)

	}
	
}

export default Face