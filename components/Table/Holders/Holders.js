import React, { Component } from 'react';
import './Holders.scss';
import Dealer from './Dealer/Dealer';
import Chips from './Chips/Chips';
import Better from './Better/Better';
import Player from './Player/Player';
import Buttons from './Buttons/Buttons';

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
					playerScore={this.props.playerScore}
					dealerScore={this.props.dealerScore}
					roundEnd={this.props.roundEnd} />
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