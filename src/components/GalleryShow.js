import React, { Component } from 'react';
import GalleryList from './GalleryList';
import NotFound from './NotFound';

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
      .then( res => res.json())
      .then(
        data => {
          // console.log(data);
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
    const { error, isLoaded, images} = this.state;
    console.log(error);
    if (error) {
      return <NotFound />
    } else if ( !isLoaded) {
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
