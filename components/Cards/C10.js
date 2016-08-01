import React, { Component } from 'react';
import pos9 from '../Positions/pos9';

class C10 extends Component {

	render() {

		let symbol = this.props.symbol;
		let center = [
			{
				top: '20%',
				left: '42%'
			},
			{
				top: '60%',
				left: '42%'
			}
		];
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

export default C10