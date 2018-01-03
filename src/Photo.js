import React from 'react';
import LazyLoad from 'react-lazyload';

class Photo extends React.Component{

  handleClick = () => {
    this.props.showPicture(this.props.photo)
  }

  render(){
    return(
      <LazyLoad height={'100%'} offset={200}>
        <div className="card w3-panel w3-cell w3-card-3 w3-white w3-hover-shadow w3-round-large w3-padding-16">
          <img onClick={this.handleClick} className="photo w3-round" src={this.props.photo.url} alt='' />
          <p className="w3-round-large">
            Photo by <a style={{fontFamily: 'Fredericka the Great', fontSize: '20px'}} href={this.props.photo.photographer_link}>{this.props.photo.photographer_name}</a><br />
            on <a style={{fontFamily: 'Fredericka the Great', fontSize: '20px'}} href="https://unsplash.com/?utm_source=Blush&utm_medium=referral">Unsplash</a>
          </p>
        </div>
      </LazyLoad>
    )
  }
}
export default Photo
