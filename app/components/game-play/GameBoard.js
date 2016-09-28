import React from 'react';

var GameBoard = React.createClass({

  playerMove(e) {
    var selection = e.target.id;
    if(!this.props.store.gameplayData[selection].length && !this.props.store.gameIsOver){
      this.props.onValidPlayerMove(selection);
    }
  },

  render() {
    var gameplayData = this.props.store.gameplayData;

    return(
      <div>
        {this.props.store.canStartGame ? (
          <section className="hero is-dark is-medium">
            <div id="game-board-container" className="hero-body">
              <div className="has-text-centered">
                <div id="game-board-container">
                  <div className='game-tile-row'>
                    <div className='game-tile-column'>
                      <div id='row_1_col_1' className='notification is-info' onClick={this.playerMove}>
                        {gameplayData.row_1_col_1}
                      </div>
                    </div>
                    <div className='game-tile-column'>
                      <div id='row_1_col_2' className='notification is-info' onClick={this.playerMove}>
                        {gameplayData.row_1_col_2}
                      </div>
                    </div>
                    <div className='game-tile-column'>
                      <div id='row_1_col_3' className='notification is-info' onClick={this.playerMove}>
                        {gameplayData.row_1_col_3}
                      </div>
                    </div>
                  </div>
                  <div className='game-tile-row'>
                    <div className='game-tile-column'>
                      <div id='row_2_col_1' className='notification is-info' onClick={this.playerMove}>
                        {gameplayData.row_2_col_1}
                      </div>
                    </div>
                    <div className='game-tile-column'>
                      <div id='row_2_col_2' className='notification is-info' onClick={this.playerMove}>
                        {gameplayData.row_2_col_2}
                      </div>
                    </div>
                    <div className='game-tile-column'>
                      <div id='row_2_col_3' className='notification is-info' onClick={this.playerMove}>
                        {gameplayData.row_2_col_3}
                      </div>
                    </div>
                  </div>
                  <div className='game-tile-row'>
                    <div className='game-tile-column'>
                      <div id='row_3_col_1' className='notification is-info' onClick={this.playerMove}>
                        {gameplayData.row_3_col_1}
                      </div>
                    </div>
                    <div className='game-tile-column'>
                      <div id='row_3_col_2' className='notification is-info' onClick={this.playerMove}>
                        {gameplayData.row_3_col_2}
                      </div>
                    </div>
                    <div className='game-tile-column'>
                      <div id='row_3_col_3' className='notification is-info' onClick={this.playerMove}>
                        {gameplayData.row_3_col_3}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null }
      </div>
    );
  }
});

module.exports = GameBoard;
