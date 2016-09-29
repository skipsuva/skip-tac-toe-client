import React from 'react';

var StartButton = React.createClass({

  render() {
    return(
      <div>
        {this.props.store.canCreateGame && !this.props.store.gameId ? (
          <div id="start-button" className="button is-danger" onClick={this.props.startGame}> Begin </div>
        ) : null}
      </div>
    );
  }
});

module.exports = StartButton;
