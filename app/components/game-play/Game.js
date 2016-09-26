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

  handleValidPlayerMove(selection) {
    var gameId = this.props.GameStore.gameId;
    GameActions.playerMove(gameId, selection);
  },


  render() {
    var startButton;
    var gameBoard;
    if(this.props.GameStore.canCreateGame){
      startButton = <div className="" onClick={this.startGame}> Play </div>;
    }
    if(this.props.GameStore.canStartGame){
      gameBoard = <GameBoard
        gameplayData={this.props.GameStore.gameplayData}
        onValidPlayerMove={this.handleValidPlayerMove}
      />;
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
        {gameBoard}
      </div>
    );
  }
});

module.exports = Game;
