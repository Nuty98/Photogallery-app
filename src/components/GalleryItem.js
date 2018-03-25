import React from 'react';
import { Grid } from 'semantic-ui-react';

const GalleryItem = ({ imagePath }) => {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="gallery-item">
        <div className="img-container">
          <img
            alt=""
            src={`http://api.programator.sk/images/0x0/${imagePath}`}
          />
        </div>
      </div>
    </Grid.Column>
  );
};
export default GalleryItem;
