import React from 'react';
import AltContainer from 'alt-container';
import GameStore from '../stores/GameStore';
import Game from './game-play/Game';

var GameContainer = React.createClass({

  render() {
    return(
      <div>
        <AltContainer stores={{ GameStore }} >
          <Game />
        </AltContainer>
      </div>
    );
  }
});

module.exports = GameContainer;
