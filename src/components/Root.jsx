import React from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory } from 'react-router';

// components
import App from './App';
import RiskLevel from './riskLevel/RiskLevelContainer';

const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ RiskLevel } />
          <Route path="/2" component={ RiskLevel } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
