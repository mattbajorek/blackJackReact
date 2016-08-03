import React, { Component } from 'react';
import './Intro.scss';
import MoneySelection from './MoneySelection.js';
import actions from '../../../redux/actions';

const name = ['hundred','thousand','million'];
const num = [500,5000,50000];

class Intro extends Component {

	constructor() {
    super();
    this.state = {
      playFocus: false
    };
  }

	handleSubmit(e) {
		e.preventDefault();
		this.setState({playFocus: true})
		if (this.props.total !== 0) {
			this.props.dispatch(actions.play());
		}
	}

	render() {

		let dispatch = this.props.dispatch;
		let total = this.props.total;

		return (
			<div className="intro">
				<h1><span style={{color: 'red'}}>&hearts;</span>BL<span style={{color: 'black'}}>&spades;</span>CK<span style={{color: 'red'}}>&hearts;</span></h1>
				<h1><span style={{color: 'red'}}>&diams;</span>J<span style={{color: 'black'}}>&spades;</span>CK<span style={{color: 'red'}}>&diams;</span></h1>
				<h3>How big of a baller are you?</h3>
				<div className="baller">
					{num.map(function(x,i) {
						return <MoneySelection key={i} name={name[i]} num={x} dispatch={dispatch} total={total} />;
					})}
				</div>
				<button className="play" onClick={this.handleSubmit.bind(this)}>Play</button>
				{ this.state.playFocus === true && this.props.total === null ? 
					<h4 className="intro-error">Please select an amount</h4> : null }
			</div>
		)

	}
		
}

export default Intro