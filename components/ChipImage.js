import React, { Component } from 'react';
import '../scss/ChipImage.scss';

class ChipImage extends Component {

	render() {

		return (
			<div className="chip-image">
				<img key={this.props.key} src={this.props.color} />
				<h3>${this.props.value}</h3>
			</div>
		)

	}
	
}

export default ChipImage