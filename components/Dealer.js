import React, { Component } from 'react';
import '../scss/Dealer.scss';
import actions from '../redux/actions';

class Dealer extends Component {

	render() {

		return (
			<div>
				<div className="holder-positioner-dealer">
					<div className="holder dealer"></div>
				</div>
			</div>
		)

	}
	
}

export default Dealer