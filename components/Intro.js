import React, { Component } from 'react';
import '../scss/Intro.scss';

class Intro extends Component {

	render() {
		return (
			<div className="intro">
				<h1><span style={{color: 'red'}}>&hearts;</span>BL<span style={{color: 'black'}}>&spades;</span>CK<span style={{color: 'red'}}>&hearts;</span></h1>
				<h1><span style={{color: 'red'}}>&diams;</span>J<span style={{color: 'black'}}>&spades;</span>CK<span style={{color: 'red'}}>&diams;</span></h1>
				<h3>How big of a baller are you?</h3>
				<div className="baller">
					<button className="hundred" num="500">$500</button>
					<button className="thousand" num="5000">$5,000</button>
					<button className="million" num="50000">$50,000</button>
				</div>
				<button className="play">Play</button>
				<h4 className="intro-error"></h4>
			</div>
		)
	}
	
}

export default Intro;