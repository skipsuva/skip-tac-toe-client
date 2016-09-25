import React        from 'react';
var ReactRouter  =require('react-router');
import Main         from '../components/Main';
import Leaderboard  from '../components/Leaderboard';

var hashHistory = ReactRouter.hashHistory;
var Router      = ReactRouter.Router;
var Route       = ReactRouter.Route;
var IndexRoute  = ReactRouter.IndexRoute;

var Routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Leaderboard} />
    </Route>
  </Router>
);

module.exports = Routes;
