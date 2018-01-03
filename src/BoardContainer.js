import React from 'react';

import Board from './Board'

class BoardContainer extends React.Component{

  render(){
    const boards = this.props.user.boards.map(board =>
      <div key={board.id} className='photo'>
        <Board board={board} showBoard={this.props.showBoard}/>
      </div>
    )

    return(
      // <Masonry
      //   className={'App'} // default ''
      //   elementType={'ul'} // default 'div'
      //   options={masonryOptions} // default {}
      //   disableImagesLoaded={false} // default false
      //   updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      //   >
      <div>
        <h2>{this.props.user.name}'s boards</h2>
        {boards}
      </div>
    )
  }
}
export default BoardContainer

// <ReactScrollPagination
//   fetchFunc={theFuncToFetchNextPage}
// />
// </Masonry>
