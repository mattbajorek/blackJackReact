import React, { Component } from 'react';
import pos1 from './Positions/pos1';
import pos2 from './Positions/pos2';
import pos3 from './Positions/pos3';
import pos4 from './Positions/pos4';
import pos5 from './Positions/pos5';
import pos6 from './Positions/pos6';
import pos7 from './Positions/pos7';
import pos8 from './Positions/pos8';
import pos9 from './Positions/pos9';
import pos10 from './Positions/pos10';

class Ato10 extends Component {

	render() {

		let number = this.props.number;
		let symbol = this.props.symbol;
		let center;

		switch (number) {
			case "A":
				center = pos1; break;
			case "2":
				center = pos2; break;
			case "3":
				center = pos3; break;
			case "4":
				center = pos4; break;
			case "5":
				center = pos5; break;
			case "6":
				center = pos6; break;
			case "7":
				center = pos7; break;
			case "8":
				center = pos8; break;
			case "9":
				center = pos9; break;
			case "10":
				center = pos10; break;
		}

		return (
			<div>
				{center.map(function(x,i) {
					return <div key={i} style={x} className="center-symbol">{symbol}</div>;
				})}
			</div>
		)

	}
	
}

export default Ato10