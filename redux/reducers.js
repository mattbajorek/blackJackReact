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

function startingChips(state) {
	var amounts = [25,15,5,5,5];
	return state.amounts.map((x,i) => amounts[i]);
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
				animateChip: !state.animateChip
			});

		case 'ANIMATE CHIP IN':
			return Object.assign({}, state, {
				animateChip: !state.animateChip
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
				playerCards: [action.card],
				lastChip: {}
			});

		case 'ADD CARD':
			if (action.user === 'player') {
				return Object.assign({}, state, {
					playerCards: state.playerCards.concat(action.card),
					animateCard: !state.animateCard
				});
			} else {
				return Object.assign({}, state, {
					dealerCards: state.dealerCards.concat(action.card),
					animateCard: !state.animateCard
				});
			}

		case 'ANIMATE CARD IN':
			return Object.assign({}, state, {
				animateCard: !state.animateCard
			});

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
						hitNstay: !state.hitNstay,
						showCard: !state.showCard
					});
				// Else if the dealer is above 16, end round
				} else {
					return Object.assign({}, state, {
						roundEnd: !state.roundEnd,
						hitNstay: !state.hitNstay,
						showCard: !state.showCard,
						animateCard: !state.animateCard
					});
				}
			// Else just toggle hit and stay buttons
			} else {
				return Object.assign({}, state, {
					hitNstay: !state.hitNstay,
					// Second dealer card needs to turn the animation off afterwards
					animateCard: !state.animateCard
				});
			}

		case 'ROUND END':
			return Object.assign({}, state, {
				roundEnd: !state.roundEnd
			});

		case 'RESULT':
			if (action.winner === 'dealer') {
				// Clear bet, betAmounts, currentChip, dealer, dealerCards, dealerScore, playerCards, playerScore
				return Object.assign({}, state, {
					// Reset below
					currentChip: {},
					bet: 0,
					betAmounts: resetBet(state),
					showCard: false,
					playerCards: [],
					dealerCards: [],
					playerScore: null,
					dealerScore: null,
					dealer: false,
					roundEnd: false,
					message: null
				});
			} else if (action.winner === 'player' && action.multiply !== undefined) {
				return Object.assign({}, state, {
					// Give user back winnings times multiply
					total: state.total + state.bet * action.multiply,
					amounts: addChips(state, action.multiply),
					betAmounts: resetBet(state),
					// Reset below
					showCard: false,
					currentChip: {},
					bet: 0,
					playerCards: [],
					dealerCards: [],
					playerScore: null,
					dealerScore: null,
					dealer: false,
					roundEnd: false,
					message: null
				});
			}
			return Object.assign({}, state, {
				// Give user back bet
				total: state.total + state.bet,
				amounts: addChips(state),
				betAmounts: resetBet(state),
				// Reset below
				showCard: false,
				currentChip: {},
				bet: 0,
				playerCards: [],
				dealerCards: [],
				playerScore: null,
				dealerScore: null,
				dealer: false,
				roundEnd: false,
				message: null
			});

		case 'MESSAGE':
			return Object.assign({}, state, {
				message: action.message,
				// Animate offsets the animate from the chip and card animations
				animateChip: !state.animateChip,
				animateCard: !state.animateCard
			});

		case 'GAME OVER':
			// Return to starting amounts
			return Object.assign({}, state, {
				animateCard: false,
				animateChip: false,
				amounts: startingChips(state),
				bet: 0,
				betAmounts: resetBet(state),
				currentChip: {},
				showCard: false,
				playerCards: [],
				dealerCards: [],
				playerScore: null,
				dealerScore: null,
				dealer: false,
				roundEnd: false,
				message: null,
				play: false,
				total: null
			});

		default:
			return state;
	}
}