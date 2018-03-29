import React from 'react';

const Icon = ({ name, styleProps, customClickEvent }) => {
  return (
    <svg className={styleProps} onClick={customClickEvent}>
      <image href={require(`../icons/${name}`)} />
    </svg>
  );
};

export default Icon;
