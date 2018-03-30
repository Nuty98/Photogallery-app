import React from 'react';
import PropTypes from 'prop-types';
import './TitleImage.css';
import { Link } from 'react-router-dom';
import Icon from '../Icon';

const TitleImage = ({ currentImage, currentPage }) => {
  let color, backImage;
  if (currentImage === null) {
    color = 'black';
    backImage = 'back_black.svg';
  } else {
    color = 'white';
    backImage = 'back_white.svg';
  }

  let icon = null;
  if (currentPage !== 'Kategórie') {
    icon = (
      <Link to="/">
        <Icon name={`${backImage}`} styleProps="back-svg" />
      </Link>
    );
  }

  return (
    <div id="title-image-container">
      <div
        className="title-image"
        style={{ backgroundImage: `url(${currentImage})` }}
      />

      <div className="header-container">
        <div className="header" style={{ color: `${color}` }}>
          Fotogaléria
        </div>
        <div className="page-name-with-link" style={{ color: `${color}` }}>
          {icon}
          <span className="page-name">{currentPage}</span>
        </div>
        <hr id="index-page-line" />
      </div>
    </div>
  );
};

TitleImage.propTypes = {
  currentImage: PropTypes.string,
};

export default TitleImage;
