import React, { Component } from 'react';
import '../scss/ChipBetter.scss';
import ChipImage from './ChipImage.js';

class ChipBetter extends Component {

	render() {

		return (
			<div className={this.props.animate === true ? "chip-absolute animation-chip" : "chip-absolute"}>
				<ChipImage color={this.props.color} value={this.props.value} />
			</div>
		)

	}
	
}

export default ChipBetter