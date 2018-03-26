import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

class CategoryItem extends Component {
  handleMouseEnter = () => {
    if (this.props.imagePath) {
      this.props.handleMouseEnter(this.props.imagePath);
    }
  };

  render() {
    const { imagePath, category } = this.props;
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
        className="col-semantic"
        onMouseEnter={this.handleMouseEnter}
      >
        <Link to={`/gallery/${category}`} className="link">
          <div className="item">
            <div className="img-container">
              <img alt="" src={url} />
            </div>
            <div className="category-name">{category.toUpperCase()}</div>
          </div>
        </Link>
      </Grid.Column>
    );
  }
}
export default CategoryItem;
