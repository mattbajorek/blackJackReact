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
					dealerCards={this.props.dealerCards}
					dealer={this.props.dealer} />
				<Chips
					dispatch={this.props.dispatch}
					total={this.props.total}
					ratio={this.props.ratio}
					amounts={this.props.amounts}
					animate={this.props.animate}
					playerCards={this.props.playerCards} />
				<Better
					dispatch={this.props.dispatch}
					lastChip={this.props.lastChip}
					currentChip={this.props.currentChip}
					animate={this.props.animate}
					bet={this.props.bet}
					winner={this.props.winner} />
				<Player
					dispatch={this.props.dispatch}
					playerCards={this.props.playerCards} />
				<Buttons
					dispatch={this.props.dispatch}
					currentChip={this.props.currentChip}
					playerCards={this.props.playerCards}
					dealerCards={this.props.dealerCards}
					hitNstay={this.props.hitNstay}
					dealerScore={this.props.dealerScore} />
			</div>
		)

	}
	
}

export default Holders