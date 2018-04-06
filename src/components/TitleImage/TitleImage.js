import React from 'react';
import PropTypes from 'prop-types';
import './TitleImage.css';
import { Link } from 'react-router-dom';
import Icon from '../IconComponent/Icon';

const TitleImage = ({ currentImage, currentPage }) => {
  let color, backImage;
  if (currentImage === null) {
    color = 'black';
    backImage = 'back_black.svg';
  } else {
    color = 'white';
    backImage = 'back_white.svg';
  }

  let icon = null,
    pageNameStyle;
  if (currentPage !== 'Kategórie') {
    icon = (
      <Link to="/">
        <Icon name={`${backImage}`} styleProps="back-svg" />
      </Link>
    );
    pageNameStyle = {
      position: 'relative',
      left: '14px',
    };
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
          <span style={pageNameStyle}>{currentPage}</span>
        </div>
        <hr id="index-page-line" />
      </div>
    </div>
  );
};

TitleImage.defaultProps = {
  currentImage: null,
};

TitleImage.propTypes = {
  currentImage: PropTypes.string,
  currentPage: PropTypes.string.isRequired,
};

export default TitleImage;
