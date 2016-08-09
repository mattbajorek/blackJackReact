import React, { Component } from 'react';
import './Table.scss';
import Intro from './Intro/Intro';
import Holders from './Holders/Holders';
import Messages from './Messages/Messages';
import actions from '../../redux/actions';
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
						animateChip={this.props.animateChip}
            animateCard={this.props.animateCard} 
						bet={this.props.bet}
						amounts={this.props.amounts}
						playerCards={this.props.playerCards}
						dealerCards={this.props.dealerCards}
						hitNstay={this.props.hitNstay}
            playerScore={this.props.playerScore}
						dealerScore={this.props.dealerScore}
						dealer={this.props.dealer}
						roundEnd={this.props.roundEnd} /> :
					<Intro dispatch={this.props.dispatch} total={this.props.total} play={this.props.play} /> }
				{ this.props.message !== null ? <Messages result={this.props.message} /> : null }
			</div>
		);
	}
	
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(Table);