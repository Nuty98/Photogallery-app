import React, { Component } from 'react';

const GalleryItem = ({url}) => {
    return (
      <div className="col-md-3 col-sm-6 col-xs-12">
          <img src={url} />
      </div>
    );
}
export default GalleryItem;
