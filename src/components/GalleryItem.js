import React from 'react';

const GalleryItem = ({ imagePath }) => {
  return (
    <div className="gallery-item col-lg-3 col-md-4 col-sm-6">
      <div className="img-container">
        <img alt="" src={`http://api.programator.sk/images/0x0/${imagePath}`} />
      </div>
    </div>
  );
};
export default GalleryItem;
