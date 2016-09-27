import alt from '../alt';
import GameSource from '../sources/GameSource';

class GameActions {
  validInitials(playerInitials) {
    return playerInitials;
  }

  invalidInitials() {
    return true;
  }

  createGame(playerInitials) {
    return (dispatch) => {
    dispatch();
    var that = this;

    GameSource.createGame(playerInitials)
      .then(function(data) {
        that.updateCreateGame(data);
      })
      .catch((errorMessage) => {
        that.failedCreateGame(errorMessage);
      });
    };
  }

  updateCreateGame(data) {
    return data;
  }

  failedCreateGame(error) {
    return error;
  }

  playerMove(gameId, selection) {
    return (dispatch) => {
    dispatch(selection);
    var that = this;

    GameSource.playerMove(gameId, selection)
      .then(function(data) {
        that.updatePlayerMove(data);
      })
      .catch((errorMessage) => {
        that.failedPlayerMove(errorMessage);
      });
    };
  }

  updatePlayerMove(data) {
    return data;
  }

  failedPlayerMove(error) {
    return error;
  }

  resetGame(gameId) {
    return (dispatch) => {
    dispatch();
    var that = this;

    GameSource.resetGame(gameId)
      .then(function(data) {
        that.updateResetGame(data);
      })
      .catch((errorMessage) => {
        that.failedResetGame(errorMessage);
      });
    };
  }

  updateResetGame(data) {
    return data;
  }

  failedResetGame(error) {
    return error;
  }

}

module.exports = alt.createActions(GameActions);
