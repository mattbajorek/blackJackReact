import React, { Component } from 'react';
import './Buttons.scss';
import actions from '../../../../redux/actions';

class Buttons extends Component {

	handlePlaceClick(e) {
		this.props.dispatch(actions.placeBet());
	}

	handleClearClick(e) {
		this.props.dispatch(actions.clearBet());
	}

	handleHitClick(e) {
		//this.props.dispatch(actions.placeBet());
	}

	handleStayClick(e) {
		//this.props.dispatch(actions.clearBet());
	}

	render() {

		let currentChip = this.props.currentChip;
		let cards = this.props.cards;

		return (
			<div>
			{Object.keys(currentChip).length === 0 || cards > 0 ? null:
				<div className="holder-buttons">
					<button className="place-bet" onClick={this.handlePlaceClick.bind(this)}>Place Bet</button>
					<button className="clear-bet" onClick={this.handleClearClick.bind(this)}>Clear Bet</button>
				</div>
			}
			{cards > 0 ?
				<div className="holder-buttons">
					<button className="place-bet" onClick={this.handleHitClick.bind(this)}>Hit</button>
					<button className="clear-bet" onClick={this.handleStayClick.bind(this)}>Stay</button>
				</div> : null
			}
			</div>
		)

	}
	
}

export default Buttons