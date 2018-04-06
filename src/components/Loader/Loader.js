import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import './Loader.css';

const MyLoader = ({ category }) => (
  <div className="loader">
    <Segment>
      <Dimmer active inverted>
        <Loader size="large" inverted>Loading {category}</Loader> 
      </Dimmer>
      <Image  />
    </Segment>
  </div>
);

MyLoader.defaultProps = {
  category: null
}

MyLoader.propTypes = {
  category: PropTypes.string
}

export default MyLoader;


