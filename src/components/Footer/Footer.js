import React from 'react';
import { Grid } from 'semantic-ui-react';
import './Footer.css';

const Footer = () => {
  return (
    <Grid.Row>
      <Grid.Column mobile={16} tablet={8} computer={4} className="footer">
        <div className="gallery-item">webdesign bart.sk</div>
      </Grid.Column>
    </Grid.Row>
  );
};

export default Footer;
