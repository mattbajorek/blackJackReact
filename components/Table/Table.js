import React, { Component } from 'react';
import './Table.scss';
import Intro from './Intro/Intro.js';
import Holders from './Holders/Holders.js';
import Messages from './Messages/Messages.js';
import actions from '../../redux/actions';
import { connect } from 'react-redux';

class Table extends Component {

	constructor() {
    super();
    this.state = {
      result: null,
      winner: null
    };
  }

	// Check for round end to calculate scores and 
	componentWillReceiveProps(newProps) {    
    if (newProps.roundEnd === true) {
    	console.log('ROUND END!');
    	console.log('Player:', newProps.playerScore);
    	console.log('Dealer:', newProps.dealerScore);
    	let player = newProps.playerScore;
    	let dealer = newProps.dealerScore;
    	// Send scores to calculate winner
    	this.calWin(player,dealer);
    }
  }

  calWin(player,dealer) {
  	let result, winner, multiply;
  	if (player > 21 && dealer > 21) {
  		result = 'Player busts and dealer busts! No winner!';
  	} else if (player === 21 && dealer > 21) {
  		result = 'Player has blackjack! Dealer busts! Player wins double!';
  		winner = 'player'; multiply = 4;
  	} else if (player > 21 && dealer === 21) {
  		result = 'Dealer has blackjack! Player busts! Dealer wins!';
  		winner = 'dealer';
  	} else if (player === 21 && dealer === 21) {
  		result = 'Player and Dealer both have blackjack! No winner!';
      winner = 'tie';
  	} else if (player === 21 && dealer < 21) {
  		result = 'Player has blackjack! Player wins double!';
  		winner = 'player'; multiply = 4;
  	} else if (player < 21 && dealer === 21) {
  		result = 'Dealer has blackjack! Dealer wins!';
  		winner = 'dealer';
  	} else if (player > 21 && dealer < 21) {
  		result = 'Player busts! Dealer wins!';
  		winner = 'dealer';
  	} else if (player < 21 && dealer > 21) {
  		result = 'Dealer busts! Player wins!';
  		winner = 'player'; multiply = 2;
  	} else if (player > dealer) {
  		result = 'Player wins by ' + (player-dealer);
  		winner = 'player'; multiply = 2;
  	} else if (player < dealer) {
  		result = 'Dealer wins by ' + (dealer-player);
  		winner = 'dealer';
  	} else {
  		result = 'Tie! No winner!';
      winner = 'tie';
  	}
  	// Set result so message can render
  	this.setState({
      result: result,
      winner: winner
    });
  	let dispatch = this.props.dispatch;
    // Animate proper chip out direction
    // Do this after 5 seconds
  	setTimeout(function() {
  		dispatch(actions.result(winner, multiply));
  	},3000);
  }

	render() {
		return (
			<div className="wrapper">
				<div className="green-table"></div>
				<div className="wood-trim"></div>
				{ this.props.play === true && this.props.total !== null ? 
					<Holders
						dispatch={this.props.dispatch}
						total={this.props.total}
						ratio={this.props.ratio}
						lastChip={this.props.lastChip}
						currentChip={this.props.currentChip}
						animate={this.props.animate} 
						bet={this.props.bet}
						amounts={this.props.amounts}
						playerCards={this.props.playerCards}
						dealerCards={this.props.dealerCards}
						hitNstay={this.props.hitNstay}
						dealerScore={this.props.dealerScore}
						dealer={this.props.dealer}
						winner={this.state.winner} /> :
					<Intro dispatch={this.props.dispatch} total={this.props.total} play={this.props.play} /> }
				{ this.props.roundEnd === true ? <Messages result={this.state.result} /> : null }
			</div>
		);
	}
	
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(Table);