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
	animate: false,
	bet: 0,
	amounts: [25,15,5,5,5]
};

let store = configureStore(initialState);

render(
	<Provider store={ store }>
		<App />
  </Provider>,
  document.getElementById('app')
);
