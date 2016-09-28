import React from 'react';

var Leaderboard = React.createClass({

  render() {
    return(
      <div>
        <div className="leaderboard-container">
          <table id="leaderboard-table" className="table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Moves to Win</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Misty Abbott</td>
                <td>Bass Guitar</td>
              </tr>
              <tr>
                <td>Misty Abbott</td>
                <td>Bass Guitar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

module.exports = Leaderboard;
