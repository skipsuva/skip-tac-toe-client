import React from 'react';

var Header = React.createClass({

  render() {
    return(
      <div>
      <section id="header" className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <div className="title">
              <img className="header-menu-png"
              src={require("../../vendor/assets/images/logo.png")}
              />
            </div>
          </div>
        </div>
      </section>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Header;
