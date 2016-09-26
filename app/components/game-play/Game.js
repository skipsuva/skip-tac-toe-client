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

  startGame() {
    GameActions.createGame();
  },


  render() {
    var startButton;
    if(this.props.GameStore.canStartGame){
      startButton = <div className="" onClick={this.startGame}> Play </div>;
    }

    return(
      <div>
        <h1>Game component</h1>
        <PlayerName
          onValidInitials={this.handleValidInitials}
          onInvalidInitials={this.handleInvalidInitials}
          onGameStart={this.handleGameStart}
        />
        {startButton}
      </div>
    );
  }
});

module.exports = Game;
