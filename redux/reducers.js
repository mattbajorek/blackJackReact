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

		case 'ANIMATE CHIP':
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

		case 'ADD PLAYER CARD':
			return Object.assign({}, state, {
				playerCards: state.playerCards.concat(action.card)
			});

		case 'ADD DEALER CARD':
			return Object.assign({}, state, {
				dealerCards: state.dealerCards.concat(action.card)
			});

		case 'HIT AND STAY':
			return Object.assign({}, state, {
				hitNstay: !state.hitNstay
			});

		default:
			return state;
	}
}