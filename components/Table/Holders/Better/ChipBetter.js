import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ChipBetter.scss';
import ChipImage from '../Chips/Chip/ChipImage';
import calWin from '../Card/calWin';
import actions from '../../../../redux/actions';

class ChipBetter extends Component {

	constructor() {
    super();
    this.state = {
      winner: null,
      ran: false
    };
  }

	componentDidMount() {
		if (this.props.toAnimate === 'chipAnimation') this.animation();
	}

	animation() {
		let dispatch = this.props.dispatch;
		let winner = this.state.winner;
		let animatedChip = ReactDOM.findDOMNode(this.refs.chipAnimation);
		animatedChip.addEventListener('webkitAnimationEnd', function() {
			// Animate chip in toggle
			dispatch(actions.animateChipIn());
		});
	}

	// Check for round end to calculate scores and 
	componentWillReceiveProps(newProps) {
    if (newProps.roundEnd === true && this.state.ran === false) {
    	let player = newProps.playerScore;
    	let dealer = newProps.dealerScore;
    	// Send scores to calculate winner
    	let results = calWin(player,dealer);
    	// Set the winner state to animate proper chip out direction
    	// Increment state so this logic won't be called again
    	this.setState({
    		winner: results.winner,
    		ran: true
    	});
    	// Show message
    	let dispatch = this.props.dispatch;
    	dispatch(actions.message(results.result));
      // Restart round
      setTimeout(function() {
        dispatch(actions.result(results.winner, results.multiply));
      },3000);
    }
  }

	render() {

		let className;
		let winner = this.state.winner;

		if (this.props.animateChip === true && winner === null) {
			className = "chip-absolute animation-chip-in";
		} else if (winner === 'player' || winner === 'tie') {
			className = "chip-absolute-out animation-chip-player";
		} else if (winner === 'dealer') {
			className = "chip-absolute-out animation-chip-dealer";
		} else {
			className = "chip-absolute";
		}

		return (
			<div
				ref={this.props.toAnimate}
				className={className}>
				<ChipImage chip={this.props.chip} />
			</div>
		)

	}
	
}

export default ChipBetter