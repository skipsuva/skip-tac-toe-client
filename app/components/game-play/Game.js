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

  resetGame() {
    var gameId = this.props.GameStore.gameId;
    GameActions.resetGame(gameId);
  },

  handleValidPlayerMove(selection) {
    var gameId = this.props.GameStore.gameId;
    GameActions.playerMove(gameId, selection);
  },


  render() {
    var store = this.props.GameStore;
    var startButton;
    var gameBoard;
    var resetGameButton;

    if(store.canCreateGame && !store.gameId ){
      startButton = <div className="" onClick={this.startGame}> Play </div>;
    } else { startButton = "";}
    if(store.canStartGame){
      gameBoard = <GameBoard
        gameplayData={store.gameplayData}
        onValidPlayerMove={this.handleValidPlayerMove}
      />;
    }
    if(store.gameId && (store.playerWon === null) && (store.isStalemate === null)) {
      resetGameButton = <div className="" onClick={this.resetGame}> Start Over </div>;
    } else {resetGameButton = "";}

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
        {resetGameButton}
      </div>
    );
  }
});

module.exports = Game;
