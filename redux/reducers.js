/*function getId(state) {
	return state.todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId);
	}, -1) + 1;
}*/

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

		case 'ANIMATE':
			return Object.assign({}, state, {
				animate: !state.animate
			});

		case 'CLEAR BET':
			return Object.assign({}, state, {
				total: state.total + state.bet,
				bet: 0,
				amounts: [
					state.amounts[0] + state.betAmounts[0],
					state.amounts[1] + state.betAmounts[1],
					state.amounts[2] + state.betAmounts[2],
					state.amounts[3] + state.betAmounts[3],
					state.amounts[4] + state.betAmounts[4],
				],
				betAmounts: [0,0,0,0,0],
				currentChip: {}
			});

		default:
			return state;
	}
}