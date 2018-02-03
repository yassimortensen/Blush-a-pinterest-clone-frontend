import React from 'react';
import Photo from './Photo';

class PhotoContainer extends React.Component{
  render(){
    const photos = this.props.photos.map(photo =>
      <div key={photo.url} className='item'>
        <Photo photo={photo} showPicture={this.props.showPicture}/>
      </div>
    )

    return(
        <div onClick={this.props.handlePhotoClick}>
          {photos}
        </div>
    )
  }
}
export default PhotoContainer
