import React from 'react';

var StartButton = React.createClass({

  render() {
    return(
      <div>
        {this.props.store.canCreateGame && !this.props.store.gameId ? (
          <div className="" onClick={this.props.startGame}> Play </div>
        ) : null}
      </div>
    );
  }
});

module.exports = StartButton;
