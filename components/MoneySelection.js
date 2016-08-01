import React, { Component } from 'react';
import { formatMoney } from 'accounting';
import '../scss/MoneySelection.scss';
import actions from '../redux/actions';

class MoneySelection extends Component {
  
	handleClick(e) {
		this.props.dispatch(actions.select(this.props.num));
	}

	render() {
		return (
			<button
				className={this.props.total === this.props.num ? "button-selected":"selection"}
				num={this.props.num}
				onClick={this.handleClick.bind(this)}>
				{formatMoney(this.props.num, "$", 0)}
			</button>
		)
	}
	
}

export default MoneySelection;