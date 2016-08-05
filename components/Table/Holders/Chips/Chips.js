import React, { Component } from 'react';
import { formatMoney } from 'accounting';
import './Chips.scss';
import Chip from './Chip/Chip.js';

let colors = ['white','red','blue','green','black'];
let color = [];

for (let i in colors) {
	var img = document.createElement('img');
	img.src = require('../../../../images/'+ colors[i] + '.png');
	color.push(img.src);
}

let value = [1,5,10,20,50];

class Chips extends Component {

	render() {

		let total = this.props.total;
		let ratio = this.props.ratio;
		let dispatch = this.props.dispatch;
		let amounts = this.props.amounts;
		let animate = this.props.animate;
		let playerCards = this.props.playerCards;

		return (
			<div className="holder-chips">
				<h3 className="total">Total: {formatMoney(this.props.total, "$", 0)}</h3>
				{color.map((x,i) => {
					return <Chip
						key={i}
						index={i}
						dispatch={dispatch}
						color={x}
						value={value[i]*ratio}
						amounts={amounts}
						animate={animate}
						playerCards={playerCards} />;
				})}
			</div>
		)

	}
	
}

export default Chips