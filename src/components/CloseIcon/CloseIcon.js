import React from 'react';
import Icon from '../Icon';
import './CloseIcon.css';

const closeIcon = ({ customClickEvent }) => {
  return (
    <div className="close-modal">
      <Icon
        styleProps="close-svg"
        name="close.svg"
        customClickEvent={customClickEvent}
      />
      <span className="close-icon-message">ZAVRIEŤ</span>
    </div>
  );
};

export default closeIcon;