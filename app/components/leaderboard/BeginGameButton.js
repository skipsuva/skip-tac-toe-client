import React from 'react';
import { Link } from 'react-router'

var BeginGameButton = React.createClass({

  render() {
    return(
      <div>
        <h5>BeginGameButton component</h5>
        <Link to='/play'>Play!</Link>
      </div>
    );
  }
});

module.exports = BeginGameButton;
