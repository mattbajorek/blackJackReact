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
				{ this.props.play === true && this.props.total !== null ? 
					<Holders
						dispatch={this.props.dispatch}
						total={this.props.total}
						ratio={this.props.ratio}
						lastChip={this.props.lastChip}
						currentChip={this.props.currentChip}
						animate={this.props.animate} /> :
					<Intro dispatch={this.props.dispatch} total={this.props.total} play={this.props.play} /> }
			</div>
		);
	}
	
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(Table);