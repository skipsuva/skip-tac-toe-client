import React from 'react';
import { Link } from 'react-router'

var GameOverContent = React.createClass({

  render() {
    var gameOverText;
    if(this.props.store.isStalemate) {
      gameOverText = "Stalemate!";
    } else if (this.props.store.playerWon) {
      gameOverText = "You Won!";
    } else {
      gameOverText = "You Lost!";
    }

    return(
      <div>
        {this.props.store.gameIsOver ? (
          <div id="game-over-container">
            <div id="game-over-text">
              {gameOverText}
            </div>
            <div className="game-over-buttons-container">
              <div id="start-over-button" className = "button is-success is-outlined" onClick={this.props.startGame}> Play again? </div>
              <Link id="leaderboard-button" className="button is-info is-outlined" to='/'>Leaderboard</Link>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
});

module.exports = GameOverContent;
