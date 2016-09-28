import React from 'react';
import StartButton from './StartButton';

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
      {!this.props.store.gameId ? (
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
                  <StartButton
                    startGame={this.props.onStartGame}
                    store={this.props.store}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ): null}
      </div>
    );
  }
});

module.exports = PlayerName;
