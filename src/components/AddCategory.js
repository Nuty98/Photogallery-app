import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class AddCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryName: '',
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

    this.setState({ categoryName: '' });
    e.preventDefault();
  };

  render() {
    return (
      <Grid.Column
      mobile={16}
      tablet={8}
      computer={4}
      > 
        <div className="add-category">
          Pridat kategoriu
        </div>
      </Grid.Column>
    );
  }
}

export default AddCategory;
