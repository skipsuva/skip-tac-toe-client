import React from 'react';
import GameActions from '../../actions/GameActions';
import PlayerName from './PlayerName';

var Game = React.createClass({
  handleValidInitials(playerInitials){
    GameActions.validInitials(playerInitials);
  },

  handleInvalidInitials(){
    GameActions.invalidInitials();
  },

  handleGameStart(playerInitials) {
    GameActions.createGame();
  },


  render() {
    return(
      <div>
        <h1>Game component</h1>
        <PlayerName
          onValidInitials={this.handleValidInitials}
          onInvalidInitials={this.handleInvalidInitials}
          onGameStart={this.handleGameStart}
        />
      </div>
    );
  }
});

module.exports = Game;
