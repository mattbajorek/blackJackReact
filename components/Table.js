import React, { Component } from 'react';
import '../scss/Table.scss';
import Intro from './Intro.js';
import { connect } from 'react-redux';

class Table extends Component {

	render() {
		return (
			<div className="wrapper">
				<div className="green-table"></div>
				<div className="wood-trim"></div>
				<Intro dispatch={this.props.dispatch} focus={this.props.focus} />
			</div>
		)
	}
	
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(Table);