import React, { Component } from 'react';
import '../scss/Table.scss';
import Intro from './Intro.js'

class Table extends Component {

	render() {
		return (
			<div className="wrapper">
				<div className="green-table"></div>
				<div className="wood-trim"></div>
				<Intro />
			</div>
		)
	}
	
}

export default Table;