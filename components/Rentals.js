import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadRentals } from "../redux/actions";
import RentalListing from "./rental-listing";
import { ListFilter } from "./components";
import { filterList } from "../redux/rentalData";

export class Rentals extends Component {
  componentDidMount() {
    this.props.loadRentals();
  }

  render() {
    const filteredList = filterList(
      this.props.listFilter,
      this.props.rentalData
    );
    return (
      <div>
        <div className="jumbo">
          <div className="right tomster" />
          <h2>Welcome!</h2>
          <p>
            We hope you find exactly what you're looking for in a place to stay.
          </p>
          <NavLink to="/about" className="button">
            About Us
          </NavLink>
        </div>
        <br />
        <ListFilter>
          {filteredList.length > 0 ? (
            filteredList.map((rental, index) => (
              <RentalListing key={index} rental={rental} />
            ))
          ) : (
            <div className="no-matches">
              <h3>No matches found</h3>
            </div>
          )}
        </ListFilter>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadRentals }, dispatch);
}

function mapStateToProps(state) {
  return {
    rentalData: state.rentals.rentalData,
    listFilter: state.rentals.filter
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rentals);
