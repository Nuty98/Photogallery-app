import React from 'react';
import styling from './TitleImage.css';

const TitleImage = ({ image }) => {
  return (
    <div className="title-image" style={{ backgroundImage: `url(${image})` }} />
  );
};

export default TitleImage;
