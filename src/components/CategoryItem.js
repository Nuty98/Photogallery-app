import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ category, imagePath, empty }) => {
  let url;
  if(! empty) {
    url = `http://api.programator.sk/images/0x0/${imagePath}`;
  } else {
    url = require("../photos/placeholder_image.gif");
  }

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <Link
        to={`/gallery/${category}`}
        className="link"
        style={{ textDecoration: 'none' }}
      >
        <div className="item">
          <div className="img-container">
            <img
              alt=""
              src={url}
            />
          </div>
          <div className="category-name">{category.toUpperCase()}</div>
        </div>
      </Link>
    </div>
  );
};
export default CategoryItem;
