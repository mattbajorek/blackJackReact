// import { applyMiddleware, compose, createStore } from 'redux';
import { createStore } from 'redux';
import reducers from './reducers';
// import logger from 'redux-logger';

// add middleware
// let finalCreateStore = compose(
// 	applyMiddleware(logger())
// )(createStore);

let initialState = {
	total: null,
	play: false,
	ratio: null,
	lastChip: {},
	currentChip: {},
	animateChip: false,
	animateCard: false,
	bet: 0,
	amounts: [25,15,5,5,5],
	betAmounts: [0,0,0,0,0],
	showCard: false,
	playerCards: [],
	dealerCards: [],
	hitNstay: false,
	playerScore: null,
	dealerScore: null,
	dealer: false,
	roundEnd: false,
	message: null
};

export default function configureStore(initialState = initialState) { // ES6 syntax for or
	return createStore(reducers, initialState); 
}