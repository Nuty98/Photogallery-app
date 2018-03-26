import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import UndefinedError from '../UndefinedError';
import Loader from '../Loader/Loader';
import TitleImage from '../TitleImage/TitleImage';

class GalleryIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      galleries: [],
      titleImage: require("../../photos/pexels-photo-261187.jpeg")
    };
  }

  changeTitleImg = imagePath => {
    this.setState({titleImage: `http://api.programator.sk/images/0x0/${imagePath}`})
  };

  componentDidMount() {
    const url = 'http://api.programator.sk/gallery';
    fetch(url)
      .then(res => {
        if (res.status !== 200) throw new Error(res.status);
        return res.json();
      })
      .then(
        data => {
          this.setState({
            isLoaded: true,
            galleries: data.galleries,
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { isLoaded, error, galleries } = this.state;
    if (error) {
      return <UndefinedError />;
    } else if (!isLoaded) {
      return <Loader />;
    }
    return (
      <div>
        <TitleImage image={this.state.titleImage}/>
          <GalleryList
            galleries={galleries}
            type="index"
            changeTitleImg={this.changeTitleImg}
          />
      </div>
    );
  }
}

export default GalleryIndex;
