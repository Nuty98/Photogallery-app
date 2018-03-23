import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import CategoryItem from './CategoryItem';

class GalleryList extends Component {
  generateItemList = () => {
    if (this.props.type == 'index') {
      return this.props.galleries.map((gallery, i) => {
        if (typeof gallery.image !== 'undefined') {
          return (
            <CategoryItem
              key={i}
              category={gallery.path}
              empty={false}
              imagePath={gallery.image.fullpath}
            />
          );
        } else {
          return (
            <CategoryItem key={i} category={gallery.path} empty={true} imagePath={null} />
          );
        }
      });
    } else {
      return this.props.images.map((image, i) => {
        return <GalleryItem key={i} imagePath={image.fullpath} />;
      });
    }
  };

  render() {
    const items = this.generateItemList();
    return <div className="row text-center">{items}</div>;
  }
}

export default GalleryList;
