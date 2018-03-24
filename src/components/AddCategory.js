import React, { Component } from 'react';

class AddCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryName: "",
    };
  }

  handleChange = e => {
    this.setState({ categoryName: e.target.value });
  };

  handleSubmit = e => {
    console.log(`name of the new category is: ${this.state.categoryName}`);
    this.setState({categoryName: ""})
    e.preventDefault();
  };

  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div
          className="add-category"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
         Pridať kategóriu
        </div>

        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          // aria-labelledby="exampleModalCenterTitle"
          // aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-head">
                <span id="">Pridať kategóriu</span>
              </div>
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
                  <button type="submit" className="btn btn-success add-category-submit" data-toggle="modal"
                  data-target="#exampleModalCenter">Pridať</button>
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
