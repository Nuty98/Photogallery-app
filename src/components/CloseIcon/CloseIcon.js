import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../IconComponent/Icon';
import './CloseIcon.css';

const CloseIcon = ({ customClickEvent }) => {
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

CloseIcon.defaultProps = {
  customClickEvent: null
}

CloseIcon.propTypes = {
  customClickEvent: PropTypes.func
}

export default CloseIcon;