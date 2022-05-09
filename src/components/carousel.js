/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Carousel() {
  return (
    <div>
      <div className="second-section">
        <div className="carousel-container">
          <h2 className="section-title-text">Why Choose a Safe House</h2>
          <div className="carousel-package">
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" checked />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <div className="carousel-list">
              <div className="carousel-list-item item-1">
                <a href="#" className="subcategory">
                  <h2 className="subcategory-title">
                    <small className="subcategory-small">Increased Safety</small><br />
                    Safe from crimes
                  </h2>
                </a>
              </div>
              <div className="carousel-list-item item-2">
                <a href="#" className="subcategory">
                  <h2 className="subcategory-title">
                    <small>Better School Education</small><br />
                    Better future for your kids
                  </h2>
                </a>
              </div>
              <div className="carousel-list-item item-3">
                <a href="#" className="subcategory">
                  <h2 className="subcategory-title">
                    <small className="subcategory-small">More Quietness</small><br />
                    Enjoy your privacy
                  </h2>
                </a>
              </div>
              <div className="carousel-list-item item-4">
                <a href="#" className="subcategory">
                  <h2 className="subcategory-title">
                    <small className="subcategory-small">Higher Return</small><br />
                    Higher potential for home value
                  </h2>
                </a>
              </div>
              <div className="carousel-list-item item-5">
                <a href="#" className="subcategory">
                  <h2 className="subcategory-title">
                    <small className="subcategory-small">Protect Your Family</small><br />
                    Protect your family from harm
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
