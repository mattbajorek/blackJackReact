import React, { Component } from 'react';
import '../scss/Card.scss';
import A from './Cards/A';
import C2 from './Cards/C2';
import C3 from './Cards/C3';
import C4 from './Cards/C4';
import C5 from './Cards/C5';
import C6 from './Cards/C6';
import C7 from './Cards/C7';
import C8 from './Cards/C8';
import C9 from './Cards/C9';
import C10 from './Cards/C10';
import Face from './Cards/Face';
import actions from '../redux/actions';
import selector from './Positions/symbol';

class Card extends Component {

	render() {

		let number = this.props.number;
		let symbol = this.props.symbol;

		return (
			<div className={"card " + selector(symbol)}>
				<div className="number top-number">{number}</div>
				<div className="symbol top-symbol">{symbol}</div>
				<div className="number bottom-number">{number}</div>
				<div className="symbol bottom-symbol">{symbol}</div>

				{(() => {
					switch (number) {
						case "A":
							return <A symbol={symbol} />
						case "2":
							return <C2 symbol={symbol} />
						case "3":
							return <C3 symbol={symbol} />
						case "4":
							return <C4 symbol={symbol} />
						case "5":
							return <C5 symbol={symbol} />
						case "6":
							return <C6 symbol={symbol} />
						case "7":
							return <C7 symbol={symbol} />
						case "8":
							return <C8 symbol={symbol} />
						case "9":
							return <C9 symbol={symbol} />
						case "10":
							return <C10 symbol={symbol} />
						case "J":
						case "Q":
						case "K":
							return <Face symbol={symbol} number={number} />
						default:
							return null
					}
				})()}

			</div>
		)

	}
	
}

export default Card