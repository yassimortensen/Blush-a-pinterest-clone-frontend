import React from 'react';

import Board from './Board'

class BoardContainer extends React.Component{

  render(){
    const boards = this.props.user.boards.map(board =>
      <div key={board.id} className='item'>
        <Board board={board} showBoard={this.props.showBoard}/>
      </div>
    )

    return(
      <div>
        {boards}
      </div>
    )
  }
}
export default BoardContainer
