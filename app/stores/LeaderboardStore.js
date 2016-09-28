import alt from '../alt';
import LeaderboardActions from '../actions/LeaderboardActions';

class LeaderboardStore {
  constructor(){
    this.leaderboardItems = [];

    this.bindListeners({
      handleFetchLeaderboard: LeaderboardActions.fetchLeaderboard,
      handleUpdateFetchLeaderboard: LeaderboardActions.updateFetchLeaderboard,
      handleFailedFetchLeaderboard: LeaderboardActions.failedFetchLeaderboard
    });
  }

  handleFetchLeaderboard() { }

  handleUpdateFetchLeaderboard(data) {
    this.leaderboardItems = data;
  }

  handleFailedFetchLeaderboard() {
  }



}

module.exports = alt.createStore(LeaderboardStore, 'LeaderboardStore');
