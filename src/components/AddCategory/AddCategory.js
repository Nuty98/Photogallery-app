import React, { Component } from 'react';
import { Grid, Modal, Button, Icon } from 'semantic-ui-react';
import styling from './AddCategory.css';
import add_category from '../../icons/add_category.svg';
import add from '../../icons/add.svg';

class AddCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryName: '',
      showModal: false,
    };
  }

  handleChange = e => {
    this.setState({ categoryName: e.target.value });
  };

  handleSubmit = e => {
    const newGallery = JSON.stringify({
      name: `${this.state.categoryName}`,
    });
    const header = new Headers({
      'Content-Type': 'application/json',
    });

    fetch('http://api.programator.sk/gallery', {
      method: 'POST',
      body: newGallery,
      headers: header,
    })
      .then(res => {
        console.log(res);
        if (res.status !== 201) throw new Error(res.json());
        return res.json();
      })
      .then(error => {
        console.log(error);
      });

    this.setState({ categoryName: '', showModal: false });
    e.preventDefault();
  };

  openModal = () => {
    this.setState({
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Modal
          trigger={
            <div onClick={this.openModal} className="add-category">
              <svg className="add-category-svg">
                <image href={`${add_category}`} />
              </svg>
              PRIDAŤ KATEGÓRIU
            </div>
          }
          size="small"
          open={this.state.showModal}
          onClose={this.closeModal}
          closeIcon
        >
          <Modal.Content>
            <div className="add-category-header">
              PRIDAŤ KATEGÓRIU
            </div>
            <form action="" onSubmit={this.handleSubmit}>
              <div className="category-form">
                <input
                  type="text"
                  placeholder="ZADAJTE NÁZOV KATEGÓRIE"
                  onChange={this.handleChange}
                  value={this.state.categoryName}
                  className="add-category-input"
                  required
                />
                <span className="submit-button" >
                  <Button>
                    <svg className="add-svg" height="14" width="14">
                      <image href={`${add}`} />
                    </svg>
                    <span className="add-category-button-message">PRIDAŤ</span>
                  </Button>
                </span>
              </div>
            </form>
            <div id="line-div">
              <hr id="modal-line" />
            </div>
          </Modal.Content>
        </Modal>
      </Grid.Column>
    );
  }
}

export default AddCategory;
