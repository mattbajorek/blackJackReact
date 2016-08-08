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
		this.props.dispatch(actions.clearBet());
	}

	handleHitClick(e) {
		this.props.dispatch(actions.addCard('player',random()));
	}

	handleStayClick(e) {
		let dispatch = this.props.dispatch;
		let dealerScore = this.props.dealerScore;
		// Remove hit and stay buttons and add dealer card if less than 17
		dispatch(actions.hitNstay('dealer',random()));
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