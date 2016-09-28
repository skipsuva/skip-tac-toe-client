import React from 'react';

var GameBoard = React.createClass({

  playerMove(e) {
    var selection = e.target.id;
    if(!this.props.store.gameplayData[selection].length){
      this.props.onValidPlayerMove(selection);
    }
  },

  render() {
    var gameplayData = this.props.store.gameplayData;

    return(
      <div>
        {this.props.store.canStartGame ? (
          <div>
            <div className='columns'>
              <div className='column'>
                <div id='row_1_col_1' className='notification is-info' onClick={this.playerMove}>
                  {gameplayData.row_1_col_1}
                </div>
              </div>
              <div className='column'>
                <div id='row_1_col_2' className='notification is-info' onClick={this.playerMove}>
                  {gameplayData.row_1_col_2}
                </div>
              </div>
              <div className='column'>
                <div id='row_1_col_3' className='notification is-info' onClick={this.playerMove}>
                  {gameplayData.row_1_col_3}
                </div>
              </div>
            </div>
            <div className='columns'>
              <div className='column'>
                <div id='row_2_col_1' className='notification is-info' onClick={this.playerMove}>
                  {gameplayData.row_2_col_1}
                </div>
              </div>
              <div className='column'>
                <div id='row_2_col_2' className='notification is-info' onClick={this.playerMove}>
                  {gameplayData.row_2_col_2}
                </div>
              </div>
              <div className='column'>
                <div id='row_2_col_3' className='notification is-info' onClick={this.playerMove}>
                  {gameplayData.row_2_col_3}
                </div>
              </div>
            </div>
            <div className='columns'>
              <div className='column'>
                <div id='row_3_col_1' className='notification is-info' onClick={this.playerMove}>
                  {gameplayData.row_3_col_1}
                </div>
              </div>
              <div className='column'>
                <div id='row_3_col_2' className='notification is-info' onClick={this.playerMove}>
                  {gameplayData.row_3_col_2}
                </div>
              </div>
              <div className='column'>
                <div id='row_3_col_3' className='notification is-info' onClick={this.playerMove}>
                  {gameplayData.row_3_col_3}
                </div>
              </div>
            </div>
          </div>
        ) : null }
      </div>
    );
  }
});

module.exports = GameBoard;
