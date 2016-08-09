import React, { Component } from 'react';
import { formatMoney } from 'accounting';
import './Better.scss';
import ChipBetter from './ChipBetter';

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
							animateChip={this.props.animateChip}
							toAnimate={'chipAnimation'}
							playerScore={this.props.playerScore}
							dealerScore={this.props.dealerScore}
							roundEnd={this.props.roundEnd} />}
				</div>
			</div>
		)

	}
	
}

export default Better