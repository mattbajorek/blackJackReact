import React, { Component } from 'react';
import './Dealer.scss';
import Card from '../Card/Card.js';

class Dealer extends Component {

	render() {

		let dispatch = this.props.dispatch;
		let cards = this.props.dealerCards;
		let dealer = this.props.dealer;
		let style = [];

		for (let i in cards) {
			style.push({left: (30*i) + 'px'});
		}

		return (
			<div className="holder-positioner-dealer">
				<div className="holder dealer">
					{cards.map((x,i) => {
						return <Card
							key={i}
							index={i}
							showCard={this.props.showCard}
							dispatch={dispatch}
							card={x}
							type='dealer'
							style={style[i]} 
							dealerCards={cards}
							dealer={dealer} />;
					})}
				</div>
			</div>
		)

	}
	
}

export default Dealer