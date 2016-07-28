import React, { Component } from 'react';
import '../scss/Better.scss';
import ChipImage from './ChipImage.js';
import actions from '../redux/actions';

class Better extends Component {

	render() {

		return (
			<div className="holder-better">
				<div className="holder better">
					<h3>Click on chips to place bet</h3>
					{this.props.color !== null ? 
					<div className="chip-absolute animation-chip">
						<ChipImage color={this.props.color} value={this.props.value} />
					</div> : null}
				</div>
			</div>
		)

	}
	
}

export default Better