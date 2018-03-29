import React from 'react';
import PropTypes from 'prop-types';
import './TitleImage.css';

const TitleImage = ({ currentImage, currentPage }) => {
  let color;
  if(currentImage === null) {
    color = "black";
  } else {
    color = "white";
  }
  return (
      <div id="title-image-container">
        <div
        className="title-image"
        style={{ backgroundImage: `url(${currentImage})` }}
        />

      <div className="header-container">
        <div className="header" style={{color: `${color}`}}>Fotogaléria</div>
        <div className="actual-page-name" style={{color: `${color}`}}>{currentPage}</div>
        <hr id="index-page-line" />
      </div>
    </div>
  );
};

TitleImage.propTypes = {
  currentImage: PropTypes.string.isRequired,
};

export default TitleImage;
