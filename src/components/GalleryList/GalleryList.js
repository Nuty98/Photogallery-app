import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GalleryItem from '../GalleryItem/GalleryItem';
import CategoryItem from '../CategoryItem/CategoryItem';
import AddCategory from '../AddCategory/AddCategory';
import AddImage from '../AddImage/AddImage';
import { Grid } from 'semantic-ui-react';
import './GalleryList.css'


class GalleryList extends Component {
  handleMouseEnter = imagePath => {
    this.props.changeTitleImg(imagePath);
  };

  handleGalleryItemClick = index => {
    this.props.handleGalleryItemClick(index);
  };

  generateItemList = () => {
    if (this.props.type === 'index') {
      return this.props.galleries.map((gallery, i) => {
        if (gallery.image != null) {
          return (
            <CategoryItem
              key={i}
              categoryName={gallery.name}
              categoryPath={gallery.path}
              imagePath={gallery.image.fullpath}
              galleryLength={gallery.length}
              handleMouseEnter={this.handleMouseEnter}
            />
          );
        } else {
          return (
            <CategoryItem key={i} categoryName={gallery.name} categoryPath={gallery.path} imagePath={null} galleryLength={0}/>
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

GalleryList.propTypes = {
  type: PropTypes.string.isRequired,
  galleries: PropTypes.array,
  images: PropTypes.array,
  handleMouseEnter: PropTypes.func,
  handleGalleryItemClick: PropTypes.func
}

export default GalleryList;
