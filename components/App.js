import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="menu">
          <NavLink to="/rentals">
            <h1>
              <em>SuperRentals</em>
            </h1>
          </NavLink>
          <div className="links">
            <NavLink to="/about" className="menu-about">
              About
            </NavLink>
            <NavLink to="/contact" className="menu-contact">
              Contact
            </NavLink>
          </div>
        </div>
        <div className="body">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
