import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import CategoryItem from './CategoryItem';


class GalleryList extends Component {

  generateItemList = () => {
    if(this.props.type == "index"){
      return this.props.galleries.map( (category, i) => {
        return (
          <CategoryItem key={i} category={category} /> 
        );
      });
    } else {
      return this.props.gallery.map( (picture, i) => {
        return <GalleryItem key={i} url={picture.url} />
      });
    }
  }
  
  render() {
    const items = this.generateItemList();
    return (
      <div className="row text-center">
        {items}
      </div>
    );
  }
}

export default GalleryList;
