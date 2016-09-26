import alt from '../alt';
import GameActions from '../actions/GameActions';

class GameStore {
  constructor(){
    // set initial state

    this.bindListeners({
      // set listeners on actions
    });
  }

}

module.exports = alt.createStore(GameStore, 'GameStore');
