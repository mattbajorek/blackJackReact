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
		case 'SELECT_NUM':
			return Object.assign({}, state, {
				focus: action.num
			});

		case 'PLAY':
			return Object.assign({}, state, {
				play: !state.play
			});

		case 'BET':
			return Object.assign({}, state, {
				lastChip: state.currentChip,
				currentChip: action.currentChip
			});

		case 'ANIMATE':
			return Object.assign({}, state, {
				animate: !state.animate
			});

		default:
			return state;
	}
}