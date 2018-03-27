import React from 'react';
import PropTypes from 'prop-types';
import './TitleImage.css';

const TitleImage = ({ currentImage }) => {  
  return (
    <div id="title-image-container">
      <div
        className="title-image"
        style={{ backgroundImage: `url(${currentImage})`}}
      />
    </div>
  );
};

TitleImage.propTypes = {
  currentImage: PropTypes.string.isRequired
}

export default TitleImage;
