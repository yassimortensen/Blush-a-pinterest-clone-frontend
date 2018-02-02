import React from 'react';

import Photo from './Photo';
// import Masonry from 'react-masonry-component';

class PhotoContainer extends React.Component{
  render(){
    const photos = this.props.photos.map(photo =>
      <div key={photo.url} className='item'>
        <Photo photo={photo} showPicture={this.props.showPicture}/>
      </div>
    )

    return(
      // <Masonry
      //   className={'App'} // default ''
      //   elementType={'div'} // default 'div'
      //   disableImagesLoaded={false} // default false
      //   updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
      //   >
        <div onClick={this.props.handlePhotoClick}>
          {photos}
        </div>
      // </Masonry>
    )
  }
}
export default PhotoContainer
