import React, { Component } from 'react';
import '../scss/Player.scss';
import Card from './Card.js';
import actions from '../redux/actions';

class Player extends Component {

	render() {

		return (
			<div className="holder-positioner-player">
				<div className="holder player">
					<Card number="A" symbol="&spades;"/>
				</div>
			</div>
		)

	}
	
}

export default Player