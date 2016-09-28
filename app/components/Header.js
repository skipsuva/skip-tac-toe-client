import React from 'react';

var Header = React.createClass({

  render() {
    return(
      <div>
      <section id="header" className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Skip Tac Toe
            </h1>
          </div>
        </div>
      </section>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Header;
