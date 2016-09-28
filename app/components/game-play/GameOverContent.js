import React from 'react';

var GameOverContent = React.createClass({

  render() {
    return(
      <div>
        {this.props.store.gameIsOver ? (
          <div> Game Over! </div>
        ) : null}
      </div>
    );
  }
});

module.exports = GameOverContent;
