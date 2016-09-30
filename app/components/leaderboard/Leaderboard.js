import React from 'react';
import LeaderboardActions from '../../actions/LeaderboardActions';
import LeaderboardItem from './LeaderboardItem';
import LoadingRow from './LoadingRow';

var Leaderboard = React.createClass({

  componentWillMount(){
    LeaderboardActions.fetchLeaderboardItems();
  },

  render() {
    return(
      <div>
        <div className="leaderboard-container">
          <table id="leaderboard-table" className="table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Time to Win</th>
              </tr>
            </thead>
            <tbody>
              {!this.props.LeaderboardStore.loading ?
                (this.props.LeaderboardStore.leaderboardItems.map(function(item) {
                  return <LeaderboardItem
                    key={item.id}
                    item={item} />;
                })
              ): <LoadingRow /> }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

module.exports = Leaderboard;
