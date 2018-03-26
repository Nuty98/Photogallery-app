import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

class ImageSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({photoIndex: nextProps.clickedPhotoIndex});
  }

  render() {
    const { photoIndex } = this.state;
    const { images, isSliderOpen, handleClose, clickedPhotoIndex } = this.props;
    return (
      <div>
        {isSliderOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length]
            }
            onCloseRequest={() => handleClose()}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default ImageSlider;