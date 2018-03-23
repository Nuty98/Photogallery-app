import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategoryItem extends Component {
  handleMouseOver = () => {
    if(this.props.imagePath) {
      this.props.handleMouseEnter(this.props.imagePath);
    }
  }
  
  render() {
    const {imagePath, category, empty} = this.props;
    let url;
    if (!empty) {
      url = `http://api.programator.sk/images/0x0/${imagePath}`;
    } else {
      url = require('../photos/placeholder_image.gif');
    }
    return (
      <div
        onMouseEnter={this.handleMouseOver}
        className="col-lg-3 col-md-4 col-sm-6"
      >
        <Link
          to={`/gallery/${category}`}
          className="link"
          style={{ textDecoration: 'none' }}
        >
          <div className="item">
            <div className="img-container">
              <img alt="" src={url} />
            </div>
            <div className="category-name">{category.toUpperCase()}</div>
          </div>
        </Link>
      </div>
    );
  }
}
export default CategoryItem;
