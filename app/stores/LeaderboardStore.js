import alt from '../alt';
import LeaderboardActions from '../actions/LeaderboardActions';

class LeaderboardStore {
  constructor(){
    // set initial state

    this.bindListeners({
      // set listeners on actions
    });
  }

}

module.exports = alt.createStore(LeaderboardStore, 'LeaderboardStore');
