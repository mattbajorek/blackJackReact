import React, { Component } from 'react';
import '../scss/Chip.scss';
import ChipImage from './ChipImage.js';
import actions from '../redux/actions';

class Chip extends Component {

	handleClick(e) {
		this.props.dispatch(actions.bet({
			color: this.props.color,
			value: this.props.value
		}));
	}

	render() {

		return (
			<div className="chip chip-relative" onClick={this.handleClick.bind(this)}>
				<ChipImage key={this.props.key} color={this.props.color} value={this.props.value} />
				<h3 className="amount">x{this.props.amount}</h3>
			</div>
		)

	}
	
}

export default Chip