import React, { Component } from 'react';
import './Buttons.scss';

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