import React, { Component } from 'react';
import './Holders.scss';
import Dealer from './Dealer/Dealer.js';
import Chips from './Chips/Chips.js';
import Better from './Better/Better.js';
import Player from './Player/Player.js';
import Buttons from './Buttons/Buttons.js';

class Holders extends Component {

	render() {

		return (
			<div>
				<Dealer
					dispatch={this.props.dispatch}
					cards={this.props.cards} />
				<Chips
					dispatch={this.props.dispatch}
					total={this.props.total}
					ratio={this.props.ratio}
					amounts={this.props.amounts}
					animate={this.props.animate} />
				<Better
					dispatch={this.props.dispatch}
					lastChip={this.props.lastChip}
					currentChip={this.props.currentChip}
					animate={this.props.animate}
					bet={this.props.bet} />
				<Player
					dispatch={this.props.dispatch}
					cards={this.props.cards} />
				<Buttons
					dispatch={this.props.dispatch}
					currentChip={this.props.currentChip}
					cards={this.props.cards} />
			</div>
		)

	}
	
}

export default Holders