import React from 'react';

var PlayerName = React.createClass({
  validateInitials(e) {
    var initials = e.target.value;
    // validate player entry
    this.setState({playerInitials: e.target.value});
  },

  startGame(){
    this.props.onGameStart(this.state.playerInitials);
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
