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

	constructor() {
		super();
		this.random = null;
	}

	bust(dispatch,playerCards) {
		// Calculate sum
		let sum = 0;
		playerCards.map(x => {
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
		// Logic for bust and blackjack
		if (sum === 21) {
			console.log('BLACKJACK!');
			dispatch(actions.hitNstay());
		} else if (sum > 21) {
			console.log('BUST!');
			dispatch(actions.hitNstay());
		}		
	}

	deal(dispatch,playerCards,dealerCards) {
		if (playerCards !== undefined) {
			if (playerCards.length === 1) dispatch(actions.addPlayerCard(random()));
			else if (playerCards.length === 2) dispatch(actions.addDealerCard(random()));
		} else {
			if (dealerCards.length === 1) dispatch(actions.addDealerCard(random()));
			else if (dealerCards.length === 2) dispatch(actions.hitNstay());
		}
	}

	animation() {
		let bust = this.bust;
		let deal = this.deal;
		let dispatch = this.props.dispatch;
		let playerCards = this.props.playerCards;
		let dealerCards = this.props.dealerCards;
		// Proceed to logic after each finishes
		let animatedCard = ReactDOM.findDOMNode(this.refs.cardAnimation);
		animatedCard.addEventListener('webkitAnimationEnd', function() {
			if (playerCards !== undefined) bust(dispatch,playerCards,dealerCards);
			deal(dispatch,playerCards,dealerCards);
		});
	}

	componentDidMount() {
		// Animate the card
		this.animation();
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