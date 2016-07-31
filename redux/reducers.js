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
				total: state.total-action.currentChip.value,
				bet: state.bet+action.currentChip.value,
				amounts: [
					...state.amounts.slice(0, action.index),
					state.amounts[action.index]-1,
					...state.amounts.slice(action.index + 1)
				]
			});

		case 'ANIMATE':
			return Object.assign({}, state, {
				animate: !state.animate
			});

		default:
			return state;
	}
}