import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom';
import history from './history';

import configureStore from './store/configureStore';
import getRoutes from './routes';

const store = configureStore(window.INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={getRoutes(store)}/>
  </Provider>,
  document.getElementById('app')
);
