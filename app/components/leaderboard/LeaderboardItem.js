import React from 'react';

var LeaderboardItem = React.createClass({
  render() {
    return(
      <tr>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.player_win_time}</td>
      </tr>
    );
  }
});

module.exports = LeaderboardItem;
