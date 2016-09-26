import alt from '../alt';
import GameActions from '../actions/GameActions';
import GameSource from '../sources/GameSource';

class GameStore {
  constructor(){
    this.error = null;
    this.loading = false;
    this.canStartGame = false;
    this.gameId = null;
    this.playerInitials = null;
    this.gamePlayData = {};

    this.bindListeners({
      onValidInitials: GameActions.validInitials,
      onInvalidInitials: GameActions.invalidInitials,

      onCreateGame: GameActions.createGame,
      onLoadingCreateGame: GameActions.loadingCreateGame,
      onUpdateCreateGame: GameActions.updateCreateGame,
      onFailedCreateGame: GameActions.failedCreateGame
    });

    this.exportAsync(GameSource);
  }

  onValidInitials(playerInitials) {
    debugger;
    this.playerInitials = playerInitials;
    this.canStartGame = true;
  }

  onInvalidInitials() {
    debugger;
    this.playerInitials = null;
    this.canStartGame = false;
  }

  onCreateGame() {}

  onLoadingCreateGame() {

  }

  onUpdateCreateGame(data) {

  }

  onFailedCreateGame(error) {

  }

}

module.exports = alt.createStore(GameStore, 'GameStore');
