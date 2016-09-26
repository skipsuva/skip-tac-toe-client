import alt from '../alt';

class GameActions {
  validInitials(playerInitials) {
    debugger;
    return playerInitials;
  }

  invalidInitials() {
    debugger;
    return true;
  }

  createGame(playerInitials) {
    return playerInitials;
  }

  loadingCreateGame() {
    return true;
  }

  updateCreateGame(data) {
    return data;
  }

  failedCreateGame(error) {
    return error;
  }

}

module.exports = alt.createActions(GameActions);
