import styles from './AddImage.css'
import React, { Component } from 'react';

import { Grid, Modal, Header } from 'semantic-ui-react';
import ModalContent from 'semantic-ui-react';

// eslint-disable-next-line
class AddImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  handleSubmit = e => {
    
    e.prevetDefault;
  }

  render() {
    return (
      <Grid.Column mobile={16} tablet={8} computer={4}>
        
        <Modal trigger={<div className="add-image"> Pridať fotku </div>}
          size="small"
          closeIcon
        >
          <Header>PRIDAŤ FOTKY</Header>
          <Modal.Content>
            <form>
              <div className="add-image-input">
                <input type="file" />
              </div>
            </form>
          </Modal.Content>
        </Modal>
      </Grid.Column>
    );
  }
}

export default AddImage;
