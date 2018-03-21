import React, { Component } from 'react';


class GalleryShow extends Component {
  render() {
    console.log(this.props)
    return <div> Gallery Show Page of {this.props.match.params.id}</div>
  }
}

export default GalleryShow;