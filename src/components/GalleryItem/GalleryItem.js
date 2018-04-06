import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import './GalleryItem.css';

const GalleryItem = ({ imagePath, index, handleGalleryItemClick }) => {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div
        className="gallery-item"
        onClick={() => {
          handleGalleryItemClick(index);
        }}
      >
        <div className="img-container">
          <img
            alt=""
            src={`http://api.programator.sk/images/1024x576/${imagePath}`}
          />
        </div>
      </div>
    </Grid.Column>
  );
};

GalleryItem.propTypes = {
  imagePath: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleGalleryItemClick: PropTypes.func.isRequired,
};

export default GalleryItem;
