import React, { Component } from 'react';
import GalleryList from './GalleryList';
import UndefinedError from './UndefinedError';

const photoList = [
  // require("../photos/food-salad-healthy-lunch.jpg"),
];

class GalleryIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      galleries: [],
    };
  }

  componentDidMount() {
    const url = 'http://api.programator.sk/gallery';
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
            galleries: data.galleries,
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
    const { isLoaded, error, galleries } = this.state;
    if (error) {
      return <UndefinedError />;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return <GalleryList galleries={galleries} type="index" />;
  }
}

export default GalleryIndex;
