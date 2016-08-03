import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ChipBetter.scss';
import ChipImage from '../Chips/Chip/ChipImage.js';
import actions from '../../../../redux/actions';

class ChipBetter extends Component {

	animation() {
		let dispatch = this.props.dispatch;
		let animatedChip = ReactDOM.findDOMNode(this.refs.chipAnimation);
		animatedChip.addEventListener('webkitAnimationEnd', function() {
			dispatch(actions.animate());
		});
	}

	componentDidMount() {
		console.log("RUNNING!");
		if (this.props.toAnimate === 'chipAnimation') this.animation();
	}

	render() {

		return (
			<div ref={this.props.toAnimate} className={this.props.animate === true ? "chip-absolute animation-chip" : "chip-absolute"}>
				<ChipImage chip={this.props.chip} />
			</div>
		)

	}
	
}

export default ChipBetter

// <div className={this.props.animate === true ? "chip-absolute animation-chip" : "chip-absolute"}>