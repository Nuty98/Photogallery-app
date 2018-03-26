import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

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

export default MyLoader;


