import React, { Component } from 'react';
import '../scss/ChipImage.scss';

class ChipImage extends Component {

	render() {

		return <img key={this.props.key} src={this.props.color} />

	}
	
}

export default ChipImage