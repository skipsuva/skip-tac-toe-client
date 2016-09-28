import alt from '../alt';

class LeaderboardActions {

  fetchLeaderboardItems() {
    return (dispatch) => {
    dispatch();
    var that = this;

    GameSource.fetchLeaderboard()
      .then(function(data) {
        that.updateFetchLeaderboard(data);
      })
      .catch((errorMessage) => {
        that.failedFetchLeaderboard(errorMessage);
      });
    };
  }

  updateFetchLeaderboard(data) {
    return data;
  }

  failedFetchLeaderboard(error) {
    return error;
  }
}

module.exports = alt.createActions(LeaderboardActions);
