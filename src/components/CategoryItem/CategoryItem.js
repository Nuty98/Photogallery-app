import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import styling from './CategoryItem.css';

const CategoryItem  = ({ category, imagePath, handleMouseEnter}) => {
    let url;
    if (imagePath) 
      url = `http://api.programator.sk/images/1024x576/${imagePath}`;
    else 
      url = require('../../photos/placeholder_image.gif');
    return (
      <Grid.Column
        mobile={16}
        tablet={8}
        computer={4}
        onMouseEnter={handleMouseEnter}
      >
        <Link to={`/gallery/${category}`} className="link">
          <div className="category-item">
            <div className="img-container">
              <img alt="" src={url} />
            </div>
            <div className="category-name">{category.toUpperCase()}</div>
          </div>
        </Link>
      </Grid.Column>
    );
  
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  imagePath: PropTypes.string,
  handleMouseEnter: PropTypes.func
}

CategoryItem.defaultProps = {
  imagePath: null
}

export default CategoryItem;
