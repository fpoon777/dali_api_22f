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
      >
        <source
          src={Video}
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default VideoPage;
