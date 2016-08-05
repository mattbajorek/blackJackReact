import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Card.scss';
import Ato10 from './Modifiers/Ato10';
import Face from './Modifiers/Face';
import posNum from './Modifiers/Positions/posNum';
import selector from './Modifiers/Positions/symbol';
import actions from '../../../../redux/actions';
import random from '../random.js';

class Card extends Component {

	dealer(dispatch,dealerCards) {

	}

	result(dispatch,user,sum) {
		// Logic for bust and blackjack
		if (sum === 21) {
			console.log('BLACKJACK! for ' + user);
			//dispatch(actions.hitNstay('blackjack'));
		} else if (sum > 21) {
			console.log('BUST! for ' + user);
			//dispatch(actions.hitNstay('bust'));
		}
	}

	sum(dispatch,cards,result) {
		// Check for both player and dealer	
		for (let user in cards) {
			if (cards[user] !== undefined) {
				let sum = 0;
				// Loop through each card
				cards[user].map(x => {
					switch(x.number) {
						case 'A':
							if (sum < 11) sum += 11
							else sum += 1
							break;
						case 'J':
						case 'Q':
						case 'K':
							sum += 10;
							break;
						default:
							sum += Number(x.number);
					}
				});
				// Update state of score
				dispatch(actions.score(user, sum))
				// Check for blackjack or bust
				result(dispatch,user,sum);
			}
		}		
	}

	deal(dispatch,playerCards,dealerCards) {
		// Check to see if it is a player card
		if (playerCards !== undefined) {
			// Add another player card
			if (playerCards.length === 1) dispatch(actions.addCard('player',random()));
			// Add another dealer card
			else if (playerCards.length === 2) dispatch(actions.addCard('dealer',random()));
		// Check to see if it is a dealer card
		} else {
			// Add another dealer card
			if (dealerCards.length === 1) dispatch(actions.addCard('dealer',random()));
			// Allow user to hit or stay
			else if (dealerCards.length === 2) dispatch(actions.hitNstay());
		}
	}

	animation(that) {
		// Get dom node of card
		let animatedCard = ReactDOM.findDOMNode(this.refs.cardAnimation);
		// Proceed to logic after each finishes animating
		animatedCard.addEventListener('webkitAnimationEnd', function() {
			that.deal(that.dispatch,that.playerCards,that.dealerCards);
			that.sum(that.dispatch,{player: that.playerCards, dealer: that.dealerCards},that.result);
			that.dealer(that.dispatch,that.dealerCards);
		});
	}

	componentDidMount() {
		// That object saves this
		let that = {
			deal: this.deal,
			sum: this.sum,
			result: this.result,
			dealer: this.dealer,
			dispatch: this.props.dispatch,
			playerCards: this.props.playerCards,
			dealerCards: this.props.dealerCards
		}
		// Animate the card
		this.animation(that);
	}

	render() {

		let number = this.props.card.number;
		let symbol = this.props.card.symbol;

		// Fixes number positioning
		let style = [];
		if (number > 1 && number < 10) {
			posNum(style,'4%');
		} else if (number === '10') {
			posNum(style,'0.8%');
		} else if (number === 'J') {
			posNum(style,'5.2%');
		}

		return (
			<div ref="cardAnimation" className={"card animation-card " + selector(symbol)} style={this.props.style}>
				<div className="number top-number" style={style[0]}>{number}</div>
				<div className="symbol top-symbol">{symbol}</div>
				<div className="number bottom-number" style={style[1]}>{number}</div>
				<div className="symbol bottom-symbol">{symbol}</div>

				{(() => {
					switch (number) {
						case "A":
						case "2":
						case "3":
						case "4":
						case "5":
						case "6":
						case "7":
						case "8":
						case "9":
						case "10":
							return <Ato10 number={number} symbol={symbol} />
						case "J":
						case "Q":
						case "K":
							return <Face number={number} symbol={symbol} />
						default:
							return null
					}
				})()}

			</div>
		)

	}
	
}

export default Card