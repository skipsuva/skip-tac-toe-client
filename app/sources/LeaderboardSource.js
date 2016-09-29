import $ from 'jquery'

var LeaderboardSource = {

  fetchLeaderboard() {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: 'http://localhost:3000/v1/leaderboard',
        method: 'GET',
        data: { }
      }).done(resolve).fail(reject);
    });
  }

};

module.exports = LeaderboardSource;
