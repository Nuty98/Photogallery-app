import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ category, imagePath }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 ">
      <Link
        to={`/gallery/${category}`}
        className="link"
        style={{ textDecoration: 'none' }}
      >
        <div className="item">
          <div className="thumbnail">
            <img
              src={`http://api.programator.sk/images/500x500/${imagePath}`}
            />
          </div>
          <div className="categoryName">{category.toUpperCase()}</div>
        </div>
      </Link>
    </div>
  );
};
export default CategoryItem;
