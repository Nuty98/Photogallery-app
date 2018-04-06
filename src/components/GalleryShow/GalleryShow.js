import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import NotFound from '../NotFound/NotFound';
import UndefinedError from '../UndefinedError';
import Loader from '../Loader/Loader';
import TitleImage from '../TitleImage/TitleImage';
import ImageSlider from '../ImageSlider/ImageSlider';

class GalleryShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      images: [],
      titleImage: null,
      isSliderOpen: false,
      clickedPhotoIndex: null,
    };
  }

  componentDidMount() {
    const url = `http://api.programator.sk/gallery/${
      this.props.match.params.id
    }`;
    fetch(url)
      .then(res => {
        if (res.status !== 200) throw new Error(res.status);
        return res.json();
      })
      .then(
        data => {
          let titleImage = null;
          if (data.images.length > 0)
            titleImage = `http://api.programator.sk/images/0x0/${
              data.images[0].fullpath
            }`;

          this.setState({
            isLoaded: true,
            images: data.images,
            titleImage,
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { error, isLoaded, images, titleImage } = this.state;
    const imageUrls = images.map(
      (image, key) =>
        `http://api.programator.sk/images/1024x576/${image.fullpath}`
    );
    if (error) {
      return error.message === '404' ? <NotFound /> : <UndefinedError />;
    } else if (!isLoaded) {
      return <Loader category={this.props.match.params.id} />;
    }
    return (
      <div>
        <TitleImage
          currentImage={titleImage}
          currentPage={this.props.match.params.id}
        />
        <GalleryList
          images={images}
          type="show"
          category={this.props.match.params.id}
          handleGalleryItemClick={index => {
            this.setState({ isSliderOpen: true, clickedPhotoIndex: index });
          }}
        />
        <ImageSlider
          images={imageUrls}
          isSliderOpen={this.state.isSliderOpen}
          handleClose={() => this.setState({ isSliderOpen: false })}
          clickedPhotoIndex={this.state.clickedPhotoIndex}
        />
      </div>
    );
  }
}

export default GalleryShow;
