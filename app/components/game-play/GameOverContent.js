import React from 'react';
import { Link } from 'react-router'

var GameOverContent = React.createClass({

  render() {
    return(
      <div>
        {this.props.store.gameIsOver ? (
          <div>
            <div> Game Over! </div>
            <div onClick={this.props.startGame}> Play again? </div>
            <div>
              <Link to='/'>Leaderboard</Link>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
});

module.exports = GameOverContent;
