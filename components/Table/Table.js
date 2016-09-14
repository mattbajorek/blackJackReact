import React, { Component } from 'react';
import './Table.scss';
import Intro from './Intro/Intro';
import Holders from './Holders/Holders';
import Messages from './Messages/Messages';
import actions from '../../redux/actions';
import { connect } from 'react-redux';

class Table extends Component {

	constructor() {
    super();
    this.state = {
      ran: false
    };
  }

	componentWillReceiveProps(newProps) {
		// Check to see if player has lost all the chips
    if (newProps.total === 0 && newProps.bet === 0 && this.state.ran === false) {
    	// Increment state so this logic won't be called again
    	this.setState({
    		ran: true
    	});
    	// Show message
    	let dispatch = this.props.dispatch;
    	dispatch(actions.message('Game Over!'));
    	// Restart game
      setTimeout(function() {
        dispatch(actions.gameOver());
      },3000);
    }
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
						animateChip={this.props.animateChip}
            animateCard={this.props.animateCard} 
						bet={this.props.bet}
						showCard={this.props.showCard}
						amounts={this.props.amounts}
						playerCards={this.props.playerCards}
						dealerCards={this.props.dealerCards}
						hitNstay={this.props.hitNstay}
            playerScore={this.props.playerScore}
						dealerScore={this.props.dealerScore}
						dealer={this.props.dealer}
						roundEnd={this.props.roundEnd} /> :
					<Intro dispatch={this.props.dispatch} total={this.props.total} play={this.props.play} /> }
				{ this.props.message !== null ? <Messages result={this.props.message} /> : null }
			</div>
		);
	}
	
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(Table);