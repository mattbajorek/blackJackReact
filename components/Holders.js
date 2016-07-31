import React, { Component } from 'react';
import '../scss/Holders.scss';
import Dealer from './Dealer.js';
import Better from './Better.js';
import Player from './Player.js';
import Chips from './Chips.js';

class Holders extends Component {

	render() {

		return (
			<div>
				<Dealer dispatch={this.props.dispatch} />
				<Better
					dispatch={this.props.dispatch}
					lastChip={this.props.lastChip}
					currentChip={this.props.currentChip}
					animate={this.props.animate} />
				<Player dispatch={this.props.dispatch} />
				<Chips dispatch={this.props.dispatch} focus={this.props.focus} />
			</div>
		)

	}
	
}

export default Holders