import React from 'react';
import GameActions from '../../actions/GameActions';
import PlayerName from './PlayerName';
import GameBoard from './GameBoard';
import StartButton from './StartButton';
import ResetButton from './ResetButton';
import GameOverContent from './GameOverContent';

var Game = React.createClass({
  handleValidInitials(playerInitials){
    GameActions.validInitials(playerInitials);
  },

  handleInvalidInitials(){
    GameActions.invalidInitials();
  },

  onStartGame() {
    GameActions.createGame(this.props.GameStore.playerInitials);
  },

  onResetGame() {
    var gameId = this.props.GameStore.gameId;
    GameActions.resetGame(gameId);
  },

  handleValidPlayerMove(selection) {
    var gameId = this.props.GameStore.gameId;
    GameActions.playerMove(gameId, selection);
  },


  render() {
    var store = this.props.GameStore;
    
    return(
      <div>
        <PlayerName
          onValidInitials={this.handleValidInitials}
          onInvalidInitials={this.handleInvalidInitials}
          onGameStart={this.handleGameStart}
        />
        <StartButton
          startGame={this.onStartGame}
          store={this.props.GameStore}
        />
        <GameBoard
          store={this.props.GameStore}
          onValidPlayerMove={this.handleValidPlayerMove}
        />
        <ResetButton
          resetGame={this.onResetGame}
          store={this.props.GameStore}
        />
        <GameOverContent
          store={this.props.GameStore}
        />
      </div>
    );
  }
});

module.exports = Game;
