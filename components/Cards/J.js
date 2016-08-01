import React, { Component } from 'react';

class J extends Component {

	render() {

		let symbol = this.props.symbol;
		let center = [
			{
				top: '16.2857142857%',
				left: '20%'
			},
			{
				top: '14.2857142857%',
				left: '22%'
			},
			{
				top: '65.7142857143%',
				left: '62%',
				'-ms-transform': 'rotate(180deg)',
				'-webkit-transform': 'rotate(180deg)',
				'transform': 'rotate(180deg)',
			}
		];

		return (
			<div>
				<div style={center[0]} className="center-symbol">
					<img src={require('../../images/spadeJ.png')} />
				</div>
				<div style={center[1]} className="center-symbol">{symbol}</div>
				<div style={center[2]} className="center-symbol">{symbol}</div>
			</div>
		)

	}
	
}

export default J