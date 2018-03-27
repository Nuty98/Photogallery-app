import React from 'react';
import styling from './TitleImage.css';

const TitleImage = ({ image }) => {
  return (
    <div id="title-image-container">
      <div
        className="title-image"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
};

export default TitleImage;
