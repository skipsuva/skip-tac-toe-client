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
          onStartGame={this.onStartGame}
          store={this.props.GameStore}
        />
        <GameBoard
          onValidPlayerMove={this.handleValidPlayerMove}
          resetGame={this.onResetGame}
          startGame={this.onStartGame}
          store={this.props.GameStore}
        />
      </div>
    );
  }
});

module.exports = Game;
