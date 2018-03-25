import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import CategoryItem from './CategoryItem';
import AddCategory from './AddCategory';
import { Grid } from 'semantic-ui-react';

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
              imagePath={gallery.image.fullpath}
              handleMouseEnter={this.handleMouseEnter}
            />
          );
        } else {
          return (
            <CategoryItem
              key={i}
              category={gallery.path}
              imagePath={null}
            />
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
    if (this.props.type === 'index') {
      return (
        <Grid container>
          {items}
          <AddCategory />
        </Grid>
      );
    }

    return <Grid>{items}</Grid>;
  }
}

export default GalleryList;
