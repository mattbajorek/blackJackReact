import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';

// add middleware
let finalCreateStore = compose(
	applyMiddleware(logger())
)(createStore);

let initialState = {
	focus: 0,
	play: false,
	lastColor: null,
	color: null,
	lastValue: null,
	value: null,
	animate: false
};

export default function configureStore(initialState = initialState) { // ES6 syntax for or
	return createStore(reducers, initialState); 
}