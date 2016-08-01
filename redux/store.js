import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';

// add middleware
let finalCreateStore = compose(
	applyMiddleware(logger())
)(createStore);

let initialState = {
	total: null,
	play: false,
	ratio: null,
	lastChip: {},
	currentChip: {},
	animate: false,
	bet: 0,
	amounts: [25,15,5,5,5],
	betAmounts: [0,0,0,0,0]
};

export default function configureStore(initialState = initialState) { // ES6 syntax for or
	return createStore(reducers, initialState); 
}