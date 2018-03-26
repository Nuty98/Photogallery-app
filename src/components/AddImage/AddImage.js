import React, { Component } from 'react';
import styles from './AddImage.css';
import { Grid, Modal, Header, Button, Icon } from 'semantic-ui-react';
import ModalContent from 'semantic-ui-react';
import Dropzone from 'react-dropzone';


// eslint-disable-next-line
class AddImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      imagesToAdd: []
    };
  }

  handleChange = e => {
    // console.log(this.state.imagesToAdd);
    let imagesToAddCpy = this.state.imagesToAdd;
    imagesToAddCpy.push(e.target.value);
    this.setState({imagesToAdd: imagesToAddCpy});
    console.log(this.state.imagesToAdd);
    e.preventDefault();
  }

  handleSubmit = e => {

    e.preventDefault();
  };

  onImageDrop = (e) => {
    console.log("DROPPED!");
  }


  render() {
    const url = "http://api.programator.sk/gallery/";
    const { category } = this.props;
    return (
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Modal
          trigger={ 
                    <div className="add-image"> 
                      <Icon name="photo" size="big"/>             
                      <strong>PRIDAŤ FOTKY</strong> 
                    </div>
                  }
          size="small"
          closeIcon
        >
          <Header>PRIDAŤ FOTKY</Header>
          <Modal.Content>
            <form onSubmit={this.handleSubmit} >
              <div className="add-image-form">
                <Dropzone
                  multiple={true}
                  accept="image/*"
                  onDrop={this.onImageDrop}
                  className="dropzone"
                >
                  <div><strong>SEM PRESUŇTE FOTKY</strong></div>
                  <div>alebo</div>
                </Dropzone>
                <div className="file-input-image">
                    <label id="label-image-input" htmlFor="upload-image-input">VYBERTE SÚBORY</label>
                    <input type="file" id="upload-image-input" onChange={this.handleChange} required/>
                </div>  
              </div>
              
              <div className="button-div">
                <Button content="PRIDAŤ" icon="plus" />
              </div>      
            </form>
          </Modal.Content>
        </Modal>
      </Grid.Column>
    );
  }
}

export default AddImage;
