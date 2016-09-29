import alt from '../alt';
import LeaderboardSource from '../sources/LeaderboardSource';

class LeaderboardActions {
  fetchLeaderboardItems() {
    return (dispatch) => {
    dispatch();
    var that = this;

    LeaderboardSource.fetchLeaderboard()
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
