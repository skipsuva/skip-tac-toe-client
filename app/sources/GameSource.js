import $ from 'jquery'
import GameActions from '../actions/GameActions';
import GameStore from '../stores/GameStore';

var GameSource = {

  createGame(playerInitials) {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: 'http://localhost:3000/v1/create',
        method: 'POST',
        data: { player_initials: playerInitials }
      }).done(resolve).fail(reject);
    });
  }

};

module.exports = GameSource;
