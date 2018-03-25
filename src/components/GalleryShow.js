import React, { Component } from 'react';
import GalleryList from './GalleryList';
import NotFound from './NotFound';
import UndefinedError from './UndefinedError';
import Loader from './Loader';
import TitleImage from './TitleImage';


class GalleryShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      images: [],
      titleImage: null
    };
  }

  componentDidMount() {
    const url = `http://api.programator.sk/gallery/${this.props.match.params.id}`;
    fetch(url)
      .then(res => {
        if (res.status !== 200) throw new Error(res.status);
        return res.json();
      })
      .then(
        data => {
          let titleImage
          if(data.images.length > 0)
            titleImage = `http://api.programator.sk/images/0x0/${data.images[0].fullpath}`
          
          this.setState({
            isLoaded: true,
            images: data.images,
            titleImage
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
    if (error) {
      return error.message === '404' ? <NotFound /> : <UndefinedError />;
    } else if (!isLoaded) {
      return <Loader category={this.props.match.params.id} />;
    }
    return (
      <div>
        <TitleImage image={titleImage}/>
          <GalleryList
            images={images}
            type="show"
            category={this.props.match.params.id}
          />
      </div>
    );
  }
}

export default GalleryShow;
