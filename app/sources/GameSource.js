import $ from 'jquery'
import GameActions from '../actions/GameActions';

var GameSource = {

  newGame(playerInitials) {
    return {
      remote(store, data) {
        return new Promise(function (resolve, reject) {
          $.ajax({
            url: 'http://localhost:3000/v1/create',
            method: 'POST',
            data: { player_initials: domain }
          }).done(resolve).fail(reject);
        });
      },

      loading: GameActions.loadingCreateGame,
      success: GameActions.updateCreateGame,
      error: GameActions.failedCreateGame
    };
  }

};

module.exports = GameSource;
