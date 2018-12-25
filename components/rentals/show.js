import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { rentalPropertyType } from "../../helpers/rental-property-type";

class Show extends Component {
  constructor() {
    super();
    this.state = { model: {} };
  }

  componentDidMount() {
    //this.props.loadRentals();
    const model = this.props.rentalData.find(
      rental => rental.id === this.props.match.params.rental_id
    );
    this.setState({ model });
  }

  render() {
    const model = this.state.model;

    return (
      <div className="jumbo show-listing">
        <h2 className="title">{model.title}</h2>
        <div className="content">
          <div>
            <img
              src={model.image}
              className="rental-pic"
              alt="Picture of {model.title}"
            />
          </div>
          <div className="detail-section">
            <div className="detail owner">
              <strong>Owner:</strong> {model.owner}
            </div>
            <div className="detail">
              <strong>Type:</strong> {rentalPropertyType(model.category)} -{" "}
              {model.category}
            </div>
            <div className="detail">
              <strong>Location:</strong> {model.city}
            </div>
            <div className="detail">
              <strong>Number of bedrooms:</strong> {model.bedrooms}
            </div>
            <div className="description">
              <p>{model.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
  return { rentalData: state.rentals.rentalData };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);
