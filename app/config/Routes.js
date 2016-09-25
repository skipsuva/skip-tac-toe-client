import React          from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main           from '../components/Main';
import Leaderboard    from '../components/Leaderboard';
import GameContainer  from '../components/GameContainer';


var Routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Leaderboard} />
      <Route path='play' component={GameContainer}/>
    </Route>
  </Router>
);

module.exports = Routes;
