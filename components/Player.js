import React, { Component } from 'react';
import '../scss/Player.scss';
import actions from '../redux/actions';

class Player extends Component {

	render() {

		return (
			<div>
				<div className="holder-positioner-player">
					<div className="holder player"></div>
				</div>
			</div>
		)

	}
	
}

export default Player