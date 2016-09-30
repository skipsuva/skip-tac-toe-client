import alt from '../alt';
import LeaderboardActions from '../actions/LeaderboardActions';

class LeaderboardStore {
  constructor(){
    this.leaderboardItems = [];
    this.loading = true;

    this.bindListeners({
      handleFetchLeaderboard: LeaderboardActions.fetchLeaderboardItems,
      handleUpdateFetchLeaderboard: LeaderboardActions.updateFetchLeaderboard,
      handleFailedFetchLeaderboard: LeaderboardActions.failedFetchLeaderboard
    });
  }

  handleFetchLeaderboard() {
    this.loading = true;
   }

  handleUpdateFetchLeaderboard(data) {
    this.leaderboardItems = data;
    this.loading = false;
  }

  handleFailedFetchLeaderboard() {
  }
}

module.exports = alt.createStore(LeaderboardStore, 'LeaderboardStore');
