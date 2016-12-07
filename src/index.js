import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';

import AppContainer from './containers/AppContainer';
import BudgetContainer from './containers/BudgetContainer';
import GiftsContainer from './containers/GiftsContainer';
import ManageRecipientsContainer from './containers/ManageRecipientsContainer';

import {Provider} from 'react-redux';
import store from './store';

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/budget" />
        <Route path="/budget" component={BudgetContainer} />
        <Route path="/recipients" component={ManageRecipientsContainer} />
        <Route path="/gifts" component={GiftsContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);