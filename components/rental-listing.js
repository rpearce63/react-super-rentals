import React, { Component } from "react";
import { rentalPropertyType } from "../helpers/rental-property-type";
import LeafletMap from "./LeafletMap";
import { Link } from "react-router-dom";

export default class RentalListing extends Component {
  constructor(props) {
    super(props);
    this.state = { isWide: false };
  }
  toggleImage() {
    this.setState({ isWide: !this.state.isWide });
  }
  render() {
    const { rental } = this.props;
    return (
      <article className="listing">
        <a
          onClick={() => this.toggleImage()}
          role="button"
          className={`image ${this.state.isWide && "wide"}`}
        >
          <img src={rental.image} alt="" />
          <small>View Larger</small>
        </a>
        <div className="details">
          <h3>
            <Link to={`rentals/${rental.id}`}>{rental.title}</Link>
          </h3>
          <div className="detail owner">
            <span>Owner:</span> {rental.owner}
          </div>
          <div className="detail type">
            <span>Type:</span>{" "}
            {`${rentalPropertyType(rental.category)} - ${rental.category}`}
          </div>
          <div className="detail location">
            <span>Location:</span> {rental.city}
          </div>
          <div className="detail bedrooms">
            <span>Number of bedrooms:</span> {rental.bedrooms}
          </div>
        </div>
        <LeafletMap id={rental.id} location={rental.city} />
      </article>
    );
  }
}
