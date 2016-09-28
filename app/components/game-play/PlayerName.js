import React from 'react';

var PlayerName = React.createClass({

  validateInitials(e) {
    var initials = e.target.value;
    if(initials.length > 2) {
      this.props.onValidInitials(initials);
    } else {
      this.props.onInvalidInitials();
    }
  },

  render() {
    return(
      <div>
        <section className="hero is-dark is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="control">
                <div id="name-input-container" className="control">
                  <input
                    id="name-input"
                    className="input"
                    placeholder="Enter Your Initials"
                    type="text"
                    onChange={this.validateInitials}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
});

module.exports = PlayerName;
