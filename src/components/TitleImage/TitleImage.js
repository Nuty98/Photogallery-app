import React from 'react';
import PropTypes from 'prop-types';
import './TitleImage.css';

const TitleImage = ({ currentImage, currentPage }) => {
  return (
      <div id="title-image-container">
        <div
        className="title-image"
        style={{ backgroundImage: `url(${currentImage})` }}
        />

      <div className="header-container">
        <div className="header">Fotogaléria</div>
        <div className="actual-page-name">Kategórie</div>
        <hr id="index-page-line" />
      </div>
    </div>
  );
};

TitleImage.propTypes = {
  currentImage: PropTypes.string.isRequired,
};

export default TitleImage;
