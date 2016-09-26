import React from 'react';
import GameActions from '../../actions/GameActions';
import PlayerName from './PlayerName';
import GameBoard from './GameBoard';

var Game = React.createClass({
  handleValidInitials(playerInitials){
    GameActions.validInitials(playerInitials);
  },

  handleInvalidInitials(){
    GameActions.invalidInitials();
  },

  startGame() {
    GameActions.createGame(this.props.GameStore.playerInitials);
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
        <GameBoard
          gameplayData={this.props.GameStore.gameplayData}
        />
      </div>
    );
  }
});

module.exports = Game;
