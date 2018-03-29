import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './AddImage.css';
import { Grid, Modal, Button } from 'semantic-ui-react';
import ModalContent from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import add_photo from '../../icons/icon.svg';
import Icon from '../Icon';
import CloseIcon from '../CloseIcon/CloseIcon';

class AddImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      imagesToAdd: [],
    };
  }

  openModal = () => {
    this.setState({
      showModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleChange = e => {
    let imagesToAddCpy = this.state.imagesToAdd;
    imagesToAddCpy.push(e.target.value);
    this.setState({ imagesToAdd: imagesToAddCpy });
    console.log(this.state.imagesToAdd);
    e.preventDefault();
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  onImageDrop = e => {
    console.log('DROPPED!');
  };

  render() {
    const url = 'http://api.programator.sk/gallery/';
    const { category } = this.props;
    return (
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Modal
          trigger={
            <div className="add-image" onClick={this.openModal}>
              <Icon styleProps="add-photo" name="icon.svg" />
              <strong>PRIDAŤ FOTKY</strong>
            </div>
          }
          onClose={this.closeModal}
          open={this.state.showModal}
          size="small"
        >
          <div className="add-image-header">
            PRIDAŤ FOTKY
            <CloseIcon customClickEvent={this.closeModal} />
          </div>
          <Modal.Content>
            <form onSubmit={this.handleSubmit}>
              <div className="add-image-form">
                <Dropzone
                  multiple={true}
                  accept="image/*"
                  onDrop={this.onImageDrop}
                  className="dropzone"
                >
                  <Icon styleProps="add-photo" name="icon.svg" />
                  <div className="dropzone-message">SEM PRESUŇTE FOTKY</div>
                  <div>alebo</div>
                </Dropzone>
                <div className="file-input-image">
                  <label id="label-image-input" htmlFor="upload-image-input">
                    VYBERTE SÚBORY
                  </label>
                  <input
                    type="file"
                    id="upload-image-input"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>

              <div className="button-div">
                <Button>
                  <Icon styleProps="add-image-svg" name="add.svg" />
                  <span className="button-message">PRIDAŤ</span>
                </Button>
              </div>
            </form>
          </Modal.Content>
        </Modal>
      </Grid.Column>
    );
  }
}

AddImage.propTypes = {
  category: PropTypes.string.isRequired,
};

export default AddImage;
