import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import styling from './CategoryItem.css';

class CategoryItem  extends Component {
  handleMouseEnter = () => {
    if(this.props.imagePath)
      this.props.handleMouseEnter(this.props.imagePath);
  }
  
  render(){  
    const { imagePath, categoryName, categoryPath} = this.props;
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
        onMouseEnter={this.handleMouseEnter}
      >
        <Link to={`/gallery/${categoryPath}`} className="link">
          <div className="category-item">
            <div className="img-container">
              <img alt="" src={url} />
            </div>
            <div className="category-name">{categoryName.toUpperCase()}</div>
          </div>
        </Link>
      </Grid.Column>
    );
  }
}

CategoryItem.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categoryPath: PropTypes.string.isRequired,
  imagePath: PropTypes.string,
  handleMouseEnter: PropTypes.func
}


export default CategoryItem;
