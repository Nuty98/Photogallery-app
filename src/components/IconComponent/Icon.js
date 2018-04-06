import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name, styleProps, customClickEvent }) => {
  return (
    <svg className={styleProps} onClick={customClickEvent}>
      <image href={require(`../../icons/${name}`)} />
    </svg>
  );
};

Icon.defaultProps = {
  styleProps: null,
  customClickEvent: null,
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  styleProps: PropTypes.string,
  customClickEvent: PropTypes.func,
};

export default Icon;
