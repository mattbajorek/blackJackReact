import React, { Component } from 'react';
import pos7 from '../Positions/pos7';

class C8 extends Component {

	render() {

		let symbol = this.props.symbol;
		let center = [
			{
				top: '54.2857142857%',
				left: '42%'
			}
		];
		for (let i in pos7) center.push(pos7[i]);

		return (
			<div>
				{center.map(function(x,i) {
					return <div key={i} style={x} className="center-symbol">{symbol}</div>;
				})}
			</div>
		)

	}
	
}

export default C8