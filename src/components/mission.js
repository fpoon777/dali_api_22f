import React from 'react';
import Typewriter from 'typewriter-effect';
import House from '../assets/images/house.jpeg';
import MissionBackground from '../assets/images/mission-background.jpeg';

function Mission() {
  return (
    <div>
      <div className="missions">
        <img className="mission-background" src={MissionBackground} alt="" />
        <div className="container wow fadeInUp" data-wow-offset="70" data-wow-delay="500ms">
          <div className="mission">
            <div className="media">
              <div className="media-body">
                <div className="mission-text">
                  <img className="media-object mission-avatar" src={House} alt="mission statement" />
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString('Our mission is for our customers to find safe houses for their family.')
                        .callFunction(() => {
                          console.log('String typed out!');
                        })
                        .pauseFor(2500)
                        .start();
                    }}
                  />
                  <div className="mission-name">Ke Lou <span className="mission-position">founder at KeKeHome Real Estate</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
