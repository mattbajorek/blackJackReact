import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';
import configureStore from '../redux/store';
import { Provider } from 'react-redux';

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

let store = configureStore(initialState);

render(
	<Provider store={ store }>
		<App />
  </Provider>,
  document.getElementById('app')
);
