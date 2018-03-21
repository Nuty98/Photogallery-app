import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const GalleryItem = ({ category }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 ">
      <Link
        to={`/gallery/${category.name}`}
        className="link"
        style={{ textDecoration: 'none' }}
      >
        <div className="item">
          <div className="thumbnail">
            <img src={category.url} />
          </div>
          <div className="categoryName">{category.name.toUpperCase()}</div>
        </div>
      </Link>
    </div>
  );
};
export default GalleryItem;
