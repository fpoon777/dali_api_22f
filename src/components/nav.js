/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/pig.png';

class Nav extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header-wrapper">
            <div className="nav-container">
              <nav className="navigation closed">
                <ul className="nav sf-menu">
                  <li>
                    <NavLink to="/">
                      <div className="active">Home</div>
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <div className="logo">
                <img src={Logo} alt="Real Estate" />
              </div>

              <nav className="navigation closed ">
                <ul className="nav sf-menu">
                  <li>
                    <NavLink to="/map">
                      <div className="active">Map</div>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Nav;
