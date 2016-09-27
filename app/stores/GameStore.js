import alt from '../alt';
import GameActions from '../actions/GameActions';
import GameSource from '../sources/GameSource';

class GameStore {
  constructor(){
    this.error = null;
    this.loading = false;
    this.canCreateGame = false;
    this.canStartGame = false;
    this.gameId = null;
    this.playerInitials = null;
    this.gameplayData = this._setDefaultGameData();
    this.playerMoveCount = 0;
    this.playerWon = null;
    this.isStalemate = null;

    this.bindListeners({
      onValidInitials:    GameActions.validInitials,
      onInvalidInitials:  GameActions.invalidInitials,

      onCreateGame:       GameActions.createGame,
      onUpdateCreateGame: GameActions.updateCreateGame,
      onFailedCreateGame: GameActions.failedCreateGame,

      onPlayerMove:       GameActions.playerMove,
      onUpdatePlayerMove: GameActions.updatePlayerMove,
      onFailedPlayerMove: GameActions.failedPlayerMove,

      onResetGame:        GameActions.resetGame,
      onUpdateResetGame:  GameActions.updateResetGame,
      onFailedResetGame:  GameActions.failedResetGame
    });
  }

  onValidInitials(playerInitials) {
    this.playerInitials = playerInitials;
    this.canCreateGame = true;
  }

  onInvalidInitials() {
    this.playerInitials = null;
    this.canCreateGame = false;
  }

  onCreateGame() {
    this.loading = true;
  }

  onUpdateCreateGame(data) {
    this.gameId = data.id;
    this.gameplayData = data.game_data;
    this.playerMoveCount = data.player_move_count;
    this.loading = false;
    this.canStartGame = true;
  }

  onFailedCreateGame(error) {
    this.error = error;
    this.loading = false;
  }

  onPlayerMove(selection) {
    this.gameplayData[selection] = "O";
    this.playerMoveCount ++;
  }

  onUpdatePlayerMove(data) {
    this.gameplayData = data.game_data;
    this.playerMoveCount = data.player_move_count;
    this.playerWon = data.player_won;
    this.isStalemate = data.is_stalemate;
  }

  onFailedPlayerMove(error) {
    this.error = error;
    this.loading = false;
  }

  onResetGame() {
    this.gameplayData = this._setDefaultGameData();
    this.playerMoveCount = 0;
    this.loading = true;
  }

  onUpdateResetGame() {
    this.gameplayData = data.game_data;
    this.playerMoveCount = data.player_move_count;
    this.loading = false;
  }

  onFailedResetGame() {

  }

  _setDefaultGameData() {
    return {
      row_1_col_1: "",
      row_1_col_2: "",
      row_1_col_3: "",
      row_2_col_1: "",
      row_2_col_2: "",
      row_2_col_3: "",
      row_3_col_1: "",
      row_3_col_2: "",
      row_3_col_3: ""
    };
  }
}

module.exports = alt.createStore(GameStore, 'GameStore');
