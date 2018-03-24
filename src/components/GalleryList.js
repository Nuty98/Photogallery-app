import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import CategoryItem from './CategoryItem';
import AddCategory from './AddCategory';

class GalleryList extends Component {
  handleMouseEnter = imagePath => {
    this.props.changeTitleImg(imagePath);
  };

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
              handleMouseEnter={this.handleMouseEnter}
            />
          );
        } else {
          return (
            <CategoryItem
              key={i}
              category={gallery.path}
              empty={true}
              imagePath={null}
            />
          );
        }
      });
    } else {
      return this.props.images.map((image, i) => {
        return (
          <GalleryItem
            key={i}
            imagePath={image.fullpath}
          />
        );
      });
    }
  };

  render() {
    const items = this.generateItemList();
    if (this.props.type === 'index') {
      return (
        <div className="row text-center">
          <hr />
          {items}
          <AddCategory />
        </div>
      );
    }

    return <div className="row text-center">{items}</div>;
  }
}

export default GalleryList;
