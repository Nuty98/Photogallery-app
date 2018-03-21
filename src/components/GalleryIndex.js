import React, { Component } from 'react';
import GalleryList from './GalleryList';

const photoList = [
  // require("../photos/food-salad-healthy-lunch.jpg"),
];

class GalleryIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      galleries: [],
    };
  }

  componentDidMount() {
    const url = 'http://api.programator.sk/gallery';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ galleries: data.galleries });
      });
  }

  render() {
    return <GalleryList galleries={this.state.galleries} type="index" />;
  }
}

export default GalleryIndex;
