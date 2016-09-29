import React          from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Header         from '../components/Header';
import Main           from '../components/Main';
import LeaderboardContainer    from '../components/LeaderboardContainer';
import GameContainer  from '../components/GameContainer';


var Routes = (
  <Router history={hashHistory}>
    <Route component={Header}>
      <Route path='/' component={Main}>
        <IndexRoute component={LeaderboardContainer} />
        <Route path='play' component={GameContainer}/>
      </Route>
    </Route>
  </Router>
);

module.exports = Routes;
