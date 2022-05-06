/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Video from '../assets/video-content.mp4';

function VideoPage() {
  return (
    <div>
      <video loop autoPlay>
        <source
          src={Video}
          type="video/mp4"
        />
        Error: Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPage;
