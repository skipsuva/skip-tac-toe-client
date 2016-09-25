import React from 'react';

var Header = React.createClass({

  render() {
    return(
      <div>
        <h1>Header component</h1>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Header;
