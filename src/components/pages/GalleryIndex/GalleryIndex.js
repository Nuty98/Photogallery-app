import React, { Component } from 'react';
import GalleryList from '../../GalleryList/GalleryList';
import UndefinedError from '../../UndefinedError/UndefinedError';
import Loader from '../../Loader/Loader';
import TitleImage from '../../TitleImage/TitleImage';

class GalleryIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      galleries: [],
      titleImage: null,
    };
  }

  changeTitleImg = imagePath => {
    this.setState({
      titleImage: `http://api.programator.sk/images/0x0/${imagePath}`,
    });
  };

  compareGalleries = (first, second) => {
    return first.name.localeCompare(second.name);
  };

  findGalleryLength = (gallery, index) => {
    const url = `http://api.programator.sk/gallery/${gallery.path}`;
    fetch(url)
      .then(res => {
        if (res.status !== 200) throw new Error(res.status);
        return res.json();
      })
      .then(
        data => {
          let galleries = this.state.galleries;
          galleries[index].length = data.images.length;
          this.setState({
            isLoaded: true,
            galleries,
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  };

  componentDidMount() {
    const url = 'http://api.programator.sk/gallery';
    fetch(url)
      .then(res => {
        if (res.status !== 200) throw new Error(res.status);
        return res.json();
      })
      .then(
        data => {
          let initTitleImage;
          data.galleries.sort(this.compareGalleries);
          for (let i = 0; i < data.galleries.length; i++) {
            if (data.galleries[i].image != null) {
              initTitleImage = data.galleries[i].image.fullpath;
              break;
            }
          }
          this.setState({
            galleries: data.galleries,
            titleImage: `http://api.programator.sk/images/0x0/${initTitleImage}`,
          });
          this.state.galleries.map((gallery, index) =>
            this.findGalleryLength(gallery, index),
          );
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
    const { isLoaded, error, galleries, titleImage } = this.state;
    if (error) {
      return <UndefinedError />;
    } else if (!isLoaded) {
      return <Loader />;
    }
    return (
      <div>
        <TitleImage currentImage={titleImage} currentPage={'Kategórie'} />
        <GalleryList
          galleries={galleries}
          type="index"
          changeTitleImg={this.changeTitleImg}
        />
      </div>
    );
  }
}

export default GalleryIndex;
