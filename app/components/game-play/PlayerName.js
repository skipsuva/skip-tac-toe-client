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

  startGame(){
    this.props.onGameStart();
  },

  render() {
    return(
      <div>
        <h3>PlayerName component</h3>
        <input
          className=""
          placeholder="Enter your initials"
          type="text"
          onChange={this.validateInitials}
        />
        <div
          className=""
          onClick={this.startGame}>
          Play
        </div>
      </div>
    );
  }
});

module.exports = PlayerName;
