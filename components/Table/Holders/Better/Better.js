import React, { Component } from 'react';
import { formatMoney } from 'accounting';
import './Better.scss';
import ChipBetter from './ChipBetter.js';

class Better extends Component {

	render() {

		return (
			<div className="holder-better">
				<div className="holder better">
					{Object.keys(this.props.currentChip).length === 0 ?
						<h3>Click on chips to place bet</h3> : <h3>Bet: {formatMoney(this.props.bet, "$", 0)}</h3>}
					{Object.keys(this.props.lastChip).length === 0 || this.props.bet === 0 ? null :
						<ChipBetter chip={this.props.lastChip} />}
					{Object.keys(this.props.currentChip).length === 0 || this.props.bet === 0 ? null :
						<ChipBetter
							chip={this.props.currentChip}
							dispatch={this.props.dispatch}
							animate={this.props.animate}
							toAnimate={'chipAnimation'}
							winner={this.props.winner} />}
				</div>
			</div>
		)

	}
	
}

export default Better