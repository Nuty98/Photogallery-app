import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GalleryList from './GalleryList';

const photoList = [
  // require("../photos/food-salad-healthy-lunch.jpg"),
];

class GalleryIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      galleries: [
        {
          name: 'Príroda',
          url: require('../photos/landscape-meadow-field-mountains-66874.jpeg'),
        },
        {
          name: 'Architektúra',
          url: require('../photos/pexels-photo-261187.jpeg'),
        },
        {
          name: 'Ľudia',
          url: require('../photos/pexels-photo-27411.jpg'),
        },
        {
          name: 'Jedlo',
          url: require('../photos/food-salad-healthy-lunch.jpg'),
        },
        {
          name: 'Autá',
          url: require('../photos/pexels-photo-210019.jpeg'),
        },
      ],
    };
  }


  render() {
    return (
      <div>
        <div className="container">
          <GalleryList galleries={this.state.galleries} type={'index'} />
        </div>
      </div>
    );
  }
}

export default GalleryIndex;
