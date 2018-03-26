import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import CategoryItem from './CategoryItem';
import AddCategory from './AddCategory';
import AddImage from './AddImage/AddImage';
import { Grid } from 'semantic-ui-react';

class GalleryList extends Component {
  handleMouseEnter = imagePath => {
    this.props.changeTitleImg(imagePath);
  };

  handleGalleryItemClick = index => {
    this.props.handleGalleryItemClick(index);
  };

  generateItemList = () => {
    if (this.props.type == 'index') {
      return this.props.galleries.map((gallery, i) => {
        if (typeof gallery.image !== 'undefined') {
          return (
            <CategoryItem
              key={i}
              category={gallery.path}
              imagePath={gallery.image.fullpath}
              handleMouseEnter={this.handleMouseEnter}
            />
          );
        } else {
          return (
            <CategoryItem key={i} category={gallery.path} imagePath={null} />
          );
        }
      });
    } else {
      return this.props.images.map((image, key) => {
        return (
          <GalleryItem
            key={key}
            index={key}
            imagePath={image.fullpath}
            handleGalleryItemClick={this.handleGalleryItemClick}
          />
        );
      });
    }
  };

  render() {
    const items = this.generateItemList();
    if (this.props.type === 'index') {
      return (
        <Grid container>
          {items}
          <AddCategory />
        </Grid>
      );
    }

    return (
      <Grid container>
        {items}
        <AddImage category={this.props.category}/>
      </Grid>
    );
  }
}

export default GalleryList;
