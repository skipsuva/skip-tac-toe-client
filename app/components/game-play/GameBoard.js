import React from 'react';

var GameBoard = React.createClass({


  render() {
    var gameplayData = this.props.gameplayData;

    return(
      <div>
        <div className='columns'>
          <div className='column'>
            <div className='notification is-info'>{gameplayData.row_one.a}</div>
          </div>
          <div className='column'>
            <div className='notification is-info'>{gameplayData.row_one.b}</div>
          </div>
          <div className='column'>
            <div className='notification is-info'>{gameplayData.row_one.c}</div>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <div className='notification is-info'>{gameplayData.row_two.a}</div>
          </div>
          <div className='column'>
            <div className='notification is-info'>{gameplayData.row_two.b}</div>
          </div>
          <div className='column'>
            <div className='notification is-info'>{gameplayData.row_two.c}</div>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <div className='notification is-info'>{gameplayData.row_three.a}</div>
          </div>
          <div className='column'>
            <div className='notification is-info'>{gameplayData.row_three.b}</div>
          </div>
          <div className='column'>
            <div className='notification is-info'>{gameplayData.row_three.c}</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = GameBoard;
