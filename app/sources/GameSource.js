import $ from 'jquery'
import GameActions from '../actions/GameActions';
import GameStore from '../stores/GameStore';

var GameSource = {

  createGame(playerInitials) {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: 'http://locahost:3000/v1/create',
        method: 'POST',
        data: { player_initials: playerInitials }
      }).done(resolve).fail(reject);
    });
  },

  playerMove(gameId, selection) {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: 'http://locahost:3000/v1/player_move',
        method: 'PATCH',
        data: { id: gameId, player_move: selection }
      }).done(resolve).fail(reject);
    });
  },

  resetGame(gameId) {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: 'http://locahost:3000/v1/reset',
        method: 'PATCH',
        data: { id: gameId }
      }).done(resolve).fail(reject);
    });
  }

};

module.exports = GameSource;
