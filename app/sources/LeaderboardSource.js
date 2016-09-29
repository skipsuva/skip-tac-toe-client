import $ from 'jquery'

var LeaderboardSource = {

  fetchLeaderboard() {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: 'https://skip-tac-toe-api.herokuapp.com/v1/leaderboard',
        method: 'GET',
        data: { }
      }).done(resolve).fail(reject);
    });
  }

};

module.exports = LeaderboardSource;
