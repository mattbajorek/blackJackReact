/*function getId(state) {
	return state.todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId);
	}, -1) + 1;
}*/

function resetChips(state) {
	return state.amounts.map((x,i) => x + state.betAmounts[i]);
}

function resetBet(state) {
	return state.betAmounts.map(x => 0);
}

function addChips(state, multiply) {
	// If multiply
	if (multiply !== undefined)	return state.amounts.map((x,i) => x + state.betAmounts[i]*multiply);
	// If no multiply
	return state.amounts.map((x,i) => x + state.betAmounts[i]);
}

export default function reducer(state, action) {
	switch (action.type) {
		/*case 'SELECT_NUM':
			Object.assign({}, state, {
				todos: [{
					text: action.text,
					completed: false,
					id: getId(state)
				}, ...state.todos] // ... adds rest of array
			})
			break;*/
		case 'TOTAL':
			return Object.assign({}, state, {
				total: action.total
			});

		case 'PLAY':
			return Object.assign({}, state, {
				ratio: state.total/500,
				play: !state.play
			});

		case 'BET':
			return Object.assign({}, state, {
				lastChip: state.currentChip,
				currentChip: action.currentChip,
				total: state.total - action.currentChip.value,
				bet: state.bet + action.currentChip.value,
				amounts: [
					...state.amounts.slice(0, action.index),
					state.amounts[action.index]-1,
					...state.amounts.slice(action.index + 1)
				],
				betAmounts: [
					...state.betAmounts.slice(0, action.index),
					state.betAmounts[action.index]+1,
					...state.betAmounts.slice(action.index + 1)
				],
				animate: !state.animate
			});

		case 'ANIMATE CHIP IN':
			return Object.assign({}, state, {
				animate: !state.animate
			});

		case 'CLEAR BET':
			return Object.assign({}, state, {
				total: state.total + state.bet,
				bet: 0,
				amounts: resetChips(state),
				betAmounts: resetBet(state),
				currentChip: {}
			});

		case 'PLACE BET':
			return Object.assign({}, state, {
				playerCards: [action.card]
			});

		case 'ADD CARD':
			if (action.user === 'player') {
				return Object.assign({}, state, {
					playerCards: state.playerCards.concat(action.card)
				});
			} else {
				return Object.assign({}, state, {
					dealerCards: state.dealerCards.concat(action.card)
				});
			}

		case 'SCORE':
			if (action.user === 'player') {
				return Object.assign({}, state, {
					playerScore: action.sum
				});
			} else {
				return Object.assign({}, state, {
					dealerScore: action.sum
				});
			}

		case 'HIT AND STAY':
			// If dealer make sure you turn dealer to true
			if (action.user === 'dealer') {
				// If dealer score is 16 or less, add another card
				if (state.dealerScore < 17) {
					return Object.assign({}, state, {
						dealerCards: state.dealerCards.concat(action.card),
						dealer: !state.dealer,
						hitNstay: !state.hitNstay
					});
				// Else if the dealer is above 16, end round
				} else {
					return Object.assign({}, state, {
						roundEnd: !state.roundEnd,
						hitNstay: !state.hitNstay
					});
				}
			// Else just toggle hit and stay buttons
			} else {
				return Object.assign({}, state, {
					hitNstay: !state.hitNstay
				});
			}

		case 'ROUND END':
			return Object.assign({}, state, {
				roundEnd: !state.roundEnd,
				lastChip: {},
				animate: !state.animate
			});

		case 'RESULT':
			if (action.winner === 'dealer') {
				// Clear bet, betAmounts, currentChip, dealer, dealerCards, dealerScore, playerCards, playerScore
				return Object.assign({}, state, {
					// Reset below
					lastChip: {},
					currentChip: {},
					bet: 0,
					betAmounts: resetBet(state),
					playerCards: [],
					dealerCards: [],
					playerScore: null,
					dealerScore: null,
					dealer: false,
					roundEnd: false
				});
			} else if (action.winner === 'player' && action.multiply !== undefined) {
				return Object.assign({}, state, {
					// Give user back winnings times multiply
					total: state.total + state.bet * action.multiply,
					amounts: addChips(state, action.multiply),
					betAmounts: resetBet(state),
					// Reset below
					lastChip: {},
					currentChip: {},
					bet: 0,
					playerCards: [],
					dealerCards: [],
					playerScore: null,
					dealerScore: null,
					dealer: false,
					roundEnd: false
				});
			}
			return Object.assign({}, state, {
				// Give user back bet
				total: state.total + state.bet,
				amounts: addChips(state),
				betAmounts: resetBet(state),
				// Reset below
				lastChip: {},
				currentChip: {},
				bet: 0,
				playerCards: [],
				dealerCards: [],
				playerScore: null,
				dealerScore: null,
				dealer: false,
				roundEnd: false
			});

		default:
			return state;
	}
}