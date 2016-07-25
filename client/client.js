import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';
import configureStore from '../redux/store';
import { Provider } from 'react-redux';

let initialState = {
	focus: 0,
	play: false,
	color: null,
};

let store = configureStore(initialState);

render(
	<Provider store={ store }>
		<App />
  </Provider>,
  document.getElementById('app')
);
