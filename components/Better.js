import React, { Component } from 'react';
import '../scss/Better.scss';
import ChipBetter from './ChipBetter.js';
import actions from '../redux/actions';

class Better extends Component {

	render() {

		return (
			<div className="holder-better">
				<div className="holder better">
					<h3>Click on chips to place bet</h3>
					{this.props.color === null ? null : <ChipBetter color={this.props.color} value={this.props.value} animate={this.props.animate} />}
				</div>
			</div>
		)

	}
	
}

export default Better