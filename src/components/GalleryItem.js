import React, { Component } from 'react';

const GalleryItem = ({ imagePath }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 ">
      <div className="thumbnail">
        <img src={`http://api.programator.sk/images/0x0/${imagePath}`} />
      </div>
    </div>
  );
};
export default GalleryItem;
