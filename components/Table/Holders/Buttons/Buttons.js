import React, { Component } from 'react';
import './Buttons.scss';
import random from '../random.js';
import actions from '../../../../redux/actions';

class Buttons extends Component {

	handlePlaceClick(e) {
		// Add random card to player array
		this.props.dispatch(actions.placeBet(random()));
	}

	handleClearClick(e) {
		// Clear bet and return chips
		this.props.dispatch(actions.clearBet());
	}

	handleHitClick(e) {
		if (this.props.animateCard === false) {
			let dispatch = this.props.dispatch;
			if (this.props.playerScore < 22)
				// Add random card to player array
				dispatch(actions.addCard('player',random()));
		}
	}

	handleStayClick(e) {
		// Start the dealer card caluation but giving a random card that may or may not be used
		this.props.dispatch(actions.hitNstay('dealer',random()));
	}

	render() {

		let currentChip = this.props.currentChip;
		let playerCards = this.props.playerCards;
		let dealerCards = this.props.dealerCards;
		let hitNstay = this.props.hitNstay;

		return (
			<div>
			{Object.keys(currentChip).length === 0 || playerCards.length > 0 ? null:
				<div className="holder-buttons">
					<button onClick={this.handlePlaceClick.bind(this)}>Place Bet</button>
					<button onClick={this.handleClearClick.bind(this)}>Clear Bet</button>
				</div>
			}
			{hitNstay === true ?
				<div className="holder-buttons">
					<button onClick={this.handleHitClick.bind(this)}>Hit</button>
					<button onClick={this.handleStayClick.bind(this)}>Stay</button>
				</div> : null
			}
			</div>
		)

	}
	
}

export default Buttons