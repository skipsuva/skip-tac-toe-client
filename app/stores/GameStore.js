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
    this.gameplayData = this.setDefaultGameData();
    this.playerMoveCount = 0;

    this.bindListeners({
      onValidInitials: GameActions.validInitials,
      onInvalidInitials: GameActions.invalidInitials,

      onCreateGame: GameActions.createGame,
      onUpdateCreateGame: GameActions.updateCreateGame,
      onFailedCreateGame: GameActions.failedCreateGame
    });
  }

  onValidInitials(playerInitials) {
    this.playerInitials = playerInitials;
    this.canStartGame = true;
  }

  onInvalidInitials() {
    this.playerInitials = null;
    this.canStartGame = false;
  }

  onCreateGame() {
    this.loading = true;
  }

  onUpdateCreateGame(data) {
    this.gameId = data.id;
    this.gameplayData = data.game_data;
    this.playerMoveCount = data.player_move_count;
    this.loading = false;
  }

  onFailedCreateGame(error) {
    this.error = error;
    this.loading = false;
  }

  setDefaultGameData() {
    return {
      row_one: {a: '', b: '', c: ''},
      row_two: {a: '', b: '', c: ''},
      row_three: {a: '', b: '', c: ''}
    };
  }
}

module.exports = alt.createStore(GameStore, 'GameStore');
