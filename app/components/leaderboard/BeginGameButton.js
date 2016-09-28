import React from 'react';
import { Link } from 'react-router'

var BeginGameButton = React.createClass({

  render() {
    return(
      <div>
        <div className="begin-game-button-container">
          <Link id= "begin-game-button" className="button is-success is-outlined" to='/play'>PLAY</Link>
        </div>
      </div>
    );
  }
});

module.exports = BeginGameButton;
