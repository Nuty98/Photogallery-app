import React, { Component } from 'react';

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
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div
          className="add-category"
          data-toggle="modal"
          data-target="#add-category-modal"
        >
          Pridať kategóriu
        </div>

        <div
          className="modal fade"
          id="add-category-modal"
          tabIndex="-1"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-head">Pridať kategóriu</div>
              <div className="modal-body">
                <form action="" onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    className="add-category-input"
                    placeholder="ZADAJTE NÁZOV KATEGÓRIE"
                    onChange={this.handleChange}
                    value={this.state.categoryName}
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn-success add-category-submit"
                    data-toggle="modal"
                    data-target="#add-category-modal"
                  >
                    Pridať
                  </button>
                </form>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCategory;
