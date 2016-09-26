import $ from 'jquery'
import GameActions from '../actions/GameActions';
import GameStore from '../stores/GameStore';

var GameSource = {

  createGame(playerInitials) {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: 'https://skip-tac-toe-api.herokuapp.com/v1/create',
        method: 'POST',
        data: { player_initials: playerInitials }
      }).done(resolve).fail(reject);
    });
  }

};

module.exports = GameSource;
