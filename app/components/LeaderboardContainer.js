import React from 'react';
import AltContainer from 'alt-container';
import LeaderboardStore from '../stores/LeaderboardStore';

var LeaderboardContainer = React.createClass({

  render() {
    return(
      <div>
        <AltContainer stores={{ LeaderboardStore }} >
          <h1>LeaderboardContainer component</h1>
        </AltContainer>
      </div>
    );
  }
});

module.exports = LeaderboardContainer;
