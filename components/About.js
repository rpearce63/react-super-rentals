import React from "react";
import { NavLink } from "react-router-dom";

const About = props => {
  return (
    <div className="jumbo">
      <div className="right tomster" />
      <h2>About Super Rentals</h2>
      <p>
        The Super Rentals website is a delightful project created to explore
        Ember. By building a property rental site, we can simultaneously imagine
        traveling AND building Ember applications.
      </p>
      <NavLink to="/contact" className="button">
        Contact Us
      </NavLink>
    </div>
  );
};

export default About;
