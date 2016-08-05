import React, { Component } from 'react';
import './Player.scss';
import Card from '../Card/Card.js';

class Player extends Component {

	render() {

		let dispatch = this.props.dispatch;
		let cards = this.props.playerCards;
		let style = [];

		for (let i=0; i<cards; i++) {
			style.push({left: (30*i) + 'px'});
		}

		return (
			<div className="holder-positioner-player">
				<div className="holder player">
					{cards >= 1 ?
						<Card
							dispatch={dispatch}
							style={style[0]} 
							playerCards={cards} /> : null}
					{cards >= 2 ?
						<Card
							dispatch={dispatch}
							style={style[1]}
							playerCards={cards} /> : null}
				</div>
			</div>
		)

	}
	
}

export default Player