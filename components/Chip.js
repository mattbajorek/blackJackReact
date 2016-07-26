import React, { Component } from 'react';
import '../scss/Chip.scss';
import ChipImage from './ChipImage.js';
import actions from '../redux/actions';

class Chip extends Component {

	handleClick(e) {
		this.props.dispatch(actions.bet(this.props.color));
	}

	render() {

		return (
			<div className="chip chip-relative" onClick={this.handleClick.bind(this)}>
				<ChipImage key={this.props.key} color={this.props.color} />
				<h3>${this.props.value}</h3>
				<h3 className="amount">x{this.props.amount}</h3>
			</div>
		)

	}
	
}

export default Chip