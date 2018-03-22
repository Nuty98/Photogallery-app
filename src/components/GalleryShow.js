import React, { Component } from 'react';
import GalleryList from './GalleryList';
import NotFound from './NotFound';
import UndefinedError from './UndefinedError';

class GalleryShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      images: [],
    };
  }

  componentDidMount() {
    const url = `http://api.programator.sk/gallery/${this.props.match.params.id}`;
    fetch(url)
      .then(res => {
          if (res.status !== 200) 
            throw new Error(res.status);
          return res.json();
        })
      .then(
        data => {
          this.setState({
            isLoaded: true,
            images: data.images,
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
    const { error, isLoaded, images } = this.state;
    if (error) {
      return error.message === '404' ? <NotFound /> : <UndefinedError />;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <GalleryList
        images={images}
        type="show"
        category={this.props.match.params.id}
      />
    );
  }
}

export default GalleryShow;
