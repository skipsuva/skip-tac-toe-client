import React from 'react';
import AltContainer from 'alt-container';
import LeaderboardStore from '../stores/LeaderboardStore';
import BeginGameButton from './leaderboard/BeginGameButton';
import Leaderboard from './leaderboard/Leaderboard';

var LeaderboardContainer = React.createClass({

  render() {
    return(
      <div>
        <AltContainer stores={{ LeaderboardStore }} >
          <BeginGameButton />
          <Leaderboard />
        </AltContainer>
      </div>
    );
  }
});

module.exports = LeaderboardContainer;
