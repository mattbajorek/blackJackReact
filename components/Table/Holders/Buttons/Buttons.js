import React, { Component } from 'react';
import './Buttons.scss';
import actions from '../../../../redux/actions';

class Buttons extends Component {

	handleClearClick(e) {
		this.props.dispatch(actions.clearBet());
	}

	render() {

		return (
			<div>
			{Object.keys(this.props.currentChip).length === 0 ? null:
				<div className="holder-buttons">
					<button className="place-bet">Place Bet</button>
					<button className="clear-bet" onClick={this.handleClearClick.bind(this)}>Clear Bet</button>
				</div>
			}
			</div>
		)

	}
	
}

export default Buttons