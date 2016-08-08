import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ChipBetter.scss';
import ChipImage from '../Chips/Chip/ChipImage.js';
import actions from '../../../../redux/actions';

class ChipBetter extends Component {

	animation() {
		let dispatch = this.props.dispatch;
		let winner = this.props.winner;
		let animatedChip = ReactDOM.findDOMNode(this.refs.chipAnimation);
		animatedChip.addEventListener('webkitAnimationEnd', function() {
			if (winner === null) dispatch(actions.animateChipIn());
		});
	}

	componentDidMount() {
		if (this.props.toAnimate === 'chipAnimation') this.animation();
	}

	render() {

		let className;
		if (this.props.animate === true && this.props.winner === null) {
			className = "chip-absolute animation-chip-in";
		} else if (this.props.winner === 'player' || this.props.winner === 'tie') {
			className = "chip-absolute-out animation-chip-player";
		} else if (this.props.winner === 'dealer') {
			className = "chip-absolute-out animation-chip-dealer";
		} else {
			className = "chip-absolute";
		}

		return (
			<div
				ref={this.props.toAnimate}
				className={className}>
				<ChipImage chip={this.props.chip} />
			</div>
		)

	}
	
}

export default ChipBetter

// <div className={this.props.animate === true ? "chip-absolute animation-chip" : "chip-absolute"}>