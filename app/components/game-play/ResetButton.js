import React from 'react';

var ResetButton = React.createClass({

  render() {
    return(
      <div>
        {this.props.store.gameId && !this.props.store.gameIsOver ? (
          <div className="" onClick={this.props.resetGame}> Start Over </div>
        ) : null}
      </div>
    );
  }
});

module.exports = ResetButton;
