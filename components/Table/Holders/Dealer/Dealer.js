import React, { Component } from 'react';
import './Dealer.scss';
import Card from '../Card/Card.js';

class Dealer extends Component {

	render() {

		let dispatch = this.props.dispatch;
		let cards = this.props.cards;
		let style = [];

		for (let i=0; i<cards; i++) {
			style.push({left: (30*i) + 'px'});
		}

		return (
			<div className="holder-positioner-dealer">
				<div className="holder dealer">
					{cards >= 3 ?
						<Card
							dispatch={dispatch}
							style={style[0]} /> : null}
					{cards >= 4 ?
						<Card
							dispatch={dispatch}
							style={style[1]} /> : null}
				</div>
			</div>
		)

	}
	
}

export default Dealer