/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Video from '../assets/video-content.mp4';

function VideoPage() {
  return (
    <div className="background-video-container">

      <video
        className="background-video"
        loop
        autoPlay
        muted
      >
        <source
          src={Video}
          type="video/mp4"
        />
      </video>
      <div className="video-mask" />
      <div className="video-content-container">
        <h1 className="video-masked-title">Find Your Homes in a Safe Place</h1>
        <button className="video-masked-button" type="submit">Learn More</button>
      </div>
    </div>
  );
}

export default VideoPage;
