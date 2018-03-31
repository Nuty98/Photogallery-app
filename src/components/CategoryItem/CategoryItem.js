import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import styling from './CategoryItem.css';

class CategoryItem extends Component {
  handleMouseEnter = () => {
    if (this.props.imagePath) this.props.handleMouseEnter(this.props.imagePath);
  };

  getGalleryLengthMessage = galleryLength => {
    switch (galleryLength) {
      case 1: {
        return '1 fotka';
      }
      case 2:
      case 3:
      case 4: {
        return `${galleryLength} fotky`;
      }
      default: {
        return `${galleryLength} fotiek`;
      }
    }
  };

  render() {
    const { imagePath, categoryName, categoryPath, galleryLength } = this.props;
    let url;
    if (imagePath)
      url = `http://api.programator.sk/images/1024x576/${imagePath}`;
    else url = require('../../photos/placeholder_image.gif');

    const galleryLengthMessage = this.getGalleryLengthMessage(galleryLength);
    return (
      <Grid.Column
        mobile={16}
        tablet={8}
        computer={4}
        onMouseEnter={this.handleMouseEnter}
      >
        <Link to={`/gallery/${categoryPath}`} className="link">
          <div className="category-item">
            <div className="img-container">
              <img alt="" src={url} />
            </div>
            <div className="category-name">
              {categoryName.toUpperCase()}{' '}
              <span className="length-message">{galleryLengthMessage}</span>
            </div>
          </div>
        </Link>
      </Grid.Column>
    );
  }
}

CategoryItem.defaultProps = {
  imagePath: null,
  handleMouseEnter: null,
};

CategoryItem.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categoryPath: PropTypes.string.isRequired,
  imagePath: PropTypes.string,
  handleMouseEnter: PropTypes.func,
};

export default CategoryItem;
