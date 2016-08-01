import React, { Component } from 'react';
import '../scss/Buttons.scss';
import actions from '../redux/actions';

class Buttons extends Component {

	render() {

		return (
			<div>
			{Object.keys(this.props.currentChip).length === 0 ? null:
				<div className="holder-buttons">
					<button className="place-bet">Place Bet</button>
					<button className="clear-bet">Clear Bet</button>
				</div>
			}
			</div>
		)

	}
	
}

export default Buttons