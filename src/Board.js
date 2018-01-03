import React from 'react';

class Board extends React.Component{

  handleClick = () => {
    this.props.showBoard(this.props.board)
  }

  render(){
    return(
      <div onClick={this.handleClick} className="card w3-panel w3-cell w3-card-3 w3-white w3-hover-shadow w3-round-large w3-padding-16">
        <img className="photo w3-round" src={this.props.board.pics.pics[0].url} alt='' />
        <p>{this.props.board.name}</p>
      </div>
    )
  }
}
export default Board
