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
				'msTransform': 'rotate(180deg)',
				'WebkitTransform': 'rotate(180deg)',
				'transform': 'rotate(180deg)',
			}
		];

		return (
			<div>
				<div style={center[0]} className="center-symbol">

					{(() => {
						let url;
						switch (symbol) {
							case '\u2660':
								url = 'spadeJ'; break;
							case '\u2663':
								url = 'clubJ'; break;
							case '\u2665':
								url = 'heartJ'; break;
							case '\u2666':
								url = 'diamondJ'; break;
						}
						console.log(url);
						return <img src={require('../../images/'+ url + '.png')} />
					})()}

				</div>
				<div style={center[1]} className="center-symbol">{symbol}</div>
				<div style={center[2]} className="center-symbol">{symbol}</div>
			</div>
		)

	}
	
}

export default J