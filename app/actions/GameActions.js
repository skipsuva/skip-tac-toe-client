import alt from '../alt';
import GameSource from '../sources/GameSource';

class GameActions {
  validInitials(playerInitials) {
    return playerInitials;
  }

  invalidInitials() {
    return true;
  }

  createGame() {
    return (dispatch) => {
    dispatch();
    var that = this;

    GameSource.createGame()
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

}

module.exports = alt.createActions(GameActions);
