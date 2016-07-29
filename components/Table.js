import React, { Component } from 'react';
import '../scss/Table.scss';
import Intro from './Intro.js';
import Holders from './Holders.js';
import { connect } from 'react-redux';

class Table extends Component {

	render() {
		return (
			<div className="wrapper">
				<div className="green-table"></div>
				<div className="wood-trim"></div>
				{ this.props.play === true && this.props.focus !== 0 ? 
					<Holders
						dispatch={this.props.dispatch}
						focus={this.props.focus}
						lastColor={this.props.lastColor}
						color={this.props.color}
						lastValue={this.props.lastValue}
						value={this.props.value}
						animate={this.props.animate} /> :
					<Intro dispatch={this.props.dispatch} focus={this.props.focus} play={this.props.play} /> }
			</div>
		);
	}
	
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(Table);