import React, { Component } from 'react';
import './Player.scss';
import Card from '../Card/Card.js';

class Player extends Component {

	render() {

		return (
			<div className="holder-positioner-player">
				<div className="holder player">
					<Card number="J" symbol="&spades;" />
				</div>
			</div>
		)

	}
	
}

export default Player