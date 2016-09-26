import React from 'react';
import GameActions from '../../actions/GameActions';
import PlayerName from './PlayerName';

var Game = React.createClass({
  handleGameStart(playerInitials) {
    GameActions.startGame(playerInitials);
  },


  render() {
    return(
      <div>
        <h1>Game component</h1>
        <PlayerName
          onGameStart={this.handleGameStart}
        />
      </div>
    );
  }
});

module.exports = Game;
