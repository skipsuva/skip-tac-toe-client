import React from 'react';

var LeaderboardItem = React.createClass({
  render() {
    return(
      <tr>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.playerMoveCount}</td>
      </tr>
    );
  }
});

module.exports = LeaderboardItem;
