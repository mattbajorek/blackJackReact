import React, { Component } from 'react';
import { formatMoney } from 'accounting';
import '../scss/Better.scss';
import ChipBetter from './ChipBetter.js';
import actions from '../redux/actions';

class Better extends Component {

	render() {

		return (
			<div className="holder-better">
				<div className="holder better">
					{Object.keys(this.props.currentChip).length === 0 ?
						<h3>Click on chips to place bet</h3> : <h3>Bet: {formatMoney(this.props.bet, "$", 0)}</h3>}
					{Object.keys(this.props.lastChip).length === 0 ? null :
						<ChipBetter color={this.props.lastChip.color} value={this.props.lastChip.value} />}
					{Object.keys(this.props.currentChip).length === 0 ? null :
						<ChipBetter color={this.props.currentChip.color} value={this.props.currentChip.value} animate={this.props.animate} />}
				</div>
			</div>
		)

	}
	
}

export default Better