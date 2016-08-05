import React, { Component } from 'react';
import './Chip.scss';
import ChipImage from './ChipImage.js';
import actions from '../../../../../redux/actions';

class Chip extends Component {

	handleClick(e) {
		let amount = this.props.amounts[this.props.index];
		if (amount > 0 && this.props.animate === false && this.props.playerCards.length === 0) {
			this.props.dispatch(actions.bet({
				color: this.props.color,
				value: this.props.value,
				index: this.props.index
			}));
		}
	}

	render() {

		let amount = this.props.amounts[this.props.index];

		return (
			<div className="chip chip-relative" onClick={this.handleClick.bind(this)}>
				<ChipImage chip={{color:this.props.color,value:this.props.value}} />
				<h3 className="amount">x{amount}</h3>
			</div>
		)

	}
	
}

export default Chip