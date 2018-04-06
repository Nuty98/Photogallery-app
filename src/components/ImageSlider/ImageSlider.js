import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import './ImageSlider.css';

class ImageSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ photoIndex: nextProps.clickedPhotoIndex });
  }

  movePrevRequest = () => {
    if (this.state.photoIndex !== 0)
      this.setState({
        photoIndex: (this.state.photoIndex - 1) % this.props.images.length,
      });
  };

  moveNextRequest = () => {
    if (this.state.photoIndex !== this.props.images.length - 1)
      this.setState({
        photoIndex: (this.state.photoIndex + 1) % this.props.images.length,
      });
  };

  render() {
    const { photoIndex } = this.state;
    const { images, isSliderOpen, handleClose } = this.props;
    return (
      <div>
        {isSliderOpen && (
          <Lightbox
            enableZoom={false}
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => handleClose()}
            onMovePrevRequest={this.movePrevRequest}
            onMoveNextRequest={this.moveNextRequest}
          />
        )}
      </div>
    );
  }
}

ImageSlider.defaultProps = {
  clickedPhotoIndex: null,
};

ImageSlider.propTypes = {
  images: PropTypes.array.isRequired,
  isSliderOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  clickedPhotoIndex: PropTypes.number,
};

export default ImageSlider;
