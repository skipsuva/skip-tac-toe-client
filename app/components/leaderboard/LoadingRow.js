import React from 'react';

var LoadingRow = React.createClass({
  render() {
    return(
      <tr>
        <td colSpan="2">
          <div id="loading-table-button"  className="button is-loading"> </div>
        </td>
      </tr>
    );
  }
});

module.exports = LoadingRow;
