/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Mission from './mission';
import VideoPage from './video-page';
import Carousel from './carousel';
import TomTomMap from './TomTomMap';

class Home extends Component {
  render() {
    return (
      <div>
        <VideoPage />
        <Carousel />
        <Mission />
      </div>
    );
  }
}

export default Home;
