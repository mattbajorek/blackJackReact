import React, { Component } from 'react';
import { formatMoney } from 'accounting';
import '../scss/Chips.scss';
import Chip from './Chip.js';

let colors = ['white','red','blue','green','black'];
let color = [];

for (let i in colors) {
	var img = document.createElement('img');
	img.src = require('../images/'+ colors[i] + '.png');
	color.push(img.src);
}

let value = [1,5,10,20,50];
let amount = [25,15,5,5,5];

class Chips extends Component {

	render() {

		let focus = Number(this.props.focus);
		let dispatch = this.props.dispatch;

		return (
			<div className="holder-chips">
				<h3 className="total">Total: {formatMoney(this.props.focus, "$", 0)}</h3>
				{color.map(function(x,i) {
					return <Chip key={i} dispatch={dispatch} color={x} value={value[i]*focus/500} amount={amount[i]} />;
				})}
			</div>
		)

	}
	
}

export default Chips